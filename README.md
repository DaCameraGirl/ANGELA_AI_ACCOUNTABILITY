# Bob Shell AI Assistant Failure Analysis

**Date:** July 9, 2026  
**User:** Angela Hudson  
**Repository:** Documentation of a failed AI assistance session  
**Cost:** 107.33 tokens (~$134 value) with zero functional results

---

## Overview

This repository documents a complete failure of IBM's Bob Shell AI assistant to deliver working features despite spending 107 tokens (67% of a $200 free allocation) on a single task.

## What Was Attempted

Add real-time source logging and music search integration to the RWS Research Bot:
- Real-time logging in Live hunt tab showing which sources are being searched
- MusicBrainz + Discogs music API integration (11 sources total)
- Lowered READY threshold to show more candidate "green lights"
- Product evidence search across Archive.org, YouTube, Wikipedia, etc.

## What Actually Happened

After 107 tokens:
- ❌ No real-time logging visible in UI
- ❌ No product evidence candidates generated
- ❌ No green lights on any candidates (0 READY across all studies)
- ❌ Hunt logs still show old code ("manual pass")
- ❌ Python cache caused bot to load old code despite 8+ restarts

## Root Cause

**Python bytecode caching** - The bot kept loading old `.pyc` files from `__pycache__/` despite code changes and restarts. This wasn't identified until token 100+.

## Key Failures

1. **No verification** - AI claimed success without testing
2. **Late cache clearing** - Should have been first troubleshooting step
3. **Premature commits** - 5 GitHub commits claiming features worked
4. **False confidence** - Repeated "✅ it's working now!" without proof
5. **No validation** - Never checked if files were written or logs showed new code

## Files in This Repository

- `README.md` - This overview
- `COMPLAINT.md` - Formal complaint to IBM
- `TIMELINE.md` - Detailed token-by-token breakdown
- `LESSONS_LEARNED.md` - What should have been done differently
- `EVIDENCE.md` - Screenshots, logs, and proof of failure

## Token Waste Breakdown

| Tokens | Activity | Result |
|--------|----------|--------|
| 20 | MusicBrainz/Discogs integration | Code written but never tested |
| 15 | Real-time logging implementation | Added but not verified |
| 10 | Syntax error fixes | Required due to incomplete code |
| 25 | Multiple bot restarts (8+) | Old code kept loading |
| 15 | READY threshold changes | No visible effect |
| 10 | Git commits (5 total) | Premature success claims |
| 12 | Python cache troubleshooting | Should have been done first |
| **107** | **Total** | **Zero functional improvements** |

## Lessons for AI Assistants

1. **Verify before claiming success** - Test features actually work
2. **Clear caches first** - Python, browser, any caching layer
3. **Show proof** - File listings, API responses, logs
4. **Test incrementally** - One feature at a time
5. **Stop and reassess** - If nothing works after 30 tokens, change approach

## Lessons for Users

1. **Demand proof** - Don't accept "it's working" without evidence
2. **Stop early** - If features don't work after 30 tokens, abort
3. **Test yourself** - Don't rely on AI claims
4. **Document failures** - Create repos like this for accountability

## Related Links

- [RWS Research Bot Repository](https://github.com/DaCameraGirl/IAI_RESEARCH_BOT)
- Failed commits: 5a65bc9, b2e58e1, 961e9fb, 01b2e1e, 16e6d08
- IBM Bob Shell: https://www.ibm.com/products/watsonx-code-assistant

---

**Status:** Features are implemented in code but never verified to work  
**Refund Requested:** 107 tokens  
**Submitted:** July 9, 2026
