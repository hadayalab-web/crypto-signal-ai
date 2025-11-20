param(
  [string]$Project = "crypto-signal-ai",
  [string]$Config  = "prd",
  [string]$OutCsv  = "ops\marketing\coupons_from_doppler.csv"
)
New-Item -ItemType Directory -Path (Split-Path $OutCsv) -Force | Out-Null
$env = doppler secrets download --project $Project --config $Config --format env --no-file
$lines = $env -split "`r?`n"
$data = @()
foreach ($ln in $lines) {
  if ($ln -match '^COUPON_(\d+)="(.+)"$') {
    $data += [PSCustomObject]@{ index=$matches[1]; code=$matches[2] }
  }
}
$data | Sort-Object {[int]$_.index} | Export-Csv -Path $OutCsv -NoTypeInformation -Encoding UTF8
Write-Host "Exported $($data.Count) coupons -> $OutCsv"
