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
  setSearchQuery: (query: string) => void;
};

const BlogContext = createContext<BlogContextType | undefined>(undefined);

export const BlogProvider = ({ children }: { children: React.ReactNode }) => {
  const [posts] = useState(blogPosts);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredPosts, setFilteredPosts] = useState(posts);

  useEffect(() => {
    const filtered = posts.filter((post) => {
      const searchContent = `${post.title} ${post.excerpt} ${post.categories.join(' ')}`.toLowerCase();
      return searchContent.includes(searchQuery.toLowerCase());
    });
    setFilteredPosts(filtered);
  }, [searchQuery, posts]);

  return (
    <BlogContext.Provider value={{ posts, filteredPosts, setSearchQuery }}>
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