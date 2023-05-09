import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../../store/reduxStore";
import { retrieveCurrentArticle } from "../../../corelogic/usescases/currentArticleRetrieval/retrieveCurrentArticle";
import { blogSelectors } from "../selectors/blogSelectors";



const PrincipalArticle = () => {
  const dispatch = useAppDispatch();
  const principalArticle = useSelector(blogSelectors);
  const { currentArticle } = principalArticle;

  useEffect(() => {
    async function retrieveCurrentArticleAsync() {
      await dispatch(retrieveCurrentArticle());
    }
    retrieveCurrentArticleAsync();
  }, [dispatch]);

    return (
      <div className="mx-10 my-16">
         <div className="flex-1">
              <h1 className="text-3xl font-bold mb-2">{currentArticle?.title}</h1>
              <h2 className="text-lg text-gray-400 mb-2 italic">{currentArticle?.summary}</h2>
              <p className="text-gray-400 mb-2 italic">{currentArticle?.publishDate}</p>
              <div className="bg-blue-500 text-white rounded px-2 py-1 inline-block mt-2">{currentArticle?.tag}</div>
    
         <div className="w-1/4 mt-4">
              <img src={currentArticle?.imgUrl} alt="orinateur"  className='rounded'/>
         </div>
       </div>

         <div className="my-10" >
        {currentArticle?.content.split("\n\n").map((paragraph, index) => (
           <p key={index} className="leading-8 pt-4">{paragraph}</p>
         ))}
        </div>
        
      </div>
    
    );
  };

export default PrincipalArticle;
