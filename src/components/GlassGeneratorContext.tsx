import React, {useState, createContext, useContext, ReactNode, useEffect} from 'react';
import { blurConverter, transparensyConverter, hexToRGB } from '../utils/HelperFunctions';

type GlassGeneratorProviderType = {
    children: ReactNode;
};

type ContextValueType = {
    transperensy: number;
    setTransperensy: React.Dispatch<React.SetStateAction<number>>;
    blur: number;
    setBlur: React.Dispatch<React.SetStateAction<number>>;
    color: string;
    setColor: React.Dispatch<React.SetStateAction<string>>;
    outline: number;
    setOutline: React.Dispatch<React.SetStateAction<number>>;
    bGColor: string;
    blurConverted: string;
    borderConverted: string;
    copied: boolean;
    setCopied: React.Dispatch<React.SetStateAction<boolean>>;
}

export const GlassGeneratorContext = createContext<ContextValueType | undefined>(undefined);

export const GlassGeneratorProvider: React.FC<GlassGeneratorProviderType> = ({children}) => {
    const [transperensy, setTransperensy] = useState<number>(10);
    const [blur, setBlur] = useState<number>(5);
    const [color, setColor] = useState<string>('#ffffff');
    const [outline, setOutline] = useState<number>(0);
    const [copied, setCopied] = useState<boolean>(false);

    const bGColor = `rgba(${hexToRGB(color).r},${hexToRGB(color).g},${hexToRGB(color).b},${transparensyConverter(transperensy)})`;
    const blurConverted = `blur(${blurConverter(blur)}px)`;
    const borderConverted = `1px solid rgba(255, 255, 255, ${transparensyConverter(outline)})`;
    
    useEffect(() => {
        document.documentElement.style.setProperty('--dynamic-bg-color', bGColor);
    }, [bGColor]);
    
    useEffect(() => {
        document.documentElement.style.setProperty('--dynamic-backdrop-filter', blurConverted);
    }, [blurConverted]);
    
    useEffect(() => {
        document.documentElement.style.setProperty('--dynamic-border', borderConverted);
    }, [borderConverted]);

    useEffect(() => {
        if (copied) {
            const timer = setTimeout(() => {
              setCopied(false);
            }, 1000);
      
            return () => {
              clearTimeout(timer);
            };
          }
    }, [copied])

    const contextValue:ContextValueType = {
        transperensy,
        setTransperensy,
        blur,
        setBlur,
        color,
        setColor,
        outline,
        setOutline,
        bGColor,
        blurConverted,
        borderConverted,
        copied,
        setCopied
    };


    return (
        <GlassGeneratorContext.Provider value={contextValue}>
            {children}
        </GlassGeneratorContext.Provider>
    )
};

export const useGlassGeneratorContext = () => {
    const context = useContext(GlassGeneratorContext);

    if (context === undefined) {
        throw new Error('useGlassGeneratorContext have to use with GlassGeneratorProvider');
    } 
    
    return context;
};

