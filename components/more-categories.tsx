// Este componente es una copia de MorePosts. Tampoco ha funcionado.

import CategoriesPreview from "./categories-preview"

export default function MoreCategories({ categories }) {
  return (
    <section>
      <h2 className="mb-8 pt-16 text-3xl md:text-5xl font-semibold tracking-tighter leading-tight">
        Tal vez te interese...
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:grid-cols-3 lg:gap-x-32 xl:grid-cols-3 xl:gap-x-24 gap-y-20 md:gap-y-32 mb-32">
        {categories.map(({ node }) => (
          <CategoriesPreview
            key={node.slug}
            name={node.name}
            slug={node.slug}
            categories={node.categories}
            category={node.category}
            />
        ))}
      </div>
    </section>
  )
}
