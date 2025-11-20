param(
  [string]$Project="crypto-signal-ai",
  [string]$Config="prod",
  [string]$Repo="hadayalab-web/crypto-signal-ai",
  [switch]$Yes
)
$envText = (& doppler secrets download --project $Project --config $Config --format env --no-file) 2>$null
if ([string]::IsNullOrWhiteSpace($envText)) { throw "Doppler export failed for $Project/$Config" }
$entries = @()
foreach ($line in ($envText -split "`r?`n")) {
  if ([string]::IsNullOrWhiteSpace($line)) { continue }
  if ($line.Trim().StartsWith("#")) { continue }
  $kv = $line -split "=",2
  if ($kv.Count -eq 2) { $entries += [PSCustomObject]@{ key=$kv[0].Trim(); value=$kv[1] } }
}
Write-Host "Upserting" $entries.Count "secrets from Doppler $Project/$Config to $Repo"
if (-not $Yes) {
  $ans = Read-Host "Proceed? (y/N)"
  if ($ans -notin @("y","Y","yes","YES")) { Write-Host "Aborted."; exit 0 }
}
foreach ($e in $entries) {
  $k=$e.key; $v=$e.value.Replace("'", "''")
  gh secret set $k -b "$v" -R $Repo | Out-Null
}
Write-Host "Done."
