import React from 'react'
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../provider/AuthContext';
import './Menu.css'

const Menu = () => {
  const{ user } = useAuth();
  return (
    <nav>
      <ul className='Menu'>
        {routes.map(route => {
          if (route.publicOnly  && user ) return null;
          if (route.private  && !user ) return null;
          return (
            <li key={route.to}>
              <NavLink 
                end
                style={({ isActive }) => ({
                  color: isActive ? 'red' : 'blue'
                })}
                to={route.to}
                >
                  {route.text}
              </NavLink>
            </li>
            )
        } )}
      </ul>
    </nav>
  );
}

const  routes = [];
routes.push({
  to: '/',
  text: 'Home',
  private: false,

});
routes.push({
  to: '/blog',
  text: 'Blog',
  private: false,

});
routes.push({
  to: '/movie',
  text: 'Peliculas',
  private: false,

});
routes.push({
  to: '/profile',
  text: 'Tu perfil',
  private: true,

});
routes.push({
  to: '/login',
  text: 'Iniciar sesion',
  private: false,
  publicOnly: true,
});
routes.push({
  to: '/logout',
  text: 'Cerrar sesion',
  private: true,

});

export { Menu };

// Opcion de componente para RUTEAR 
/* <li>
    <Link to="/">Home</Link>
    </li>
    <li>
    <Link to="/blog">Blog</Link>
    </li>
    <li>
    <Link to="/profile">Profile</Link>
    </li>
 */

//Opcion de componente para RUTEAR 
/*   <li>
    <NavLink 
      style={({ isActive }) => ({
        color: isActive ? "red" : "blue",
      })}
      to="/">Home</NavLink> 
    </li>
    <li>
    <NavLink 
      style={({ isActive }) => ({
        color: isActive ? "red" : "blue",
      })}
      to="/blog">Blog</NavLink>
    </li>
    <li>
    <NavLink 
      style={({ isActive }) => ({
        color: isActive ? "red" : "blue",
      })}
      to="/profile">Profile</NavLink>
    </li>
*/