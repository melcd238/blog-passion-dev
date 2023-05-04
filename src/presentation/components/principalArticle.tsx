import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { fetchArticles } from "../thunks/fetchArticles";



const PrincipalArticle = () => {
  const dispatch = useDispatch<AppDispatch>();
  const principalArticle = useSelector((state: RootState) => state.article.articles[0]);
  const loading = useSelector((state: RootState) => state.article.loading);

  useEffect(() => {
    dispatch(fetchArticles());
  }, [dispatch]);
   
  if (loading) {
    return <div>Chargement...</div>;
  } 

    return (
      <div className="mx-10 my-16">
         <div className="flex-1">
              <h1 className="text-3xl font-bold mb-2">{principalArticle?.title}</h1>
              <h2 className="text-lg text-gray-400 mb-2 italic">{principalArticle?.summary}</h2>
              <p className="text-gray-400 mb-2 italic">{principalArticle?.publicationDate} - Dernier article publié</p>
              <div className="bg-blue-500 text-white rounded px-2 py-1 inline-block mt-2">{principalArticle?.tag}</div>
    
         <div className="w-1/4 mt-4">
              <img src={principalArticle?.imgUrl} alt="orinateur"  className='rounded'/>
         </div>
       </div>

        <div className="my-10" >
        {principalArticle?.content.split("\n\n").map((paragraph, index) => (
           <p key={index} className="leading-8 pt-4">{paragraph}</p>
         ))}
        </div>
        
      </div>
    
    );
  };

export default PrincipalArticle;
