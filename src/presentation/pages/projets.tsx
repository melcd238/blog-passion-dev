

const Projets = () => {
    return(
        <div className='py-6'>
            <h1 className='text-center mb-5 text-3xl font-bold'>Mes projets</h1>
            <p className='leading-8 px-8'>
            Retrouvez quelques-uns de mes projets réalisés.
            Ces projets illustrent mes compétences en JavaScript, React, Node, Nest et d'autres technologies,
            ainsi que mon attention portée à la qualité du code et de l'architecture.
            </p>
            <p className='leading-8 px-8'>
            Mon projet principal( ce blog)  comprend deux applications front-end distinctes : 
            le blog que vous consultez actuellement, et un tableau de bord personnalisé pour gérer le contenu
            du blog et suivre mes activités. Les deux applications front-end sont soutenues
            par un back-end commun, qui gère l'interaction entre les deux interfaces et assure leur bon
            fonctionnement.
            </p>
        </div>
    )
}

export default Projets;