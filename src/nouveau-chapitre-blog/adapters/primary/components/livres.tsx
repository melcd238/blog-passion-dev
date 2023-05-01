import CleanCode from '../assets/livresCouverture/cleanCode.png'
import DataStructure from '../assets/livresCouverture/datastructure.png'
import SoftwareCraft from '../assets/livresCouverture/softwareCraft.png'

const Livres = () => {
  return (
    <div className="bg-gray-800 p-5  text-gray-300 mx-10 my-10 border-2 border-blue-500 rounded-lg">
      <h2 className="text-center text-2xl mb-10">Mes lectures</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 justify-center items-stretch">
        <div className="flex flex-col items-center border rounded-xl bg-slate-50 p-4 h-full flex-1">
          <img src={CleanCode} alt="Clean code livre" className="w-40 h-40" />
          <p className="text-center text-gray-700 pt-3">Clean Code <br/> A Handbook of Agile Software Craftsmanship</p>
        </div>
        <div className="flex flex-col items-center border rounded-xl bg-slate-50 p-4 h-full flex-1">
          <img src={DataStructure} alt="data structures and algorithms" className="w-40 h-40" />
          <p className="text-center text-gray-700 pt-3">Data Structures and Algorithms <br/>A common sens Guide </p>
        </div>
        <div className="flex flex-col items-center border rounded-xl bg-slate-50 p-4 h-full flex-1">
          <img src={SoftwareCraft} alt="software Craft" className="w-40 h-40" />
          <p className="text-center text-gray-700 pt-3">Software Craft <br/> TDD, Clean code et pratiques essentielles</p>
        </div>
      </div>
    </div>
  )
}

export default Livres;