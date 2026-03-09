import { useEffect, useState } from "react";
import PodcastGrid from "./components/PodcastGrid";
import { genres } from "./data";
import { fetchPodcasts } from "./api/fetchPodcasts";
import Header from "./components/Header";
import Filter from "./components/Filter";

/**
 * App - The root component of the Podcast Explorer application. It handles:
 * - Fetching podcast data from a remote API
 * - Managing loading and error states
 * - Rendering the podcast grid once data is successfully fetched
 * - Displaying a header and fallback UI during loading or error
 * @returns {JSX.Element} The rendered application interface
 */
export default function App() {
  const [podcasts, setPodcasts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("last-updated");
  const [filteredPodcasts, setFilteredPodcasts] = useState([]);
  
  useEffect(() => {
    fetchPodcasts(setPodcasts, setError, setLoading);
  }, []);

  useEffect(() => {
    if (search.trim() !== '') {
      let results = podcasts.filter((podcast) => podcast.title.toLowerCase().includes(search.toLowerCase()));

      if (sort === "title_a-z") {
        results = results.sort((a, b) => a.title.localeCompare(b.title));
      } else if (sort === "last-updated") {
        results = results.sort((a, b) => new Date(b.updated) - new Date(a.updated));
      }

      setFilteredPodcasts(results);

    } else {
      let results = [...podcasts];
      if (sort === "title_a-z") {
        results = results.sort((a, b) => a.title.localeCompare(b.title));
      } else if (sort === "last-updated") {
        results = results.sort((a, b) => new Date(b.updated) - new Date(a.updated));
      }
      setFilteredPodcasts(results);
    }
  }, [podcasts, search, sort]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleSort = (e) => {
    setSort(e.target.value);
  };

  return (
    <>
      <Header search={search} onSearchChange={handleSearch} />
      <Filter sort={sort} onSortChange={handleSort} />
      <main>
        {loading && (
          <div className="message-container">
            <div className="spinner"></div>
            <p>Loading podcasts...</p>
          </div>
        )}

        {error && (
          <div className="message-container">
            <div className="error">
              Error occurred while tyring fetching podcasts: {error}
            </div>
          </div>
        )}

        {!loading && !error && (
          <PodcastGrid podcasts={filteredPodcasts} genres={genres} />
        )}
      </main>
    </>
  );
}
