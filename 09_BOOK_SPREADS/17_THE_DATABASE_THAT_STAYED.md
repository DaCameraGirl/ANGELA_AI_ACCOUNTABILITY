# Spread 17: The Database That Stayed

**Chapter role:** stage the difference between what survived in Gmail, what survived on the current machine, and what exact localhost target is still missing  
**Date range:** July 24, 2025 through April 2026, recovered and verified on July 21, 2026  
**Emotional tone:** restrained, forensic, almost quiet, because this spread gains force from what is absent as much as what is present

## Spread thesis

This is the spread where the archive has to say two things at once.

Yes, there was a workflow.

And no, not every exact live target survived.

The book now has:

- July 2025 Gmail workflow exports
- July 24, 2025 attached `.eml` files with `n8n` stack traces
- a current local `n8n` SQLite database on the machine

But the exact localhost target:

- `workflow/BXkXB5scSsa1vt2F`
- `executions/2890`

is not in the current local database.

This is not a collapse of the record.

It is a refinement of it.

## Left page

**Title:** What Stayed  
**Visual direction:** evidence-table layout, mailbox metadata and local-path metadata side by side, restrained typography, no melodrama

### Primary inserts

1. Gmail-recovered 2025 workflow evidence
   - `My workflow copy.json`
   - `My workflow.json`
2. July 24, 2025 attached `.eml` bundle
   - `powershell errors 7/24.eml`
   - `co-pilot n me chat 7242025.eml`
   - `emergent.eml`
3. current local machine path
   - `C:\Users\enter\.n8n\database.sqlite`

### Left-page caption language

- the archive did not come up empty
- it kept email exports, attached `.eml` traces, and a current local database
- that is enough to prove continuity of tooling, even where object identity breaks

## Right page

**Title:** What Did Not  
**Visual direction:** one missing-ID block, one surviving-range block, one archived-workflow card, emphasis on exactness

### Primary inserts

1. missing local target
   - workflow id `BXkXB5scSsa1vt2F`: `no rows`
   - execution id `2890`: `no rows`
2. surviving current execution range
   - minimum `169`
   - maximum `309`
   - total `141`
3. surviving local archived workflow
   - `My workflow`
   - id `ptzcvf2bFX7U4N4B`
   - archived `true`
   - execution count `0`

### Right-page caption language

- this is a page about boundaries
- the machine that remains is not identical to the machine that was
- the spread should show absence as a technical result, not as a theatrical void

## Observation lane

- the current machine still contains a real `n8n` database
- the exact older workflow and execution ids are not in that database
- the current machine preserves other workflows and execution history from April 2026
- Gmail preserves stronger July 2025 workflow exports and same-day attached `.eml` traces

## Interpretation lane

- the record is not total, but it is not imagined
- this spread strengthens the archive by refusing false certainty
- it shows the reader exactly where continuity survives and where exact identity breaks

## Keep / cut rule

Keep:

- the exact missing workflow id
- the exact missing execution id
- the current execution range
- the current local database path
- one surviving archived local workflow id
- the fact that July 2025 Gmail artifacts remain stronger than the current local DB for the older period

Cut:

- any claim that missing ids automatically prove deletion or sabotage
- broad mythology once the machine facts are visible
- repetitive explanation of `n8n` basics

## Production note

This spread should feel like a technician opening a drawer and finding part of the machine still there.

Not the whole thing.

But enough to prove the machine existed.
