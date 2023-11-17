import styles from "./FavoriteIcon.module.css";
import FavoriteBorderSharpIcon from "@mui/icons-material/FavoriteBorderSharp";
import FavoriteSharpIcon from "@mui/icons-material/FavoriteSharp";
import { useState } from "react";

const FavoriteIcon = () => {
  const [icon, setIcon] = useState(false);

  const changeIcon = () => {
    setIcon(icon === false ? true : false);
  };

  if (icon === false)
    return (
      <FavoriteBorderSharpIcon
        data-testid="FavoriteBorderSharpIcon"
        className={styles.fav}
        onClick={changeIcon}
      />
    );
  return (
    <FavoriteSharpIcon
      data-testid="FavoriteSharpIcon"
      className={styles.fav}
      onClick={changeIcon}
    />
  );
};

export default FavoriteIcon;
