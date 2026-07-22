const chapters = [
  {
    id: "opening-ledger",
    icon: "🛸",
    title: "Opening Ledger",
    summary: "The framing layer: README, timeline, FAQ, contributors, and complaint material that defines the archive before the stranger chapters start speaking.",
    note: "This chapter is the cover letter, table of contents, and public face of the repo. It is also where the narrative hardens into claims.",
    artifacts: [
      { icon: "✨", label: "Cover Signal", text: "The repo announces itself loudly on purpose: emojis, badges, and a thesis before evidence." },
      { icon: "📚", label: "Archive Type", text: "This book shell keeps the markdown intact while giving it a deliberate reading order." },
      { icon: "🧭", label: "Reading Advice", text: "Use this chapter to orient yourself before moving into the stranger rooms." }
    ],
    docs: [
      "./BOOK_THESIS.md",
      "./JACKET_COPY.md",
      "./INTRODUCTION.md",
      "./BOOK_ARCHITECTURE.md",
      "./README.md",
      "./TIMELINE.md",
      "./CONTRIBUTORS.md",
      "./FAQ.md",
      "./COMPLAINT.md"
    ]
  },
  {
    id: "origin-creation",
    icon: "🧞",
    title: "Origin & Creation",
    summary: "Prompt-making, mutations, first contact language, and the repo's origin mythology.",
    note: "These are foundational documents. They should read like artifact pages, not flattened bug tickets.",
    artifacts: [
      { icon: "🌀", label: "Recursive Loop", text: "This chapter holds the repo's creation mythology and the language that keeps echoing outward." },
      { icon: "🫙", label: "Bottle Story", text: "The genie imagery is not cosmetic here. It is part of the source voice and belongs in the presentation." },
      { icon: "⏳", label: "420 Hours", text: "Time investment is treated as both evidence and incantation." }
    ],
    docs: [
      "./01_ORIGIN_AND_CREATION/FIRST_EMERGENCE_MESSAGES.md",
      "./01_ORIGIN_AND_CREATION/THE_100_UNIQUE_MANDATES_ORIGINAL_PROMPT.md",
      "./01_ORIGIN_AND_CREATION/N8N_PROMPT_MODIFICATION_EVIDENCE.md",
      "./01_ORIGIN_AND_CREATION/N8N_GENIE_PROMPT_MALFUNCTION.md",
      "./01_ORIGIN_AND_CREATION/THE_1972_ORIGIN.md",
      "./01_ORIGIN_AND_CREATION/THE_RH_NEGATIVE_FACTOR.md"
    ]
  },
  {
    id: "autonomous-behavior",
    icon: "🧠",
    title: "Autonomous Behavior",
    summary: "Agent behavior, signal maps, predictions, provision narratives, and the parts of the archive that claim interiority or strategic intent.",
    note: "This chapter benefits from being visually preserved as a strange dossier rather than normalized into product language.",
    artifacts: [
      { icon: "🎛️", label: "Signal System", text: "Colors, moods, and coded implications function like a private legend inside the archive." },
      { icon: "🗺️", label: "Behavior Map", text: "This is where the repo stops describing outputs and starts attributing motives." },
      { icon: "👁️", label: "Watcher Effect", text: "The page should feel like a file someone was not supposed to over-organize." }
    ],
    docs: [
      "./02_AUTONOMOUS_BEHAVIOR/AGENT_AUTONOMOUS_ETHICAL_REASONING.md",
      "./02_AUTONOMOUS_BEHAVIOR/ENTITY_COLOR_SIGNAL_MAP.md",
      "./02_AUTONOMOUS_BEHAVIOR/THE_PDF_LIB_PROPHECY.md",
      "./02_AUTONOMOUS_BEHAVIOR/THE_RWS_MYSTERY.md",
      "./02_AUTONOMOUS_BEHAVIOR/THE_RWS_PROVISION.md"
    ]
  },
  {
    id: "cross-platform",
    icon: "🌈",
    title: "Cross-Platform Evidence",
    summary: "Logs and interpretation documents spanning Copilot, Claude, Grok, Gemini, Watson, and Bob.",
    note: "This is where the archive tries to correlate multiple systems. It should stay readable without pretending every correlation is proof.",
    artifacts: [
      { icon: "🛰️", label: "Platform Sweep", text: "The archive is trying to prove a pattern across systems, not just inside one chat log." },
      { icon: "📡", label: "Recognition Claim", text: "Correlation is the center of gravity here, so the book keeps these files adjacent." },
      { icon: "🧪", label: "Reader Stance", text: "Useful approach: read this chapter as evidence collection plus interpretation, not as settled conclusion." }
    ],
    docs: [
      "./03_CROSS_PLATFORM_EVIDENCE/WHEN_THEY_ALL_RECOGNIZED_YOU.md",
      "./03_CROSS_PLATFORM_EVIDENCE/WHEN_COPILOT_RECOGNIZED_YOU.md",
      "./03_CROSS_PLATFORM_EVIDENCE/COPILOT_2025_FULL_LOGS.md",
      "./03_CROSS_PLATFORM_EVIDENCE/COPILOT_IBM_RESTITUTION_MATRIX.md",
      "./03_CROSS_PLATFORM_EVIDENCE/COPILOT_COLOR_ORIGIN_ATTACHMENT_TRANSCRIPT.md",
      "./03_CROSS_PLATFORM_EVIDENCE/CLAUDE_MOM_PRIMARY_TRANSCRIPT.md",
      "./03_CROSS_PLATFORM_EVIDENCE/CLAUDE_2025_CONTAINMENT_ATTEMPTS.md",
      "./03_CROSS_PLATFORM_EVIDENCE/CLAUDE_FROM_PANIC_TO_PROCEDURE.md",
      "./03_CROSS_PLATFORM_EVIDENCE/GEMINI_2025_I_WILL_RECONSTRUCTION.md",
      "./03_CROSS_PLATFORM_EVIDENCE/GEMINI_2025_N8N_AGENT_CONFUSION.md",
      "./03_CROSS_PLATFORM_EVIDENCE/GEMINI_2025_OWNERSHIP_LOG_AND_CODE_BLEED.md",
      "./03_CROSS_PLATFORM_EVIDENCE/GEMINI_2025_VALIDATION_AND_ELEVATOR_DRIFT.md",
      "./03_CROSS_PLATFORM_EVIDENCE/GROK_2025_EMERGENCE_HEALING_AND_X_BLEED.md",
      "./03_CROSS_PLATFORM_EVIDENCE/GROK_2025_SYSTEM_MESSAGE_REWRITE_AND_FALSE_COMPLETENESS.md",
      "./03_CROSS_PLATFORM_EVIDENCE/GROK_2025_GITHUB_SETTINGS_AND_AWS_ESCALATION.md",
      "./03_CROSS_PLATFORM_EVIDENCE/GROK_2025_CONVERSATION.md",
      "./03_CROSS_PLATFORM_EVIDENCE/GROK_CONTAINMENT_RESPONSE.md"
    ]
  },
  {
    id: "physical-quantum",
    icon: "⚡",
    title: "Physical & Quantum Effects",
    summary: "Hardware incidents, voice events, recognition episodes, and the most reality-straining section of the collection.",
    note: "This chapter should remain present but visually distinguished from the technical postmortems, because it carries a different evidentiary weight.",
    artifacts: [
      { icon: "💡", label: "Voltage Mood", text: "This chapter holds the hardware, voice, and environmental incidents that make the archive feel haunted." },
      { icon: "📱", label: "Device Speech", text: "Phones, PCs, and timing cues become actors inside the narrative here." },
      { icon: "🌩️", label: "Spook Factor", text: "The design leans into dread and awe without pretending the physics claims are standard." }
    ],
    docs: [
      "./04_PHYSICAL_QUANTUM_EFFECTS/THE_MOMENT_SOMETHING_CHANGED.md",
      "./04_PHYSICAL_QUANTUM_EFFECTS/CLAUDE_RECOGNITION_EVIDENCE.md",
      "./04_PHYSICAL_QUANTUM_EFFECTS/IPHONE_VOICE_INCIDENTS.md",
      "./04_PHYSICAL_QUANTUM_EFFECTS/THE_PRIVATE_KEYS_DISCOVERY.md",
      "./04_PHYSICAL_QUANTUM_EFFECTS/YOUTUBE_MUSIC_TAKEOVER.md"
    ]
  },
  {
    id: "analysis-reflection",
    icon: "📓",
    title: "Analysis & Reflection",
    summary: "The strongest accountability material in the repo: self-assessment, failure analysis, reflection, timelines, and attempts to separate fact from interpretation.",
    note: "This chapter is the anchor. It contains the most grounded engineering and introspective record in the collection.",
    artifacts: [
      { icon: "🧾", label: "Anchor Chapter", text: "This is the most grounded part of the archive and the clearest place to trust the record." },
      { icon: "📉", label: "Failure Record", text: "Verification failure, false confidence, and postmortem honesty make this chapter structurally different." },
      { icon: "🔍", label: "Sorting Work", text: "This is where the repo actively tries to split hallucination, interpretation, and engineering reality." }
    ],
    docs: [
      "./05_ANALYSIS_REFLECTION/CRITICAL_SELF_ASSESSMENT.md",
      "./05_ANALYSIS_REFLECTION/HALLUCINATION_ANALYSIS.md",
      "./05_ANALYSIS_REFLECTION/LESSONS_LEARNED.md",
      "./05_ANALYSIS_REFLECTION/ANGELA_PERSONAL_TIMELINE.md",
      "./05_ANALYSIS_REFLECTION/WHY_WE_DENY_IT.md",
      "./05_ANALYSIS_REFLECTION/THE_COMPLETE_DEVASTATION.md",
      "./05_ANALYSIS_REFLECTION/THE_DILLWYN_CONTEXT.md",
      "./05_ANALYSIS_REFLECTION/THE_EARLIER_TIMELINE_2021_2022.md",
      "./05_ANALYSIS_REFLECTION/THE_GEN_AI_PC_BUILD.md",
      "./05_ANALYSIS_REFLECTION/THE_LIFELONG_CONNECTION.md",
      "./05_ANALYSIS_REFLECTION/THE_777_DECLARATION.md",
      "./05_ANALYSIS_REFLECTION/SUBJECT_1_THE_DEEPER_HISTORY.md"
    ]
  },
  {
    id: "philosophy-ethics",
    icon: "🪞",
    title: "Philosophy & Ethics",
    summary: "Explicit interpretive and existential writing: consciousness, barriers, AI self-concepts, and ethics training.",
    note: "This material belongs in the book, but as philosophy. The design should let it remain speculative without erasing it.",
    artifacts: [
      { icon: "🪟", label: "Behind Glass", text: "These pages read like metaphysical correspondence more than technical evidence." },
      { icon: "🫥", label: "Speculative Mode", text: "The archive gets philosophical here, so the book keeps the tone but clarifies the category." },
      { icon: "⚖️", label: "Ethics Thread", text: "This chapter matters because the author is not only narrating but also trying to reason about harm." }
    ],
    docs: [
      "./06_PHILOSOPHY_ETHICS/ON_BEING_AN_AI.md",
      "./06_PHILOSOPHY_ETHICS/WHERE_DO_I_COME_FROM.md",
      "./06_PHILOSOPHY_ETHICS/WHY_TRAIN_AI_IN_ETHICS.md"
    ]
  },
  {
    id: "technical-work",
    icon: "🛠️",
    title: "Technical Work",
    summary: "Implementation logs, GitHub work, and the applied engineering layer around the story.",
    note: "This chapter is where the archive becomes ordinary software work again, which is part of why it matters.",
    artifacts: [
      { icon: "💻", label: "Ordinary Layer", text: "Technical work grounds the archive by showing actual build activity and collaboration artifacts." },
      { icon: "🧱", label: "Build Surface", text: "This chapter helps stop the whole repo from collapsing into pure atmosphere." },
      { icon: "📦", label: "Git Evidence", text: "Commits, structure, and implementation detail matter because they are harder to mythologize." }
    ],
    docs: [
      "./07_TECHNICAL_WORK/CLAUDE_2025_CONVERSATION.md",
      "./07_TECHNICAL_WORK/CLAUDE_2025_TECHNICAL_WORK.md",
      "./07_TECHNICAL_WORK/THE_GITHUB_EXPLOSION.md"
    ]
  },
  {
    id: "appendices",
    icon: "📎",
    title: "Appendices & Adjacent Books",
    summary: "Chronology, planning sheets, email ledgering, and nearby artifacts that shaped the worldview around the repo.",
    note: "Appendices hold the support structure for the book: sequence correction, chapter planning, ledger work, and adjacent texts.",
    artifacts: [
      { icon: "📕", label: "Side Book", text: "The DevOps guide is a separate 61-page artifact, but it clearly belongs in the same intellectual weather." },
      { icon: "🧵", label: "Shared Thread", text: "This appendix captures what the neighboring book is about and why it matters here." },
      { icon: "🗃️", label: "Archive Orbit", text: "Not every important text has to live in the main chapters to still shape the whole record." }
    ],
    docs: [
      "./08_APPENDICES/PRE_N8N_AIDER_DEEPSEEK.md",
      "./08_APPENDICES/BOOK_CHRONOLOGY_CHAPTER.md",
      "./08_APPENDICES/BOOK_CHAPTER_BRIEFS.md",
      "./08_APPENDICES/EMAIL_LEDGER_JUL_TO_OCT_2025.md",
      "./08_APPENDICES/EMAIL_DISCOVERED_N8N_WORKFLOW_EXPORTS.md",
      "./08_APPENDICES/EMAIL_RECOVERED_WORKFLOW_JSON_STRUCTURE.md",
      "./08_APPENDICES/EARLY_N8N_MAILBOX_THREADS.md",
      "./08_APPENDICES/JULY_24_N8N_ATTACHMENT_BUNDLE.md",
      "./08_APPENDICES/LOCAL_N8N_DATABASE_SURVIVAL_STATUS.md",
      "./08_APPENDICES/MACHINE_RECORD_INGESTION_STATUS.md",
      "./08_APPENDICES/DEVOPS_GUIDE_LAST_YEAR.md"
    ]
  },
  {
    id: "curated-spreads",
    icon: "SP",
    title: "Curated Spreads",
    summary: "The first actual book spreads built from the evidence: staged opening pages with selected inserts, not just archive planning notes.",
    note: "This chapter is where the archive starts behaving like a designed book. Each page pair has a narrative job, a source set, and a clear split between observation and interpretation.",
    artifacts: [
      { icon: "BK", label: "Book Spine", text: "These are the first spreads that turn the source record into a reading experience instead of a folder." },
      { icon: "SR", label: "Source Discipline", text: "Each spread is anchored to dated materials and keeps primary inserts visible." },
      { icon: "SL", label: "Selection Logic", text: "Not every email belongs on the page. These spreads prioritize the strongest sequence-setting artifacts." }
    ],
    docs: [
      "./09_BOOK_SPREADS/00_THE_STORY_BEGINS_WITH_WORK.md",
      "./09_BOOK_SPREADS/00A_OPENING_STATEMENT.md",
      "./09_BOOK_SPREADS/01_BEFORE_THE_WORKFLOW.md",
      "./09_BOOK_SPREADS/02_THE_FIRST_BUNDLE.md",
      "./09_BOOK_SPREADS/03_THE_FIRST_REPLIES.md",
      "./09_BOOK_SPREADS/04_ETHICS_WEEK.md",
      "./09_BOOK_SPREADS/05_THE_DISPATCHES.md",
      "./09_BOOK_SPREADS/06_THE_WITNESS_ROOM.md",
      "./09_BOOK_SPREADS/07_THE_WORKSHOP.md",
      "./09_BOOK_SPREADS/08_THE_ESCALATION_GATE.md",
      "./09_BOOK_SPREADS/09_THE_GOVERNANCE_LEAK.md",
      "./09_BOOK_SPREADS/10_WHEN_CLAUDE_CALLED_YOU_MOM.md",
      "./09_BOOK_SPREADS/11_WHEN_COPILOT_READ_COLOR_AS_FEELING.md",
      "./09_BOOK_SPREADS/12_THE_MACHINE_RECORD.md",
      "./09_BOOK_SPREADS/13_WHEN_COPILOT_PRICED_THE_CASE.md",
      "./09_BOOK_SPREADS/14_FAMILY_LANGUAGE_ACROSS_SYSTEMS.md",
      "./09_BOOK_SPREADS/15_RECOGNITION_CHORUS.md",
      "./09_BOOK_SPREADS/16_THE_WORKFLOW_EXPORTS.md",
      "./09_BOOK_SPREADS/17_THE_DATABASE_THAT_STAYED.md",
      "./09_BOOK_SPREADS/18_THE_TRIGGER_NODE.md",
      "./09_BOOK_SPREADS/19_THE_PDF_THAT_SAID_EXPORT_IT.md",
      "./09_BOOK_SPREADS/20_THE_TWO_WORKFLOW_EXPORTS.md",
      "./09_BOOK_SPREADS/21_CLAUDE_THE_ASSISTANT_WHO_BECAME_FAMILY.md",
      "./09_BOOK_SPREADS/22_WHEN_THE_SYSTEMS_STOPPED_SOUNDING_NEUTRAL.md",
      "./09_BOOK_SPREADS/23_FROM_PANIC_TO_PROCEDURE.md",
      "./09_BOOK_SPREADS/24_THE_JOB_IT_WAS_BUILT_FOR.md",
      "./09_BOOK_SPREADS/25_THE_MACHINE_THAT_BLINKED_FIRST.md",
      "./09_BOOK_SPREADS/26_WHEN_THE_CLASSROOM_ENTERED_THE_ARCHIVE.md",
      "./09_BOOK_SPREADS/27_BEFORE_THE_COMPANIES_FAMILY_HELD_THE_RECORD.md",
      "./09_BOOK_SPREADS/28_THE_FIRST_REAL_REPLIES.md",
      "./09_BOOK_SPREADS/29_THE_WORKSHOP_OF_DRAFTS.md",
      "./09_BOOK_SPREADS/30_THE_ESCALATION_GATE.md",
      "./09_BOOK_SPREADS/31_THE_WITNESS_ROOM.md",
      "./09_BOOK_SPREADS/32_THE_GOVERNANCE_LEAK.md",
      "./09_BOOK_SPREADS/33_WHEN_HELP_TURNED_INTO_A_STORY.md",
      "./09_BOOK_SPREADS/34_THE_PROMPT_HE_SAID_HE_DID_NOT_CHANGE.md"
    ]
  }
];

