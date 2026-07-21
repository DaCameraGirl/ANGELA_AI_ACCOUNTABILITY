# Local n8n Database Survival Status

**Purpose:** preserve the exact local-machine findings from the current `n8n` SQLite database after checking whether the older localhost workflow still survives  
**Date checked:** July 21, 2026  
**Local data source:** `C:\Users\enter\.n8n\database.sqlite`

## Why This Page Exists

An older `n8n` localhost URL was identified as the target workflow:

- `http://localhost:5678/workflow/BXkXB5scSsa1vt2F/executions/2890`

The question was simple:

- does that exact workflow still exist on the current machine
- and if not, what `n8n` evidence does still survive locally

This appendix records the answer precisely.

## What Was Verified

### 1. The current local `n8n` data directory exists

The machine still contains:

- `C:\Users\enter\.n8n`

and within it:

- `database.sqlite`
- `database.sqlite-shm`
- `database.sqlite-wal`
- `n8nEventLog.log`
- earlier rotated `n8nEventLog-*.log` files

So the local `n8n` layer is not absent.

It is present.

### 2. The older localhost target is not in the current database

Direct SQLite checks against `database.sqlite` showed:

- workflow id `BXkXB5scSsa1vt2F`: **no rows**
- execution id `2890`: **no rows**

This means the exact workflow URL:

- `workflow/BXkXB5scSsa1vt2F`
- `executions/2890`

does **not** survive in the current local database state on this machine.

### 3. The current local execution range is much smaller than `2890`

The current `execution_entity` table returned:

- minimum execution id: `169`
- maximum execution id: `309`
- total executions present: `141`

This matters because it means execution `2890` does not just fail by one row.

It falls far outside the current stored execution range.

## What Does Survive In The Current Local Database

The current `workflow_entity` table contains four workflows:

1. `PromptWriter2`
   - id `C86999K3NZBo8sWz`
   - created `2026-04-04 14:55:40.909`
   - updated `2026-04-28 16:01:30.351`
2. `Passive_Boy`
   - id `x2ASzMXeCLi6GL56`
   - created `2026-04-10 01:01:52.113`
   - updated `2026-04-28 16:00:26.592`
3. `VoiceMission`
   - id `YtQAzxT3hPoJTyso`
   - created `2026-04-16 23:08:06.121`
   - updated `2026-04-19 22:10:27.222`
4. `My workflow`
   - id `ptzcvf2bFX7U4N4B`
   - created `2026-04-02 13:16:00.453`
   - updated `2026-04-10 01:37:42`
   - archived: `true`
   - version counter: `18`

## The Surviving Local `My workflow`

The current local workflow named `My workflow` is **not** the same object as the July 2025 email-recovered `My workflow.json`.

It is a separate local database object with:

- workflow id `ptzcvf2bFX7U4N4B`
- archived state `true`
- execution count `0`

### Workflow history for this local object

The `workflow_history` table contains one recorded version for this workflow:

- version id `b56a1354-c85c-4127-bf73-14f80ddaa84d`
- author `Angela Hudson`
- created `2026-04-10 01:37:42.473`
- autosaved `false`

### Important limitation

For this surviving local `My workflow`, both the current row and the single history row show:

- node count `0`
- no saved connection keys

So the current machine preserves the existence of the object,

but not a populated node graph for that specific archived local workflow row.

## Execution Distribution In The Current Database

The 141 surviving executions are attached to other workflows:

- `PromptWriter2`: `69`
- `Passive_Boy`: `54`
- `VoiceMission`: `18`
- local `My workflow`: `0`

This further supports the conclusion that the targeted localhost execution:

- `2890`

belongs to a different `n8n` environment, different machine state, or older database than the one now available locally.

## What This Proves

This appendix proves:

- the current machine still has a real `n8n` SQLite database
- the exact older localhost workflow id is not present in that database
- the exact older execution id is not present in that database
- the current machine does preserve a different local archived workflow named `My workflow`
- the current local execution range only spans `169` through `309`

## What This Does Not Prove

This appendix does **not** prove:

- why the older workflow is missing
- whether it was deleted intentionally
- whether it existed on another machine only
- whether a backup copy survives somewhere else

It also does **not** replace the stronger July 2025 Gmail evidence.

Instead, it complements it by showing the difference between:

- email-recovered workflow artifacts from 2025
- current-machine local `n8n` database state from 2026

## Best Next Recovery Paths

The most useful next recovery targets would be:

1. old exported workflow JSON files outside Gmail
2. any zipped backup of an earlier `.n8n` directory
3. Google Drive folders containing `n8n` exports or backup bundles
4. old machine images or copied app-data folders
5. any surviving screenshot or text export that explicitly shows workflow id `BXkXB5scSsa1vt2F`
6. July 24, 2025 attached `.eml` files preserving same-day `n8n` errors or node JSON
