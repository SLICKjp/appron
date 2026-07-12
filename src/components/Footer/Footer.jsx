import './footer.css'

const columns = [
  {
    title: 'Platform',
    links: ['How it works'],
  },
  {
    title: 'Company',
    links: ['About us', 'Contact'],
  },
]

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-about">
          <a href="#top" className="logo">appron</a>
          <p>Real cooks. Real food. Right at your door.</p>
        </div>

        {columns.map((col) => (
          <div className="footer-col" key={col.title}>
            <h4>{col.title}</h4>
            <ul>
              {col.links.map((link) => (
                <li key={link}>
                  <a href="#top">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="container footer-bottom">
        <p>© 2026 Appron Technologies Pvt Ltd. All rights reserved.</p>
        <div className="footer-legal">
          <a href="#top">Privacy</a>
          <a href="#top">Terms</a>
          <a href="#top">Cookies</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
