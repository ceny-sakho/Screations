import Navigation from '../components/Navigation';
import { useParams } from 'react-router-dom';
import { useBlogContext } from '../context/BlogContext';
import { formatDate } from '../utils/dateUtils';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const BlogPost = () => {
  const { id } = useParams();
  const { posts } = useBlogContext();
  const post = posts.find(p => p.id === Number(id));

  if (!post) {
    return (
      <div className="min-h-screen bg-cream">
        <Navigation />
        <div className="container mx-auto px-4 pt-32">
          <h1 className="text-4xl font-playfair font-bold text-center">Article non trouvé</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream">
      <Navigation />
      <div className="container mx-auto px-4 pt-32">
        <div className="max-w-4xl mx-auto">
          <Link to="/blog">
            <Button variant="ghost" className="mb-8">
              <ArrowLeft className="mr-2" />
              Retour au blog
            </Button>
          </Link>
          
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-[400px] object-cover rounded-lg mb-8"
          />
          
          <div className="flex flex-wrap gap-2 mb-6">
            {post.categories.map((category) => (
              <span
                key={category}
                className="text-sm font-medium px-3 py-1 rounded-full 
                         bg-primary/20 text-accent"
              >
                {category}
              </span>
            ))}
          </div>

          <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-4">
            {post.title}
          </h1>
          
          <p className="text-gray-600 mb-8">
            Publié le {formatDate(post.date)}
          </p>

          <div className="prose prose-lg max-w-none">
            {post.content}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;