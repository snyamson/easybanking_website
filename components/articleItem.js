/* eslint-disable @next/next/no-img-element */

const ArticleItem = ({ item }) => {
  return (
    <div className="h-96 w-80 md:w-64 rounded-md overflow-hidden mb-4 shadow">
      <div className="h-1/2">
        <img
          src={`/image-${item.imageName}.jpg`}
          alt={`image ${item.imageName}`}
          className="h-full w-full md:w-auto"
        />
      </div>
      <div className="bg-neutral-white  px-4 py-3 rounded-b-md">
        <p className="text-xs text-neutral-light_grayish_blue">
          By {item.author}
        </p>
        <h3 className="text-lg leading-5 my-1 cursor-pointer hover:text-primary-lime_green">
          {item.title}
        </h3>
        <p className="text-base text-neutral-light_grayish_blue">
          {item.content}
        </p>
      </div>
    </div>
  );
};

export default ArticleItem;
