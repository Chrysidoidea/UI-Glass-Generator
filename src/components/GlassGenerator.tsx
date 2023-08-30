import React from 'react';
import { InputRangeStyled, InputColorStyled, CssCodeWrapper, CopyButton } from '../styles/InputStyles';
import { useGlassGeneratorContext } from './GlassGeneratorContext';

//Main control panel
export const GlassGeneratorComponent: React.FC = () => {
    const {
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
        setCopied,
    } = useGlassGeneratorContext();

    const cssContent = `
    background-color: ${bGColor};
    backdrop-filter: ${blurConverted};
    -webkit-backdrop-filter: ${blurConverted};
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.3);
    border-radius: .4rem;
    ${outline !== 0 ? `border: ${borderConverted};` : ''}
    `;

    const handleCopy = () => {
        const textToCopy = cssContent
          .replace(/^\s+|\s+$/gm, '')
         
        navigator.clipboard.writeText(textToCopy)
          .then(() => {
            setCopied(true);
          })
          .catch(err => {
            console.error('Unable to copy CSS content', err);
          });
      };

    return (
        <>
        <label>transperensy
          <InputRangeStyled 
            value={transperensy}
            onChange={(e: { target: { value: number; }; }) => setTransperensy(e.target.value)}
            id='transperensy'
          />
        </label>

        <label>blur
          <InputRangeStyled 
            value={blur}
            onChange={(e: { target: { value: number; }; }) => setBlur(e.target.value)}
            id='blur'
          />
        </label>

        <label>color
            <InputColorStyled
            value={color}
            onChange={(e: {target: {value: string;};}) => setColor(e.target.value)}
            />
        </label>

        <label>outline
            <InputRangeStyled 
            value={outline.toString()}
            onChange={(e: { target: { value: string; }; }) => setOutline(parseInt(e.target.value, 10))}
            id='outline'
        />
        </label>
        <CssCodeWrapper>
            <div>
              <span>CSS</span>

              {cssContent.split('\n').map((line, index) => (
                <span key={index}>{line}</span>
              ))}
            </div>

            <div>
                <CopyButton onClick={() => handleCopy()}>{copied ? "copied" : "copy code"}</CopyButton>
            </div>
        </CssCodeWrapper>
        </>
    )
};