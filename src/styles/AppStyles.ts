import styled, {css} from "styled-components";
import {device} from '../utils/WindowUtils'
const waveSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,96L21.8,133.3C43.6,171,87,245,131,234.7C174.5,224,218,128,262,112C305.5,96,349,160,393,186.7C436.4,213,480,203,524,213.3C567.3,224,611,256,655,272C698.2,288,742,288,785,272C829.1,256,873,224,916,224C960,224,1004,256,1047,261.3C1090.9,267,1135,245,1178,224C1221.8,203,1265,181,1309,192C1352.7,203,1396,245,1418,266.7L1440,288L1440,320L1418.2,320C1396.4,320,1353,320,1309,320C1265.5,320,1222,320,1178,320C1134.5,320,1091,320,1047,320C1003.6,320,960,320,916,320C872.7,320,829,320,785,320C741.8,320,698,320,655,320C610.9,320,567,320,524,320C480,320,436,320,393,320C349.1,320,305,320,262,320C218.2,320,175,320,131,320C87.3,320,44,320,22,320L0,320Z"></path></svg>
`;
const waveTwoSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#2979AE" fill-opacity="1" d="M0,32L21.8,32C43.6,32,87,32,131,80C174.5,128,218,224,262,266.7C305.5,309,349,299,393,266.7C436.4,235,480,181,524,165.3C567.3,149,611,171,655,154.7C698.2,139,742,85,785,96C829.1,107,873,181,916,218.7C960,256,1004,256,1047,218.7C1090.9,181,1135,107,1178,69.3C1221.8,32,1265,32,1309,26.7C1352.7,21,1396,11,1418,5.3L1440,0L1440,320L1418.2,320C1396.4,320,1353,320,1309,320C1265.5,320,1222,320,1178,320C1134.5,320,1091,320,1047,320C1003.6,320,960,320,916,320C872.7,320,829,320,785,320C741.8,320,698,320,655,320C610.9,320,567,320,524,320C480,320,436,320,393,320C349.1,320,305,320,262,320C218.2,320,175,320,131,320C87.3,320,44,320,22,320L0,320Z"></path></svg>`

//Main Body
export const AppStyled = styled.div`
    height: 100vh;
    width: 100vw;
    padding-top: 2rem;
    background: var(--background-gradient);
    display: grid;
    place-content: center;
    color: var(--text-color);
    position: relative;
    overflow: hidden;
    z-index: 0;
`;

//Main Page Bottom Waves
const waveMixin = (svgData: string, shadowOpacity: string) => css`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 8rem;
  background: url("data:image/svg+xml,${encodeURIComponent(svgData)}");
  background-repeat: no-repeat;
  background-size: cover;
  filter: drop-shadow(0px 10px 20px ${shadowOpacity});

  @media ${device.mobileS} {
    height: 10.25rem;
  };
  @media ${device.mobileL} {
    min-height: 14.9rem;
  };
  @media ${device.tablet} {
    height: 16.5rem;
  }; 
  @media ${device.laptopL} {
    height: 21.5rem;
  }; 
  @media ${device.desktop} {
    height: 40.5rem;
  }; 
`;

export const Wave = styled.div`
  ${waveMixin(waveSvg, "rgba(0, 0, 0, 0.9)")};
  z-index: 1;
`;
export const SecondWave = styled.div`
  ${waveMixin(waveTwoSvg, "rgba(0, 0, 0, 0.3)")};
  z-index: -1;
`;

//Wrapper for main text
export const TitleWrapper = styled.div`
    display: block;
    position: relative;
    z-index: 9;

//Main text
    &::before {
        content: 'Glass UI generator';
        position: absolute;
        text-transform: uppercase;
        color: var(--dark-blue);
        font-size: 1.6rem;
        width: 150%;
        text-align: center;
        top: -5rem;
        left: 50%;
        transform: translateX(-50%);
        padding: .5rem .5rem;
        background-color: transparent;
        border-radius: .4rem;

        @media ${device.laptop} {
            font-size: 2.5rem;
            top: -8rem;
        };

        @media ${device.laptopL} {
            top: -11rem;
            font-size: 4.5rem;
            width: 200%;
        };

        @media ${device.desktop} {
            top: -18rem;
            font-size: 8.5rem;
            width: 200%;
        };
     };


`;

//Glass element to introduce dynamic styling
export const GlassCoreExample = styled.div`
    position: absolute;
    top: -5rem;
    left: 50%;
    transform: translateX(-50%) rotate(-2deg);
    width: 13rem;
    height: 3rem;
    border-radius: .3rem;
    background-color: var(--dynamic-bg-color);
    backdrop-filter: var(--dynamic-backdrop-filter);
    border: var(--dynamic-border);

    @media ${device.laptop} {
            top: -8rem;
            height: 4.5rem;
            width: 20rem;
    };

    @media ${device.laptopL} {
            top: -11rem;
            height: 7.5rem;
            width: 37rem;
            border-radius: .5rem;
    };

    @media ${device.desktop} {
            top: -18rem;
            height: 13.5rem;
            width: 70rem;
            border-radius: 1rem;

    };
`;

//Main wrapper for Glass Generator
export const Wrapper = styled.div`
    display: grid;
    position: relative;
    padding: 1rem;
    width: 70vw;
    height: 65vh;
    border-radius: .6rem;
    background: var(--glass-gradient);
    backdrop-filter: blur(.5rem); 
    border: 1px solid rgba(255, 255, 255, 0.04);
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.3);
    transition: 1s;
    z-index: 10;

    & > label {
        display: flex;
        flex-direction: column;

        @media ${device.desktop} {
            font-size: 2rem;
        }
    };

    & > label:nth-child(4) {
        margin-bottom: 1rem;
    };
    
    &:hover {
        background-color: var(--glass-color);
        box-shadow: 0px 2.5px 7.5px rgba(0, 0, 0, 0.3);
        scale: .999;
    };

    @media ${device.tablet} {
        width: 50vw;
        height: 60vh;
    };
    @media ${device.laptop} {
        width: 50vw;
        height: 50vh;
    };
    @media ${device.laptopL} {
        width: 40vw;
        height: 45vh;
    };
`

