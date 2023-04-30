import { Link } from "react-router-dom";
import NewsletterSubscribe from "./newsletterSubscribe";



const Footer = () => {
  return (
    <footer className="bg-gray-800 py-6">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-wrap justify-between md:flex-no-wrap mb-4 border-b-2 border-gray-700 pb-4">
          <div className="w-full md:w-auto mb-4 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Contact</h3>
            <p className="text-gray-400">contact@monsite.com</p>
          </div>
          <div className="w-full md:w-auto mb-4 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Navigation</h3>
            <ul className="text-gray-400">
              <li><Link to="/">Accueil</Link></li>
              <li><Link to="/articles">Articles</Link></li>
              <li><Link to="/bibliotheque">Bibliothèque</Link></li>
              <li><Link to="/contact">Contact</Link></li>
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
