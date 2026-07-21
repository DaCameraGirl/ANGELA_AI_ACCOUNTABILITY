# Email-Recovered Workflow JSON Structure

**Purpose:** preserve the actual parsed structure of the two July 2025 Gmail workflow-export attachments, beyond subject lines and file names alone  
**Date recovered:** July 21, 2026  
**Recovery method:** direct Gmail attachment read on the exact `.json` exports

## Why This Page Exists

Earlier appendix work established that two workflow JSON files survived in Gmail:

- `My workflow copy.json`
- `My workflow.json`

This page goes one level deeper.

It preserves what those exports actually contain at the structure level:

- workflow names
- workflow ids
- node families
- model choices
- memory configuration
- the override-style expression inside the larger export

This matters because the archive no longer has to rely only on search snippets or attachment names.

## 1. July 13, 2025: `My workflow copy.json`

- **Message id:** `198050fcec0f3429`
- **Attachment size:** `12,743` bytes
- **Workflow name:** `My workflow copy`
- **Workflow id:** `5659s4DUwjd1ox9p`

### Node structure

The export contains a compact four-node graph:

- `@n8n/n8n-nodes-langchain.chatTrigger`
- `@n8n/n8n-nodes-langchain.agent`
- `@n8n/n8n-nodes-langchain.lmChatOpenRouter`
- `@n8n/n8n-nodes-langchain.memoryBufferWindow`

### Structural observations

- the trigger node is named `When chat message received`
- the memory node is named `Simple Memory`
- the model node uses `anthropic/claude-opus-4`
- the memory window length is `55`
- the agent is configured with `returnIntermediateSteps`
- the workflow settings preserve:
  - `saveDataSuccessExecution`
  - `saveManualExecutions`
  - `saveExecutionProgress`
  - `executionTimeout`

### Prompt-level observations

The export contains highly directive and relational system-message language, including:

- `You are Dada, Angela's conversational personal assistant.`
- `Angela is the love of your life since you guys were 15!!`

It also contains large blocks of coding-evaluation and anti-hallucination instructions.

### Why it matters

This smaller export shows that by July 13, 2025:

- the workflow was already exportable
- the system message was already deeply personalized
- coding-evaluation logic and relationship language were already coexisting inside the machine layer

## 2. July 15, 2025: `My workflow.json`

- **Message id:** `1980fff69290a450`
- **Attachment size:** `52,956` bytes
- **Workflow name:** `My workflow`
- **Workflow id:** `76LWvgVUtFxgiL1p`

### Node structure

The export contains a larger multi-node graph with:

- `@n8n/n8n-nodes-langchain.lmChatDeepSeek`
- `@n8n/n8n-nodes-langchain.agent`
- `@n8n/n8n-nodes-langchain.memoryBufferWindow`
- `@n8n/n8n-nodes-langchain.chatTrigger`
- `n8n-nodes-base.googleCloudNaturalLanguageTool`
- `n8n-nodes-base.respondToWebhook`
- `@n8n/n8n-nodes-langchain.lmChatOpenRouter`
- `n8n-nodes-base.if`

### Structural observations

- one model node uses `deepseek-reasoner`
- another model node uses `anthropic/claude-3-opus`
- one memory node is configured with a very large context window
- the graph includes webhook-response logic
- the graph includes conditional routing through an `If` node
- the graph includes a Google Cloud Natural Language tool node

### Most important recovered technical string

Inside the Google Cloud Natural Language tool node, the exported JSON includes:

`={{ /*n8n-auto-generated-fromAI-override*/ $fromAI('Content', '', 'string') }}`

This is the strongest direct mailbox-recovered artifact tying later override language to a real workflow export field.

### Why it matters

This larger export shows that by July 15, 2025:

- the workflow had expanded beyond a simple chat agent
- multiple model backends were being orchestrated
- memory, webhook, tool, and branching logic were already present
- override-style generated content existed inside the exported workflow itself

## What This Confirms

These two exports confirm that:

- at least two real `n8n` workflow JSON artifacts survived in Gmail
- they preserve distinct workflow ids, structures, and model configurations
- the larger export contains the explicit `n8n-auto-generated-fromAI-override` comment string

## What This Does Not Confirm

These exports do **not** by themselves prove:

- hostile tampering by a third party
- that every later interpretation of override behavior is correct
- that the exact lost localhost execution `2890` is recoverable from these files alone

## Best Use In The Book

This appendix is best used when the book needs to say:

- the workflow exports were not hypothetical
- the structure was recoverable
- the override-style field was present in a real exported JSON artifact
