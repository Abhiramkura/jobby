import {Link, withRouter} from 'react-router-dom'

import Cookies from 'js-cookie'

import './index.css'

const Header = props => {
  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }

  return (
    <nav className="nav-header">
      <ul className="nav-elements-list">
        <li>
          <Link to="/">
            <img
              src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
              alt="website logo"
              className="website-logo margins"
            />
          </Link>
        </li>
        <li className="nav-elements-list2">
          <Link to="/" className="nav-item">
            <li>Home</li>
          </Link>
          <Link to="/jobs" className="nav-item">
            <li>Jobs</li>
          </Link>
        </li>
        <li>
          <div className="button-container">
            <button
              type="button"
              className="logout-btn"
              onClick={onClickLogout}
            >
              {' '}
              Logout{' '}
            </button>
          </div>
        </li>
      </ul>
    </nav>
  )
}

export default withRouter(Header)
