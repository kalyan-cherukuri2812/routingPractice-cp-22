import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <div className="header">
    <div className="h-card-1">
      <img
        className="h-img"
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
      />
      <h1 className="h-h">Wave</h1>
    </div>
    <ul className="h-card-2">
      <Link className="link" to="/">
        Home
      </Link>
      <Link className="link" to="/about">
        About
      </Link>
      <Link className="link" to="/contact">
        Contact
      </Link>
    </ul>
  </div>
)

export default Header
