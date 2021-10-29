export const getClassName = (variant) => {
    if (variant === "default") {
        return "button button--default";
    }
    if (variant === "outlined") {
        return "button button--outlined";
    }
    return "button"
}
