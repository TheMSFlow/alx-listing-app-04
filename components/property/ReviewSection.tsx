import axios from "axios";
import { useState, useEffect } from "react";
import { Review } from "@/interfaces/index";

type ReviewSectionProps = {
  propertyId: string;
};

const ReviewSection = ({ propertyId }: ReviewSectionProps) => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(`/api/properties/${propertyId}/reviews`);
        setReviews(response.data);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [propertyId]);

  if (loading) {
    return <p>Loading reviews...</p>;
  }

  return (
    <div>
      {reviews.map((review) => (
        <div key={review.id} className="mb-4 border-b pb-2">
          <p className="font-semibold">{review.reviewerName}</p>
          <p className="text-sm text-gray-600">{new Date(review.date).toLocaleDateString()}</p>
          <p className="mt-1">{review.comment}</p>
          <p className="text-yellow-500">Rating: {review.rating}/5</p>
        </div>
      ))}
    </div>
  );
};

export default ReviewSection;
