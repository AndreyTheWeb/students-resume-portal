import { styled } from "@mui/material/styles";
import { Button as DefaultButton } from "@mui/material";
import { Colors } from "../theme/colors";

export const Button = styled(DefaultButton)({
  color: Colors.primary,
  textTransform: "none",
});
