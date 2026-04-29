import PhoneScreenshot from "@/components/ui/PhoneScreenshot";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

interface Shot {
  src: string;
  alt: string;
  caption: string;
}

interface Beat {
  id: string;
  label: string;
  labelColor: string;
  heading: string;
  body: string;
  shots: Shot[];
  background: string;
}

const beats: Beat[] = [
  {
    id: "onboarding",
    label: "01 — ONBOARDING",
    labelColor: "#ffb500",
    heading: "From the very first tap, the app meets them where they are.",
    body: "Five gentle screens. The user types their name. Sabrina says hello. The home base appears. By the time they tap Start, they already know what they're walking into.",
    shots: [
      {
        src: "/screenshots/16-49-58.png",
        alt: "What's your name? screen",
        caption: "Step 1 — Name",
      },
      {
        src: "/screenshots/16-49-46.png",
        alt: "Hey I'm Sabrina intro card",
        caption: "Step 2 — Sabrina says hi",
      },
      {
        src: "/screenshots/16-50-34.png",
        alt: "Welcome Ben screen",
        caption: "Step 3 — Welcome",
      },
      {
        src: "/screenshots/16-50-11.png",
        alt: "Everything you'll need overview",
        caption: "Step 4 — What's inside",
      },
      {
        src: "/screenshots/16-50-23.png",
        alt: "Ready Ben? journey-start screen",
        caption: "Step 5 — Ready?",
      },
    ],
    background: "#080810",
  },
  {
    id: "sabrina",
    label: "02 — YOUR GUIDE",
    labelColor: "#f22e2e",
    heading: "Sabrina walks alongside them — every phase, every breath.",
    body: "Sabrina is the steady voice in the app. Short videos. Real talk. No religious performance. After every phase she meets the user with one more sentence of grace before the next thing begins.",
    shots: [
      {
        src: "/screenshots/16-49-46.png",
        alt: "Hey I'm Sabrina onboarding card",
        caption: "First hello",
      },
      {
        src: "/screenshots/16-51-10.png",
        alt: "Identity in Christ Part 1 Complete with Sabrina",
        caption: "After Part 1 — a word from Sabrina",
      },
    ],
    background: "#0d0d18",
  },
  {
    id: "journeys-tour",
    label: "03 — THE JOURNEYS",
    labelColor: "#00a9ce",
    heading: "Five journeys. Each one earned, not given.",
    body: "Who Am I? unlocks the rest. Discipleship is paired. Who Are We? is for groups. Sex is Everywhere is honest. The Story is the whole gospel as narrative. Inside each journey, one truth at a time — sentence by sentence, day by day.",
    shots: [
      {
        src: "/screenshots/17-02-55.png",
        alt: "Home screen showing all five journeys with discipleship locked",
        caption: "Five paths · progressive unlock",
      },
      {
        src: "/screenshots/16-32-00.png",
        alt: "Identity in Christ journey slide: Most of us carry a weight we didn't choose to carry",
        caption: "One sentence per screen",
      },
    ],
    background: "#080810",
  },
  {
    id: "circle",
    label: "04 — YOUR CIRCLE",
    labelColor: "#00b388",
    heading: "No one walks this alone.",
    body: "Form a Circle of three to eight. Pair up for Discipleship. Watch each other's progress in real time. Send encouragement when someone goes quiet. Share what you're writing in your journal — only if you want to.",
    shots: [
      {
        src: "/screenshots/16-57-10.png",
        alt: "Your Circle screen with member avatars and active journey progress",
        caption: "Your Circle, at a glance",
      },
      {
        src: "/screenshots/16-57-23.png",
        alt: "Circle screen showing leader tools and member list",
        caption: "Leader tools · invite, manage",
      },
      {
        src: "/screenshots/16-57-39.png",
        alt: "Encouragement sent toast notification",
        caption: "One tap · encouragement sent",
      },
      {
        src: "/screenshots/16-58-01.png",
        alt: "Manage members, shared journals and recent activity feed",
        caption: "Shared journals · live activity",
      },
      {
        src: "/screenshots/16-55-31.png",
        alt: "Edit your note with Share with circle toggle",
        caption: "Share a journal — your choice",
      },
    ],
    background: "#0d0d18",
  },
  {
    id: "bible",
    label: "05 — THE BIBLE, IN THEIR LANGUAGE",
    labelColor: "#ffb500",
    heading: "Every translation. Every language. Right inside the app.",
    body: "Read the full New Testament. Highlight a verse. Add it to a journal. Share it with the Circle. And because Biblica is hosting Reach4Life, every user reaches into the largest open library of Bible translations on Earth — over 150 languages — without ever leaving the app.",
    shots: [
      {
        src: "/screenshots/16-56-47.png",
        alt: "Bible reading screen showing John 3 with Highlight, Add to journal, Copy actions",
        caption: "Tap a verse · highlight, save, share",
      },
    ],
    background: "#080810",
  },
  {
    id: "home",
    label: "06 — DAILY HOME",
    labelColor: "#f22e2e",
    heading: "And it all lands here.",
    body: "Streak. Today's slide. The Circle, one tap away. The Bible, one tap away. Their journal, one tap away. Reach4Life is built to be the first thing they open in the morning — and the last thing before they sleep.",
    shots: [
      {
        src: "/screenshots/16-31-22.png",
        alt: "Reach4Life home screen — Hey Ben, 2 day streak, Identity in Christ in progress",
        caption: "Home — every day, every breath",
      },
    ],
    background: "#0d0d18",
  },
];

