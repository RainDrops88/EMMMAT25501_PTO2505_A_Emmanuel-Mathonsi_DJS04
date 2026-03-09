export default function Filter({ filter, onFilterChange, sort, onSortChange }) {
    return (
        <div className="filters">
            <label className="filter">Filter by:</label>
            <select 
                name="all-genres"
                id="genre-list"
                value={filter}
                onChange={onFilterChange}
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
                onChange={onSortChange}
            >
                <option value="last-updated">Last updated</option>
                <option value="title_a-z">A-Z</option>
            </select>
        </div>
    );
}