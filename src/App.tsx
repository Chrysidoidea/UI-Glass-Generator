import React from "react";
import {
  AppStyled,
  Wrapper,
  TitleWrapper,
  GlassCoreExample,
  Wave,
  SecondWave,
} from "./styles/AppStyles";
import { GlassCubAnimation } from "./animation/GlassCubesAnimation";
import { GlassGeneratorComponent } from "./components/GlassGenerator";

const App = () => {
  return (
    <AppStyled>
      <TitleWrapper>
        <GlassCoreExample />
        <Wrapper>
          <GlassGeneratorComponent />
        </Wrapper>
      </TitleWrapper>
      <Wave />
      <SecondWave />
      <GlassCubAnimation />
    </AppStyled>
  );
};

export default App;
