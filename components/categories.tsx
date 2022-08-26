export default function Categories({ categories }) {
  return (
    <span className="ml-2">
      en la categoría: 
      {categories.edges.length > 0 ? (
        categories.edges.map((category, index) => (
          <span key={index} className="ml-2">
            {category.node.name}
          </span>
        ))
      ) : (
        <span className="ml-2">{categories.edges.node.name}</span>
      )}
    </span>
  )
}
