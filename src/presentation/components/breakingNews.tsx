import logoMap from '../assets/logoMap.png';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { fetchBreakingnews } from '../thunks/fetchBreakingnews/fetchBreakingnews';


const BreakingNews = () => {
    const dispatch = useDispatch<AppDispatch>();
    const breakingnews = useSelector((state: RootState) => state.breakingnews.breakingnews);
    const loading = useSelector((state: RootState) => state.breakingnews.loading);

    useEffect(() => {
        dispatch(fetchBreakingnews());
    }, [dispatch]);

    if (loading) {
        return <div className="text-white text-2xl font-bold">Loading...</div>;
    }

    return (
        <div className="bg-gray-800 p-5  text-gray-300 mx-10 my-10 border-2 border-blue-500 rounded-lg">
            <div className="text-center items-center flex mx-auto mb-10">
                     <img src={logoMap} alt="logo" className="w-20 h-20 mx-auto"/>
                    <h1 className="text-white text-2xl font-bold">Breaking news</h1>
                    <img src={logoMap} alt="logo" className="w-20 h-20 mx-auto"/>
            </div>
            <div>
                <h2 className="text-white text-xl font-bold">{breakingnews?.title}</h2>
                <div className="mt-4">
                   {breakingnews?.content.split("\n\n").map((paragraph, index) => (
                        <p key={index} className="leading-8 pt-4">{paragraph}</p>
                    ))}
                </div>
                <p className="italic text-gray-600 mt-5"> {breakingnews?.author}</p>
            </div>
        </div>
    );
}

export default BreakingNews;