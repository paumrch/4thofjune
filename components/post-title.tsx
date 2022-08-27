export default function PostTitle({ children }) {
  return (
    <h1
      className="text-5xl md:text-4xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-center"
      dangerouslySetInnerHTML={{ __html: children }}
    />
  )
}
