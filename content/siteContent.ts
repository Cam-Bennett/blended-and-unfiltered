// ─────────────────────────────────────────────────────────────────────────────
// BLENDED & UNFILTERED — Site Content
// All copy, metadata, episode data, and link stubs live here.
// Never hardcode strings in page or component files.
// PENDING fields are marked — update when Carrie confirms.
// ─────────────────────────────────────────────────────────────────────────────

export const site = {
  name: "Blended & Unfiltered",
  tagline: "Real stories. Messy middle. Hard-won hope.",
  description:
    "A podcast about the real life of blended families — the tension, the love, the therapy bills, and the faith that holds it together. Hosted by Carrie Bollock, Mrs. Wyoming America 2025.",
  url: "PENDING", // update when domain is confirmed
  email: "PENDING", // Carrie's business email — update when confirmed
  logo: null, // update to "/images/logo.svg" when asset is provided
};

export const nav = {
  links: [
    { label: "Episodes", href: "/episodes" },
    { label: "About", href: "/about" },
    { label: "Share Your Story", href: "/share-your-story" },
    { label: "Connect", href: "/connect" },
  ],
  cta: { label: "Subscribe", href: "/connect" },
};

export const home = {
  meta: {
    title: "Blended & Unfiltered with Carrie Bollock",
    description:
      "Real talk about blended families, mental health, and faith-rooted resilience. New episodes weekly. Subscribe now.",
  },
  hero: {
    eyebrow: "New episodes every week",
    headline: "Nobody Said\nBlended Was Easy.",
    subheadline:
      "But thousands of families are figuring it out anyway — one hard conversation, one boundary, one breakthrough at a time. This is the show for them.",
    cta: { label: "Subscribe Free", href: "/connect" },
    secondaryCta: { label: "Share Your Story", href: "/share-your-story" },
  },
  mission:
    "Blended & Unfiltered exists because the version of blended family life sold in greeting cards is nothing like the one most people are actually living. Carrie Bollock sits down with real people — parents, stepkids, therapists, and survivors — to talk about what it actually takes to build something worth keeping. No scripts. No sugar-coating. Just honest conversation and the kind of hope that only comes from people who have been through it.",
  featuredEpisodeId: 3, // references episodes.items[].id
  recentEpisodesCount: 3,
  subscribeCta: {
    headline: "Get New Episodes\nDelivered to You.",
    body: "Subscribe to the Blended & Unfiltered email list and never miss a conversation worth having. New episodes, guest stories, and resources — straight to your inbox.",
    cta: { label: "Subscribe Now", href: "/connect" },
  },
  credentialStrip: [
    { label: "Mrs. Wyoming America 2025" },
    { label: "102.7 The Peak" },
    { label: "Restored by Faith" },
  ],
};

export const about = {
  meta: {
    title: "About Carrie — Blended & Unfiltered with Carrie Bollock",
    description:
      "Carrie Bollock is a wife, stepmom, mom, advocate, and Mrs. Wyoming America 2025. Learn why she started Blended & Unfiltered.",
  },
  headline: "Carrie Bollock",
  subheadline: "Wife. Stepmom. Mom. Advocate. Perpetually caffeinated.",
  photo: {
    src: "/images/carrie-profile.jpg",
    alt: "Carrie Bollock, host of Blended & Unfiltered",
  },
  story: [
    "I didn't start this show because I had it figured out. I started it because I was drowning and couldn't find anyone talking honestly about what that felt like. I'm a wife, a stepmom, a biological mom, and someone who has sat in enough therapy offices to know that the hardest part of blending a family isn't the logistics — it's the grief nobody tells you to expect.",
    "My husband and I built something real together, and it cost us something to get here. There were years of miscommunication, loyalty battles that weren't ours to fight, and moments where I genuinely didn't know if we were going to make it. What pulled us through wasn't advice from someone who had it easier than us. It was people who looked us in the eye and said: me too. That's what this show is.",
    "Outside the podcast, I'm Mrs. Wyoming America 2025, a mental health advocate, and a regular voice on 102.7 The Peak. I also serve with Restored by Faith, a ministry that works with women in recovery and crisis. Every role points back to the same conviction: the truth you're afraid to say out loud is probably the thing someone else needs to hear.",
    "If you've ever felt like you were failing at something you love — your marriage, your stepkids, yourself — this show is for you. Pull up a chair. You're not alone in this.",
  ],
  credentials: [
    {
      title: "Mrs. Wyoming America 2025",
      description:
        "Statewide platform focused on mental health awareness and advocacy for blended and non-traditional families.",
    },
    {
      title: "102.7 The Peak",
      description:
        "Regular contributor and on-air personality covering family, faith, and community topics for Wyoming audiences.",
    },
    {
      title: "Restored by Faith",
      description:
        "Ministry serving women in recovery and crisis — meeting people in their hardest moments with dignity and practical support.",
    },
  ],
  showMission:
    "Blended & Unfiltered gives a platform to the stories that don't fit in a highlight reel — the ones about starting over, choosing hard things, and finding faith in the messy middle.",
  guestCta: {
    headline: "Your Story Belongs Here.",
    body: "Every episode starts with someone willing to tell the truth. If you've lived through something that might help someone else feel less alone, Carrie wants to hear it.",
    cta: { label: "Share Your Story", href: "/share-your-story" },
  },
};

