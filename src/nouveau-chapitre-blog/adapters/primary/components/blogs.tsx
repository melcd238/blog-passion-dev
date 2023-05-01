

const Blogs = () =>{
    return(
        <div className="bg-gray-800 p-5 text-gray-300 mx-10 my-10 border-2 border-blue-500 rounded-lg">
            <h2 className="text-center text-2xl mb-10"> Blogs</h2>
            <div>
                <a href="https://flw.sh/ancyrweb" rel="noopener noreferrer" target="_blank" className="hover-text-custom">Link: Blog d'Anthony Cyrille</a>
            </div>
            <div>
                <a href="https://blog.mathieueveillard.com/" rel="noopener noreferrer" target="_blank" className="hover-text-custom">Link: Blog de Mathieu Eveillard</a>
            </div>
            <div>
                <a href="https://arnolanglade.github.io/blog/" rel="noopener noreferrer" target="_blank" className="hover-text-custom">Link: Blog de Arnaud Langlade</a>
            </div>
        </div>
    )
}

export default Blogs