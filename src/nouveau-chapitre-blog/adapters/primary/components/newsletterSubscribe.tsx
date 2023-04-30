


const NewsletterSubscribe = () => {
    return(
        <div className="w-full md:w-auto">
            <h3 className="text-lg font-semibold mb-2">Newsletter</h3>
            <p className="text-sm text-gray-500 italic pb-2">Soyez informé(e) dès qu'un nouvel article est publié.</p>
            <form>
              <label htmlFor="email" className="sr-only">Email</label>
              <input type="email" id="email" placeholder="Entrez votre email" className="bg-gray-700 rounded-lg py-2 px-3 text-gray-400 w-full mb-2" />
              <button type="submit" className="btn-submit">S'abonner</button>
            </form>
          </div>
    )

}

export default NewsletterSubscribe;