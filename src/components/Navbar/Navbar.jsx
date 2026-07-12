import './navbar.css'

function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <a href="#top" className="logo">appron</a>

        <nav className="navbar-links">
          <a href="#how-it-works">How it works</a>
          <a href="#cuisines">Cuisines</a>
          <a href="#cities">Cities</a>
          <a href="#about">About</a>
        </nav>

        <div className="navbar-actions">
          <a href="#signin" className="link-muted">Sign in</a>
          <a href="#book" className="btn btn-primary btn-sm">Book a cook</a>
        </div>
      </div>
    </header>
  )
}

export default Navbar
