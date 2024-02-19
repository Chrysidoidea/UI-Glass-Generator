import React, { memo, useMemo, useCallback } from "react";

import {
  InputRangeStyled,
  InputColorStyled,
  CssCodeWrapper,
  CopyButton,
} from "../styles/InputStyles";
import { useGlassGeneratorContext } from "./GlassGeneratorContext";
import { CssTextSpan, CssTextSpan2 } from "../styles/InputStyles";
//Main control panel
//set memo
export const GlassGeneratorComponent: React.FC = memo(() => {
  const {
    transparency,
    settransparency,
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

  const cssContent = useMemo(() => {
    return `
    background-color: ${bGColor};
    backdrop-filter: ${blurConverted};
    -webkit-backdrop-filter: ${blurConverted};
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.3);
    border-radius: .4rem;
    ${outline !== 0 ? `border: ${borderConverted};` : ""}
    `;
  }, [bGColor, blurConverted, borderConverted, outline]);

  const handleCopy = useCallback(() => {
    const textToCopy = cssContent.replace(/^\s+|\s+$/gm, "");

    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        setCopied(true);
      })
      .catch((err) => {
        console.error("Unable to copy CSS content", err);
      });
  }, [cssContent, setCopied]);

  const symbolsBeforeColon = useMemo(() => {
    return (str: string) => {
      const regex = /^([^:]+):/;
      const match = str.match(regex);
      return match ? match[1] + ":" : null;
    };
  }, []);
  const symbolsAfterColon = useMemo(() => {
    return (str: string) => {
      const regex = /:([^:]+)$/;
      const match = str.match(regex);
      return match ? match[1] : null;
    };
  }, []);
  //everything what you see below are overkill
  const handleTransparencyChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      settransparency(parseInt(e.target.value, 10));
    },
    [settransparency]
  );

  const handleBlurChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setBlur(parseInt(e.target.value, 10));
    },
    [setBlur]
  );

  const handleColorChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setColor(e.target.value);
    },
    [setColor]
  );
  const handleOutlineChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setOutline(parseInt(e.target.value, 10));
    },
    [setOutline]
  );
  //everything what you see above are overkill
  return (
    <>
      <label>
        transparency
        <InputRangeStyled
          value={transparency}
          onChange={handleTransparencyChange}
          id="transparency"
        />
      </label>

      <label>
        blur
        <InputRangeStyled value={blur} onChange={handleBlurChange} id="blur" />
      </label>

      <label>
        color
        <InputColorStyled value={color} onChange={handleColorChange} />
      </label>

      <label>
        outline
        <InputRangeStyled
          value={outline.toString()}
          onChange={handleOutlineChange}
          id="outline"
        />
      </label>
      <CssCodeWrapper>
        <div>
          {cssContent.split("\n").map((line: string, index: number) => (
            <span key={index}>
              <CssTextSpan>{symbolsBeforeColon(line)}</CssTextSpan>
              <CssTextSpan2>{symbolsAfterColon(line)}</CssTextSpan2>
            </span>
          ))}
        </div>
        <div>
          <CopyButton onClick={() => handleCopy()}>
            {copied ? "copied" : "copy code"}
          </CopyButton>
        </div>
      </CssCodeWrapper>
    </>
  );
});
