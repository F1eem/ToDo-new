import { withProps } from "hoc-with-props";
import styled from "@emotion/styled";
import { AddCircleOutline } from "@material-ui/icons";

export const AddIcon = withProps({ fontSize: "large" })(
  styled(AddCircleOutline)`
    transform: scale(1.8, 1.8);
    margin: 0 20px;
  `
);
