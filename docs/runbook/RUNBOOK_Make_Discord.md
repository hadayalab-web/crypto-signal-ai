# RUNBOOK_Make_Discord

## Normal
- HTTP 204 = OK (Discord webhook spec), History tab check, dual-filter (event.type/action)

## Error
- DataError route: log → notify → retry/backoff, manual replay procedure

