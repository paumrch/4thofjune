import PostPreview from './post-preview'

export default function MoreStories({ posts }) {
  return (
    <section>
      <h2 className="mb-8 pt-16 text-3xl md:text-3xl font-semibold tracking-tighter leading-tight">
        Últimas publicaciones...
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-8 gap-y-20 md:gap-y-32 mb-32">
        {posts.map(({ node }) => (
          <PostPreview
            key={node.slug}
            title={node.title}
            coverImage={node.featuredImage}
            date={node.date}
            author={node.author}
            slug={node.slug}
            excerpt={node.excerpt}
          />
        ))}
      </div>
    </section>
  )
}
