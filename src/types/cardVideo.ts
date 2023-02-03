export interface DescriptionProps {
  message: string,
}

export interface CardProps {
  thumb: string;
  id: string;
  description: DescriptionProps[];
  title: string;
  mobile?: boolean;
}
