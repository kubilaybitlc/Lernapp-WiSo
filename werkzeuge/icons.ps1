# Erzeugt die App-Icons (PNG) fuer Startbildschirm und Manifest.
# Start:  powershell -ExecutionPolicy Bypass -File werkzeuge\icons.ps1
Add-Type -AssemblyName System.Drawing

$ziel = Join-Path (Split-Path -Parent $PSScriptRoot) 'icons'
New-Item -ItemType Directory -Force $ziel | Out-Null

function Erzeuge-Icon([int]$groesse, [string]$datei) {
  $bmp = New-Object System.Drawing.Bitmap $groesse, $groesse
  $g = [System.Drawing.Graphics]::FromImage($bmp)
  $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
  $g.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAliasGridFit
  # Vollflaechiger Hintergrund, Schrift im inneren Bereich: passt auch fuer "maskable" Icons (Android schneidet Kreise/Formen aus)
  $g.Clear([System.Drawing.ColorTranslator]::FromHtml('#1f4e8c'))

  $format = New-Object System.Drawing.StringFormat
  $format.Alignment = [System.Drawing.StringAlignment]::Center
  $format.LineAlignment = [System.Drawing.StringAlignment]::Center
  $pixel = [System.Drawing.GraphicsUnit]::Pixel
  $fett = [System.Drawing.FontStyle]::Bold
  $gross = New-Object System.Drawing.Font('Segoe UI', [float]($groesse * 0.24), $fett, $pixel)
  $klein = New-Object System.Drawing.Font('Segoe UI', [float]($groesse * 0.11), $fett, $pixel)
  $hell = New-Object System.Drawing.SolidBrush ([System.Drawing.ColorTranslator]::FromHtml('#bcd3f0'))

  $g.DrawString('WiSo', $gross, [System.Drawing.Brushes]::White, (New-Object System.Drawing.RectangleF 0, ($groesse * -0.06), $groesse, $groesse), $format)
  $g.DrawString('AP2', $klein, $hell, (New-Object System.Drawing.RectangleF 0, ($groesse * 0.17), $groesse, $groesse), $format)

  $bmp.Save((Join-Path $ziel $datei), [System.Drawing.Imaging.ImageFormat]::Png)
  $g.Dispose()
  $bmp.Dispose()
}

Erzeuge-Icon 512 'icon-512.png'
Erzeuge-Icon 192 'icon-192.png'
Erzeuge-Icon 180 'apple-touch-icon.png'
Erzeuge-Icon 32 'favicon-32.png'
Write-Host "Icons erzeugt in $ziel"
