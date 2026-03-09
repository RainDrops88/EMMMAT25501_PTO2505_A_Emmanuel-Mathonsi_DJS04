export default function Filter (){
    return (
        <div className="filters">
            <lebel className="filter">Filter by:</lebel>
            <select name="all-genres" id="genre-list">
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
            <lebel className="sort">Sort by:</lebel>
            <select name="sort-by" id="sort-by">
                <option value="last-updated">Last updated</option>
                <option value="title_a-z">A-Z</option>
            </select>
        </div>
    )
}