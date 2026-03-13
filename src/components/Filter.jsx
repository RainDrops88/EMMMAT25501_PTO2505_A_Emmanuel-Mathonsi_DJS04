import { useContext } from "react";
import { PodcastContext, SORT_OPTIONS } from "../context/PodcastContext";

export default function Filter() {
    const { filter, setFilter, sort, setSort } = useContext(PodcastContext);
    return (
        <div className="filters">
            <label className="filter">Filter by:</label>
            <select 
                name="all-genres"
                id="genre-list"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                >
                <option value="all-genres" defaultValue>All genres</option>
                <option value="Personal Growth">Personal Growth</option>
                <option value="Investigative Journalism">Investigative Journalism</option>
                <option value="History">History</option>
                <option value="Comedy">Comedy</option>
                <option value="Entertainment">Entertainment</option>
                <option value="Business">Business</option>
                <option value="Fiction">Fiction</option>
                <option value="News">News</option>
                <option value="Kids and Family">Kids and Family</option>
            </select>
            <label className="sort">Sort by:</label>
            <select
                name="sort-by"
                id="sort-by"
                value={sort}
                onChange={(e) => setSort(e.target.value)}
            >
                <option value="default">Default</option>
                <option value="newest">Newest</option>
                <option value="oldest">Oldest</option>
                <option value="title_a-z">A-Z</option>
                <option value="title_z-a">Z-A</option>
            </select>
        </div>
    );
}