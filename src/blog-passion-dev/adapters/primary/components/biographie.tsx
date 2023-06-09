import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../../store/reduxStore";
import { blogSelectors } from '../selectors/blogSelectors';
import { retrieveCurrentBio } from "../../../corelogic/usescases/currentBioRetrieval/retriveCurrentBio";
import GitHub_Logo from '../assets/GitHub_Logo.png';
import Linkdin from '../assets/Linkdin.png';


const Biographie = () => {
    const dispatch = useAppDispatch();
    const bio = useSelector(blogSelectors);
    const { currentBio } = bio;

    useEffect(() => {
        async function retrieveCurrentBioAsync() {
            await dispatch(retrieveCurrentBio());
        }
        retrieveCurrentBioAsync();
    }, [dispatch]);


    return (
        <div className="bg-gray-800 p-5  text-gray-300  border-2 border-blue-500 rounded-lg">
            <div className="text-center items-center  mx-auto">
                <div className="flex items-center justify-center">
                    <img src={currentBio?.picture} alt="mélaïna donati profil" className="rounded-full mr-4 w-20" />
                    <div>
                        <h2 className="text-white font-bold">{currentBio?.name}</h2>
                        <h3 className="italic">{currentBio?.fonction}</h3>
                        <h3 className="italic">{currentBio?.description}</h3>
                    </div>
                </div>
                <div className='mt-10'>
                    {currentBio?.body.split("\n\n").map((paragraph, index) => (
                        <p key={index} className="leading-8 pt-6">{paragraph}</p>
                    ))}
                </div>

                <div className="flex justify-center mt-5">
                    <a href={currentBio?.lkdn} rel="noopener noreferrer" target="_blank"  className="mx-2">
                        <img src={Linkdin} alt="logo lk" className="w-18 h-5"/>
                    </a>
                    <a href={currentBio?.github} rel="noopener noreferrer" target="_blank"  className="mx-2">
                        <img src={GitHub_Logo} alt="logo github" className="w-18 h-6"/>
                    </a>
                </div>
            </div>
        </div>
    );
};





export default Biographie;