export default function Header({ search, onSearchChange }) {

  return (
    <header className="app-header">
      <h1>🎙️ Podcast App</h1>
      <div className="search">
      <input className="search-bar" type="text" placeholder="Search podcasts..." value={search} onChange={onSearchChange} />
      
      </div>
    </header>

  );
}