function BeatRow({ beat }: { beat: Beat }) {
  const single = beat.shots.length === 1;
  return (
    <section className="py-24 px-6" style={{ background: beat.background }}>
      <div className="max-w-[1200px] mx-auto">
        <RevealOnScroll>
          <p
            className="font-sans font-bold text-[11px] uppercase mb-4"
            style={{ letterSpacing: "0.14em", color: beat.labelColor }}
          >
            {beat.label}
          </p>
          <h2
            className="font-serif font-bold text-white mb-4"
            style={{ fontSize: "clamp(26px, 3.5vw, 36px)", lineHeight: 1.2 }}
          >
            {beat.heading}
          </h2>
          <p
            className="font-sans text-white/65 mb-12 max-w-3xl"
            style={{ fontSize: "16px", lineHeight: 1.75 }}
          >
            {beat.body}
          </p>
        </RevealOnScroll>

        <div
          className={
            single
              ? "flex justify-center"
              : "flex flex-row gap-6 md:gap-8 overflow-x-auto pb-6 -mx-6 px-6 md:mx-0 md:px-0 md:justify-center snap-x snap-mandatory"
          }
        >
          {beat.shots.map((shot, idx) => (
            <RevealOnScroll
              key={`${beat.id}-${idx}`}
              delay={idx * 80}
              className="snap-center flex-shrink-0"
            >
              <PhoneScreenshot src={shot.src} alt={shot.alt} caption={shot.caption} />
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function AppTour() {
  return (
    <div id="app">
      <section className="pt-24 pb-8 px-6" style={{ background: "#080810" }}>
        <div className="max-w-[1200px] mx-auto text-center">
          <RevealOnScroll>
            <p
              className="font-sans font-bold text-r4l-yellow text-[11px] uppercase mb-4"
              style={{ letterSpacing: "0.18em" }}
            >
              SEE IT IN ACTION
            </p>
            <h2
              className="font-serif font-bold text-white"
              style={{ fontSize: "clamp(32px, 5vw, 48px)", lineHeight: 1.15 }}
            >
              A walkthrough of the app, beginning to home screen.
            </h2>
            <p className="font-serif italic text-white/55 text-lg md:text-xl mt-4 max-w-2xl mx-auto">
              Six beats. Real screens. Built for the way this generation already lives on
              their phone.
            </p>
          </RevealOnScroll>
        </div>
      </section>
      {beats.map((beat) => (
        <BeatRow key={beat.id} beat={beat} />
      ))}
    </div>
  );
}
