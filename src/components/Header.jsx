export default function Header(search) {

  return (
    <header className="app-header">
      <h1>🎙️ Podcast App</h1>
      <div className="search">
      <input className="search-bar" type="text" placeholder="" onChange={search} />
      <button className="search-btn">Search</button>
      </div>
    </header>

  );
}
