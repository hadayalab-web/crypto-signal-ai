# Operations

Common failures:
- Request failed after edits → save-and-toast, then run
- ReferenceError → re-insert with UI Insert Reference
- Auth error → re-save Secrets, reload UI, test Sender standalone

Recovery fast path:
1) Sender standalone with fixed text → ok:true → revert
2) Rewire serial chain + re-insert references
3) Full chain order run and capture message_id
