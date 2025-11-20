param(
  [string]$Repo = "hadayalab-web/crypto-signal-ai",
  [string]$EnvFile = "ops\secrets\env\make.merged.env",
  [switch]$Yes
)
if (-not (Test-Path $EnvFile)) { throw "Env file not found: $EnvFile" }
$raw = Get-Content -Path $EnvFile -Raw -Encoding UTF8
$entries = @()
foreach ($line in ($raw -split "`r?`n")) {
  if ([string]::IsNullOrWhiteSpace($line)) { continue }
  if ($line.Trim().StartsWith("#")) { continue }
  $kv = $line -split "=",2
  if ($kv.Count -eq 2) {
    $k=$kv[0].Trim(); $v=$kv[1]
    if ($k) { $entries += [PSCustomObject]@{ key=$k; value=$v } }
  }
}
Write-Host "Ready to upsert" $entries.Count "secrets to" $Repo
if (-not $Yes) {
  $ans = Read-Host "Proceed? (y/N)"
  if ($ans -notin @("y","Y","yes","YES")) { Write-Host "Aborted."; exit 0 }
}
foreach ($e in $entries) {
  $k=$e.key; $v=$e.value.Replace("'", "''")
  Write-Host "Setting $k ..."
  gh secret set $k -b "$v" -R $Repo | Out-Null
}
Write-Host "Done."
