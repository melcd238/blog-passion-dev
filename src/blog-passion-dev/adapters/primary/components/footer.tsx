import { Link } from "react-router-dom";
import NewsletterSubscribe from "./newsletterSubscribe";
import Linkdin from "./../assets/Linkdin.png";
import GitHub_Logo from '../assets/GitHub_Logo.png';



const Footer = () => {

  return (
    <footer className="bg-gray-800 py-6">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-wrap justify-between md:flex-no-wrap mb-4 border-b-2 border-gray-700 pb-4">
          <div className="w-full md:w-auto mb-4 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Contact</h3>
            <p className="text-gray-400 pb-2">melaina.donati@gmail.com</p>
            <a href="https://www.linkedin.com/in/melainadonati/" rel="noopener noreferrer" target="_blank">
                <img src={Linkdin} alt="logo lk" className="w-18 h-5 pb-1"/>
            </a>
            <a href="https://github.com/melcd238" rel="noopener noreferrer" target="_blank">
                        <img src={GitHub_Logo} alt="logo github" className="w-18 h-6 pb-1"/>
            </a>
          </div>
          <div className="w-full md:w-auto mb-4 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Navigation</h3>
            <ul className="text-gray-400">
              <li><Link to="/" className="hover-text-custom">Accueil</Link></li>
              <li><Link to="/qui-suis-je" className="hover-text-custom">Qui suis-je?</Link></li>
              <li><Link to="/articles" className="hover-text-custom">Articles</Link></li>
              <li><Link to="/bibliotheque" className="hover-text-custom">Bibliothèque</Link></li>
              <li><Link to="/projets" className="hover-text-custom">Projets</Link></li>
              <li><Link to="/contact" className="hover-text-custom">Contact</Link></li>
            </ul>
          </div>
          <div className="w-full md:w-auto mb-4 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Tags</h3>
            <ul className="text-gray-400">
              <li>Reconversion</li>
              <li>Apprentissage</li>
              <li>Js - React</li>
              <li>Node - Nest</li>
            </ul>
          </div>
          <NewsletterSubscribe />
        </div>
        <p className="text-white text-center text-sm font-italic">© 2023 - Tous droits réservés - Mélaïna Donati</p>
      </div>
    </footer>
  );
};

export default Footer;
