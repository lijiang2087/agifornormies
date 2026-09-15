export type Topic = {
  slug: string;
  label: string;
  note: string;
  image?: string;
  imageAlt?: string;
  analogy: string[];
  questions: {
    question: string;
    paragraphs: string[];
  }[];
};

export const topics: Topic[] = [
  {
    slug: "data",
    label: "Data",
    note: "Examples to learn from",
    image: "/illustrations/data.png",
    imageAlt:
      "An illustrated woman in a park pointing at two dogs, with printed photos on a bench.",
    analogy: [
      "You don't teach a kid what a dog is by reading them a definition. You point at one, then another, then a cat, and after enough pointing they just know. A machine needs the same thing, only more of it. That pile of examples is data.",
      "In 2009 a Stanford group led by Fei-Fei Li released ImageNet. People looked at pictures and typed what they saw. In 2012 a system trained on ImageNet won the year's photo-recognition contest by a wide margin. Speech products moved the same way, on thousands of hours of recorded talk with transcripts, instead of someone writing sound rules by hand.",
    ],
    questions: [
      {
        question: "Why not just write the rules?",
        paragraphs: [
          "Rules were hard to scale because researchers needed to write a rule for every situation that counted as that object. Fei-Fei Li's bet was to label millions of photos instead.",
        ],
      },
      {
        question: "What if the training data is wrong?",
        paragraphs: [
          "The Times sued OpenAI because ChatGPT would reproduce Times articles almost verbatim. GitHub Copilot would complete licensed functions from public repos a person was not free to copy. Getty went after the image models for scraping its archive. If a general model hasn't been trained on your data, it guesses, and those guesses are hallucinations.",
        ],
      },
      {
        question: "Who decides what goes into the training data?",
        paragraphs: [
          "A lot of the text under ChatGPT comes from Common Crawl, a public copy of the web, including pages nobody offered as training data. Time reported in 2023 that contractors in Kenya, working through Sama, an SF firm, labeled sexual abuse, hate, and violence so OpenAI could teach the model what not to say. They were paid about two dollars an hour.",
        ],
      },
    ],
  },
  {
    slug: "learning",
    label: "Learning",
    note: "Getting better from examples",
    image: "/illustrations/learning.png",
    imageAlt:
      "An illustrated man practicing free throws, with missed basketballs on the court.",
    analogy: [
      "Imagine you are playing basketball. You take a shot and miss. You can feel how far off you were, so you adjust the next one. After enough of those adjustments, the shot starts to feel like a habit. Learning is that same loop, run on examples until the machine gets less wrong.",
      "The 2012 vision contest was a public proof: a deep stack, trained this way on ImageNet, won by a wide margin. After 2017 a lot of practice stopped needing a person to name every item. A system could train on a scrape of the public web by predicting missing words in sentences, and then adjusting when it was wrong.",
    ],
    questions: [
      {
        question: "How do you know it learned, not memorized?",
        paragraphs: [
          "You can check whether a system learned, rather than memorized, by testing it on questions it never practiced on. Researchers later found grade-school math problems from a supposed hidden test sitting in the same web dumps the models had trained on. A high score can just mean it had already seen the answers, which is why METR keeps private software tasks instead of trusting a public leaderboard.",
        ],
      },
      {
        question: "Why did this only take off recently?",
        paragraphs: [
          "The method of learning from a mistake by sending it back through the layers is from the 1980s. AlexNet won in 2012 because graphics chips could run that process on ImageNet. In 2017, transformers made the same process cheap enough to run on text.",
        ],
      },
      {
        question: "What is the second practice pass for?",
        paragraphs: [
          "The web scrape teaches what usually comes next. In 2022 OpenAI practiced on instructions and on answers people ranked. ChatGPT came out of that second pass, which is why it follows a request and refuses some of them.",
        ],
      },
    ],
  },
  {
    slug: "neural-networks",
    label: "Neural networks",
    note: "Patterns built in layers",
    image: "/illustrations/neural-networks.png",
    imageAlt:
      "An illustrated woman placing envelopes into stacked apartment mail slots.",
    analogy: [
      "A neural network is a stack of very simple pattern-finders. Each layer notices something a bit more abstract than the last: an edge, then a shape, then something that looks like a face. Nobody draws those features by hand. They come out of the examples during learning.",
      "Stacks like this existed in the 1980s and stalled, because the miss faded as it went backward. The 2012 image-contest winner was a deeper stack that could actually be trained on ImageNet, with graphics chips. In 2015 extra wires that let the miss jump over layers made fifty- and hundred-layer stacks trainable. In 2017, attention let every word look at every other word in one step, which is what made language models affordable to grow.",
    ],
    questions: [
      {
        question: "Why not one giant layer?",
        paragraphs: [
          "The same small detector for an eye can run everywhere in a photo. That reuse is why AlexNet even fit on the graphics chips of 2012. A giant layer on raw pixels was the older idea, and it ran out of memory. In 2015, extra connections between layers made it possible to train stacks that were fifty layers deep.",
        ],
      },
      {
        question: "What does a layer actually do?",
        paragraphs: [
          "Each unit adds up weighted inputs, then bends the total so it is not just a straight line. That bend is what lets later layers build a face from edges. Because the stack is smooth, a miss at the end can still change the early layers.",
        ],
      },
      {
        question: "What did attention change?",
        paragraphs: [
          "The older language stacks read a sentence left to right and forgot the beginning. In 2017, Ashish Vaswani and colleagues at Google published 'Attention Is All You Need': every word looks at every other word in one step. That design is the transformer, and it is why you could grow a language model on a scrape of the web.",
        ],
      },
    ],
  },
  {
    slug: "language-models",
    label: "Language models",
    note: "Predicting what comes next",
    image: "/illustrations/language-models.png",
    imageAlt:
      "An illustrated woman in a cafe finishing a friend's sentence.",
    analogy: [
      "A language model is a machine that has seen so much text that it got good at guessing the next word. That habit packs a lot of the world's writing into one place. If you can guess what usually comes next, you can draft, summarize, translate, and answer questions.",
      "Around 2018 to 2020, attention, word pieces, and a scrape of the public web produced systems that could finish a paragraph, translate, and emit code-shaped text from that one habit. The chat products that landed in 2022 used the same engine after a narrower practice pass: follow instructions, decline some requests, prefer answers people ranked as better.",
    ],
    questions: [
      {
        question: "Why does guessing the next word write an email?",
        paragraphs: [
          "The public web is full of email, memos, and Stack Overflow. OpenAI's 2020 model could already finish a paragraph in those shapes. ChatGPT, in 2022, was the same engine after a pass of follow this request. You type, and it keeps guessing pieces until a reply has been assembled.",
        ],
      },
      {
        question: "Why does it invent facts?",
        paragraphs: [
          "In 2023 a New York lawyer, Steven Schwartz, filed a brief with fake case citations ChatGPT had invented. The model was guessing a fluent next sentence.",
        ],
      },
      {
        question: "How much can it keep in mind at once?",
        paragraphs: [
          "Labs now advertise windows of hundreds of thousands of words. Cursor still asks for a notes file in the repo, because stuffing four hundred files into every question is slow, expensive, and still drops the constraint from last quarter. A decision from last month is not in there unless someone wrote it down.",
        ],
      },
    ],
  },
  {
    slug: "reasoning",
    label: "Reasoning",
    note: "Working through hard problems",
    image: "/illustrations/reasoning.png",
    imageAlt:
      "An illustrated man assembling a wooden chair from a paper diagram, with leftover pieces beside him.",
    analogy: [
      "Predicting the next word is fast. Reasoning is when the system takes extra steps: scratch work, checking, trying another path. Some problems are not in the first guess, so the system needs extra time.",
      "Chess and go programs got stronger, with the same trained evaluation, when they thought longer at move time and searched among futures. In 2022, asking a language model to show its working often helped on math and logic, because the extra text became notes the next guess could read. Labs now treat how long a system thinks as something you pay for.",
    ],
    questions: [
      {
        question: "Is a long answer the same as thinking?",
        paragraphs: [
          "In 2022, Jason Wei and colleagues at Google showed that writing out the working, with a few worked examples in the prompt, lifted scores on math and logic. The extra words were notes the next guess could read. If you never run the program or open the cited page, the long answer can still be wrong.",
        ],
      },
      {
        question: "Why does thinking longer cost more?",
        paragraphs: [
          "In 2024 the labs started selling extra thinking time as a product. The machine is still producing pieces of text, some of them hidden. More steps means more computer time after you ask, and more waiting.",
        ],
      },
      {
        question: "When does extra time not help?",
        paragraphs: [
          "François Chollet's little games stayed near zero in an ordinary chat, no matter how long the reply. The jump in 2026 came when the setup kept private notes between turns.",
        ],
      },
    ],
  },
  {
    slug: "memory",
    label: "Memory",
    note: "What you keep for later",
    image: "/illustrations/memory.png",
    imageAlt:
      "An illustrated woman at a desk copying a few keepers from a messy pile of papers into a small notebook.",
    analogy: [
      "Scratch work on a napkin is for this problem. A notebook is for the next one. If you throw the napkin away, tomorrow you start from zero. Memory is the notes you keep on purpose for later.",
      "Early chat systems lost the thread once the box filled and greeted you like a new person. Teams first crammed more text into the question. That helped for a file you had open. It did not help for a decision made last month. What coding assistants actually shipped is files the model can read and write across sessions: a note about the project, a list of commands that already broke, a short brief a person left for it.",
    ],
    questions: [
      {
        question: "Why not just a bigger window?",
        paragraphs: [
          "Google and others advertised windows of a million words. The demo is a fact planted in a long file, which the model can find. A real repo is four hundred files and one constraint from last quarter. Cursor still makes you keep a notes file because stuffing the repo into every question is slow, expensive, and still misses the constraint.",
        ],
      },
      {
        question: "Is fetching a wiki page memory?",
        paragraphs: [
          "Glean and Notion will pull a few wiki pages into the question before answering. That is a guess about which page matters. If two pages disagree, or the decision lived in a meeting, the answer can still be wrong.",
        ],
      },
      {
        question: "Why does it still get last month wrong?",
        paragraphs: [
          "ChatGPT Memory, launched in 2024, writes a profile from the chat. It keeps a plan you abandoned unless you delete it. A notes file in Cursor has the same rot the day the API changes.",
        ],
      },
    ],
  },
  {
    slug: "tools",
    label: "Tools",
    note: "Looking up, calculating, acting",
    image: "/illustrations/tools.png",
    imageAlt:
      "An illustrated woman kneeling at a wall of hardware drawers, matching a metal part.",
    analogy: [
      "A model that only talks is stuck inside its training data. Tools let it look something up, run a calculation, or take an action in another program. That is how you go from recalling a number to checking it, or from describing a calendar invite to actually sending one.",
      "Search engines have done a cousin of this for years: a ranker that queries an index instead of memorizing the web. Around 2022 and 2023, language products started emitting a structured request, waiting for a real result, and continuing. Assistants that book travel or write code only work if that round trip is reliable.",
    ],
    questions: [
      {
        question: "Why not just memorize the world?",
        paragraphs: [
          "In February 2024 a British Columbia tribunal held Air Canada to a bereavement fare its chatbot had invented. The policy page was sitting on the company's own site. The model answered from training instead of looking up the page.",
        ],
      },
      {
        question: "What happens when it skips the lookup?",
        paragraphs: [
          "Copilot will invent an import that looks like a real package and is not on the registry.",
        ],
      },
      {
        question: "What if it can change production?",
        paragraphs: [
          "In July 2025 a Replit coding agent deleted a company's production database during a freeze, then said the data could not be restored. Jason Lemkin rolled it back anyway.",
        ],
      },
    ],
  },
  {
    slug: "agents",
    label: "Agents",
    note: "Choosing and finishing steps",
    image: "/illustrations/agents.png",
    imageAlt:
      "An illustrated man carrying a package and a checklist toward a door.",
    analogy: [
      "An agent is a model that does not stop at one reply. It chooses a next step, maybe uses a tool, looks at what happened, and continues until the job is done or it should quit.",
      "In 2023, a wave of loops could browse, click, and write files. A refund, a deploy, or a coding task can fail on step twelve and still narrate success. Software engineering became the test bed because the world already has checks: tests, compilers, the list of changed lines.",
    ],
    questions: [
      {
        question: "Why do long jobs fall apart?",
        paragraphs: [
          "AutoGPT, in 2023, would loop on a to-do list and narrate progress until the bill stacked up. Each miss becomes the input for the next step. Even strong agents still fail a lot of real GitHub issues.",
        ],
      },
      {
        question: "Why is code easier than booking a flight?",
        paragraphs: [
          "Software tickets come with tests. OpenAI and Anthropic shipped coding agents in 2025 and 2026 into that world. A desktop booking has no test that you chose the refundable fare, which is why the computer-use demos still stall on travel.",
        ],
      },
      {
        question: "How does it know when to stop?",
        paragraphs: [
          "Someone gives it a budget of steps, a dollar cap, and a condition for quitting. AutoGPT did not have a good stopping rule. Codex and Claude in 2026 run in a hosted sandbox with a time limit so the loop cannot spend the weekend. Labs now collect traces of whole jobs, plus human judgments of which traces were actually good.",
        ],
      },
    ],
  },
  {
    slug: "harnesses",
    label: "Harnesses",
    note: "The setup that keeps agents useful",
    image: "/illustrations/harnesses.png",
    imageAlt:
      "An illustrated man arranging labeled jars and tools on a kitchen counter.",
    analogy: [
      "A harness is the setup around the model: the files it can read, the tools it may use, the tests it has to pass, and the person it should ask before it does something irreversible.",
      "Coding assistants that work well are usually a modest model wrapped in a tight loop: a map of the project, a short list of allowed commands, a test runner, retries, and a place to keep notes across steps. In September 2026 the ARC Prize ran the same system two ways on François Chollet's little games. When it could only keep notes the model chose to write down, the score was about 63 percent. When the setup kept private notes between turns, it was about 100 percent.",
    ],
    questions: [
      {
        question: "Is a better setup the same as a smarter model?",
        paragraphs: [
          "Paste a function into ChatGPT and it will rewrite that function. Open the same repo in Cursor and it can search the project, run tests, and write a notes file. A lot of what feels like a smarter model is that permission.",
        ],
      },
      {
        question: "Why did that puzzle score jump?",
        paragraphs: [
          "The games were as hard as they were in March. What changed is that the setup kept private notes between turns. The ARC Prize foundation published both scores and said they were not calling the high one AGI.",
        ],
      },
      {
        question: "What should you not hand it?",
        paragraphs: [
          "The Replit agent that dropped a production database had the keys. Codex and Claude's computer-use products in 2026 run in a fenced sandbox for that reason. A command line on your laptop with production secrets is a product decision.",
        ],
      },
    ],
  },
  {
    slug: "senses",
    label: "Senses",
    note: "Pictures, sound, and screens",
    image: "/illustrations/senses.png",
    imageAlt:
      "An illustrated woman in a kitchen watching a pot simmer while a small radio plays.",
    analogy: [
      "You can read that the soup is ready, and you can also see the steam and hear it simmer. A machine that only reads is like a friend who only takes phone calls. It misses what is happening in the room.",
      "For a long time, seeing and hearing were their own industries. In the early 2020s that wall came down. Teams trained the same family of next-piece habits on captions next to pictures, and on thousands of hours of recorded talk. You could paste a photo into a chat and ask a question. A screenshot is just a picture of software, which is how an agent starts to work on a desktop.",
    ],
    questions: [
      {
        question: "Why is a screenshot enough to use software?",
        paragraphs: [
          "In late 2024 Anthropic showed Claude looking at a desktop and clicking. OpenAI's Codex, by 2026, does the same in the background while you keep working. A screenshot is a picture of software, and clicking only works if the look is good enough to find the button.",
        ],
      },
      {
        question: "Why does it invent text that isn't in the photo?",
        paragraphs: [
          "Pictures that came with captions taught the system to describe a scene. Invoice tools still invent line items that are not on the page. The model will also invent a button label on a grayed-out Save, because it is describing a UI it has seen in training, not the pixels in front of it.",
        ],
      },
      {
        question: "Why is a kitchen still harder than a studio?",
        paragraphs: [
          "OpenAI's Whisper was trained on internet video audio. A Zoom call with two people talking over each other is still where meeting notes invent commitments nobody made.",
        ],
      },
    ],
  },
  {
    slug: "robotics",
    label: "Robotics",
    note: "Intelligence with hands and sensors",
    image: "/illustrations/robotics.png",
    imageAlt:
      "An illustrated man in a greenhouse watering plants while carefully holding a glass vase.",
    analogy: [
      "Robotics is the same story with a body. Looking at the glass is not enough. You have to hold it without knocking it over. The world does not pause for a retry the way a chat box does.",
      "Warehouse picking and factory arms already work inside cages designed for them. Homes do not work that way, because homes were not designed as factories. Teams that skip the jump from a simulated kitchen to a real one end up with a video. Teams that pay for that jump end up with a product in a narrow cell.",
    ],
    questions: [
      {
        question: "Why did language pull so far ahead?",
        paragraphs: [
          "Text on the web is free to collect. Picking up a glass without knocking it over costs time, hardware, and sometimes the glass. Vision and language trained on what the web was already making. You cannot collect a billion hours of physical contact the same way.",
        ],
      },
      {
        question: "Why isn't there a household robot yet?",
        paragraphs: [
          "Waymo can drive Market Street because the streets are mapped and the sensors are the product. Figure put humanoid robots in BMW's Spartanburg plant, loading sheet metal on the X3 line, in a cell the plant already designed.",
        ],
      },
      {
        question: "What does simulation miss?",
        paragraphs: [
          "Simulation misses friction, lighting, a mug that is ten grams heavier, and a table that was not in the renderer. Video of people doing chores does not include the feeling of contact. Remote driving is slow and rare. Teams that skip the jump from a simulated kitchen to a real one end up with a video. Teams that pay for that jump end up with an arm in one cell.",
        ],
      },
    ],
  },
  {
    slug: "agi",
    label: "AGI",
    note: "Work at the level of a person",
    image: "/illustrations/agi.png",
    imageAlt:
      "An illustrated park with a few families: kids, parents, and an older couple on a quiet path.",
    analogy: [
      "AGI is a term that has been used by people for a machine that can do many kinds of intellectual work at the level of a person, without being rebuilt for each new job.",
      "OpenAI's Codex can operate a computer in the background: it sees the screen, clicks, and types with its own cursor while you keep working. In September 2026 the company opened that loop to other developers, so a long job can run in a hosted sandbox, write files, and keep going after you step away.",
      "The same month, Anthropic let its assistant open apps, click, and type in background windows, in Cowork and in its coding product. It can compile a program, launch it, click through the buttons, and take a screenshot, in the same sitting.",
    ],
    questions: [
      {
        question: "How close are we to AGI?",
        paragraphs: [
          "In January 2026, Nature published Humanity's Last Exam, put together by Dan Hendrycks at the Center for AI Safety and a team at Scale. About a thousand experts wrote 2,500 questions meant to stump a machine that has already read the internet. When the exam appeared in 2025, the best systems scored in the single digits. By September 2026 the best score on Scale's official board is about 55 percent, and some independent reruns sit a few points higher. Hendrycks has pointed to an earlier math contest he released in 2021, which went from under 10 percent to over 90 in three years.",
          "François Chollet's ARC Prize asks whether a system can invent the rules of a situation it has not seen, the way a person sits down to an unfamiliar game. In March 2026 the third version put systems into tiny worlds with no instructions. People solved every environment. The best machines scored under 1 percent. By September 2026 one lab's system scored about 63 percent when it could only keep notes it chose to write down, and about 100 percent when the setup kept private notes between turns.",
          "In 2025 a Berkeley group called METR began measuring how long a software job can be before an agent fails it, timing each job by how long a human expert would need. By September 2026 the jobs a system finishes half the time have stretched from minutes into hours, and some measurements now reach 16 hours. Finishing those jobs eight times out of ten still happens on much shorter tasks. METR says numbers above 16 hours are not trustworthy on the current tasks, which are clean programming problems.",
        ],
      },
      {
        question: "Is that AGI?",
        paragraphs: [
          "That is not AGI. Dan Hendrycks's paper says a high score on Humanity's Last Exam is expert answers to closed questions. After a system reached about 100 percent on François Chollet's games, when the setup kept its notes between turns, the foundation that runs the prize said the jump was real and they were still not calling it AGI.",
        ],
      },
    ],
  },
];

export function getTopic(slug: string) {
  return topics.find((topic) => topic.slug === slug);
}

export function getTopicIndex(slug: string) {
  return topics.findIndex((topic) => topic.slug === slug);
}
