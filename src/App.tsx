import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./presentation/components/header";
import Footer from "./presentation/components/footer";
import Accueil from "./presentation/pages/accueil";
import Articles from "./presentation/pages/articles";
import Bibliotheque from "./presentation/pages/bibliotheque";
import Projets from "./presentation/pages/projets";
import Contact from "./presentation/pages/contact";
import Article from "./presentation/pages/article";
import AboutMe from "./presentation/pages/quiSuisJe";

function App() {
    return (
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow mx-auto my-20 max-w-screen-xl  flex flex-col items-center">
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/qui-suis-je" element={<AboutMe />} />
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
