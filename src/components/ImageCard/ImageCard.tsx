import { UnsplashPhoto } from "../../APIService/APIService.types";
import css from "./ImageCard.module.css";

interface ImageCardProps {
  image: UnsplashPhoto;
  onClick: () => void;
}

export const ImageCard: React.FC<ImageCardProps> = ({
  image: { urls, description, likes, user },
  onClick,
}) => {
  return (
    <div className={css.card}>
      <img
        src={urls.small}
        alt={description || "Image"}
        className={css.image}
        onClick={onClick}
      />
      <div className={css.details}>
        <p className={css.likes}>Likes: {likes}</p>
        <p className={css.name}>Author: {user.name}</p>
      </div>
    </div>
  );
};

export default ImageCard;
