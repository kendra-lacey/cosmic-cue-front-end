import { Link } from 'react-router-dom'

const NavBar = ({ user, handleLogout }) => {
  return (
    <nav>
      {user ?
        <ul>
          <li>Welcome, {user.name}</li>
          <li><Link to='/profiles'>Profiles</Link></li>
          <li><Link to='' onClick={handleLogout}>LOG OUT</Link></li>
          <li><Link to='/change-password'>Change Password</Link></li>
          <li><Link to='/fortunes'>Fortunes</Link></li>
          <li><Link to='/signs'>Sign</Link></li>
          <li><Link to='/blogs'>BLOGS</Link></li>
          <li><Link to='/blogs/new'>NEW BLOG</Link></li>
        </ul>
        :
        <ul>
          <li><Link to='/login'>Log In</Link></li>
          <li><Link to='/signup'>Sign Up</Link></li>
        </ul>
      }
    </nav>
  )
}

export default NavBar
