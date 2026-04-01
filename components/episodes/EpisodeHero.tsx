import Link from "next/link";
import { Badge } from "@/components/ui/Badge";

interface Episode {
  id: number;
  number: number;
  season: number;
  title: string;
  date: string;
  duration: string;
  description: string;
  thumbnail: string;
  tags: string[];
  platforms: {
    spotify: string;
    apple: string;
  };
}

interface EpisodeHeroProps {
  episode: Episode;
}

export function EpisodeHero({ episode }: EpisodeHeroProps) {
  const hasPlatformLinks =
    episode.platforms.spotify !== "PENDING" ||
    episode.platforms.apple !== "PENDING";

  return (
    <article className="reveal">
      <div
        className="relative border border-white/8 overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #2A2A2A 0%, #1C1C1C 100%)",
        }}
      >
        {/* Atmospheric accent */}
        <div
          className="absolute top-0 right-0 w-64 h-64 opacity-20 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, #C1440E 0%, transparent 70%)",
          }}
          aria-hidden="true"
        />

        <div className="relative p-8 md:p-12">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <Badge variant="amber">Latest Episode</Badge>
            <Badge>Ep. {episode.number}</Badge>
          </div>

          <h2 className="font-oswald font-700 text-3xl md:text-5xl leading-tight text-ivory mb-4 max-w-2xl">
            {episode.title}
          </h2>

          <p className="font-lato text-base md:text-lg text-ivory/70 leading-relaxed mb-6 max-w-xl">
            {episode.description}
          </p>

          <div className="flex flex-wrap items-center gap-4">
            {hasPlatformLinks ? (
              <>
                {episode.platforms.spotify !== "PENDING" && (
                  <Link
                    href={episode.platforms.spotify}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-rust text-ivory font-oswald font-700 text-sm tracking-widest uppercase hover:bg-rust/90 transition-colors duration-150"
                  >
                    Listen on Spotify
                  </Link>
                )}
                {episode.platforms.apple !== "PENDING" && (
                  <Link
                    href={episode.platforms.apple}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 border border-white/20 text-ivory font-oswald font-600 text-sm tracking-widest uppercase hover:border-white/40 transition-colors duration-150"
                  >
                    Apple Podcasts
                  </Link>
                )}
              </>
            ) : (
              <Link
                href="/connect"
                className="inline-flex items-center px-6 py-3 bg-rust text-ivory font-oswald font-700 text-sm tracking-widest uppercase hover:bg-rust/90 transition-colors duration-150"
              >
                Find This Episode
              </Link>
            )}

            <p className="font-lato text-sm text-ivory/40">
              {episode.date} &nbsp;·&nbsp; {episode.duration}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
