import React, { useMemo } from "react";
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
  top: -12rem;
  height: clamp(10rem, 10vh, 20rem);
  width: clamp(10rem, 10vw, 21rem);
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
`;
//Animated Cubes generator
export const GlassCubAnimation = () => {
  const numberOfCubes = 12;

  const precalculatePositionOfCubes = useMemo(() => {
    const cubesPosition: { start: number; end: number; delay: number }[] = [];
    for (let i = 0; i < numberOfCubes; i++) {
      const randomXStart = Math.random() * window.innerWidth;
      const randomXEnd = Math.random() * window.innerWidth;

      cubesPosition.push({
        start: randomXStart,
        end: randomXEnd,
        delay: i * 1.5,
      });
    }

    return cubesPosition;
  }, [numberOfCubes]);

  return (
    <>
      {precalculatePositionOfCubes.map(({ start, end, delay }) => (
        <GlassCube key={delay} $start={start} $end={end} $delay={delay} />
      ))}
    </>
  );
};
