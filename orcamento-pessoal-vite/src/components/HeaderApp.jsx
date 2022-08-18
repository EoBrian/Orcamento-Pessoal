import './HeaderApp.css'
import { Link } from "react-router-dom"

import Justify from '../assets/justify.svg'

const HeaderApp = () => {
  return (
    <div className='header-app'>
      <div>
          <Link className='logo' to="/">Orçamento Pessoal</Link>
        </div>
        <nav className="navegation-bar">
          <ul>
            <li>
              <Link className='nav-link' to="/query">
                <img className='icon' src={Justify} alt="justify icon" />
              </Link>
            </li>
          </ul>
        </nav>
        <div className="clear"></div>
    </div>
  )
}

export default HeaderApp