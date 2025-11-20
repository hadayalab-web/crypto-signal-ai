param(
  [string]$WbsMdPath = "docs\00_WBS.md",
  [string]$OutCsvPath = "ops\wbs\wbs.csv",
  [switch]$Open
)
New-Item -ItemType Directory -Path (Split-Path $OutCsvPath) -Force | Out-Null
if (-not (Test-Path $WbsMdPath)) { throw "WBS markdown not found: $WbsMdPath" }

$raw = Get-Content -Raw -Path $WbsMdPath -Encoding UTF8

# 最初の表ブロックを抽出（ヘッダ行→区切り行→データ行）
if ($raw -match "(?ms)^\|.*?\r?\n\|[-\| ]+\r?\n(?<tbl>(?:\|.*?\r?\n)+)") {
  $tbl = $matches['tbl']
} else {
  throw "WBS table not found in $WbsMdPath"
}
$lines = $tbl -split "`r?`n" | Where-Object { $_.Trim().StartsWith("|") }

$data = @()
foreach ($ln in $lines) {
  $cells = ($ln.Trim('|') -split '\|') | ForEach-Object { $_.Trim() }
  if ($cells[0] -eq "No") { continue }
  if ($cells[0] -match '^\d+$') {
    $data += [PSCustomObject]@{
      No     = $cells[0]
      Task   = $cells[1]
      Status = $cells[2]
      Owner  = $cells[3]
      Due    = $cells[4]
      Note   = $cells[5]
    }
  }
}
$data | Export-Csv -Path $OutCsvPath -NoTypeInformation -Encoding UTF8
Write-Host "WBS CSV exported -> $OutCsvPath ($($data.Count) rows)"
if ($Open) { & "$OutCsvPath" }
