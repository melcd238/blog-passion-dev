import NewsletterSubscribe from "../components/newsletterSubscribe";
import Linkdin from "./../assets/Linkdin.png";


const Contact = () => {
    return (
        <div className="mx-10 my-10">
          <h1 className="text-3xl font-bold mb-8">Contactez-moi</h1>
          <p className="text-lg mb-4">
          Si vous êtes un junior en reconversion à la recherche de conseils et de ressources en développement JavaScript et React,
         ou si vous êtes simplement curieux de découvrir mon parcours et mon travail, je suis là pour vous aider. 
         Mon objectif est de partager mon expérience et mes connaissances pour soutenir ceux qui cherchent à se lancer dans une nouvelle carrière dans le développement web.
          </p>
          <p className="text-lg mb-4">
          Si vous êtes un CTO, Tech Lead, recruteur ou tout autre professionnel à la recherche d'une développeuse front-end et back-end passionnée,
          et que vous appréciez mon travail sur ce blog et souhaitez en savoir plus sur mes compétences et mon expérience en développement front-end et back-end, n'hésitez pas à me contacter.
          Ce blog me permet de partager mon expertise et mon attention à la qualité du travail, et je serais ravie de discuter de projets ou
          de collaborations où je pourrais mettre en pratique ces compétences.
          </p>
          <p className="text-lg mb-4 italic">Vous pouvez me contacter par e-mail à l'adresse suivante ou via Linkedin:</p>
          <div className="text-blue-500 text-lg mb-10 flex items-center justify-around">
            <p>exemple@votre-email.com</p>
            <a href="https://www.linkedin.com/in/melainadonati/" rel="noopener noreferrer" target="_blank">
                        <img src={Linkdin} alt="logo lk" className="w-18 h-5"/>
                    </a>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Abonnez-vous à ma newsletter</h2>
            <NewsletterSubscribe />
          </div>
        </div>
      );
    };

export default Contact;