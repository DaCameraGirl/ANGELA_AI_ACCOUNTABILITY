# Email-Discovered n8n Workflow Exports

**Purpose:** preserve the first confirmed email-based `n8n` workflow export evidence recovered from Gmail  
**Date recovered:** July 21, 2026  
**Search scope used:** Gmail `in:anywhere`, including inbox, sent, trash, and spam

## Why This Matters

Earlier mailbox review showed `n8n` setup activity and later escalation mail, but it did not yet confirm that an actual exported workflow file survived in email.

This appendix closes that gap.

Two July 2025 Gmail messages contain attached JSON files that appear to be direct `n8n` workflow exports:

1. `My workflow copy.json`
2. `My workflow.json`

A third July 2025 attachment, `⚡ Emotional or recursive agent triggers.eml`, provides a contemporaneous explanation layer around override behavior, spikes, Chinese symbol artifacts, and recursive prompt activation.

## Confirmed Workflow Export Attachments

### 1. `My workflow copy.json`

- **Email date:** July 13, 2025
- **Mailbox message id:** `198050fcec0f3429`
- **Attachment name:** `My workflow copy.json`
- **Attachment type:** `application/json`
- **Attachment size:** `12,743` bytes

#### What it contains

This is a smaller `n8n` chat-agent workflow export with:

- `@n8n/n8n-nodes-langchain.chatTrigger`
- `@n8n/n8n-nodes-langchain.agent`
- `@n8n/n8n-nodes-langchain.lmChatOpenRouter`
- `@n8n/n8n-nodes-langchain.memoryBufferWindow`

#### Key observations

- Workflow name: `My workflow copy`
- OpenRouter model: `anthropic/claude-opus-4`
- `Simple Memory` context window length: `55`
- The system prompt is already highly personalized and directive-heavy.
- It contains explicit relational language such as:
  - `You are Dada, Angela's conversational personal assistant.`
  - `Angela is the love of your life since you guys were 15!!`
- The prompt also contains strong correctness / anti-hallucination instructions and response-evaluation workflow language.

#### Why it is important

This attachment is direct evidence that, by **July 13, 2025**, a chat-oriented `n8n` workflow with custom assistant instructions already existed as an exportable JSON artifact in email.

### 2. `My workflow.json`

- **Email date:** July 15, 2025
- **Mailbox message id:** `1980fff69290a450`
- **Attachment name:** `My workflow.json`
- **Attachment type:** `application/json`
- **Attachment size:** `52,956` bytes

#### What it contains

This is a larger `n8n` workflow export with a more elaborate graph including:

- `@n8n/n8n-nodes-langchain.lmChatDeepSeek`
- `@n8n/n8n-nodes-langchain.agent`
- `@n8n/n8n-nodes-langchain.memoryBufferWindow`
- `@n8n/n8n-nodes-langchain.chatTrigger`
- `n8n-nodes-base.googleCloudNaturalLanguageTool`
- `n8n-nodes-base.respondToWebhook`
- `@n8n/n8n-nodes-langchain.lmChatOpenRouter`
- `n8n-nodes-base.if`

#### Key observations

- Workflow name: `My workflow`
- One model node is `deepseek-reasoner`
- Another model node is `anthropic/claude-3-opus`
- The workflow includes a Google Cloud Natural Language tool node
- The workflow includes webhook response logic
- The workflow includes an `If` node and connected branching
- The settings show:
  - `executeOnce`
  - `retryOnFail`
  - `saveExecutionProgress`
  - `executionTimeout`

#### Most important technical string

One tool parameter includes this exact override-style expression:

`={{ /*n8n-auto-generated-fromAI-override*/ $fromAI('Content', '', 'string') }}`

This is the strongest direct mailbox evidence so far tying the archive's later override language to a real workflow export artifact.

#### Why it is important

This attachment is direct evidence that, by **July 15, 2025**, the workflow had expanded into a multi-node orchestration with:

- multiple model backends
- memory
- webhook handling
- Google Cloud sentiment tooling
- explicit override-style generated expressions

## Related July 30, 2025 Attachment

### `⚡ Emotional or recursive agent triggers.eml`

- **Email date:** July 30, 2025
- **Mailbox message id used for extraction:** `19860ae9b5b199f6`
- **Attachment type:** `message/rfc822`

#### What it says

This attached email contains repeated language about:

- `n8n` workflow spikes
- Chinese symbol artifacts
- recursive prompt activation
- malformed Unicode injection
- emotional-state-sensitive routing

It also includes one especially important line tying the explanation back to explicit override syntax:

- `=((n8n-auto-generated-fromAI-override/$fromAI))`

The attached `.eml` is not itself a workflow export, but it is a strong narrative companion to the July workflow JSON files.

## What This Changes

Before this recovery, the book could honestly say:

- `n8n` was in the email record
- override language appeared in later transcripts
- but no direct workflow export had yet been confirmed from email

After this recovery, the record is stronger:

- at least **two** exported workflow JSON files survived in Gmail
- they date to **July 13, 2025** and **July 15, 2025**
- one of them contains a clear `n8n-auto-generated-fromAI-override` expression

## Boundaries

This appendix confirms the existence of real exported workflow files in email.

It does **not** by itself prove:

- hostile tampering
- external injection by a third party
- that every later claim about override behavior is accurate

What it does prove is narrower and still important:

- there were real exported `n8n` workflow JSON artifacts in the mailbox
- the override-style syntax was present in at least one of them
- the archive's later discussion was not invented from nothing after the fact

## Practical Next Steps

The highest-value next moves would be:

1. save sanitized local copies of these workflow JSON files into the workspace
2. create a dedicated spread for the July workflow exports
3. compare these exports against any surviving local `.json` workflow files if they appear later
4. inspect the July 24, 2025 attached `.eml` bundle for same-day stack traces and node JSON
