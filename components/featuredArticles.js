import ArticleItem from "./articleItem";

const articles = [
  {
    id: 1,
    title: "Receive money in any currency with no fees",
    content:
      "The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …",
    author: "Claire Robinson",
    imageName: "currency",
  },
  {
    id: 2,
    title: "Treat yourself without worrying about money",
    content:
      "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …",
    author: "Wilson Hutton",
    imageName: "restaurant",
  },
  {
    id: 3,
    title: "Take your Easybank card wherever you go",
    content:
      "We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …",
    author: "Wilson Hutton",
    imageName: "plane",
  },
  {
    id: 4,
    title: "Our invite-only Beta accounts are now live!",
    content:
      " After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...",
    author: "Claire Robinson",
    imageName: "mockups",
  },
];

const FeaturedArticles = () => {
  return (
    <div className="bg-neutral-white pt-20 pb-16 lg:px-28">
      <div className="mb-10">
        <h1 className="text-4xl ml-5">Latest Articles</h1>
      </div>
      <div className="flex justify-center flex-wrap md:justify-evenly">
        {articles.map((article) => (
          <ArticleItem key={article.id} item={article} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedArticles;
