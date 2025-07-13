
import { CardProps } from '../../interfaces/index';

const Card = ({ title, description, imageUrl }: CardProps) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
      {imageUrl && <img src={imageUrl} alt={title} />}
    </div>
  );
};
