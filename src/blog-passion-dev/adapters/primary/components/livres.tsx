import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../../store/reduxStore";
import { blogSelectors } from '../selectors/blogSelectors';
import { currentLibRetrieval } from '../../../corelogic/usescases/currentLibRetrieval/currentLibRetrieval';

const Livres = () => {
  const dispatch = useAppDispatch();
  const blog = useSelector(blogSelectors);
  const { currentLibrairies } = blog;

  useEffect(() => {
    async function retrieveCurrentLibrairiesAsync() {
      await dispatch(currentLibRetrieval());
    }
    retrieveCurrentLibrairiesAsync();
  }, [dispatch]);
  

  return (
    <div className="bg-gray-800 p-5  text-gray-300 mx-10 my-10 border-2 border-blue-500 rounded-lg">
      <h2 className="text-center text-2xl mb-10">Mes lectures</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 justify-center items-stretch">
        {currentLibrairies?.books.map((book, index) => (
          <div key={index} className="flex flex-col items-center border rounded-xl bg-slate-50 p-4 h-full flex-1">
            <img src={book.picture} alt={book.title} className="w-40 h-40" />
            <p className="text-center text-gray-700 pt-3">{book.title}</p>
            <a href={book.link} target="_blank" rel="noreferrer" className="text-center text-blue-500 hover:text-blue-700 underline">Lien</a> 
          </div>
        ))}
      </div>
    </div>
  )
}

export default Livres;