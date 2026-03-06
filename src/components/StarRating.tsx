import { Star } from 'lucide-react';

interface StarRatingProps {
  rating: number;
  reviews: number;
}

export function StarRating({ rating, reviews }: StarRatingProps) {
  const formatReviews = (count: number): string => {
    if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}k`;
    }
    return count.toString();
  };

  return (
    <div className="flex items-center gap-1.5">
      <Star className="w-3.5 h-3.5 fill-stuffus-star text-stuffus-star" />
      <span className="text-sm font-medium text-stuffus-primary">{rating.toFixed(1)}</span>
      <span className="text-sm text-stuffus-muted">({formatReviews(reviews)} Reviews)</span>
    </div>
  );
}
