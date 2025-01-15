import Navigation from '../components/Navigation';
import BlogSearch from '../components/BlogSearch';
import BlogPosts from '../components/BlogPosts';
import CategoryFilter from '../components/CategoryFilter';

const Blog = () => {
  return (
    <div className="min-h-screen bg-cream">
      <Navigation />
      <div className="container mx-auto px-4 pt-32">
        <h1 className="text-4xl md:text-5xl font-playfair font-bold text-center mb-16">
          Notre Blog
        </h1>
        <div className="max-w-6xl mx-auto">
          <BlogSearch />
          <CategoryFilter />
          <BlogPosts />
        </div>
      </div>
    </div>
  );
};

export default Blog;