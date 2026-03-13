import React, { createContext, useEffect, useState } from "react";
import { genres } from "../data";


export const SORT_OPTIONS = [
    {key: "default", label: "Default"},
    {key: "newest", label: "Newest"},
    {key: "oldest", label: "Oldest"},
    {key: "title_a-z", label: "A - Z"},
    {key: "title_z-a", label: "Z - A"}
];

export const PodcastContext = createContext();

export function PodcastProvider({ children, initialPodcast}){
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("default");
  const [filter, setFilter] = useState("all-genres");
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  useEffect(() => {
    const calculatePageSize = () =>{
        const screenWidth = window.innerWidth;

        if (screenWidth <= 1024){
            setPageSize(10);
            return;
        }

        const cardWidth = 260;
        const maxRows = 2;
        const columns = Math.floor(screenWidth/cardWidth);
        const pageSize = columns * maxRows;

        setPageSize(pageSize);
        };

        calculatePageSize();
        window.addEventListener("resize", calculatePageSize);
        return () => window.removeEventListener("resize", calculatePageSize);
  }, []);

  const applyFilters = () => {
    let data = [...initialPodcast];

    // search filter
    if (search.trim() !== '') {
        data = data.filter((podcast) =>
        podcast.title.toLowerCase().includes(search.toLowerCase())
        );
    }

    // genre filter
    if (filter && filter !== "all-genres") {
        const genreObj = genres.find((genre) => genre.title === filter);
        if (genreObj) {
        data = data.filter((p) => p.genres.includes(genreObj.id));
        }
    }

    // sort order
    if (sort === "default") {
        data = [...data].sort((a, b) => new Date(b.updated) - new Date(a.updated));
    } else if (sort === "title_a-z") {
        data = [...data].sort((a, b) => a.title.localeCompare(b.title));
    } 
    else if (sort === "title_z-a"){
        data = [...data].sort((a,b) => b.title.localeCompare(a.title));
    }
    else if (sort === "newest") {
        data = [...data].sort(
        (a, b) => new Date(b.updated) - new Date(a.updated));
    }
    else if (sort === "oldest"){
        data = [...data].sort(
        (a, b) => new Date(a.updated) - new Date(b.updated));
    }

    return data;
    
  };

  const filtered = applyFilters();
  const totalPages = Math.max(1, Math.ceil(filtered.length/pageSize));
  const currentPage = Math.min(page, totalPages);
  const paged = filtered.slice(
    (currentPage - 1 )* pageSize,
    currentPage * pageSize
  );

  useEffect(() => {
    setPage(1);
  }, [search, sort, filter]);

    const value = {
        search,
        setSearch,
        sort,
        setSort,
        filter,
        setFilter,
        page: currentPage,
        setPage,
        totalPages,
        podcasts: paged,
        allPodcastsCount: filtered.length,
    };

    return(
        <PodcastContext.Provider value={value}>{children}</PodcastContext.Provider>
    );

}