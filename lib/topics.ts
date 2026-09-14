export type Topic = {
  slug: string;
  label: string;
  note: string;
  image?: string;
  imageAlt?: string;
  analogy: string[];
  concept: {
    title: string;
    paragraphs: string[];
  };
  talk: {
    title: string;
    paragraphs: string[];
  };
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
      "You don't teach a kid what a dog is by reading them a definition. You point at one, then another, then a cat, and after enough pointing they just know.",
      "A machine needs the same thing, only more of it. That pile of examples is data. We use it because the real world has too many cases to write down as rules.",
    ],
    concept: {
      title: "The pile is a curriculum",
      paragraphs: [
        "The pointing only works if someone decided which examples count. A person looks at a picture and types dog. Do that a million times and you have a lesson plan. Some writing skips the typing, because the next word is already sitting there in the sentence, waiting to be guessed.",
        "What you gather, name, copy, and skip is the curriculum. Leave out a kind of dog, a language, or a kind of work, and the habit will have a hole there.",
      ],
    },
    talk: {
      title: "Different jobs waited on different piles",
      paragraphs: [
        "The last fifteen years of progress are easier to read as a sequence of piles than as a sequence of formulas. In 2009 a Stanford group led by Fei-Fei Li released a huge labeled photo set, ImageNet. The work was people looking at a picture and typing what they saw. In 2012 a deep stack trained on that set won the year's recognition contest by a wide margin. Similar stacks had existed; what had not was a shared, labeled sample of the visual world.",
        "After photos, other jobs waited on their own piles. Speech recognition moved when teams trained on thousands of hours of recorded talk with transcripts, instead of writing sound rules by hand. Translation moved on millions of sentence pairs from parliaments, websites, and books. Search companies trained on clicks. In each case the algorithm was hungry. Coverage of the actual job arrived late.",
        "Chat systems sit on a scrape of public writing, plus smaller, expensive piles on top: people ranking two answers, people showing a tool call, traces of real work. In practice you are debugging a curriculum. Rights, duplication, leftover test items leaking into practice, and whole slices of life the pile never contained explain more production failures than a missing equation.",
      ],
    },
  },
  {
    slug: "learning",
    label: "Learning",
    note: "Getting better from examples",
    image: "/illustrations/learning.png",
    imageAlt:
      "An illustrated man practicing free throws, with missed basketballs on the court.",
    analogy: [
      "You try a shot, miss, feel how far off it was, and nudge. Do that enough times and the shot starts to feel like a habit. Learning is that loop, run on the pile until the machine gets less wrong.",
    ],
    concept: {
      title: "The miss has to become a nudge",
      paragraphs: [
        "Inside the machine, a huge set of numbers only means something because practice shoved them around. On each example a score says how far off the guess was, and those numbers move a little in the direction that would have helped.",
        "The habit has to work on a shot it has never taken. That is why you hold out a test set and never practice on it. If the homework is perfect and the hidden test is bad, the machine memorized the pile. If the hidden test improves, a skill showed up.",
      ],
    },
    talk: {
      title: "An old loop, run at a new scale",
      paragraphs: [
        "Sending the miss backward through a stack of simple functions, and walking the knobs downhill, is 1980s mathematics. What changed is doing that loop on millions of examples, in small random batches, on chips that can do many multiply-and-add steps at once, the same family of chips that draw video games. Image classifiers, speech recognizers, and translation systems all used this loop. The 2012 vision contest was one public proof. Speech and translation had quieter industrial proofs in the same decade.",
        "After 2017 a lot of practice stopped needing a person to name every item. Hide a word, guess it, nudge. That is how a scrape of the public web became a practice set for language. A second, smaller practice pass is now common: take the general next-word habit and practice on instructions, on code, or on answers people ranked as better. How the chat actually talks is mostly carved in that second pass. The first pass is where the world got compressed.",
        "Once a leaderboard's questions leak into practice, the score stops meaning what you think. The same loop that grows skill will memorize a contest if you let it. Teams that ship keep a private test on the actual job, real tickets, real recordings, the ugly cases, and they wait for that private test to move before they trust a jump on a public chart.",
      ],
    },
  },
  {
    slug: "neural-networks",
    label: "Neural networks",
    note: "Patterns built in layers",
    image: "/illustrations/neural-networks.png",
    imageAlt:
      "An illustrated woman placing envelopes into stacked apartment mail slots.",
    analogy: [
      "A neural network is a stack of very simple pattern-finders. Each layer notices something a bit more abstract than the last: an edge, then a shape, then something that looks like a face.",
      "Nobody draws those features by hand. Learning is what carves them, layer by layer, out of the examples.",
    ],
    concept: {
      title: "Depth is reuse",
      paragraphs: [
        "Each layer is a pile of tiny weighted sums pushed through a simple curve, so huge values get squashed into a limited range. That curve is what lets the stack represent folds and corners, including the ones a straight line cannot. Because the whole stack is smooth enough, a miss at the end can be turned into a small nudge at every knob.",
        "Later layers get to reuse earlier work. The first layer can spend its knobs on ink strokes. The next layer can spend them on letters. A single flat layer would have to learn face as one giant lookup, which wastes knobs and needs even more examples.",
      ],
    },
    talk: {
      title: "The hard part was actually training them",
      paragraphs: [
        "Stacks like this existed in the 1980s and 1990s. They stayed shallow because the miss signal faded as it went backward, and because computers were small. The 2012 image-contest winner was a deeper stack that could actually be trained on a huge labeled photo set, with a few training methods and graphics chips. In 2015 skip paths, extra wires that let the miss jump over layers, made fifty- and hundred-layer stacks trainable. That is when vision systems stopped being a committee of hand-built detectors.",
        "Sequences had a different stall. Reading a sentence left to right and trying to remember the beginning does not scale. In 2017, attention let every word look at every other word in one step and decide what matters for this prediction. That wiring is what made language models affordable to grow. For images, an earlier version of the same idea was sharing knobs across positions so a detector for an eye can run everywhere in the photo.",
        "The finding was wirings where a mountain of knobs can be moved by practice without stalling. Skip paths keep the miss alive. Sharing knobs cuts the count. Graphics chips make the multiply-and-add cheap enough to run overnight instead of over a career.",
      ],
    },
  },
  {
    slug: "language-models",
    label: "Language models",
    note: "Predicting what comes next",
    image: "/illustrations/language-models.png",
    imageAlt:
      "An illustrated woman in a cafe finishing a friend's sentence.",
    analogy: [
      "A language model is a machine that has seen so much text that it got good at guessing the next word. That habit packs a lot of the world's writing into one place.",
      "If you can guess what usually comes next, you can draft, summarize, translate, and answer questions.",
    ],
    concept: {
      title: "What usually follows",
      paragraphs: [
        "Text is chopped into pieces, whole words when they are common, fragments when they are not, and the model learns the chance of the next piece given the pieces so far. Do that across enough writing and you have quietly stored tone, code shape, how people argue, and a fog of facts. The facts sit as traces in the habit of what usually follows.",
        "A conversation is the same habit aimed at a request. You write a question, and the model keeps guessing pieces until a reply has been assembled. Summaries and translations work because those genres already exist in the pile: people have written a lot of short versions, and a lot of the same sentence in another language.",
      ],
    },
    talk: {
      title: "The web became the practice set, and chat came later",
      paragraphs: [
        "Old language models counted pairs and triples of words and ran out of memory. Networks that read a sentence in order and tried to carry a running summary forgot the beginning. Attention, chopping text into word pieces, and a scrape of the public web produced, around 2018 to 2020, systems that could finish a paragraph, translate, and emit code-shaped text from one next-piece habit. Hiding a word in the middle of a sentence and guessing it is cousin to guessing the next word. Guessing the next word is what you want if the product has to write.",
        "The chat products that landed in 2022 used the same engine after a narrower practice pass: follow instructions, decline some requests, prefer answers people ranked as better. That is why a next-piece guesser can hold a conversation. It was taught the genre of being a helpful correspondent. The compression of the web happened earlier, and mostly in silence.",
        "How much text it can keep in mind at once is working memory, and it is finite. If a fact was rare in the pile, the model will guess a fluent stand-in. If two phrasings conflict, the more common one wins. The failures follow the holes in the piles: a compressor of public writing, plus whatever smaller piles you paid people to write.",
      ],
    },
  },
  {
    slug: "reasoning",
    label: "Reasoning",
    note: "Working through hard problems",
    image: "/illustrations/reasoning.png",
    imageAlt:
      "An illustrated man assembling a wooden chair from a paper diagram, with leftover pieces beside him.",
    analogy: [
      "Predicting the next word is fast. Reasoning is when the system takes extra steps: scratch work, checking, trying another path.",
      "We started asking for that because some problems are not in the first guess. They need time.",
    ],
    concept: {
      title: "Spend computer time after the question",
      paragraphs: [
        "During the long practice pass, the knobs are shaped. After you ask, you can still spend more computer time by writing intermediate steps, sampling several attempts, searching, and checking. The machine is still producing pieces of text. Those pieces can be used as a scratch pad for the next guess, or thrown away if a check fails.",
        "A longer trace costs money and waiting. It can buy accuracy on problems where the first guess is a trap, including multi-step math, a bug that only shows up when you run the code, or a plan with a constraint you have to keep in mind. Extra room to work is what you are buying. Whether the answer is true still depends on whether those steps get checked.",
      ],
    },
    talk: {
      title: "Thinking longer is an old idea that language just inherited",
      paragraphs: [
        "Chess and go programs got stronger, with the same trained evaluation, when they thought longer at move time and searched among futures. In 2022, asking a language model to show its working often helped on math and logic, because the extra pieces of text became a pad the next guess could read. Teams then trained models to prefer longer, more useful traces, and to spend a budget of steps that the user is, in effect, buying.",
        "That is a new scaling story alongside more knobs and more examples. You can keep the trained system fixed and buy accuracy with search at answer time. Labs now treat how long a system thinks as a product knob. The research argument is which extra steps actually change the answer, and which ones are padding that looks like care.",
        "A fluent working trace can still be wrong. If you never check the arithmetic, never run the program, and never open the cited page, you have bought the look of thinking. Systems that hold up tie the extra steps to a check: a test suite, a second scoring model, a calculator, or a page from a source of record.",
      ],
    },
  },
  {
    slug: "memory",
    label: "Memory",
    note: "What you keep for later",
    image: "/illustrations/memory.png",
    imageAlt:
      "An illustrated woman at a desk copying a few keepers from a messy pile of papers into a small notebook.",
    analogy: [
      "Scratch work on a napkin is for this problem. A notebook is for the next one. If you throw the napkin away, tomorrow you start from zero.",
      "Someone who forgets the conversation every time you leave the room can still be sharp for ten minutes, and still struggle with a job that takes a week. Memory is what you keep on purpose.",
    ],
    concept: {
      title: "Working memory fills up",
      paragraphs: [
        "In one sitting, a model can only keep so much in mind at once: the question, the last few pages of the chat, maybe a file you pasted. That working memory is expensive, it fills up, and the oldest part falls off the front. A lasting note is different. Someone, or the model itself, writes down the keepers, including the project's names, what already failed, the decision from Tuesday, or a page worth fetching later.",
        "The skill is choosing. If you stuff everything into the current window, you pay for it on every question and you still forget. If you write nothing down, every session is a stranger. Good memory is a small, edited pile the system can read and update.",
      ],
    },
    talk: {
      title: "Forgetting was the default until notes became part of the product",
      paragraphs: [
        "Early chat systems lost the thread once the box filled. The beginning vanished, and the model greeted you like a new person. Teams first treated that as a window-size problem and crammed more text into the question. That helped for a file you had open. It did not help for a decision made last month.",
        "The next move was to fetch. Before answering, the system pulls a few pages from a private pile that might be relevant, a company wiki, a folder of contracts, last week's tickets, and pastes them into the question. That is a lookup with a guess about what matters. It fails when the guess is wrong, when two pages disagree, or when the pile was never written down in the first place.",
        "What coding assistants actually shipped is files the model can read and write across sessions: a note about the project, a list of commands that already broke, a short brief a person left for it. Long jobs need that file, not a stuffed window and not a one-time search. Common misses include treating last month's fact as still true, writing notes it never opens, or remembering the mood of a meeting and none of the constraints.",
      ],
    },
  },
  {
    slug: "tools",
    label: "Tools",
    note: "Looking up, calculating, acting",
    image: "/illustrations/tools.png",
    imageAlt:
      "An illustrated woman kneeling at a wall of hardware drawers, matching a metal part.",
    analogy: [
      "A model that only talks is stuck inside its training pile. Tools let it look something up, run a calculation, or take an action in another program.",
      "That is how you go from recalling a number to checking it, or from describing a calendar invite to actually sending one.",
    ],
    concept: {
      title: "A door into another program",
      paragraphs: [
        "A tool is a door into another program: a search index, a calculator, a calendar, a code runner, or a browser. The model decides when to knock, what to ask, and how to read what comes back. Then it keeps writing, now with evidence that did not have to live in the knobs.",
        "This only works if the door has a contract: a name, a shape for the request, a shape for the reply, and a way to fail. The skill being learned is when to look something up, whether that is yesterday's price, a sum you should not do in your head, or a file you should open rather than invent.",
      ],
    },
    talk: {
      title: "Calling out is now part of the skill",
      paragraphs: [
        "Search engines have done a cousin of this for years: a ranker that queries an index instead of memorizing the web. Around 2022 and 2023, language products started emitting a structured request, waiting for a real result, and continuing. Assistants that book travel or write code only work if that round trip is reliable. Retrieval into a private corpus is the same pattern pointed at a company's own files.",
        "You need traces of when to look something up, how to recover from a broken reply, and how not to skip the lookup because a confident sentence is cheaper. Common misses include answering from memory about a number that changes, calling a tool and ignoring the result, or asking the door for something it cannot do and then describing a success that did not happen.",
        "In production the contract is the product. Timeouts, permissions, and error strings are part of the model's world. If the door is messy, the model looks lost. If the door is too open, it can email a customer or drop a database.",
      ],
    },
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
    ],
    concept: {
      title: "A loop with a stopping rule",
      paragraphs: [
        "The pieces are ordinary: a model, a set of tools, a memory of the current task, a budget of steps, and a condition for quitting. Each observation becomes the next input, which is why errors compound.",
        "Almost nobody has a labeled pile of the right forty-step plan for a messy job, so agents are often taught from traces of whole attempts, plus a judgment of whether the attempt actually finished the work. Scoring a whole job is harder than scoring a single label on a photo. The system can sound done and still have failed in the middle.",
      ],
    },
    talk: {
      title: "Long jobs are a different kind of problem",
      paragraphs: [
        "In 2023, a wave of loops could browse, click, and write files. A refund, a deploy, or a coding task can fail on step twelve and still narrate success. Compounding error is the central math, even if the per-step model looks strong.",
        "Software engineering became the test bed because the world already has checks: tests, compilers, the list of changed lines. An agent that has to operate a desktop is harder. The screen is messy, and there is no automatic test for booking the right flight.",
        "What labs now collect are traces of whole jobs, plus human judgments of which traces were actually good. Memory of the task, a step budget, and a willingness to stop matter because the error rate multiplies with the length of the job, and the checks are what keep that loop useful.",
      ],
    },
  },
  {
    slug: "harnesses",
    label: "Harnesses",
    note: "The setup that keeps agents useful",
    image: "/illustrations/harnesses.png",
    imageAlt:
      "An illustrated man arranging labeled jars and tools on a kitchen counter.",
    analogy: [
      "A harness is the setup around the model: the files it can read, the tools it may use, the tests it has to pass, and the person it should ask before doing something sharp.",
    ],
    concept: {
      title: "The setup is the product",
      paragraphs: [
        "The same model in a different harness behaves differently. One setup can read the project, run tests, show you the changed lines, and retry a failed command. Another can only chat. Users feel that gap as intelligence, even though a lot of it is permission, memory, and checks.",
        "The tests have to follow the actual job. Last quarter's invoices, a project with local conventions, and a customer who does not talk like the public web almost never match the mix in the practice set. A harness that only passes a clean exam will look sharp in a notebook and fail on the real mix.",
      ],
    },
    talk: {
      title: "When engines look similar, the setup is the competition",
      paragraphs: [
        "Coding assistants that feel magic are usually a modest model wrapped in a tight loop: a map of the project, a short list of allowed commands, a test runner, retries, and a place to keep notes across steps. Teams now spend as much engineering on that loop as on training. Two products can call similar engines and feel unlike each other because one of them can see the project files and the other is guessing from a pasted snippet.",
        "In September 2026 the ARC Prize made that gap public. François Chollet's third set of little games, launched in March with people at 100 percent and machines under 1 percent, was run two ways on the same system. When the wrapper could only keep notes the model chose to write down, the score was about 63 percent. When the wrapper kept the model's private scratch work between turns, it was about 100 percent.",
        "Job-level contests are still thin, which is why harness teams obsess over private suites: real tickets, real failing tests, traces of the agent going off the rails. Those suites are the curriculum. If you do not keep them, a version bump of the engine will fool you. Permissions, a fenced-off machine, rate limits, and a human gate on irreversible actions are part of the product. The model will try what the harness allows.",
      ],
    },
  },
  {
    slug: "senses",
    label: "Senses",
    note: "Pictures, sound, and screens",
    image: "/illustrations/senses.png",
    imageAlt:
      "An illustrated woman in a kitchen watching a pot simmer while a small radio plays.",
    analogy: [
      "You can read that the soup is ready, and you can also see the steam and hear it simmer. A machine that only reads is like a friend who only takes phone calls. It misses the room.",
    ],
    concept: {
      title: "One habit, more than one kind of input",
      paragraphs: [
        "Pictures and sound can be chopped into pieces the same way text is, then practiced with the same loop: guess the next piece, score the miss, nudge the knobs. A photo becomes a grid of patches. A recording becomes a sequence of little slices of air. After that, they can live in the same stack that already learned language.",
        "The useful move is a shared space, so the word dog and a picture of a dog can be nudged toward each other, and a question written in English can point at a pixel. Screens count too. A screenshot is just a picture of software. If the model can look, it can work on a desktop, a chart, a whiteboard photo, or a slide.",
      ],
    },
    talk: {
      title: "Eyes and ears were separate products until they joined the same stack",
      paragraphs: [
        "For a long time, seeing and hearing were their own industries. Image contests labeled photos. Speech products turned talk into transcripts. They did not share a brain with the system that wrote email. In the early 2020s that wall came down. Teams trained the same family of next-piece habits on captions scraped next to pictures, and on thousands of hours of recorded talk. You could paste a photo into a chat and ask a question, or drop in a meeting and get notes. It was mostly the language engine, now taking more kinds of example.",
        "The cheap pile, again, decided the shape of the skill. Pictures that came with captions taught the system to describe a scene. They did not teach it to read the tiny numbers on an invoice, or to notice the crack in a brake line. Studio audio taught clean speech. A noisy kitchen, two people talking over each other, or a thick accent still fails more often than a demo suggests. Agents that operate a desktop are this step in disguise: the screen is a picture, and clicking is only possible if the look is good enough.",
        "Seeing is a second curriculum, with its own holes. Common misses include inventing text that is not in the photo, describing a chart whose bars it cannot actually compare, and nodding along to audio it did not catch.",
      ],
    },
  },
  {
    slug: "robotics",
    label: "Robotics",
    note: "Intelligence with hands and sensors",
    image: "/illustrations/robotics.png",
    imageAlt:
      "An illustrated man in a greenhouse watering plants while carefully holding a glass vase.",
    analogy: [
      "Robotics is the same story with a body. Looking at the glass is not enough. You have to hold it without knocking it over.",
      "The world does not pause for a retry the way a chat box does.",
    ],
    concept: {
      title: "Each example is expensive",
      paragraphs: [
        "A photo on the internet is cheap. A grasp that knocks over the glass costs time, hardware, and sometimes the glass. You cannot scrape a billion hours of honest physical contact the way you can scrape writing.",
        "So robotics leans on substitutes, including simulation, video of people doing chores, and people remotely driving an arm. Each substitute lies in a different way: simulation is too clean, video has no contact forces, and remote driving is slow and rare. The real kitchen still has to be faced.",
      ],
    },
    talk: {
      title: "Why language ran ahead of hands",
      paragraphs: [
        "Vision and language could train on piles the web was already making; robot hours cannot. The jump from a simulated kitchen to a real one has its own failure mode: friction, lighting, a mug that is slightly heavier, a table that was not in the simulator. Teams that skip that jump have a video; teams that pay for it have a product in a narrow cell. A clean table in the lab is the practice set, and Tuesday in a home, with a different mug, is the test.",
        "Recent bets look like the language playbook: train a broad model on many kinds of video and commands, then specialize on one robot. Other bets stay closer to classical control, with maps and planned trajectories, and with learning only in the perception piece. Warehouse picking and factory arms already work inside cages designed for them. Homes do not, because homes were not designed as factories.",
        "The missing pile is diverse physical contact at scale, plus a test that is more than a demo on a clean table. Until that contact is cheap, a general household robot is a research program, and an arm that does one job in one cell is a business.",
      ],
    },
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
      "Most systems people use now are strong on some of that work and lost on the rest.",
    ],
    concept: {
      title: "The same system, pointed at different jobs",
      paragraphs: [
        "The systems in this chain already move from one kind of job to another in the same sitting. Extra steps, notes, tools, and a harness let the same trained system do that. Nobody trains a new network for each request. Some of those jobs finish in seconds. Some still fail in the middle.",
        "From inside a job, the first pass is the part that used to take a person. It now arrives from a machine that will not get fired if it is wrong, and that sounds just as sure either way. What remains is checking, and that is the part of a job that shrinks first.",
        "Some of that first-pass work used to be a person's whole job. People can adapt: they check, they take what still fails, they move into work the system does not cover. Workers whose job was that first pass still get replaced.",
      ],
    },
    talk: {
      title: "How close",
      paragraphs: [
        "In January 2026, Nature published Humanity's Last Exam, put together by Dan Hendrycks at the Center for AI Safety and a team at Scale. About a thousand experts wrote 2,500 questions meant to stump a machine that has already read the internet. When the exam appeared in 2025, the best systems scored in the single digits. By September 2026 the best score on Scale's official board is about 55 percent, and some independent reruns sit a few points higher. Hendrycks has pointed to an earlier math contest he released in 2021, which went from under 10 percent to over 90 in three years. The paper itself says a high score would mean expert answers on closed questions, and would not mean you could hand someone a life.",
        "François Chollet's ARC Prize asks whether a system can invent the rules of a situation it has not seen, the way a person sits down to an unfamiliar game. In March 2026 the third version put systems into tiny worlds with no instructions. People solved every environment. The best machines scored under 1 percent. By September 2026 the number depends on the wrapper. One lab's system scored about 63 percent when it could only keep notes it chose to write down, and about 100 percent when the wrapper kept its private scratch work between turns. The foundation that runs the prize said the jump was real, the puzzles were as hard as they were in March, and declined to call the result AGI.",
        "In 2025 a Berkeley group called METR began measuring how long a software job can be before an agent fails it, timing each job by how long a human expert would need. By September 2026 the jobs a system finishes half the time have stretched from minutes into hours, and some measurements now reach 16 hours. Finishing those jobs eight times out of ten still happens on much shorter tasks. METR says numbers above 16 hours are not trustworthy on the current tasks, which are clean programming problems.",
      ],
    },
  },
];

export function getTopic(slug: string) {
  return topics.find((topic) => topic.slug === slug);
}

export function getTopicIndex(slug: string) {
  return topics.findIndex((topic) => topic.slug === slug);
}
