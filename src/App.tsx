import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./blog-passion-dev/adapters/primary/components/header";
import Footer from "./blog-passion-dev/adapters/primary/components/footer";
import Accueil from "./blog-passion-dev/adapters/primary/pages/accueil";
import Articles from "./blog-passion-dev/adapters/primary/pages/articles";
import Bibliotheque from "./blog-passion-dev/adapters/primary/pages/bibliotheque";
import Projets from "./blog-passion-dev/adapters/primary/pages/projets";
import Contact from "./blog-passion-dev/adapters/primary/pages/contact";
import Article from "./blog-passion-dev/adapters/primary/pages/article";
import AboutMe from "./blog-passion-dev/adapters/primary/pages/quiSuisJe";

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
