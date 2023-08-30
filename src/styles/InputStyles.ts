import styled, {css} from 'styled-components';
import { device } from '../utils/WindowUtils';

//Color Input Element
export const InputColorStyled = styled.input.attrs({type: 'color'})`
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background-color: var(--glass-color);
    border: none;
    border-radius: .2rem;
    width: 100%;
    cursor: pointer;

    &::-webkit-color-swatch {
        background-color: transparent;
        height: .7rem;
        border-radius: .2rem;
        width: 100%;
        align-self: center;
        transition: .4s;

        @media ${device.desktop} {
            height: 1rem;
            };

        &:hover {
            height: .9rem;

            @media ${device.desktop} {
            height: 1.2rem;
            };
        }
    }
`;

//Range Input Element
const SliderThumbStyles = css`
    appearance: none;
    width: 1.3rem;
    height: 1.3rem;
    background-image: radial-gradient(var(--glass-color) 40%, #0099ff 45%);
    border-radius: .2rem;
    box-shadow: 0 0 4px rgba(0,0,0,0.4);
    cursor: pointer;

    @media ${device.desktop} {
        width: 2rem;
        height: 2rem;
        };
`;

export const InputRangeStyled = styled.input.attrs({type: 'range'})`
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    outline: none;
    height: .7rem;
    width: 100%;
    border-radius: .2rem;
    box-shadow: 0 0 4px rgba(0,0,0,0.4);
    background: ${(props) => 
        `linear-gradient(to right,#2979AE 0%,#2979AE ${props.value}%,#fff ${props.value}%,#fff 100%);`
        };

    &::-webkit-slider-thumb {
    -webkit-appearance: none;
    ${SliderThumbStyles};
    };

    &::-moz-range-thumb {
    -moz-appearance: none;
    ${SliderThumbStyles};
    };

    @media ${device.desktop} {
        height: 1rem;
        };
`;

//Wrapper for CSS code snippet and Button
export const CssCodeWrapper = styled.div`
    display: grid;
    grid-template-columns: 1.3fr .7fr;

    @media ${device.desktop} {
        grid-template-columns: 1fr 1fr;
        };

    & > div:first-child {
        height: 100%;
        height: 6rem;
        font-size: .4rem;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;

        @media ${device.mobileM} {
            font-size: .5rem;
        };
        @media ${device.tablet} {
            font-size: .7rem;
        };
        @media ${device.laptop} {
            font-size: 1rem;
        };
        @media ${device.desktop} {
            font-size: 1.4rem;
        };
    };

    & > div:last-child {
        height: 100%;
        display: grid;
        place-content: center;
    };
`;

type CopyButtonType = {
    onClick: () => void;
}

//Copy Button
export const CopyButton = styled.button<CopyButtonType>`
    padding: 2rem 1.5rem;
    background-color: var(--glass-color);
    color: var(--text-color);
    font-size: .7rem;
    border-radius: .4rem;
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.3);
    transition: .3s;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    border: none;
    text-transform: uppercase;

    @media ${device.desktop} {
        padding: 2rem 4rem;
        font-size: 2rem;
    };

    &:before {
        content: '';
        position: absolute;
        transition: .3s;
        width: 150%;
        height: 30%;
        background-color: #FFFFFF0E;
        rotate: 40deg;
        left: -7.5rem;
        bottom: -1rem;
            
        @media ${device.desktop} {
            left: -10.5rem;
            bottom: -3rem;
        };
    };
    
    &:hover {
        box-shadow: 0px 2.5px 7.5px rgba(0, 0, 0, 0.3);

        &:before {
            left: 9rem;
            bottom: 2rem;

            @media ${device.desktop} {
            left: 11rem;
            bottom: 5rem;
            };
        };

    };
`;