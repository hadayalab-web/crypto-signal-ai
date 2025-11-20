param(
  [string]$Repo="hadayalab-web/crypto-signal-ai",
  [string]$Project="crypto-signal-ai",
  [string]$Config="prod",
  [switch]$Yes
)
# gh api で秘密値の直接取得はできないため、ローカルのmerged.envをGH側マスターとみなし同期します
$envFile = "ops\secrets\env\make.merged.env"
if (-not (Test-Path $envFile)) { throw "Env file not found: $envFile" }
$raw = Get-Content -Path $envFile -Raw -Encoding UTF8
$entries = @()
foreach ($line in ($raw -split "`r?`n")) {
  if ([string]::IsNullOrWhiteSpace($line)) { continue }
  if ($line.Trim().StartsWith("#")) { continue }
  $kv = $line -split "=",2
  if ($kv.Count -eq 2) { $entries += [PSCustomObject]@{ key=$kv[0].Trim(); value=$kv[1] } }
}
Write-Host "Upserting" $entries.Count "secrets from merged.env to Doppler $Project/$Config"
if (-not $Yes) {
  $ans = Read-Host "Proceed? (y/N)"
  if ($ans -notin @("y","Y","yes","YES")) { Write-Host "Aborted."; exit 0 }
}
foreach ($e in $entries) {
  $k=$e.key; $v=$e.value.Replace("'", "''")
  doppler secrets set $k="$v" --project $Project --config $Config --silent
}
Write-Host "Done."
