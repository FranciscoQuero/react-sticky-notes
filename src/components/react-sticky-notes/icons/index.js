import { h, getElementStyle } from "./../utils";
const iconsClassName = "material-icons";
export const add = h(
  "i",
  { className: iconsClassName, style: getElementStyle("icon") },
  "add"
);
export const menu = h(
  "i",
  { className: iconsClassName, style: getElementStyle("icon") },
  "more_horiz"
);
export const hide = h(
  "i",
  { className: iconsClassName, style: getElementStyle("icon") },
  "visibility_off"
);
export const show = h(
  "i",
  { className: iconsClassName, style: getElementStyle("icon") },
  "minimize"
);
export const normalview = h(
  "i",
  { className: iconsClassName, style: getElementStyle("icon") },
  "widgets"
);
export const pageview = h(
  "i",
  { className: iconsClassName, style: getElementStyle("icon") },
  "fullscreen"
);
export const trash = h(
  "i",
  { className: iconsClassName, style: getElementStyle("icon") },
  "delete_outlined"
);