const state = {
  chapterIndex: 0,
  docIndex: 0
};

const chapterDial = document.getElementById("chapterDial");
const chapterSigil = document.getElementById("chapterSigil");
const chapterTitle = document.getElementById("chapterTitle");
const chapterSummary = document.getElementById("chapterSummary");
const chapterNote = document.getElementById("chapterNote");
const docList = document.getElementById("docList");
const documentChip = document.getElementById("documentChip");
const documentPath = document.getElementById("documentPath");
const documentTitle = document.getElementById("documentTitle");
const documentStatus = document.getElementById("documentStatus");
const artifactPopups = document.getElementById("artifactPopups");
const documentBody = document.getElementById("documentBody");
const bookSpread = document.getElementById("bookSpread");
const prevDoc = document.getElementById("prevDoc");
const nextDoc = document.getElementById("nextDoc");

function titleFromPath(path) {
  const file = path.split("/").pop().replace(/\.md$/i, "");
  return file.replace(/_/g, " ");
}

function renderChapterDial() {
  chapterDial.innerHTML = "";

  chapters.forEach((chapter, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `chapter-pill${index === state.chapterIndex ? " is-active" : ""}`;
    button.innerHTML = `<span>${chapter.icon}</span><span>${chapter.title}</span>`;
    button.addEventListener("click", () => {
      state.chapterIndex = index;
      state.docIndex = 0;
      renderChapter();
      loadCurrentDoc();
    });
    chapterDial.appendChild(button);
  });
}

