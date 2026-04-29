import PhoneScreenshot from "@/components/ui/PhoneScreenshot";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

interface Shot {
  src: string;
  alt: string;
  caption: string;
}

interface Portrait {
  src: string;
  alt: string;
  caption: string;
  byline: string;
}

interface Beat {
  id: string;
  label: string;
  labelColor: string;
  heading: string;
  body: string;
  shots: Shot[];
  background: string;
  portrait?: Portrait;
}

const beats: Beat[] = [
  {
    id: "onboarding",
    label: "01 — ONBOARDING",
    labelColor: "#ffb500",
    heading: "From the very first tap, the app meets them where they are.",
    body: "Five gentle screens. The user types their name. Sabrina says hello. The home base appears. By the time they tap Start, they already know what they're walking into.",
    shots: [
      { src: "/screenshots/16-49-58.png", alt: "What's your name? screen", caption: "Step 1 — Name" },
      { src: "/screenshots/16-49-46.png", alt: "Hey I'm Sabrina intro card", caption: "Step 2 — Sabrina says hi" },
      { src: "/screenshots/16-50-34.png", alt: "Welcome Ben screen", caption: "Step 3 — Welcome" },
      { src: "/screenshots/16-50-11.png", alt: "Everything you'll need overview", caption: "Step 4 — What's inside" },
      { src: "/screenshots/16-50-23.png", alt: "Ready Ben? journey-start screen", caption: "Step 5 — Ready?" },
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
      { src: "/screenshots/16-49-46.png", alt: "Hey I'm Sabrina onboarding card", caption: "First hello" },
      { src: "/screenshots/16-51-10.png", alt: "Identity in Christ Part 1 Complete with Sabrina", caption: "After Part 1 — a word from Sabrina" },
    ],
    background: "#0d0d18",
    portrait: {
      src: "/images/sabrina.jpg",
      alt: "Portrait of Sabrina, the in-app guide",
      caption: "Meet Sabrina",
      byline: "She's not a chatbot. She's a real voice — recording short videos and writing the words that show up after every phase. The user gets to know her over time.",
    },
  },
  {
    id: "journeys-tour",
    label: "03 — THE JOURNEYS",
    labelColor: "#00a9ce",
    heading: "Five journeys. Each one earned, not given.",
    body: "Who Am I? unlocks the rest. Discipleship is paired. Who Are We? is for groups. Sex is Everywhere is honest. The Story is the whole gospel as narrative. Inside each journey, one truth at a time — sentence by sentence, day by day.",
    shots: [
      { src: "/screenshots/17-02-55.png", alt: "Home screen showing all five journeys with discipleship locked", caption: "Five paths · progressive unlock" },
      { src: "/screenshots/16-32-00.png", alt: "Identity in Christ journey slide: Most of us carry a weight we didn't choose to carry", caption: "One sentence per screen" },
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
      { src: "/screenshots/16-57-10.png", alt: "Your Circle screen with member avatars and active journey progress", caption: "Your Circle, at a glance" },
      { src: "/screenshots/16-57-23.png", alt: "Circle screen showing leader tools and member list", caption: "Leader tools · invite, manage" },
      { src: "/screenshots/16-57-39.png", alt: "Encouragement sent toast notification", caption: "One tap · encouragement sent" },
      { src: "/screenshots/16-58-01.png", alt: "Manage members, shared journals and recent activity feed", caption: "Shared journals · live activity" },
      { src: "/screenshots/16-55-31.png", alt: "Edit your note with Share with circle toggle", caption: "Share a journal — your choice" },
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
      { src: "/screenshots/16-56-47.png", alt: "Bible reading screen showing John 3 with Highlight, Add to journal, Copy actions", caption: "Tap a verse · highlight, save, share" },
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
      { src: "/screenshots/16-31-22.png", alt: "Reach4Life home screen — Hey Ben, 2 day streak, Identity in Christ in progress", caption: "Home — every day, every breath" },
    ],
    background: "#0d0d18",
  },
];

const PHONE_W_DESKTOP = 200;
const PHONE_H_DESKTOP = 434;
const PHONE_W_HERO = 280;
const PHONE_H_HERO = 608;

