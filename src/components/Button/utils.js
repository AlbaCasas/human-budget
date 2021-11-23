export const getClassName = (variant) => {
  if (variant === "default") {
    return "button button--default";
  }
  if (variant === "icon") {
    return "button button--icon";
  }
  if (variant === "outlined") {
    return "button button--outlined";
  }
  return "button";
};
