import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./nouveau-chapitre-blog/adapters/primary/components/header";
import Footer from "./nouveau-chapitre-blog/adapters/primary/components/footer";
import Accueil from "./nouveau-chapitre-blog/adapters/primary/pages/accueil";

function App() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<Accueil />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    );
}

export default App;
