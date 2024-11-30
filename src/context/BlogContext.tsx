import { createContext, useContext, useState, useEffect } from 'react';
import { blogPosts } from '../data/blogPosts';

type Post = {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  categories: string[];
};

type BlogContextType = {
  posts: Post[];
  filteredPosts: Post[];
  categories: string[];
  activeCategory: string | null;
  setActiveCategory: (category: string | null) => void;
  setSearchQuery: (query: string) => void;
};

const BlogContext = createContext<BlogContextType | undefined>(undefined);

export const BlogProvider = ({ children }: { children: React.ReactNode }) => {
  const [posts] = useState(blogPosts);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [filteredPosts, setFilteredPosts] = useState(posts);

  // Extract unique categories from all posts
  const categories = Array.from(
    new Set(posts.flatMap((post) => post.categories))
  ).sort();

  useEffect(() => {
    const filtered = posts.filter((post) => {
      const matchesSearch = `${post.title} ${post.excerpt} ${post.categories.join(' ')}`.toLowerCase()
        .includes(searchQuery.toLowerCase());
      const matchesCategory = !activeCategory || post.categories.includes(activeCategory);
      return matchesSearch && matchesCategory;
    });
    setFilteredPosts(filtered);
  }, [searchQuery, activeCategory, posts]);

  return (
    <BlogContext.Provider 
      value={{ 
        posts, 
        filteredPosts, 
        categories,
        activeCategory,
        setActiveCategory,
        setSearchQuery 
      }}
    >
      {children}
    </BlogContext.Provider>
  );
};

export const useBlogContext = () => {
  const context = useContext(BlogContext);
  if (context === undefined) {
    throw new Error('useBlogContext must be used within a BlogProvider');
  }
  return context;
};