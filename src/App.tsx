import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./nouveau-chapitre-blog/adapters/primary/components/header";
import Footer from "./nouveau-chapitre-blog/adapters/primary/components/footer";
import Accueil from "./nouveau-chapitre-blog/adapters/primary/pages/accueil";
import Articles from "./nouveau-chapitre-blog/adapters/primary/pages/articles";
import Bibliotheque from "./nouveau-chapitre-blog/adapters/primary/pages/bibliotheque";
import Projets from "./nouveau-chapitre-blog/adapters/primary/pages/projets";
import Contact from "./nouveau-chapitre-blog/adapters/primary/pages/contact";
import Article from "./nouveau-chapitre-blog/adapters/primary/pages/article";

function App() {
    return (
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow mx-auto my-20 max-w-screen-xl px-10 flex flex-col items-center">
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/articles/:id" element={<Article />} />
            <Route path="/bibliotheque" element={<Bibliotheque />} />
            <Route path="/projets" element={<Projets />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    );
}

export default App;