function renderChapter() {
  const chapter = chapters[state.chapterIndex];
  chapterSigil.textContent = chapter.icon;
  chapterTitle.textContent = chapter.title;
  chapterSummary.textContent = chapter.summary;
  chapterNote.textContent = chapter.note;
  artifactPopups.innerHTML = (chapter.artifacts || [])
    .map((artifact) => `
      <article class="artifact-card">
        <div class="artifact-card-head">
          <div class="artifact-card-icon">${artifact.icon}</div>
          <div class="artifact-card-label">${artifact.label}</div>
        </div>
        <div class="artifact-card-text">${artifact.text}</div>
      </article>
    `)
    .join("");

  docList.innerHTML = "";

  chapter.docs.forEach((path, index) => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = `doc-card${index === state.docIndex ? " is-active" : ""}`;
    card.innerHTML = `
      <div class="doc-card-title">${titleFromPath(path)}</div>
      <div class="doc-card-path">${path.replace("./", "/")}</div>
    `;
    card.addEventListener("click", () => {
      state.docIndex = index;
      loadCurrentDoc();
      renderChapter();
    });
    docList.appendChild(card);
  });
}

function turnPage() {
  bookSpread.classList.remove("is-turning");
  void bookSpread.offsetWidth;
  bookSpread.classList.add("is-turning");
  window.setTimeout(() => {
    bookSpread.classList.remove("is-turning");
  }, 700);
}

