import Date from './date'
import CoverImage from './cover-image'
import PostTitle from './post-title'
import Categories from './categories'

export default function PostHeader({
  title,
  coverImage,
  date,
  author,
  categories
}) {
  return (
    <>
    <div className="max-w-2xl mx-auto mb-8 md:mb-16 sm:mx-0">
      <PostTitle>{title}</PostTitle>
        <CoverImage title={title} coverImage={coverImage} />
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="mb-6 text-lg rounded-lg bg-gradient-to-r from-teal-200 to-lime-200 py-px px-2 text-sm text-gray-900">
          Publicado el <Date dateString={date} />
          <Categories categories={categories} />
        </div>
      </div>
    </>
  )
}
