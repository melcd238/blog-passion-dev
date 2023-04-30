import { NavLink, useLocation } from 'react-router-dom';
import Logo from '../assets/logoBlog.png';


const Header =()=>{
    const location = useLocation();

    const isActive = (path: string) => {
    return location.pathname === path;
};
    return(
        <header className="h-15 flex justify-between items-center px-40">
             <div style={{ width: '90px', height: '90px' }}>
                 <img src={Logo} alt="Logo du blog" className="w-full h-full object-contain" />
             </div>
             <nav>
                <ul className="flex space-x-5 text-lg font-bold">
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