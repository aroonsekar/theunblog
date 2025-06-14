const PostCard = ({ title, content, slug }) => {
    return (
      <div className="bg-[#d9d9d9] rounded-lg p-6 border border-[#6a6a6a]">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">{title}</h2>
        <p className="text-gray-600 line-clamp-3">{content}</p>
        <a
          href={`/post/${slug}`}
          className="text-indigo-600 hover:text-indigo-800 font-semibold mt-4 inline-block"
        >
          Read more →
        </a>
      </div>
    );
  };
  
  export default PostCard;
  