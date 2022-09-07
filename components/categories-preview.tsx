// Aquí se ha hecho una copia de Post Preview, adaptando los parámetros...
// No ha funcionado.

import Link from 'next/link'
import Categories from './categories'

export default function CategoriesPreview({
    categories,
    category,
    name,
    slug
  }) {
    return (
      <div>
         <h3 className="text-3xl mb-3 leading-snug">
         Hola
        </h3>
        <h3 className="text-3xl mb-3 leading-snug">
          <Link href={`/${category}`}>
            <a
              className="hover:underline"
              dangerouslySetInnerHTML={{ __html: name }}
            ></a>
          </Link>
        </h3>
      </div>
    )
  }
  