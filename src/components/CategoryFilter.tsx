import { useBlogContext } from '../context/BlogContext';

const CategoryFilter = () => {
  const { categories, activeCategory, setActiveCategory } = useBlogContext();

  return (
    <div className="mb-8">
      <h2 className="text-xl font-playfair font-semibold mb-4">Catégories</h2>
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setActiveCategory(null)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
            ${!activeCategory 
              ? 'bg-accent text-white' 
              : 'bg-primary/20 text-gray-700 hover:bg-primary/40'}`}
        >
          Toutes
        </button>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
              ${activeCategory === category 
                ? 'bg-accent text-white' 
                : 'bg-primary/20 text-gray-700 hover:bg-primary/40'}`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;