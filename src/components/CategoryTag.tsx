interface CategoryTagProps {
  category: 'Other' | 'Music' | 'Home';
}

const categoryStyles = {
  Other: 'bg-category-other text-stuffus-secondary',
  Music: 'bg-category-music text-blue-700',
  Home: 'bg-category-home text-green-700',
};

export function CategoryTag({ category }: CategoryTagProps) {
  return (
    <span className={`inline-block px-2.5 py-1 text-[11px] font-medium rounded ${categoryStyles[category]}`}>
      {category}
    </span>
  );
}
