param(
  [string]$InCsv  = "ops\marketing\coupons_from_doppler.csv",
  [string]$OutCsv = "ops\marketing\whop_bulk.csv",
  [int]$Percent   = 60,
  [int]$MaxUses   = 1,
  [int]$ExpireDays = 14
)
New-Item -ItemType Directory -Path (Split-Path $OutCsv) -Force | Out-Null
if (-not (Test-Path $InCsv)) { throw "CSV not found: $InCsv" }
$rows = Import-Csv -Path $InCsv
$expires = (Get-Date).AddDays($ExpireDays).ToString("yyyy-MM-dd")
$out = $rows | ForEach-Object {
  [PSCustomObject]@{
    code             = $_.code
    percent_off      = $Percent
    max_redemptions  = $MaxUses
    expires_at       = $expires
    note             = "launch_202511"
  }
}
$out | Export-Csv -Path $OutCsv -NoTypeInformation -Encoding UTF8
Write-Host "Whop bulk CSV -> $OutCsv ($($rows.Count) rows)"
