import { useBlogContext } from '../context/BlogContext';
import { formatDate } from '../utils/dateUtils';

const BlogPosts = () => {
  const { filteredPosts } = useBlogContext();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {filteredPosts.map((post) => (
        <article
          key={post.id}
          className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl 
                   transition-shadow duration-300 animate-fade-up"
        >
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <div className="flex gap-2 mb-3">
              {post.categories.map((category) => (
                <span
                  key={category}
                  className="text-xs font-medium px-2 py-1 rounded-full bg-primary/20 text-accent"
                >
                  {category}
                </span>
              ))}
            </div>
            <h2 className="text-xl font-playfair font-semibold mb-2">{post.title}</h2>
            <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
            <div className="flex justify-between items-center text-sm text-gray-500">
              <span>{formatDate(post.date)}</span>
              <button className="text-accent hover:underline">Lire la suite</button>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
};

export default BlogPosts;