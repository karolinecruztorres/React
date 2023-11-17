import { ReactNode } from "react";
import styles from "./Alert.module.css";

interface Props {
  children: ReactNode;
  onClose: () => void;
}

const Alert = ({ children, onClose }: Props) => {
  return (
    <div className={styles.alert}>
      {children}
      <button className={styles.btn}
        onClick={onClose}
      >x</button>
    </div>
  );
};

export default Alert;
