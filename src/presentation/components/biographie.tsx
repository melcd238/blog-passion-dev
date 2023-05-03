import pictMe from '../assets/pictMe.jpg';
import GitHub_Logo from '../assets/GitHub_Logo.png';
import Linkdin from '../assets/Linkdin.png';


const Biographie = () => {
    return (
        <div className="bg-gray-800 p-5  text-gray-300  border-2 border-blue-500 rounded-lg">
            <div className="text-center items-center  mx-auto">
                <div className="flex items-center justify-center">
                    <img src={pictMe} alt="mélaïna donati profil" className="rounded-full mr-4" />
                    <div>
                        <h2 className="text-white font-bold">Mélaïna Donati</h2>
                        <h3 className="italic">Développeuse web Js - React - Node - Nest.js</h3>
                        <h3 className="italic">Craftswomanship</h3>
                    </div>
                </div>
                <p className="mt-5">
                En tant que spécialiste en JavaScript et React, je possède une solide expérience dans le développement front-end
                tout en ayant également des compétences en back-end, grâce à ma maîtrise de Node et Nest. Animée par les principes
                du software craftsmanship, je porte une attention particulière à la qualité de mon travail en adoptant des pratiques telles
                que le Test-Driven Development (TDD), le Clean Code et la Clean Architecture.
                Mon objectif est de créer des solutions élégantes et durables qui répondent aux besoins de mes clients et garantissent
                 une expérience utilisateur exceptionnelle.
                </p>
                <p className="mt-5">🦷 Chirurgienne-dentiste de formation, mon expérience en tant que dentiste m'apporte une perspective unique et des
                     compétences transférables telles que ma capacité à apprendre et à m'adapter, la rigueur, l'organisation, l'empathie,
                      la communication, l'éthique et le professionnalisme.
                </p>
                <div className="flex justify-center mt-5">
                    <a href="https://www.linkedin.com/in/melainadonati/" rel="noopener noreferrer" target="_blank"  className="mx-2">
                        <img src={Linkdin} alt="logo lk" className="w-18 h-5"/>
                    </a>
                    <a href="https://github.com/melcd238" rel="noopener noreferrer" target="_blank"  className="mx-2">
                        <img src={GitHub_Logo} alt="logo github" className="w-18 h-6"/>
                    </a>
                </div>
            </div>
        </div>
    );
};





export default Biographie;