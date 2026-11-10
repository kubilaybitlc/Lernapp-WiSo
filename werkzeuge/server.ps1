# Kleiner Webserver fuer den WiSo-Trainer, nur auf diesem Rechner erreichbar (localhost).
# Start:  powershell -ExecutionPolicy Bypass -File werkzeuge\server.ps1
param([int]$Port = 8080)

$root = [IO.Path]::GetFullPath((Split-Path -Parent $PSScriptRoot))
$typen = @{
  '.html' = 'text/html; charset=utf-8'
  '.js'   = 'text/javascript; charset=utf-8'
  '.css'  = 'text/css; charset=utf-8'
  '.svg'  = 'image/svg+xml'
  '.json' = 'application/json; charset=utf-8'
  '.png'  = 'image/png'
}

$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:$Port/")
$listener.Start()
Write-Host "WiSo-Trainer: http://localhost:$Port/  (Fenster schliessen zum Beenden)"

try {
  while ($listener.IsListening) {
    $ctx = $listener.GetContext()
    try {
      $pfad = [Uri]::UnescapeDataString($ctx.Request.Url.AbsolutePath).TrimStart('/')
      if (-not $pfad) { $pfad = 'index.html' }
      $datei = [IO.Path]::GetFullPath((Join-Path $root $pfad))

      # Nur Dateien innerhalb des Projektordners ausliefern
      if ($datei.StartsWith($root, [StringComparison]::OrdinalIgnoreCase) -and (Test-Path -LiteralPath $datei -PathType Leaf)) {
        $bytes = [IO.File]::ReadAllBytes($datei)
        $ext = [IO.Path]::GetExtension($datei).ToLower()
        if ($typen.ContainsKey($ext)) { $ctx.Response.ContentType = $typen[$ext] } else { $ctx.Response.ContentType = 'application/octet-stream' }
        $ctx.Response.Headers.Add('Cache-Control', 'no-store')
        $ctx.Response.ContentLength64 = $bytes.Length
        # HEAD-Anfragen bekommen nur die Kopfzeilen
        if ($ctx.Request.HttpMethod -ne 'HEAD') { $ctx.Response.OutputStream.Write($bytes, 0, $bytes.Length) }
      } else {
        $ctx.Response.StatusCode = 404
      }
    } catch {
      Write-Host "Fehler bei $($ctx.Request.Url): $($_.Exception.Message)"
    } finally {
      $ctx.Response.Close()
    }
  }
} finally {
  $listener.Stop()
}
