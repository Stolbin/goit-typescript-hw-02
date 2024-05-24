import { UnsplashPhoto } from "../../APIService/APIService.types";
import { ImageCard } from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

interface ImageGalleryProps {
  images: UnsplashPhoto[];
  onClick: (imageUrl: string, imageAlt: string) => void;
}

export const ImageGallery: React.FC<ImageGalleryProps> = ({
  images,
  onClick,
}) => {
  return (
    <ul className={css.list}>
      {images.map((image) => (
        <li key={image.id}>
          <ImageCard
            image={image}
            onClick={() => onClick(image.urls.regular, image.description)}
          />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
