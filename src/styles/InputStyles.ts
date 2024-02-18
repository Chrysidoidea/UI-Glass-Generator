import styled, { css } from "styled-components";
import { device } from "../utils/WindowUtils";

//Color Input Element
export const InputColorStyled = styled.input.attrs({ type: "color" })`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-color: var(--glass-color);
  border: none;
  border-radius: 0.2rem;
  width: 100%;
  cursor: pointer;

  &::-webkit-color-swatch {
    background-color: var(--dynamic-bg-color);
    height: 0.7rem;
    border-radius: 0.2rem;
    width: 100%;
    align-self: center;
    transition: 0.2s;

    &:hover {
      height: 0.9rem;
    }
  }
`;

//Range Input Element
const SliderThumbStyles = css`
  appearance: none;
  width: 2rem;
  height: 1.5rem;
  background-image: radial-gradient(var(--glass-color) 40%, #0099ff 45%);
  border-radius: 0.4rem;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.4);
  cursor: pointer;
`;

export const InputRangeStyled = styled.input.attrs({ type: "range" })`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  outline: none;
  height: 0.7rem;
  width: 100%;
  border-radius: 0.2rem;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.4);
  background: ${(props) =>
    `linear-gradient(to right,#2979AE 0%,#2979AE ${props.value}%,#fff ${props.value}%,#fff 100%);`};

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    background-color: transparent;
    backdrop-filter: blur(0.1rem);
    -webkit-backdrop-filter: blur(0.1rem);
    ${SliderThumbStyles};
  }

  &::-moz-range-thumb {
    -moz-appearance: none;
    background-color: transparent;
    backdrop-filter: blur(0.1rem);
    -webkit-backdrop-filter: blur(0.1rem);
    ${SliderThumbStyles};
  }
`;

//Wrapper for CSS code snippet and Button
export const CssCodeWrapper = styled.div`
  display: flex;
  margin-top: auto;
  margin-bottom: .5rem;
  justify-content: space-between;

  & > div:first-child {
    font-size: 1.5vh;
    font-weight: 600;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }

  & > div:last-child {
    height: 100%;
    display: grid;
    place-content: center;
  }
`;

type CopyButtonType = {
  onClick: () => void;
};

//Copy Button
export const CopyButton = styled.button<CopyButtonType>`
  background-color: var(--glass-color);
  color: var(--text-color);
  height: clamp(5rem, 10vh, 11rem);
  width: clamp(6rem, 20vw, 15rem);
  font-size: clamp(0.7rem, 1vw, 2rem);
  border-radius: clamp(0.4rem, 0.8vw, .9rem);
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.3);
  transition: 0.3s;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  border: none;
  text-transform: uppercase;
  color: var(--text-color);

  &:before {
    content: "";
    position: absolute;
    background-color: #FFFFFF26;
    top: -40%;
    left: 10%;
    transform: translateY(-50%) rotate(45deg);
    transition: .2s;
    height: 30%;
    width: 200%;
  }

  &:hover {
    box-shadow: 0px 2.5px 7.5px rgba(0, 0, 0, 0.3);

    &:before {
    top: 110%;
    left: -110%;
    }
  }
`;

export const CssTextSpan = styled.span`
    color: var(--dark-blue);
    font-weight: 900;
    text-shadow: .3px .3px 0 black;

`;
export const CssTextSpan2 = styled.span`
    color: var(--light-blue);
`;