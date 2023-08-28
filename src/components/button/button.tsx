import "./button.styles.scss";
import { Button } from "@mui/material";

const BUTTON_TYPE_CLASSES = {
  google: "google-sign-in",
  inverted: "inverted",
};

const Buttons = ({ children, buttonType, ...otherProps }) => {
  return (
    <Button
      variant="contained"
      className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
      {...otherProps}
    >
      {children}
    </Button>
  );
};

export default Buttons;
