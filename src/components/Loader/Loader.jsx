import clsx from "clsx";
import css from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={clsx(css.overlay)}>
      <div className={clsx(css.loader)} />
    </div>
  );
};

export default Loader;
