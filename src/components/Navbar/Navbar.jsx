import './navbar.css'

function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <a href="#top" className="logo">appron</a>

        <nav className="navbar-links">
          <a href="#how-it-works">How it works</a>
          <a href="#cuisines">Cuisines</a>
          <a href="#about">About</a>
        </nav>      
      </div>
    </header>
  )
}

export default Navbar
