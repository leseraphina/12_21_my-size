import { Link } from 'react-router-dom';
import './Nav.css'

function Nav(){
  return (
    <header>
      <div>
        <h1>
         <Link to="/"> HOME</Link>
          </h1>
        <ul>
          <li><Link to="list01">sample01</Link></li>
          <li><Link to="list02">sample02</Link></li>
          <li><Link to="list03">sample03-0</Link></li>
          <li><Link to="list03/list03-1">sample03-1</Link></li>
        </ul>
      </div>
    </header>
  )
}
export default Nav;