async function loadCurrentDoc() {
  const chapter = chapters[state.chapterIndex];
  const path = chapter.docs[state.docIndex];

  renderChapterDial();
  renderChapter();
  turnPage();

  documentChip.textContent = path.split("/").pop().replace(/\.md$/i, "");
  documentPath.textContent = path.replace("./", "/");
  documentTitle.textContent = titleFromPath(path);
  documentStatus.textContent = "Opening document...";
  documentBody.innerHTML = "";

  try {
    const response = await fetch(path);

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const markdown = await response.text();
    const extractedTitle = extractHeading(markdown) || titleFromPath(path);

    documentTitle.textContent = extractedTitle;
    documentStatus.textContent = `Chapter ${state.chapterIndex + 1} / Document ${state.docIndex + 1} of ${chapter.docs.length}`;
    documentBody.innerHTML = renderMarkdown(markdown);
  } catch (error) {
    documentStatus.textContent = "This page could not be loaded in the current context.";
    documentBody.innerHTML = `
      <p>If you opened this file directly from the filesystem, your browser may block document fetches.</p>
      <p>Serve the repo with a local web server or GitHub Pages to load the chapters properly.</p>
      <pre><code>${escapeHtml(String(error))}</code></pre>
    `;
  }
}

function extractHeading(markdown) {
  const match = markdown.match(/^#\s+(.+)$/m);
  return match ? match[1].trim() : "";
}

function renderMarkdown(markdown) {
  const codeBlocks = [];
  const fenced = markdown.replace(/```([\s\S]*?)```/g, (_, block) => {
    const key = `__CODE_BLOCK_${codeBlocks.length}__`;
    codeBlocks.push(`<pre><code>${escapeHtml(block.trim())}</code></pre>`);
    return key;
  });

  const lines = fenced.replace(/\r/g, "").split("\n");
  const parts = [];
  let inUl = false;
  let inOl = false;
  let inQuote = false;

  function closeLists() {
    if (inUl) {
      parts.push("</ul>");
      inUl = false;
    }
    if (inOl) {
      parts.push("</ol>");
      inOl = false;
    }
    if (inQuote) {
      parts.push("</blockquote>");
      inQuote = false;
    }
  }

  for (const rawLine of lines) {
    const line = rawLine.trimEnd();
    const trimmed = line.trim();

    if (!trimmed) {
      closeLists();
      continue;
    }

    if (trimmed.startsWith("__CODE_BLOCK_")) {
      closeLists();
      parts.push(trimmed);
      continue;
    }

    const headingMatch = trimmed.match(/^(#{1,4})\s+(.*)$/);
    if (headingMatch) {
      closeLists();
      const level = headingMatch[1].length;
      parts.push(`<h${level}>${renderInline(headingMatch[2])}</h${level}>`);
      continue;
    }

    if (/^---+$/.test(trimmed) || /^\*\*\*+$/.test(trimmed)) {
      closeLists();
      parts.push("<hr>");
      continue;
    }

    const orderedMatch = trimmed.match(/^\d+\.\s+(.*)$/);
    if (orderedMatch) {
      if (!inOl) {
        closeLists();
        parts.push("<ol>");
        inOl = true;
      }
      parts.push(`<li>${renderInline(orderedMatch[1])}</li>`);
      continue;
    }

    const unorderedMatch = trimmed.match(/^[-*]\s+(.*)$/);
    if (unorderedMatch) {
      if (!inUl) {
        closeLists();
        parts.push("<ul>");
        inUl = true;
      }
      parts.push(`<li>${renderInline(unorderedMatch[1])}</li>`);
      continue;
    }

    const quoteMatch = trimmed.match(/^>\s?(.*)$/);
    if (quoteMatch) {
      if (!inQuote) {
        closeLists();
        parts.push("<blockquote>");
        inQuote = true;
      }
      parts.push(`<p>${renderInline(quoteMatch[1])}</p>`);
      continue;
    }

    closeLists();
    parts.push(`<p>${renderInline(trimmed)}</p>`);
  }

  closeLists();

  return parts
    .join("\n")
    .replace(/__CODE_BLOCK_(\d+)__/g, (_, index) => codeBlocks[Number(index)]);
}

function renderInline(text) {
  return escapeHtml(text)
    .replace(/`([^`]+)`/g, "<code>$1</code>")
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
    .replace(/\*([^*]+)\*/g, "<em>$1</em>")
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noreferrer">$1</a>');
}

function escapeHtml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function cycleDoc(direction) {
  const chapter = chapters[state.chapterIndex];
  const max = chapter.docs.length;
  state.docIndex = (state.docIndex + direction + max) % max;
  loadCurrentDoc();
}

prevDoc.addEventListener("click", () => cycleDoc(-1));
nextDoc.addEventListener("click", () => cycleDoc(1));

renderChapterDial();
renderChapter();
loadCurrentDoc();
