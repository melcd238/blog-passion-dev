import { useSelector } from "react-redux";
import { useAppDispatch } from "../../../store/reduxStore";
import { blogSelectors } from '../selectors/blogSelectors';
import { currentLibRetrieval } from '../../../corelogic/usescases/currentLibRetrieval/currentLibRetrieval';
import { useEffect } from "react";

const Blogs = () =>{
    const dispatch = useAppDispatch();
    const blog = useSelector(blogSelectors);
    const { currentLibrairies } = blog;

    useEffect(() => {
        async function retrieveCurrentLibrairiesAsync() {
            await dispatch(currentLibRetrieval());
        }
        retrieveCurrentLibrairiesAsync();
    }, [dispatch]);


    return(
        <div className="bg-gray-800 p-5 text-gray-300 mx-10 my-10 border-2 border-blue-500 rounded-lg">
            <h2 className="text-center text-2xl mb-10"> Blogs</h2>
            {currentLibrairies?.blogs.map((blog, index) => (
                <div key={index}>
                        <a href={blog.link} rel="noopener noreferrer" target="_blank" className="hover-text-custom">Link: {blog.title}</a>
                </div>
            ))}
        </div>
    )
}

export default Blogs