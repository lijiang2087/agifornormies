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
      "You don't teach a kid what a dog is by reading them a definition. You point: that's a dog, that's a dog, that's a cat. After enough pointing, they just know.",
      "A machine needs the same thing, only more of it. Photos, sentences, recordings, clicks. That pile of examples is data. We use it because the real world has too many cases to write down as rules. Language, faces, taste: there is no complete manual.",
      "The machine hasn't learned anything yet. It only has the examples. What it does with them next is learning.",
    ],
    concept: {
      title: "The pile is a curriculum",
      paragraphs: [
        "Data is not a puddle of facts the machine sips. It is a set of examples someone chose, and often named. A photo with the word dog under it. A recording with a transcript. An English sentence paired with the same sentence in French. A click that says this search result was the useful one. Those names are the lesson plan.",
        "Some piles come with an explicit name on every item. Some don't. A lot of public writing already contains its own cheap lesson: the next word is sitting there in the sentence. Either way, what you collect, how you name it, what you duplicate, and what you leave out decide what can be learned. A gap in the pile becomes a gap in the habit.",
      ],
    },
    talk: {
      title: "Different jobs waited on different piles",
      paragraphs: [
        "The last fifteen years of progress are easier to read as a sequence of piles than as a sequence of clever formulas. In 2009 a Stanford group led by Fei-Fei Li released a huge labeled photo set, ImageNet, with names drawn from a dictionary of meanings. The unglamorous work was people looking at a picture and typing what they saw. In 2012 a deep stack trained on that set won the year's recognition contest by a humiliating margin. Similar stacks had existed. The shared, labeled sample of the visual world had not.",
        "Other fields had their own version of that bet, and they did not all look like photos. Speech recognition moved when teams trained on thousands of hours of recorded talk with transcripts, instead of hand-writing phonetic rules. Translation moved when models trained on millions of sentence pairs from parliaments, websites, and translated books. Ranking systems at search companies trained on clicks. A system that played the board game go trained first on recorded human games, then on games against itself. A protein-folding system trained on decades of shapes that biology labs had already solved. In each case the algorithm was hungry. The thing that arrived late was coverage of the actual job.",
        "Chat systems sit on a scrape of public writing, plus smaller, expensive piles on top: people ranking two answers, people demonstrating a tool call, traces of real work. If you are explaining this in a room of engineers, the claim is operational. You are debugging a curriculum. Rights, duplication, leftover test items leaking into practice, and whole slices of life the pile never contained — rare languages, private expertise, the messy physical world — explain more production failures than a missing equation.",
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
      "Data is just the pile. Learning is what happens when the machine uses that pile to get less wrong over time.",
      "You try, you miss, you feel how far off it was, you nudge. Do that enough times and the shot starts to feel like a habit. Not a lecture. Practice.",
    ],
    concept: {
      title: "The miss has to become a nudge",
      paragraphs: [
        "On each example the machine makes a guess, a score says how far off it was, and the knobs inside it move a little in the direction that would have helped. That loop is learning. The knobs are not a written rulebook. They are a huge set of numbers that only mean something because practice shoved them around.",
        "The scientific worry is not whether it can replay yesterday's shots. It is whether the habit still works on a free throw it has never taken. That is why you hold out a test set and never practice on it. If the homework is perfect and the hidden test is bad, the machine memorized the pile. If the hidden test improves, something more like a skill showed up.",
      ],
    },
    talk: {
      title: "The loop is old. The scale is new.",
      paragraphs: [
        "Sending the miss backward through a stack of simple functions, and walking the knobs downhill, is 1980s mathematics. What changed is doing that loop on millions of examples, in small random batches, on chips that can do many multiply-and-add steps at once — the same family of chips that draw video games. Image classifiers, speech recognizers, and translation systems all used this loop. The 2012 vision contest was one public proof. Speech and translation had quieter industrial proofs in the same decade.",
        "After 2017 a lot of practice stopped needing a person to name every item. Hide a word, guess it, nudge. That is how a scrape of the public web became a practice set for language. A second, smaller practice pass is now common: take the general next-word habit and practice on instructions, on code, or on answers people ranked as better. Product behavior is mostly carved in that second pass. The first pass is where the world got compressed.",
        "The pointed warning in any serious room is about the hidden test. Once a leaderboard's questions leak into practice, the score stops meaning what you think. The same loop that grows skill will happily memorize a contest. Teams that ship keep a private test on the actual job — real tickets, real recordings, the ugly cases — and they treat a jump on a public chart as a rumor until that private test moves too."
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
        "Each layer is a pile of tiny weighted sums pushed through a simple curve that squashes big numbers into a limited range. That curve is what makes the stack able to represent folds and corners, not just straight lines. Because the whole stack is smooth enough, a miss at the end can be turned into a small nudge at every knob.",
        "Depth matters because later layers get to reuse earlier work. The first layer can spend its knobs on ink strokes. The next layer can spend them on letters. A single flat layer would have to learn 'face' as one giant lookup, which wastes knobs and needs even more examples. Hierarchy is a compression trick.",
      ],
    },
    talk: {
      title: "The research problem was trainability, not the metaphor of a brain",
      paragraphs: [
        "Stacks like this existed in the 1980s and 1990s. They stayed shallow because the miss signal faded as it went backward, and because computers were small. The 2012 image-contest winner was a deeper stack that could actually be trained on a huge labeled photo set, with a few training tricks and graphics chips. In 2015 skip paths — extra wires that let the miss jump over layers — made fifty- and hundred-layer stacks trainable. That is when vision systems stopped being a committee of hand-built detectors.",
        "Sequences had a different stall. Reading a sentence left to right and trying to remember the beginning does not scale. In 2017, attention let every word look at every other word in one step and decide what matters for this prediction. That wiring, not a new kind of fake neuron, is what made language models affordable to grow. For images, an earlier version of the same idea was sharing knobs across positions so a detector for an eye can run everywhere in the photo.",
        "If you give this talk, skip the brain. Say this: we found wirings where a mountain of knobs can be moved by practice without stalling, and those wirings compress a pile into a reusable hierarchy. The interesting papers are about which shortcuts keep the miss alive, which sharing cuts the knob count, and which chips make the multiply-and-add cheap enough to run overnight instead of over a career.",
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
      "A language model is a machine that has seen so much text that it got good at guessing the next word. That sounds small. It turns out to be a way of packing a lot of the world's writing into one habit.",
      "If you can guess what usually comes next, you can draft, summarize, translate, and answer questions, at least on the surface.",
    ],
    concept: {
      title: "Next word is a packing trick",
      paragraphs: [
        "Text is chopped into pieces — whole words when they are common, fragments when they are not — and the model learns the probability of the next piece given the pieces so far. Do that across enough writing and you have quietly stored tone, code shape, how people argue, and a fog of facts. The facts are not in a drawer. They are traces in the habit of what usually follows.",
        "A conversation is the same habit aimed at a request. You write a question. The model keeps guessing pieces until a reply has been assembled. Summaries and translations work because those genres already exist in the pile: people have written a lot of 'here is the short version' and 'here is this sentence in another language.'",
      ],
    },
    talk: {
      title: "The web was the photo set. Chat was a second practice pass.",
      paragraphs: [
        "Old language models counted pairs and triples of words and ran out of memory. Networks that read a sentence in order and tried to carry a running summary forgot the beginning. Attention, chopping text into word pieces, and a scrape of the public web produced, around 2018 to 2020, systems that could finish a paragraph, translate, and emit code-shaped text from one next-piece habit. Fill-in-the-blank practice and left-to-right practice are cousins. Left-to-right is what you want if the product has to write.",
        "The chat products that landed in 2022 were not a new engine. They were the same engine after a narrower practice pass: follow instructions, decline some requests, prefer answers people ranked as better. That is why a next-piece guesser can hold a conversation. It was taught the genre of being a helpful correspondent. The compression of the web happened earlier, and mostly in silence.",
        "The engineering claims that matter in a product meeting are pointed. How much text it can keep in mind at once is working memory, and it is finite. If a fact was rare in the pile, the model will guess a fluent stand-in. If two phrasings conflict, the more common one wins. You did not build a librarian. You built a compressor of public writing, plus whatever smaller piles you paid people to write, and the failures follow the holes in those piles.",
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
      "Predicting the next word is fast and often shallow, like blurting. Reasoning is when the system takes extra steps: scratch work, checking, trying another path.",
      "We started asking for that because some problems are not in the first guess. They need time.",
    ],
    concept: {
        title: "Spend chip time after the question",
      paragraphs: [
        "During the long practice pass, the knobs are shaped. At answer time you can still spend more chip time: write intermediate steps, sample several attempts, search, check. The machine is still producing pieces of text. The difference is that those pieces are used as a scratch pad for the next guess, or thrown away if a check fails.",
        "This is a trade. A longer trace costs money and waiting. It can buy accuracy on problems where the first guess is a trap — multi-step math, a bug that only shows up when you run the code, a plan with a constraint you have to keep in mind. It does not automatically buy truth. It buys more room to work.",
      ],
    },
    talk: {
      title: "Thinking longer is an old trick. Language just got it.",
      paragraphs: [
        "Chess and go programs got stronger, with the same trained evaluation, when they thought longer at move time and searched among futures. In 2022, asking a language model to show its working often helped on math and logic, because the extra pieces of text became a pad the next guess could read. Teams then trained models to prefer longer, more useful traces, and to spend a budget of steps that the user is, in effect, buying.",
        "That is a new scaling story alongside 'more knobs' and 'more examples.' You can keep the trained system fixed and buy accuracy with answer-time search. Labs now treat 'how long it thinks' as a product knob. The research argument is which extra steps actually change the answer, versus which ones are padding that looks like care.",
        "The caution you owe an industry room is specific. A fluent working trace can be theater. If you never check the arithmetic, never run the program, never open the cited page, you have purchased the style of thinking. Systems that hold up tie the extra steps to a check: a test suite, a second scoring model, a calculator, a retrieval from a source of record. Fluency of the scratch pad is not the result. The check is.",
      ],
    },
  },
  {
    slug: "memory",
    label: "Memory",
    note: "What you keep, and what you forget",
    image: "/illustrations/memory.png",
    imageAlt:
      "An illustrated woman at a desk copying a few keepers from a messy pile of papers into a small notebook.",
    analogy: [
      "Scratch work on a napkin is for this problem. A notebook is for the next one. If you throw the napkin away, tomorrow you start from zero.",
      "A person who forgets the conversation every time you leave the room can still be brilliant for ten minutes. They cannot finish a job that takes a week. Memory is what you keep on purpose.",
    ],
    concept: {
      title: "The window is not a notebook",
      paragraphs: [
        "In one sitting, a model can only keep so much in mind at once: the question, the last few pages of the chat, maybe a file you pasted. That is working memory. It is expensive, it fills up, and the oldest part falls off the front. A lasting note is different. Someone — or the model itself — writes down the keepers: the project's names, what already failed, the decision from Tuesday, a page worth fetching later.",
        "The skill is choosing. If you stuff everything into the current window, you pay for it on every question and you still forget. If you write nothing down, every session is a stranger. Good memory is a small, edited pile the system can read and update, not a transcript of every word it ever saw.",
      ],
    },
    talk: {
      title: "Forgetting was the product. Then notes became the product.",
      paragraphs: [
        "Early chat systems were famous for losing the thread. The box filled, the beginning vanished, and the model greeted you like a new person. Teams first treated that as a window-size problem: cram more text into the question. That is stuffing, not remembering. It helped for a file you had open. It did not help for a decision made last month.",
        "The next move was to fetch. Before answering, pull a few pages from a private pile that might be relevant — a company wiki, a folder of contracts, last week's tickets — and paste them into the sitting. That looks like memory. It is closer to a tool: a lookup with a guess about what matters. It fails when the guess is wrong, when two pages disagree, or when the pile was never written down in the first place.",
        "What coding assistants actually shipped is duller and more important: files the model can read and write across sessions. A note about the project. A list of commands that already broke. A short brief a person left for it. Say this in a talk: a stuffed window is working memory, a lookup is a search, a file the system can edit is memory. Long jobs die without the third. Classic failure modes are treating last month's fact as still true, writing notes it never opens, or remembering the vibe of a meeting and none of the constraints.",
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
      "That is the difference between remembering and checking, or between describing a calendar invite and actually sending one.",
    ],
    concept: {
      title: "Do not store the whole world",
      paragraphs: [
        "A tool is a door into another program: a search index, a calculator, a calendar, a code runner, a browser. The model decides when to knock, what to ask, and how to read what comes back. Then it keeps writing, now with evidence that did not have to live in the knobs.",
        "This only works if the door has a contract. A name, a shape for the request, a shape for the reply, and a way to fail. The skill being learned is not trivia. It is when memory is the wrong move — yesterday's price, a sum you should not do in your head, a file you should open rather than invent.",
      ],
    },
    talk: {
      title: "Calling out is now part of the skill",
      paragraphs: [
        "Search engines have done a cousin of this for years: a ranker that queries an index instead of memorizing the web. Around 2022 and 2023, language products started emitting a structured request, waiting for a real result, and continuing. Assistants that book travel or write code only work if that round trip is reliable. Retrieval into a private corpus is the same pattern pointed at a company's own files.",
        "The data problem shifts. You need traces of when to look something up, how to recover from a broken reply, and how not to skip the lookup because a confident sentence is cheaper. Classic failure modes are answering from memory about a number that changes, calling a tool and ignoring the result, or asking the door for something it cannot do and then narrating a fake success.",
        "In production the contract is the product. Timeouts, permissions, and error strings are part of the model's world. If the door is messy, the model looks dumb. If the door is too open, it can email a customer or drop a database. Tool use is the moment a language system becomes ordinary software, with ordinary software consequences.",
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
      "That is useful when the work has several moves. It is also how small mistakes turn into large ones.",
    ],
    concept: {
      title: "A loop, with a stopping rule",
      paragraphs: [
        "The pieces are ordinary: a model, a set of tools, a memory of the current task, a budget of steps, a condition for quitting. Each observation becomes the next input. That is why errors compound. Step twelve is only as good as the mess left by step eleven.",
        "Almost nobody has a labeled pile of 'the right forty-step plan' for a messy job. So agents are often taught from traces of whole attempts, plus a judgment of whether the attempt actually finished the work. Evaluation is harder than scoring a single label on a photo. The system can sound done and still have failed in the middle.",
      ],
    },
    talk: {
      title: "Long jobs are a different species of problem",
      paragraphs: [
        "2023 produced a wave of loops that could browse, click, and write files. Demos were easy to film. Reliability over a long job was not. A photo contest scores one name. A refund, a deploy, or a coding task can fail silently on step twelve and still narrate success. Compounding error is the central math, even if the per-step model looks strong.",
        "Software engineering became the test bed because the world already has checks: tests, compilers, the list of changed lines. An agent that has to operate a desktop is harder. The screen is messy, and there is no automatic test for 'booked the right flight.' That gap, not a missing spark of personality, is why some jobs look automatable in a keynote and stubborn on a Tuesday.",
        "What labs now collect are traces of whole jobs, plus human judgments of which traces were actually good. Memory of the task, a step budget, and a willingness to stop are the unglamorous parts. Say it this way in a talk: an agent is not a character. It is a loop whose error rate multiplies with the length of the job, and whose only mercy is the checks you wired around it.",
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
      "A harness is the setup around the model: files it can read, tools it may use, tests it has to pass, a person it should ask before doing something sharp.",
      "The engine is the model. The harness is the car. Most of the time, the car is why the thing is safe enough to drive.",
    ],
    concept: {
      title: "The setup is the product",
      paragraphs: [
        "Same model, different harness, wildly different behavior. One setup can read the project, run tests, show you the changed lines, and retry a failed command. Another can only chat. Users feel that gap as intelligence. A lot of it is permission, memory, and checks.",
        "The tests have to follow the actual job. Last quarter's invoices, a project with local conventions, a customer who does not talk like the public web: that mix is almost never the mix in the practice set. A harness that only passes a clean exam will look brilliant in a notebook and average on Tuesday.",
      ],
    },
    talk: {
      title: "When engines look similar, the car is the competition",
      paragraphs: [
        "Coding assistants that feel magic are usually a modest model wrapped in a tight loop: a map of the project, a short list of allowed commands, a test runner, retries, a place to keep notes across steps. Teams now spend as much engineering on that loop as on training. Two products can call similar engines and feel like different species because one of them can see the project files and the other is guessing from a pasted snippet.",
        "Single-answer contests exist. Job-level contests are still thin. That is why harness teams obsess over private suites: real tickets, real failing tests, traces of the agent going off the rails. Those suites are the curriculum. If you do not keep them, you are tuning on vibes, and vibes do not survive a version bump of the engine. If a person still has to check every answer, you have a draft tool. If the harness catches most misses on the actual mix of work, you have something closer to a worker.",
        "The safety version of this talk is dull on purpose. Permissions, a fenced-off machine, rate limits, and a human gate on irreversible actions. The model will try what the harness allows. Handing it a command line and production secrets is a product decision. It is not a research result, and it will not be forgiven as one if it deletes the wrong thing.",
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
      "Words are only one way the world shows up. You also look, and you also listen.",
      "You can read 'the soup is ready.' You can also see the steam and hear it simmer. A machine that only reads is like a friend who only takes phone calls. It misses the room.",
    ],
    concept: {
      title: "One habit, more than one kind of input",
      paragraphs: [
        "Pictures and sound can be chopped into pieces the same way text is, then practiced with the same loop: guess the next piece, score the miss, nudge the knobs. A photo becomes a grid of patches. A recording becomes a sequence of little slices of air. After that, they can live in the same stack that already learned language.",
        "The useful trick is a shared space. The word dog and a picture of a dog can be nudged toward each other, so a question written in English can point at a pixel. Screens count too. A screenshot is just a picture of software. If the model can look, it can work on a desktop, a chart, a whiteboard photo, a slide.",
      ],
    },
    talk: {
      title: "Eyes and ears were separate products. Then they weren't.",
      paragraphs: [
        "For a long time, seeing and hearing were their own industries. Image contests labeled photos. Speech products turned talk into transcripts. They did not share a brain with the system that wrote email. In the early 2020s that wall came down. Teams trained the same family of next-piece habits on captions scraped next to pictures, and on thousands of hours of recorded talk. You could paste a photo into a chat and ask a question. You could drop in a meeting and get notes. That felt like a new species. It was mostly the language engine, now taking more kinds of example.",
        "The cheap pile, again, decided the shape of the skill. Pictures that came with captions taught 'describe this.' They did not teach 'read the tiny numbers on this invoice' or 'notice the crack in the brake line.' Studio audio taught clean speech. A noisy kitchen, two people talking over each other, a thick accent, still fails more often than a demo suggests. Agents that operate a desktop are this step in disguise: the screen is a picture, and clicking is only possible if the look is good enough.",
        "Say it this way in a room of engineers. Seeing is not a free upgrade you get because writing got good. It is a second curriculum, with its own holes. Classic misses: inventing text that is not in the photo, describing a chart whose bars it cannot actually compare, nodding along to audio it did not catch. This step is eyes and ears. Hands are next, and they cost something else.",
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
      "Robotics is the same story with a body. Looking is not reaching. The model has to hold, and not knock the glass over.",
      "The world does not pause for a retry the way a chat box does.",
    ],
    concept: {
      title: "Each example is expensive",
      paragraphs: [
        "A photo on the internet is cheap. A grasp that knocks over the glass costs time, hardware, and sometimes the glass. You cannot scrape a billion hours of honest physical contact the way you can scrape writing. That scarcity is the central fact.",
        "So robotics leans on substitutes: simulation, video of people doing chores, people remotely driving an arm. Each substitute lies in a different way. Simulation is too clean. Video has no contact forces. Remote driving is slow and rare. The real kitchen still has to be faced.",
      ],
    },
    talk: {
      title: "Why language ran ahead of hands",
      paragraphs: [
        "Vision and language could train on piles the web was already making. Robot hours cannot. The jump from a simulated kitchen to a real one is its own failure mode: friction, lighting, a mug that is slightly heavier, a table that was not in the simulator. Teams that skip that jump have a video. Teams that pay for it have a product in a narrow cell. The job is not the demo. A clean table in the lab is the practice set. Tuesday in a home, with a different mug, is the test.",
        "Recent bets look like the language playbook: train a broad model on many kinds of video and commands, then specialize on one robot. Other bets stay closer to classical control — maps, planned trajectories — with learning only in the perception piece. Warehouse picking and factory arms already work inside cages designed for them. Homes do not, because homes were not designed as factories.",
        "The sentence that belongs in an industry talk is this. The missing pile is diverse physical contact at scale, plus a test that is not a demo on a clean table. Until that contact is cheap, a general household robot is a research program, and an arm that does one job in one cell is a business. Those two sentences get mixed up on purpose in fundraising. They should not get mixed up in engineering.",
      ],
    },
  },
  {
    slug: "agi",
    label: "AGI",
    note: "A broad, still-unsettled destination",
    image: "/illustrations/agi.png",
    imageAlt:
      "An illustrated park with a few families: kids, parents, and an older couple on a quiet path.",
    analogy: [
      "This last name is the one people use for a system that can do a wide range of intellectual work, not just one trick. There is no agreed finish line.",
      "It is useful as a direction. It is dangerous as a trophy you claim you already have.",
    ],
    concept: {
      title: "Several destinations sharing one name",
      paragraphs: [
        "Match a median person on most desk jobs. Match an expert. Keep learning after you leave the factory, without another long scrape of the internet. Act in the physical world without wrecking it. Know when you do not know. People argue past each other because they picked different finish lines and kept the same name.",
        "There is no shared exam for 'general.' Photo contests, translation contests, coding contests, and game scores each measure a slice. A system can crush one slice and still be helpless on Tuesday's invoices. Breadth is a claim about the mix of work, not about a single chart going up.",
      ],
    },
    talk: {
      title: "What the last twenty years actually settled",
      paragraphs: [
        "We did not get a theory of mind. We got systems that became broadly useful when examples, tests, and then weaker labels at huge scale were taken seriously — in vision, speech, translation, games, proteins, and then language. The scaffolding around those systems, the tools and loops and tests, is doing as much work as the extra knobs. Anyone who tells the story as 'we invented a brain' is skipping the part that transferred from field to field: get coverage of the job, hold out an honest test, spend chip time, then wrap the habit in software that can check it.",
        "What is still obviously missing, if you sit in a product meeting: reliable long jobs, learning on the fly from a new workplace, calibrated doubt, and bodies that can fail safely. Those are pile-and-systems problems as much as they are 'intelligence' problems. Continual learning without destroying yesterday's skill, long-horizon checks, and cheap physical contact are the live research programs. They do not require you to settle the trophy first.",
        "Claiming the trophy is a marketing move because the name has no referee. The useful question is which jobs, on which mix of cases, with which checks, at what cost. That is a less thrilling sentence. It is the one that predicts whether Tuesday works. If something like the broad destination arrives, it will not be because someone skipped examples. It will be because the pointing got wide enough, and the tests honest enough, that 'general' stopped being a slogan and started being a measurement.",
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
