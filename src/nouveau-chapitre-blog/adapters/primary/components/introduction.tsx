import logoMap from '../assets/logoMap.png';

const Introduction = () => {
    return (
        <div className="bg-gray-800 p-5  text-gray-300 mx-10 my-10 border-2 border-blue-500 rounded-lg">
        <div className="text-center items-center flex mx-auto">
                     <img src={logoMap} alt="logo" className="w-20 h-20 mx-auto"/>
                    <h1 className="text-white text-2xl font-bold">Pourquoi Blog passion dev : Nouveau Chapitre...</h1>
                    <img src={logoMap} alt="logo" className="w-20 h-20 mx-auto"/>
            </div>
            <p className="mt-10">
            L'idée de créer ce blog m'est venue de mon désir profond d'aider les autres et de partager mon expérience en développement web, en particulier avec ceux qui
            sont en reconversion professionnelle. Au fil du temps, j'ai reçu de nombreuses demandes de conseils de la part de juniors sur LinkedIn, ce qui m'a montré qu'il
            y avait un besoin réel d'accompagnement et de ressources dans ce domaine.
            </p>
            <p className="mt-5">En parcourant ce blog, j'espère que vous y trouverez des ressources précieuses et des conseils utiles pour vous aider
            dans votre parcours de reconversion professionnelle.
            </p>
            <p className="italic text-gray-600 mt-5"> Mélaïna Donati - Développeuse web Js - React - Node - Nest.js - Craftswomanship</p>
        </div>
    );
}

export default Introduction;