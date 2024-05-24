import css from "./LoadMoreBtn.module.css";

interface LoadMoreBtnProps {
  onClick: () => void;
}

export const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ onClick }) => {
  return (
    <div>
      <button className={css.button} onClick={onClick}>
        Load More
      </button>
    </div>
  );
};

export default LoadMoreBtn;
