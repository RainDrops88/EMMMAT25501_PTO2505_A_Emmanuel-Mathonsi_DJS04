import PodcastCard from "./PodcastCard";
import { useState } from "react";

/**
 * Displays a grid layout of podcast preview cards. Each card includes
 * podcast details such as title, image, genres, season count, and updated date.
 *
 * @param {Object} props
 * @param {Array<Object>} props.podcasts - Array of podcast objects to display.
 * @param {Array<Object>} props.genres - Array of genre objects used to map genre IDs to titles.
 *
 * @returns {JSX.Element} The rendered grid of podcast cards.
 *
 */
 export const handleSearch = (e) => {
    const keyword = e.target.value;
    setSearch(keyword)

    if (keyword.trim() !== ''){
      const results = podcasts.filter((podcast) => podcast.title.toLowerCase().include(keyword.toLowerCase()));
      setFilteredPodcast(results);
    } else {
      setFilteredPodcast(podcasts)
    }
  };

export default function PodcastGrid({ podcasts, genres }) {
  const [filteredPodcast, setFilteredPodcast] = useState(podcasts);
  const [search, setSearch] = useState("");
 
  return (
    <div className="grid">
      {podcasts.map((podcast) => (
        <PodcastCard key={podcast.id} podcast={podcast} genres={genres} />
      ))}
    </div>
  );
}