function PhoneRow({ beat }: { beat: Beat }) {
  const count = beat.shots.length;

  if (count === 1) {
    const shot = beat.shots[0];
    return (
      <div className="flex justify-center">
        <RevealOnScroll>
          <PhoneScreenshot
            src={shot.src}
            alt={shot.alt}
            caption={shot.caption}
            width={PHONE_W_HERO}
            height={PHONE_H_HERO}
          />
        </RevealOnScroll>
      </div>
    );
  }

  if (count === 2) {
    return (
      <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 justify-center items-center">
        {beat.shots.map((shot, idx) => (
          <RevealOnScroll key={`${beat.id}-${idx}`} delay={idx * 100}>
            <div style={{ transform: idx % 2 === 1 ? "translateY(20px)" : undefined }}>
              <PhoneScreenshot
                src={shot.src}
                alt={shot.alt}
                caption={shot.caption}
                width={240}
                height={520}
              />
            </div>
          </RevealOnScroll>
        ))}
      </div>
    );
  }

  return (
    <div className="no-scrollbar -mx-6 px-6 md:mx-0 md:px-0 overflow-x-auto overflow-y-hidden snap-x snap-mandatory">
      <div className="flex flex-row gap-5 md:gap-6 md:justify-center min-w-max">
        {beat.shots.map((shot, idx) => (
          <RevealOnScroll
            key={`${beat.id}-${idx}`}
            delay={idx * 80}
            className="snap-center flex-shrink-0"
          >
            <div style={{ transform: idx % 2 === 1 ? "translateY(16px)" : undefined }}>
              <PhoneScreenshot
                src={shot.src}
                alt={shot.alt}
                caption={shot.caption}
                width={PHONE_W_DESKTOP}
                height={PHONE_H_DESKTOP}
              />
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </div>
  );
}

function BeatRow({ beat, index }: { beat: Beat; index: number }) {
  const isLast = index === beats.length - 1;
  const single = beat.shots.length === 1;
  return (
    <section
      className={`relative px-6 ${single ? "py-24" : "py-28"} overflow-hidden`}
      style={{ background: beat.background }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background: `radial-gradient(ellipse 70% 50% at 50% 90%, ${beat.labelColor}1f, transparent 65%)`,
        }}
      />
      <div className="relative max-w-[1200px] mx-auto">
        {beat.portrait ? (
          <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-10 md:gap-14 items-start mb-14">
            <RevealOnScroll>
              <div className="relative">
                <div
                  aria-hidden
                  className="absolute -inset-4 rounded-3xl"
                  style={{ background: `${beat.labelColor}14`, filter: "blur(20px)" }}
                />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={beat.portrait.src}
                  alt={beat.portrait.alt}
                  className="relative w-full max-w-[280px] aspect-square object-cover rounded-2xl border border-white/10 shadow-[0_30px_60px_-25px_rgba(0,0,0,0.7)]"
                  loading="lazy"
                />
                <p
                  className="relative font-sans text-[11px] uppercase mt-3"
                  style={{ letterSpacing: "0.18em", color: beat.labelColor }}
                >
                  {beat.portrait.caption}
                </p>
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={120}>
              <div className="flex items-center gap-3 mb-5">
                <span
                  className="block w-8 h-px"
                  style={{ background: beat.labelColor, opacity: 0.6 }}
                />
                <p
                  className="font-sans font-bold text-[11px] uppercase"
                  style={{ letterSpacing: "0.18em", color: beat.labelColor }}
                >
                  {beat.label}
                </p>
              </div>
              <h2
                className="font-serif font-bold text-white mb-5"
                style={{ fontSize: "clamp(26px, 3.5vw, 38px)", lineHeight: 1.18 }}
              >
                {beat.heading}
              </h2>
              <p
                className="font-sans text-white/65 mb-5"
                style={{ fontSize: "16px", lineHeight: 1.75 }}
              >
                {beat.body}
              </p>
              <p
                className="font-sans text-white/55 italic"
                style={{ fontSize: "15px", lineHeight: 1.75 }}
              >
                {beat.portrait.byline}
              </p>
            </RevealOnScroll>
          </div>
        ) : (
          <RevealOnScroll>
            <div className="flex items-center gap-3 mb-5">
              <span
                className="block w-8 h-px"
                style={{ background: beat.labelColor, opacity: 0.6 }}
              />
              <p
                className="font-sans font-bold text-[11px] uppercase"
                style={{ letterSpacing: "0.18em", color: beat.labelColor }}
              >
                {beat.label}
              </p>
            </div>
            <h2
              className="font-serif font-bold text-white mb-5 max-w-3xl"
              style={{ fontSize: "clamp(26px, 3.5vw, 38px)", lineHeight: 1.18 }}
            >
              {beat.heading}
            </h2>
            <p
              className="font-sans text-white/65 mb-14 max-w-2xl"
              style={{ fontSize: "16px", lineHeight: 1.75 }}
            >
              {beat.body}
            </p>
          </RevealOnScroll>
        )}

        <PhoneRow beat={beat} />

        {!isLast ? (
          <div
            aria-hidden
            className="mt-20 mx-auto h-px max-w-xs"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(255,255,255,0.12), transparent)",
            }}
          />
        ) : null}
      </div>
    </section>
  );
}

export default function AppTour() {
  return (
    <div id="app">
      <section className="pt-24 pb-4 px-6" style={{ background: "#080810" }}>
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
      {beats.map((beat, idx) => (
        <BeatRow key={beat.id} beat={beat} index={idx} />
      ))}
    </div>
  );
}
