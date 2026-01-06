import { FaUser, FaPhoneAlt } from "react-icons/fa";
import clsx from "clsx";
import css from "./Contact.module.css";
const Contact = ({ data: { id, name, phone }, onDelete, disabled }) => {
  return (
    <div className={clsx(css.item)}>
      <div className={clsx(css.info)}>
        <div className={clsx(css.row)}>
          <FaUser className={clsx(css.icon)} />
          <p>{name}</p>
        </div>
        <div className={clsx(css.row)}>
          <FaPhoneAlt className={clsx(css.icon)} />
          <address>{phone}</address>
        </div>
      </div>
      <button onClick={() => onDelete(id)} disabled={disabled}>
        Delete
      </button>
    </div>
  );
};
export default Contact;
