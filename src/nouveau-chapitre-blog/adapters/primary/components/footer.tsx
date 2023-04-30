


const Footer = () => {
  return (
    <footer className="bg-gray-800 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between mb-4 border-b-2 border-gray-700 pb-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Contact</h3>
            <p className="text-gray-400">contact@monsite.com</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Navigation</h3>
            <ul className="text-gray-400">
              <li><a href="/">Accueil</a></li>
              <li><a href="/articles">Articles</a></li>
              <li><a href="/a-propos">À propos</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Tags</h3>
            <ul className="text-gray-400">
              <li>Reconversion</li>
              <li>Apprentissage</li>
              <li>React</li>
              <li>Mon histoire</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Newsletter</h3>
            <form>
              <label htmlFor="email" className="sr-only">Email</label>
              <input type="email" id="email" placeholder="Entrez votre email" className="bg-gray-700 rounded-lg py-2 px-3 text-gray-400 w-full mb-2" />
              <button type="submit" className="btn-submit">S'abonner</button>
            </form>
          </div>
        </div>
        <p className="text-white text-center font-italic">© 2023 - Tous droits réservés - Mélaïna Donati</p>
      </div>
    </footer>
  );
};

export default Footer;
