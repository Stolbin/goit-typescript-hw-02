import { ThreeCircles } from "react-loader-spinner";

export const Loader: React.FC = () => {
  return (
    <ThreeCircles
      visible={true}
      height="100"
      width="100"
      color="#4760b2"
      ariaLabel="three-circles-loading"
      wrapperStyle={{}}
      wrapperClass=""
    />
  );
};

export default Loader;
