import styled from "@emotion/styled";
import React from "react";
import {
  RadioButtonUnchecked,
  CheckCircleOutline,
  ArrowForwardIos,
} from "@material-ui/icons";

import { withProps } from "hoc-with-props";

export const UncheckedIcon = withProps({ fontSize: "large" })(
  styled(RadioButtonUnchecked)`
    cursor: pointer;
  `
);

export const CheckedIcon = withProps({ fontSize: "large" })(
  styled(CheckCircleOutline)`
    cursor: pointer;
  `
);
export const ArrowIcon = withProps({ fontSize: "default" })(
  styled(ArrowForwardIos)`
    color: #404040;
    cursor: pointer;
    width: 50px;
  `
);
