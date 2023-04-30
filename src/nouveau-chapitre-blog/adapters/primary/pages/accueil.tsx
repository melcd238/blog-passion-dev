import Biographie from "../components/biographie";
import PrincipalArticle from "../components/principalArticle";

const Accueil = () => {
    return (
        <div className="mx-auto my-20 max-w-screen-xl px-10 flex flex-col items-center three-d-shadow">
        <Biographie/>
        <PrincipalArticle/>
        </div>
    );
    };

export default Accueil;    