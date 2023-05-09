import ImgOrdi from '../assets/imgOrdi.jpg';

const Article = () => {
    return (
        <div className="mx-10 my-10">
          <div className="flex-1 text-center">
            <h1 className="text-3xl font-bold mb-6">La programmation fonctionnelle en JavaScript</h1>
            <h2 className="text-lg text-gray-400  italic">Dans cet article, nous explorons les bases de la programmation fonctionnelle,
             en nous concentrant sur l'immuabilité, la composition et les fonctions pures.</h2>
          </div>

          <div className="flex justify-between my-8">
            <div className="bg-blue-500 text-white rounded px-2 py-1">Reconversion</div>
            <p className="text-gray-400 italic">Le 3 mai 2023</p>
          </div>
    
          <div className="w-1/4 mt-4 mx-auto">
            <img src={ImgOrdi} alt="ordinateur" className="rounded" />
          </div>
    
          <div className="text-justify">
            <p className="leading-8 my-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel nulla sed metus elementum mattis. Curabitur
              vel risus at metus condimentum interdum. Duis bibendum neque eu nisl finibus luctus. Sed varius, enim sit amet
              maximus fermentum, massa leo venenatis nibh, eu posuere quam ipsum a odio. Fusce non sapien non nisi semper
              consectetur quis non ex. Fusce tempor fringilla mi, ac aliquet ante. Aenean ut dui in enim pellentesque
              aliquet. Sed cursus ipsum vitae turpis auctor dictum. Sed pharetra, leo sed tincidunt faucibus, arcu tellus
              auctor urna, sit amet aliquet odio augue quis ante. Integer et tellus eu dolor interdum finibus. Nunc blandit,
              erat vel molestie blandit, nibh quam iaculis elit, sed volutpat urna odio vel ipsum.
            </p>
            <p className="leading-8 my-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel nulla sed metus elementum mattis. Curabitur
              vel risus at metus condimentum interdum. Duis bibendum neque eu nisl finibus luctus. Sed varius, enim sit amet
              maximus fermentum, massa leo venenatis nibh, eu posuere quam ipsum a odio. Fusce non sapien non nisi semper
              consectetur quis non ex. Fusce tempor fringilla mi, ac aliquet ante. Aenean ut dui in enim pellentesque
              aliquet. Sed cursus ipsum vitae turpis auctor dictum. Sed pharetra, leo sed tincidunt faucibus, arcu tellus
              auctor urna, sit amet aliquet odio augue quis ante. Integer et tellus eu dolor interdum finibus. Nunc blandit,
              erat vel molestie blandit, nibh quam iaculis elit, sed volutpat urna odio vel ipsum.
            </p>
            <p className="leading-8 my-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel nulla sed metus elementum mattis. Curabitur
              vel risus at metus condimentum interdum. Duis bibendum neque eu nisl finibus luctus. Sed varius, enim sit amet
              maximus fermentum, massa leo venenatis nibh, eu posuere quam ipsum a odio. Fusce non sapien non nisi semper
              consectetur quis non ex. Fusce tempor fringilla mi, ac aliquet ante. Aenean ut dui in enim pellentesque
              aliquet. Sed cursus ipsum vitae turpis auctor dictum. Sed pharetra, leo sed tincidunt faucibus, arcu tellus
              auctor urna, sit amet aliquet odio augue quis ante. Integer et tellus eu dolor interdum finibus. Nunc blandit,
              erat vel molestie blandit, nibh quam iaculis elit, sed volutpat urna odio vel ipsum.
            </p>
            
          </div>
    
          <div className="text-center italic mt-8">Mélaïna Donati</div>
        </div>
      );
};

export default Article;
