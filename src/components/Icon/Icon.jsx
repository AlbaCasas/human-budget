const getPath = (iconName) => {
    const walletPath = "M21,18V19A2,2 0 0,1 19,21H5C3.89,21 3,20.1 3,19V5A2,2 0 0,1 5,3H19A2,2 0 0,1 21,5V6H12C10.89,6 10,6.9 10,8V16A2,2 0 0,0 12,18M12,16H22V8H12M16,13.5A1.5,1.5 0 0,1 14.5,12A1.5,1.5 0 0,1 16,10.5A1.5,1.5 0 0,1 17.5,12A1.5,1.5 0 0,1 16,13.5Z";
    const musicPath = "M12,1C7,1 3,5 3,10V17A3,3 0 0,0 6,20H9V12H5V10A7,7 0 0,1 12,3A7,7 0 0,1 19,10V12H15V20H18A3,3 0 0,0 21,17V10C21,5 16.97,1 12,1Z";
    const homePath = "M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z";
    const pathPlus = "M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z";
    const pathClose = "M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z";
    
    if (iconName === "plus") {
        return pathPlus;
    }
    if (iconName === "close") {
        return pathClose;
    }
    if (iconName === "wallet") {
        return walletPath;
    }
    if (iconName === "music") {
        return musicPath;
    }
    if (iconName === "home") {
        return homePath;
    }
    return null;
}

const Icon = (props) => {
    return <svg width="24px" height="24px" viewBox="0 0 24 24" className={props.className}>
        <path fill="currentColor" d={getPath(props.icon)}/>
    </svg>
}

export default Icon;