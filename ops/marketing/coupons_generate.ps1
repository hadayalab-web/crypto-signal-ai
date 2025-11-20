param(
  [int]$Count = 20,
  [int]$Length = 9,
  [int]$DiscountPercent = 60,
  [string]$Campaign = "launch_202511",
  [string]$OutCsv = "ops\marketing\coupons.csv"
)
New-Item -ItemType Directory -Path (Split-Path $OutCsv) -Force | Out-Null
function New-Code([int]$len=9){$c="ABCDEFGHJKMNPQRSTUVWXYZ23456789".ToCharArray();-join(1..$len|%{ $c[(Get-Random -Max $c.Length)]})}
$now = Get-Date
$data = 1..$Count | ForEach-Object {
  [PSCustomObject]@{
    code      = New-Code $Length
    discount  = $DiscountPercent
    campaign  = $Campaign
    createdAt = $now.ToString("yyyy-MM-ddTHH:mm:ssZ")
    status    = "active"
  }
}
$data | Export-Csv -Path $OutCsv -NoTypeInformation -Encoding UTF8
Write-Host "Generated $Count coupons -> $OutCsv"
