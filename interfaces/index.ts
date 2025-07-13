
export interface CardProps {
  title: string;
  description: string;
  imageUrl?: string;
  onClick?: () => void;
}

export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "black" | "ghost";
  disabled?: boolean;
  icon?: boolean;
}

export interface PropertyProps {
  name: string;
  address: {
    state: string;
    city: string;
    country: string;
  };
  rating: number;
  category: string[];
  price: number;
  offers: {
    bed: string; 
    shower: string; 
    occupants: string; 
  };
  image: string;
  discount?: string | null;
}

export interface SearchParams {
  location: string;
  checkIn: string;
  checkOut: string;
  guests: number;
}

export interface IconGalleryProps {
  onIconClick?: (iconName: string) => void;
}