import Avatar from './avatar'
import Date from './date'
import CoverImage from './cover-image'
import Link from 'next/link'

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <div>
      <div className="mb-5">
        {coverImage && (
          <CoverImage title={title} coverImage={coverImage} slug={slug} />
        )}
      </div>
      <h3 className="text-3xl font-semibold mb-3 leading-snug">
        <Link href={`/${slug}`}>
          <span
            dangerouslySetInnerHTML={{ __html: title }}
          ></span>
        </Link>
      </h3>
      <div className="font-mono text-sm mb-4">
        <Date dateString={date} />
      </div>
      <div
        className="text-md leading-relaxed mb-4"
        dangerouslySetInnerHTML={{ __html: excerpt }}
      />
      {/* <Avatar author={author} /> */}
    </div>
  )
}
