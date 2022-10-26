import Date from './date'
import CoverImage from './cover-image'
import Link from 'next/link'
import Categories from './categories'

export default function HeroCats ({categories}) {
  return (
    <section>
  <div className="py-8 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      <div className="mx-auto lg:mb-16 mb-8">
          <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight">Categorías</h2>
          <p>En 4thofJune encontrarás contenido sobre....</p>
      </div> 
      <div className="flex gap-8">
      <article className="rounded-md border-2 border-gray-100 bg-white p-14">
              <div className="flex justify-between items-center mb-5 text-gray-500">
                  <span className="text-sm">12 Artículos</span>
              </div>
              <h2 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
              Ideas
              </h2>
              <p className="mb-5 font-light text-gray-500 dark:text-gray-400">Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools that even influence both web designers and developers influence both web designers and developers.</p>
              <div className="flex justify-between items-center">
                  <a href="#" className="inline-flex items-center font-medium text-primary-600 dark:text-primary-500">
                      Explorar
                      <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                  </a>
              </div>
          </article>      
          <article className="rounded-md border-2 border-gray-100 bg-white p-14">
              <div className="flex justify-between items-center mb-5 text-gray-500">
                  <span className="text-sm">14 days ago</span>
              </div>
              <h2 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white"><a href="#">Ideas</a></h2>
              <p className="mb-5 font-light text-gray-500 dark:text-gray-400">Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools that even influence both web designers and developers influence both web designers and developers.</p>
              <div className="flex justify-between items-center">
                  <a href="#" className="inline-flex items-center font-medium text-primary-600 dark:text-primary-500">
                      Explorar
                      <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                  </a>
              </div>
          </article>                  
      </div>  
  </div>
    </section>
  )
}
