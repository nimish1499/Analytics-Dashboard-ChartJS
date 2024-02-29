export const generateRandomColor = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    return `rgb(${red}, ${green}, ${blue})`;
};

export const generateRandomColorArray = () => {
    const colorArray = [];

    for (let i = 0; i < 12; i++) {
        colorArray.push(generateRandomColor());
    }

    return colorArray;
};
