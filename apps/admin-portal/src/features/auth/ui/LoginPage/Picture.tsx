import s from "./style.module.css";
import ManAndWomen from "../../../../assets/man-and-woman-in-gadgets.svg";

export const Picture = () => {
  return (
    <div className={s.picture}>
      <img
        width={320}
        height={280}
        src={ManAndWomen}
        alt="man and woman in gadgets"
      />
    </div>
  );
};
