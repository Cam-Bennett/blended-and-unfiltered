import { EpisodeCard } from "./EpisodeCard";

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

interface EpisodeGridProps {
  episodes: Episode[];
}

export function EpisodeGrid({ episodes }: EpisodeGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {episodes.map((episode, index) => (
        <EpisodeCard
          key={episode.id}
          episode={episode}
          revealDelay={((index % 3) + 1) as 0 | 1 | 2 | 3}
        />
      ))}
    </div>
  );
}
