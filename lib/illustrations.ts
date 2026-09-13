export const illustrationStyle = [
  "Flat graphic editorial illustration, not oil painting, not photoreal, not 3D, not anime.",
  "Light ink line, simple shapes, soft flat color on cream paper.",
  "Sage, olive, forest, and oatmeal only. No neon, no cinematic lighting.",
  "Faces are simplified and a bit generic, like a nonfiction picture book, not a portrait of one specific person.",
].join(" ");

export const illustrationClothes =
  "Oatmeal knit, olive trousers or similar, simple sneakers. Same wardrobe language across the set.";

export const illustrationCast: Record<
  string,
  { person: string; notes: string }
> = {
  data: {
    person: "Adult woman, medium-brown skin, short dark hair",
    notes: "Pointing at dogs, photos on a park bench.",
  },
  learning: {
    person: "Adult man, East Asian, short black hair",
    notes: "Practicing free throws. Missed balls on the court. Getting less wrong.",
  },
  "neural-networks": {
    person: "Adult woman, light skin, brown hair",
    notes: "Stacked everyday layers: mail slots or apartment floors.",
  },
  "language-models": {
    person: "Adult woman, South Asian, dark hair",
    notes: "Cafe, finishing someone's sentence. No speech bubbles or text in the drawing.",
  },
  senses: {
    person: "Adult woman, Black, West African, braided hair",
    notes: "Kitchen. Watching a pot simmer while a radio plays. Sight and sound.",
  },
  reasoning: {
    person: "Adult man, Latino, dark hair",
    notes: "Stuck on a puzzle, then working it through.",
  },
  memory: {
    person: "Adult woman, East African, dark hair",
    notes:
      "Home desk. Copying keepers from a messy pile into a small notebook. Sitting, not standing at a counter.",
  },
  tools: {
    person: "Adult woman, Middle Eastern or North African, dark hair",
    notes:
      "Hardware shop, kneeling at low drawers matching a part. Uncovered hair. Not the standing-at-counter pose used for Senses.",
  },
  agents: {
    person: "Adult man, Southeast Asian, short hair",
    notes: "Walking a checklist and finishing the job.",
  },
  harnesses: {
    person: "Adult man, light skin, short hair",
    notes: "The setup around the work: seatbelt, mise en place, scaffolding.",
  },
  robotics: {
    person: "Adult man, Pacific Islander or Indigenous, dark hair",
    notes: "Same work, now with hands and sensors.",
  },
  agi: {
    person:
      "A few families in a park, mixed ages including kids, no single hero, not a crowd",
    notes:
      "Quiet path. Families and children, empty grass. Destination still open. Not a line of identical adults.",
  },
};
