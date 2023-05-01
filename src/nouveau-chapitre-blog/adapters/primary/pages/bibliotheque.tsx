import Livres from '../components/livres';
import Apprentissage from '../components/apprentissage';
import Blogs from '../components/blogs';


const bibliotheque = () => {
    return (
    <div className='py-6'>
        <h1 className='text-center mb-5 text-3xl font-bold'>Ma bibliothèque</h1>
            <p className='leading-8 px-8'>Je vous invite à découvrir les ressources qui m'ont accompagné et continuent de m'accompagner
                dans mon parcours en tant que développeuse. Vous y trouverez une sélection de livres sur le développement,
                des plateformes d'apprentissage en ligne, ainsi que les blogs et podcasts qui
                m'ont aidé lors de ma reconversion professionnelle. Ces sources d'inspiration et d'information ont joué
                un rôle crucial dans mon évolution et mon épanouissement dans le domaine du développement informatique.
                J'espère que vous y trouverez également des idées et des conseils précieux pour enrichir vos connaissances
                et améliorer vos compétences.
            </p>
        <Livres/>
        <Apprentissage/>
        <Blogs/>
    </div>
    );
    };

export default bibliotheque;