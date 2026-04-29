export interface Journey {
  id: string;
  name: string;
  unlock: string;
  unlockStyle: "always" | "locked";
  description: string;
  details: string;
  accent: string;
  bgOpacity: string;
  icon: string;
}

export const journeys: Journey[] = [
  {
    id: "who-am-i",
    name: "Who Am I?",
    unlock: "Always available",
    unlockStyle: "always",
    description:
      "A journey into identity in Christ, repentance, and resting at the Father's table. The foundation everything else is built on.",
    details: "3 phases · 33 slides · 3 prayer checkpoints",
    accent: "#f22e2e",
    bgOpacity: "rgba(242,46,46,0.08)",
    icon: "mirror",
  },
  {
    id: "discipleship",
    name: "Discipleship",
    unlock: "Unlocks after Who Am I?",
    unlockStyle: "locked",
    description:
      "A paired journey done with one other person. You cannot progress alone. Built for accountability and genuine depth.",
    details: "3 phases · Paired · Invite code system",
    accent: "#00a9ce",
    bgOpacity: "rgba(0,169,206,0.08)",
    icon: "pair",
  },
  {
    id: "who-are-we",
    name: "Who Are We?",
    unlock: "Unlocks after Who Am I?",
    unlockStyle: "locked",
    description:
      "The Who Am I? journey done in a small group of 3–8. Group discussion slides, meeting checkpoints, shared progress.",
    details: "3 phases · Group of 3–8 · Discussion questions",
    accent: "#00b388",
    bgOpacity: "rgba(0,179,136,0.08)",
    icon: "group",
  },
  {
    id: "sex-is-everywhere",
    name: "Sex is Everywhere",
    unlock: "Unlocks after Who Am I?",
    unlockStyle: "locked",
    description:
      "Addresses the biggest issue facing young people globally — head-on, without shame or condemnation. What does God actually say?",
    details: "3 phases · 33 slides · Sensitive content handled with care",
    accent: "#575195",
    bgOpacity: "rgba(87,81,149,0.08)",
    icon: "eye",
  },
  {
    id: "the-story",
    name: "The Story",
    unlock: "Unlocks after Who Am I?",
    unlockStyle: "locked",
    description:
      "The gospel as narrative. Creation, brokenness, Jesus, and the Great Commission. Your part in the biggest story ever told.",
    details: "3 phases · Believe → Grow → Change arc",
    accent: "#ffb500",
    bgOpacity: "rgba(255,181,0,0.08)",
    icon: "book",
  },
];
