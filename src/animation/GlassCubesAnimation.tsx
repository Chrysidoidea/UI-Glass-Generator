import React from "react";
import styled, { keyframes } from "styled-components";
import { device } from "../utils/WindowUtils";

type FallAnimationProps = {
  $start: number;
  $end: number;
  $delay: number;
};

const fallAnimation = keyframes<FallAnimationProps>`
    0% {
        transform:  translateY(-120vh) translateX(var(--startX, 0px)) ;  
    }
    100% {
		transform: translateY(120vh) translateX(var(--endX, 0px)) ;
    }
`;
//Falling background cubes
const GlassCube = styled.div<FallAnimationProps>`
  position: absolute;
  top: -8rem;
  width: 5rem;
  height: 4rem;
  border-radius: 0.4rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  animation: ${fallAnimation} 11s linear infinite;
  animation-delay: ${(props) => props.$delay}s;
  --startX: ${(props) => props.$start}px;
  --endX: ${(props) => props.$end}px;
  z-index: -1;
  background-color: var(--dynamic-bg-color);
  backdrop-filter: var(--dynamic-backdrop-filter);
  border: var(--dynamic-border);

  @media ${device.laptop} {
    width: 7rem;
    height: 6rem;
  }
`;
//Animated Cubes generator
export const GlassCubAnimation = () => {
  const numberOfCubes = 12;

  return (
    <>
      {Array.from({ length: numberOfCubes }).map((_, index) => {
        const randomXStart = Math.random() * window.innerWidth;
        const randomXEnd = Math.random() * window.innerWidth;
        const delay = index * 2;

        return (
          <GlassCube
            key={index}
            $start={randomXStart}
            $end={randomXEnd}
            $delay={delay}
          />
        );
      })}
    </>
  );
};
