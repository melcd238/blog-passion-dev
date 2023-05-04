import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState, AppDispatch } from '../redux/store';
import { fetchArticles } from '../thunks/fetchArticles/fetchArticles';


const Articles = () => {
  const tags = ["Reconversion", "Apprentissage", "Js - React", "Node - NestJs"];
  const dispatch = useDispatch<AppDispatch>();
  const articles = useSelector((state: RootState) => state.article.articles);
  const loading = useSelector((state: RootState) => state.article.loading);

  useEffect(() => {
    dispatch(fetchArticles());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }
  

  return (
    <div className="px-10">
      <h1 className="text-2xl font-bold text-center mb-20">Mes publications</h1>
      <p className='mb-6 italic text-gray-500'>Cliquez sur un tag pour afficher les articles associés et trouver facilement les sujets qui vous passionnent:</p>
      <div className="flex flex-wrap mb-8">
        {tags.map((tag) => (
          <button
            key={tag}
            className="bg-blue-500 text-white rounded px-1 py-1 m-1 hover:bg-blue-400 hover:text-white transition-colors"
          >
            {tag}
          </button>
        ))}
      </div>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <Link key={article.id} to={`/articles/${article.id}`}>
            <div className="border-2 border-blue-500 rounded-lg p-4 bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white hover:border-blue-400 transition-all transform hover:scale-105 w-70 flex flex-col mx-auto">
              <div className="w-full h-56 relative rounded-t-lg overflow-hidden">
                <img src={article.imgUrl} alt={article.title} className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col justify-between flex-grow p-2">
                <h2 className="text-lg font-bold mb-2 h-14">{article.title}</h2>
                <p className="text-gray-300 mb-2">{article.summary}</p>
                <div className="flex justify-between items-center">
                  <p className="text-gray-500 italic">{article.author}</p>
                  <p className="text-gray-500 italic mr-4">{article.publicationDate}</p>
                </div>
                <div className="inline-block mt-2">
                  <span className="bg-blue-500 text-white rounded px-2 py-1">
                    {article.tag}
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
  
  
  
  
  
};

export default Articles;
