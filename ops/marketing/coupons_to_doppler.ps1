param(
  [string]$CsvPath = "ops\marketing\coupons.csv",
  [string]$Project = "crypto-signal-ai",
  [string]$Config  = "prd",
  [switch]$Yes
)
if (-not (Test-Path $CsvPath)) { throw "CSV not found: $CsvPath" }
$rows = Import-Csv -Path $CsvPath
Write-Host "Upserting $($rows.Count) coupons to Doppler as COUPON_<index> ..."
if (-not $Yes) {
  $ans = Read-Host "Proceed? (y/N)"
  if ($ans -notin @("y","Y","yes","YES")) { Write-Host "Aborted."; exit 0 }
}
$d = 0
foreach ($r in $rows) {
  $key = "COUPON_$d"
  $val = $r.code
  doppler secrets set $key="$val" --project $Project --config $Config --silent
  $d++
}
Write-Host "Done. Stored $d coupons (COUPON_0 .. COUPON_$($d-1))."
