import Date from "./date";
import CoverImage from "./cover-image";
import PostTitle from "./post-title";
import Categories from "./categories";

export default function PostHeader({
  title,
  coverImage,
  date,
  author,
  categories,
}) {
  return (
    <>
      <div className="mt-8 md:mt-16 mb-2 md:mb-4 sm:mx-0">
        <CoverImage title={title} coverImage={coverImage} />
      </div>
      <PostTitle>{title}</PostTitle>
      <div className="max-w-2xl mx-auto">
        <div className="mb-2 text-sm font-serif text-center">
          <Categories categories={categories} />
          <Date dateString={date} />
        </div>
      </div>
    </>
  );
}
