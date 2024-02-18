import styled, { css } from "styled-components";
import { device } from "../utils/WindowUtils";
const waveSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,96L21.8,133.3C43.6,171,87,245,131,234.7C174.5,224,218,128,262,112C305.5,96,349,160,393,186.7C436.4,213,480,203,524,213.3C567.3,224,611,256,655,272C698.2,288,742,288,785,272C829.1,256,873,224,916,224C960,224,1004,256,1047,261.3C1090.9,267,1135,245,1178,224C1221.8,203,1265,181,1309,192C1352.7,203,1396,245,1418,266.7L1440,288L1440,320L1418.2,320C1396.4,320,1353,320,1309,320C1265.5,320,1222,320,1178,320C1134.5,320,1091,320,1047,320C1003.6,320,960,320,916,320C872.7,320,829,320,785,320C741.8,320,698,320,655,320C610.9,320,567,320,524,320C480,320,436,320,393,320C349.1,320,305,320,262,320C218.2,320,175,320,131,320C87.3,320,44,320,22,320L0,320Z"></path></svg>
`;
const waveTwoSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#2979AE" fill-opacity="1" d="M0,32L21.8,32C43.6,32,87,32,131,80C174.5,128,218,224,262,266.7C305.5,309,349,299,393,266.7C436.4,235,480,181,524,165.3C567.3,149,611,171,655,154.7C698.2,139,742,85,785,96C829.1,107,873,181,916,218.7C960,256,1004,256,1047,218.7C1090.9,181,1135,107,1178,69.3C1221.8,32,1265,32,1309,26.7C1352.7,21,1396,11,1418,5.3L1440,0L1440,320L1418.2,320C1396.4,320,1353,320,1309,320C1265.5,320,1222,320,1178,320C1134.5,320,1091,320,1047,320C1003.6,320,960,320,916,320C872.7,320,829,320,785,320C741.8,320,698,320,655,320C610.9,320,567,320,524,320C480,320,436,320,393,320C349.1,320,305,320,262,320C218.2,320,175,320,131,320C87.3,320,44,320,22,320L0,320Z"></path></svg>`;

//Main Body
export const AppStyled = styled.div`
  min-height: 100dvh;
  width: 100vw;
  padding-top: 2rem;
  background: var(--background-gradient);
  display: grid;
  place-content: center;
  color: var(--text-color);
  position: relative;
  overflow-x: hidden;
  overflow-y: scroll;
  z-index: 0;
`;

//Main Page Bottom Waves
const waveMixin = (svgData: string, shadowOpacity: string) => css`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 30vh;
  background: url("data:image/svg+xml,${encodeURIComponent(svgData)}");
  background-repeat: no-repeat;
  background-size: cover;
  filter: drop-shadow(0px 10px 20px ${shadowOpacity});
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
  position: relative;
  z-index: 9;

  //Main text
  &::before {
    content: "Glass UI generator";
    position: absolute;
    text-transform: uppercase;
    color: var(--dark-blue);
    font-size: clamp(2rem, 4vw, 30rem);
    font-weight: 900;
    white-space: nowrap;
    text-align: center;
    top: -6rem;
    left: 50%;
    transform: translateX(-50%);

    @media (${device.tablet}) {
      top: -9rem;
    }
    @media (${device.laptop}) {
      top: -12rem;
    }
  }
`;

//Glass element to introduce dynamic styling
export const GlassCoreExample = styled.div`
  position: absolute;
  top: -6.5rem;
  left: 50%;
  transform: translateX(-50%) rotate(-2deg);
  width: clamp(20rem, 40vw, 90rem);
  height: clamp(4rem, 8vw, 11rem);
  border-radius: 0.3rem;
  background-color: var(--dynamic-bg-color);
  backdrop-filter: var(--dynamic-backdrop-filter);
  -webkit-backdrop-filter: var(--dynamic-backdrop-filter);
  border: var(--dynamic-border);

  @media (${device.tablet}) {
    top: -9rem;
  }
  @media (${device.laptop}) {
    top: -12rem;
  }
`;

//Main wrapper for Glass Generator
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: relative;
  padding: 1.5rem 1rem;
  width: clamp(20rem, 70vw, 60rem);
  height: clamp(21rem, 50vh, 40rem);
  border-radius: 0.6rem;
  background: var(--glass-gradient);
  backdrop-filter: blur(1rem);
  -webkit-backdrop-filter: blur(1rem);
  border: 1px solid rgba(255, 255, 255, 0.04);
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.3);

  transition: 1s;
  z-index: 10;

  & > label {
    display: flex;
    align-items: flex-end;
    flex-direction: column;
    color: #FFFFFFDC;
    font-weight: 600;
  }

  &:hover {
    background-color: var(--glass-color);
    backdrop-filter: blur(10rem);
    -webkit-backdrop-filter: blur(10rem);
    box-shadow: 0px 2.5px 7.5px rgba(0, 0, 0, 0.3);
    scale: 0.999;
  }
`;
