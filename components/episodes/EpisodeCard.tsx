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

interface EpisodeCardProps {
  episode: Episode;
  revealDelay?: 0 | 1 | 2 | 3;
}

export function EpisodeCard({ episode, revealDelay = 0 }: EpisodeCardProps) {
  const delayClass = revealDelay > 0 ? `reveal-delay-${revealDelay}` : "";

  const platformUrl =
    episode.platforms.spotify !== "PENDING"
      ? episode.platforms.spotify
      : episode.platforms.apple !== "PENDING"
      ? episode.platforms.apple
      : null;

  const cardContent = (
    <>
      {/* Thumbnail area */}
      <div className="relative aspect-video bg-true-black overflow-hidden">
        <div
          className="absolute inset-0 flex items-end p-4"
          style={{
            background:
              "linear-gradient(to top, rgba(28,28,28,0.95) 0%, rgba(28,28,28,0.2) 60%, transparent 100%)",
          }}
        >
          <Badge>Ep. {episode.number}</Badge>
        </div>
        <div
          className="absolute inset-0 opacity-10"
          aria-hidden="true"
          style={{
            backgroundImage:
              "radial-gradient(circle at 30% 40%, #C1440E 0%, transparent 60%)",
          }}
        />
      </div>

      <div className="p-6">
        <p className="font-oswald font-600 text-xs tracking-widest uppercase text-ivory/40 mb-2">
          {episode.date} &nbsp;·&nbsp; {episode.duration}
        </p>
        <h3 className="font-oswald font-700 text-lg leading-tight text-ivory group-hover:text-rust transition-colors duration-150 mb-3">
          {episode.title}
        </h3>
        <p className="font-lato text-sm text-ivory/60 leading-relaxed line-clamp-3">
          {episode.description}
        </p>

        {(episode.platforms.spotify !== "PENDING" ||
          episode.platforms.apple !== "PENDING") && (
          <div className="mt-4 flex gap-3">
            {episode.platforms.spotify !== "PENDING" && (
              <span className="font-oswald font-600 text-xs tracking-widest uppercase text-ivory/50 group-hover:text-amber transition-colors duration-150">
                Spotify
              </span>
            )}
            {episode.platforms.apple !== "PENDING" && (
              <span className="font-oswald font-600 text-xs tracking-widest uppercase text-ivory/50 group-hover:text-amber transition-colors duration-150">
                Apple
              </span>
            )}
          </div>
        )}
      </div>
    </>
  );

  const sharedClass =
    "block bg-card-dark border border-white/8 hover:border-rust/40 transition-all duration-200 h-full";

  return (
    <article className={`reveal ${delayClass} group`}>
      {platformUrl ? (
        <Link
          href={platformUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={sharedClass}
        >
          {cardContent}
        </Link>
      ) : (
        <div className={sharedClass}>{cardContent}</div>
      )}
    </article>
  );
}
