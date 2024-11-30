import { useState } from 'react';
import { Search } from 'lucide-react';
import { useBlogContext } from '../context/BlogContext';

const BlogSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { setSearchQuery } = useBlogContext();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    setSearchQuery(value);
  };

  return (
    <div className="max-w-xl mx-auto mb-12">
      <div className="relative">
        <input
          type="text"
          placeholder="Rechercher un article..."
          value={searchTerm}
          onChange={handleSearch}
          className="w-full px-4 py-3 pl-12 rounded-lg border border-gray-200 focus:ring-2 
                   focus:ring-accent/20 focus:border-accent outline-none transition-colors"
        />
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
      </div>
    </div>
  );
};

export default BlogSearch;