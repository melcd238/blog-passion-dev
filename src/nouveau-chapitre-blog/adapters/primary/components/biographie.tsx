


const Biographie = () => {
    return (
        <div className="bg-gray-800 p-5 rounded-lg text-gray-300 mx-10 my-10">
            <div className="text-center items-center  mx-auto">
                <div className="flex items-center justify-center">
                    <img src="https://via.placeholder.com/40" alt="Photo de profil" className="rounded-full mr-4" />
                    <div>
                        <h2 className="text-white font-bold">Mélaïna Donati</h2>
                        <h3 className="italic">Développeuse Front-End</h3>
                    </div>
                </div>
                <p className="mt-5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at risus in ante vulputate volutpat. 
                    Aliquam scelerisque augue non diam imperdiet, ut posuere mauris blandit. Sed nec turpis purus. 
                    Donec pretium quam non leo hendrerit, sit amet tristique magna faucibus.
                </p>
                <div className="flex justify-center mt-5">
                    <a href="#" className="mx-2">
                        <i className="fab fa-linkedin fa-2x"> linkedin</i>
                    </a>
                    <a href="#" className="mx-2">
                        <i className="fab fa-github fa-2x"> github</i>
                    </a>
                </div>
            </div>
        </div>
    );
};





export default Biographie;