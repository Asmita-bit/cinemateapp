import { Link } from "react-router-dom"
import Error from "../assets/images/pagenotfound.jpg"


export const PageNotFound = () => {
  return (
    <main>
      <section className="flex items-center flex-col px-2">
        <div className="max-w-lg py-7" >
          <img className="rounded" src={Error} alt="page not found" />
        </div>
        <div className="py-2 flex justify-center">
          <Link to="/">
          <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Back to Home</button>
          </Link>
        </div>
      </section>
    </main>
  )
}
