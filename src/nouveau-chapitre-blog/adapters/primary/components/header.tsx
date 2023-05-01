import { NavLink, useLocation } from 'react-router-dom';
import Logo from '../assets/logoBlog.png';


const Header =()=>{
    const location = useLocation();

    const isActive = (path: string) => {
    return location.pathname === path;
};
    return(
        <header className="px-4 md:px-40 py-2 flex flex-col lg:flex-row justify-center md:justify-between items-center">
             <div style={{ width: '110px', height: '110px' }} className="w-24 h-24 md:w-36 md:h-36 mb-2 md:mb-0">
                 <img src={Logo} alt="Logo du blog" className="w-full h-full object-contain" />
             </div>
             <nav>
                <ul className="flex space-x-2 md:space-x-5 text-x1 md:text-xl">
                    <li><NavLink to="/" className={`${isActive('/') ? 'active-text-custom' : 'hover-text-custom'}`}>Accueil</NavLink></li>
                    <li><NavLink to="/articles" className={`${isActive('/articles') ? 'active-text-custom' : 'hover-text-custom'}`}>Articles</NavLink></li>
                    <li><NavLink to="/bibliotheque" className={`${isActive('/bibliotheque') ? 'active-text-custom' : 'hover-text-custom'}`}>Bibliothèque</NavLink></li>
                    <li><NavLink to="/projets" className={`${isActive('/projets') ? 'active-text-custom' : 'hover-text-custom'}`}>Projets</NavLink></li>
                    <li><NavLink to="/contact" className={`${isActive('/contact') ? 'active-text-custom' : 'hover-text-custom'}`}>Contact</NavLink></li>
                </ul>
             </nav>
        </header>
    )
}

export default Header;