export const episodes = {
  meta: {
    title: "Episodes — Blended & Unfiltered with Carrie Bollock",
    description:
      "Browse all episodes of Blended & Unfiltered. Real conversations about blended families, mental health, and faith.",
  },
  items: [
    {
      id: 3,
      number: 3,
      season: 1,
      title: "When Your Stepkid Hates You (And What You Do Next)",
      date: "03/25/2026",
      duration: "48 min",
      description:
        "Stepmom Jenna Harris came on expecting to talk about co-parenting tactics. What happened instead was an honest reckoning with rejection, identity, and the moment she decided to stop trying to be liked and start trying to be consistent. This one will hit close to home.",
      thumbnail: "/images/episode-3-thumb.jpg",
      tags: ["stepparenting", "rejection", "identity"],
      platforms: {
        spotify: "PENDING",
        apple: "PENDING",
      },
    },
    {
      id: 2,
      number: 2,
      season: 1,
      title: "Co-Parenting With Someone You Don't Trust",
      date: "03/18/2026",
      duration: "52 min",
      description:
        "What do you do when the other parent isn't safe, isn't reliable, or simply won't cooperate — and your kids are caught in the middle? Family therapist Dr. Renee Stokes walks through what research actually says about protecting your kids without burning everything down.",
      thumbnail: "/images/episode-2-thumb.jpg",
      tags: ["co-parenting", "trust", "therapy"],
      platforms: {
        spotify: "PENDING",
        apple: "PENDING",
      },
    },
    {
      id: 1,
      number: 1,
      season: 1,
      title: "Why I Started This Show",
      date: "03/11/2026",
      duration: "31 min",
      description:
        "Carrie sits down alone for the first episode to talk about what led her here — the years of pretending things were fine, the moment she stopped, and why she believes the most radical thing a blended family can do is tell the truth about what it actually costs.",
      thumbnail: "/images/episode-1-thumb.jpg",
      tags: ["introduction", "personal", "mission"],
      platforms: {
        spotify: "PENDING",
        apple: "PENDING",
      },
    },
  ],
};

export const guestForm = {
  meta: {
    title: "Share Your Story — Blended & Unfiltered with Carrie Bollock",
    description:
      "Every episode starts with someone willing to tell the truth. Share your story with Carrie.",
  },
  headline: "Your Story\nDeserves to Be Heard.",
  missionStatement:
    "Blended & Unfiltered features real people — not experts with clipboards, not influencers with perfect houses. If you've lived through something that might help someone else feel less alone in their blended family, their grief, or their recovery, Carrie wants to hear about it. Anonymous submissions are welcome.",
  anonymousNote:
    "You can share your story anonymously. Carrie will reach out before any episode is recorded — nothing gets published without your full consent.",
  fields: {
    name: { label: "Your Name", placeholder: "First name, or leave blank to stay anonymous", required: false },
    contact: { label: "Best Way to Reach You", placeholder: "Email or phone — only used to follow up", required: false },
    story: { label: "Tell Us Your Story", placeholder: "Give us the short version — what happened, where you are now, and why you think it might help someone else. 3-5 sentences is plenty.", required: true },
    topics: { label: "Topics That Apply", placeholder: "e.g. stepparenting, co-parenting, divorce, mental health, faith, recovery — whatever fits", required: false },
  },
  submitLabel: "Submit Your Story",
  successMessage:
    "Thank you for trusting us with your story. Carrie reads every submission personally. If your story is a good fit for the show, she'll be in touch within two weeks.",
};

export const connect = {
  meta: {
    title: "Connect — Blended & Unfiltered with Carrie Bollock",
    description:
      "Subscribe to the email list, listen on your favorite podcast platform, and follow Blended & Unfiltered on social.",
  },
  headline: "Stay Connected.",
  subscribeHeadline: "Never Miss an Episode.",
  subscribeBody:
    "Get new episodes, guest stories, and occasional resources delivered to your inbox. No fluff. Unsubscribe anytime.",
  emailForm: {
    placeholder: "Your email address",
    cta: "Subscribe",
    successMessage: "You're in. New episodes come out weekly — check your inbox.",
  },
  emailFormAction: "PENDING", // email tool API endpoint — update when confirmed
  platforms: [
    { name: "Spotify", url: "PENDING", icon: "spotify" },
    { name: "Apple Podcasts", url: "PENDING", icon: "apple" },
    { name: "Amazon Music", url: "PENDING", icon: "amazon" },
    { name: "Google Podcasts", url: "PENDING", icon: "google" },
  ],
  social: [
    { name: "Instagram", url: "PENDING", icon: "instagram" },
    { name: "Facebook", url: "PENDING", icon: "facebook" },
    { name: "TikTok", url: "PENDING", icon: "tiktok" },
  ],
};

export const footer = {
  tagline: "Real stories. Messy middle. Hard-won hope.",
  links: [
    { label: "Episodes", href: "/episodes" },
    { label: "About", href: "/about" },
    { label: "Share Your Story", href: "/share-your-story" },
    { label: "Connect", href: "/connect" },
  ],
  legal:
    "© 2026 Blended & Unfiltered. All rights reserved. Built by SkemaLS.",
};
