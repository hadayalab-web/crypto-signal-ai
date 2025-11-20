param(
  [string]$Repo = "hadayalab-web/crypto-signal-ai",
  [string]$CsvPath = "ops\wbs\wbs.csv",
  [switch]$DryRun
)
if (-not (Test-Path $CsvPath)) { throw "CSV not found: $CsvPath" }
$rows = Import-Csv -Path $CsvPath
$created = 0
foreach ($r in $rows) {
  $title = "[WBS #$($r.No)] $($r.Task)"
  $body  = @"
Status: $($r.Status)
Owner: $($r.Owner)
Due:   $($r.Due)
Note:  $($r.Note)
"@
  if ($DryRun) {
    Write-Host "DRY: gh issue create -R $Repo -t $title"
  } else {
    gh issue create -R $Repo -t $title -b $body | Out-Null
    $created++
    Start-Sleep -Milliseconds 300
  }
}
Write-Host "Issues created: $created (Total rows: $($rows.Count), DryRun=$DryRun)"
