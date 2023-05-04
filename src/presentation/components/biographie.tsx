
import GitHub_Logo from '../assets/GitHub_Logo.png';
import Linkdin from '../assets/Linkdin.png';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { fetchBiographie } from '../thunks/fetchBiographie/fetchBiographie';


const Biographie = () => {
    const dispatch = useDispatch<AppDispatch>();
    const bio = useSelector((state: RootState) => state.biographie.biographie);
    const loading = useSelector((state: RootState) => state.biographie.loading);

    useEffect(() => {
        dispatch(fetchBiographie());
    }, [dispatch]);

    if (loading) {
        return <div>Chargement...</div>;
    }

    return (
        <div className="bg-gray-800 p-5  text-gray-300  border-2 border-blue-500 rounded-lg">
            <div className="text-center items-center  mx-auto">
                <div className="flex items-center justify-center">
                    <img src={bio?.picture} alt="mélaïna donati profil" className="rounded-full mr-4 w-20" />
                    <div>
                        <h2 className="text-white font-bold">{bio?.name}</h2>
                        <h3 className="italic">{bio?.function}</h3>
                        <h3 className="italic">{bio?.description}</h3>
                    </div>
                </div>
                <div className='mt-10'>
                    {bio?.body.split("\n\n").map((paragraph, index) => (
                        <p key={index} className="leading-8 pt-6">{paragraph}</p>
                    ))}
                </div>

                <div className="flex justify-center mt-5">
                    <a href={bio?.lkdn} rel="noopener noreferrer" target="_blank"  className="mx-2">
                        <img src={Linkdin} alt="logo lk" className="w-18 h-5"/>
                    </a>
                    <a href={bio?.github} rel="noopener noreferrer" target="_blank"  className="mx-2">
                        <img src={GitHub_Logo} alt="logo github" className="w-18 h-6"/>
                    </a>
                </div>
            </div>
        </div>
    );
};





export default Biographie;