import Avatar from './avatar'
import Date from './date'
import CoverImage from './cover-image'
import Link from 'next/link'

export default function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  slug,
}) {
  return (
    <section>
    <div className="mb-4 md:mb-12">
      {coverImage && (
        <CoverImage title={title} coverImage={coverImage} slug={slug} />
      )}
    </div>
    <div className="flex flex-col md:flex-row md:gap-8 mb-8 md:mb-12">
      <div className="">
        <h3 className="mb-2 text-3xl font-semibold lg:text-3xl leading-tight">
          <Link href={`/${slug}`}>
            <a
              dangerouslySetInnerHTML={{ __html: title }}
            />
          </Link>
        </h3>
        <div className="md:flex-1 md:w-64 mb-4 md:mb-4 text-xs">

          <Date dateString={date} />

        </div>
      </div>
        <div
          className="text-lg leading-relaxed mb-4"
          dangerouslySetInnerHTML={{ __html: excerpt }}
        />
    </div>
  </section>
  )
}
