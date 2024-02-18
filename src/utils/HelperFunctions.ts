export const blurConverter = (blur:number) => {
    const convertedBlur = blur * 0.2;
    return convertedBlur.toFixed(1);
};

export const transparensyConverter = (transperensy:number) => {
    const convertedTransperensy = transperensy * 0.01;
    return convertedTransperensy.toFixed(2);
};

export const hexToRGB = (hex:string) => {
    const r = parseInt(hex.slice(1,3), 16);
    const g = parseInt(hex.slice(3,5), 16);
    const b = parseInt(hex.slice(5,7), 16);

    const rgb = {r,g,b}

    return rgb
};