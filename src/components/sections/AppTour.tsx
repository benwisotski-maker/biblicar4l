import PhoneScreenshot from "@/components/ui/PhoneScreenshot";
import PhoneGallery from "@/components/ui/PhoneGallery";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

const GALLERY_BEAT_IDS = new Set([
  "onboarding",
  "sabrina",
  "journeys-tour",
  "circle",
  "bible",
]);

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
      { src: "/screenshots/16-49-46.png", alt: "Hey I'm Sabrina intro card", caption: "Step 1 — Sabrina says hi" },
      { src: "/screenshots/16-49-58.png", alt: "What's your name? screen", caption: "Step 2 — Name" },
      { src: "/screenshots/16-50-11.png", alt: "Everything you'll need overview", caption: "Step 3 — What's inside" },
      { src: "/screenshots/16-50-23.png", alt: "Welcome Ben — Your journey starts now", caption: "Step 4 — Welcome" },
      { src: "/screenshots/16-50-34.png", alt: "Ready Ben? journey-start screen with Who Am I? as the first journey", caption: "Step 5 — Ready?" },
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
    heading: "Five journeys. Every one of them leads into prayer.",
    body: "Who Am I? unlocks the rest. Discipleship is paired. Who Are We? is for groups. Sex is Everywhere is honest. The Story is the whole gospel as narrative. Inside each one, one truth at a time — and at the end of each phase, a real next step alone with God. Not content to consume. A prayer to actually pray.",
    shots: [
      { src: "/screenshots/17-02-55.png", alt: "Home screen showing all five journeys with discipleship locked", caption: "Five paths · progressive unlock" },
      { src: "/screenshots/16-32-00.png", alt: "Identity in Christ journey slide: Most of us carry a weight we didn't choose to carry", caption: "One sentence per screen" },
      { src: "/screenshots/09-45-17.png", alt: "Prayer next-step card: Take 10 minutes alone. Tell God about the words people have spoken over you. Ask Him what He says instead.", caption: "Every phase ends in prayer" },
    ],
    background: "#080810",
  },
  {
    id: "circle",
    label: "04 — YOUR CIRCLE",
    labelColor: "#00b388",
    heading: "No one walks this alone.",
    body: "Form a Circle of three to eight on the same journey, or pair up one-on-one for Discipleship. Inside, the conversation is shaped by the journey itself — verses people are sitting with, honest questions, journal entries shared by choice. Not a feed. A place.",
    shots: [
      { src: "/screenshots/09-51-58.png", alt: "Community screen — Circle tab with five member avatars and active journey progress for Who Am I? Phase 2", caption: "Your Circle · five people, one journey" },
      { src: "/screenshots/09-50-55.png", alt: "Group chat showing Sarah sharing Psalm 23:3, Marcus asking an honest question, Marcus sharing a journal entry, Amara responding with prayer", caption: "Verses, questions, shared journals" },
      { src: "/screenshots/09-51-04.png", alt: "Community screen — Discipleship tab showing one-on-one with Daniel, his progress and active conversation", caption: "Discipleship · one-on-one, paired" },
    ],
    background: "#0d0d18",
  },
  {
    id: "bible",
    label: "05 — THE BIBLE & JOURNAL",
    labelColor: "#ffb500",
    heading: "Every translation. Every language. A journal that grows with them.",
    body: "Read the full New Testament. Tap a verse to highlight, copy, or add it straight to a journal entry. Toggle Share with Circle and the entry shows up in the group's tab. Because Biblica is hosting Reach4Life, every user reaches into the largest open library of Bible translations on Earth — over 150 languages — without ever leaving the app.",
    shots: [
      { src: "/screenshots/16-56-47.png", alt: "Bible reading screen showing John 3 with Highlight, Add to journal, Copy actions", caption: "Tap a verse · highlight, save, share" },
      { src: "/screenshots/09-53-23.png", alt: "Edit your note journal screen with the text 'Who am I?' and a Share with circle toggle enabled", caption: "Journal · share with the Circle, by choice" },
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
  const useGallery = GALLERY_BEAT_IDS.has(beat.id) && count >= 2;

  let fallback: React.ReactNode;
  if (count === 1) {
    const shot = beat.shots[0];
    fallback = (
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
  } else if (count === 2) {
    fallback = (
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
  } else {
    fallback = (
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

  if (!useGallery) return <>{fallback}</>;

  return (
    <>
      <PhoneGallery shots={beat.shots} />
      <div className="lg:hidden">{fallback}</div>
    </>
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
