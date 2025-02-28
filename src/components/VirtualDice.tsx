import { useState } from "react";
import styled, { css, keyframes } from "styled-components";

const Face = styled.div<{ color?: string; rotate: string }>`
  background-color: ${(props) => props.color};
  line-height: normal;
  border: solid black 1px;
  display: grid;
  padding: 15px;
  grid-template-columns: 1fr 1fr 1fr;
  width: 70px;
  height: 70px;
  align-items: center;
  justify-items: center;
  position: absolute;
  transform: rotate3d(${(props) => props.rotate}) translateZ(50px);
`;

const Container = styled.div`
  height: 200px;
  transform: translate(0px, 100px);
  cursor: pointer;
  user-select: none;
`;

const Dot = styled.div`
  background-color: black;
  border-radius: 10px;
  height: 20px;
  width: 20px;
`;

const Space = styled.div`
  height: 20px;
`;

const Face1 = () => {
  return (
    <Face color="#f94144" rotate="1, 0, 0, 90deg">
      <Space />
      <Dot />
    </Face>
  );
};

const Face2 = () => {
  return (
    <Face color="#f3722c" rotate="1, 0, 0, -90deg">
      <Dot />
      <Space />
      <Space />
      <Space />
      <Space />
      <Space />
      <Space />
      <Space />
      <Dot />
    </Face>
  );
};

const Face3 = () => {
  return (
    <Face color="#f9c74f" rotate="0, 1, 0, 90deg">
      <Dot />
      <Space />
      <Space />
      <Space />
      <Dot />
      <Space />
      <Space />
      <Space />
      <Dot />
    </Face>
  );
};

const Face4 = () => {
  return (
    <Face color="#90be6d" rotate="0, 1, 0, -90deg">
      <Dot />
      <Space />
      <Dot />
      <Space />
      <Space />
      <Space />
      <Dot />
      <Space />
      <Dot />
    </Face>
  );
};

const Face5 = () => {
  return (
    <Face color="#43aa8b" rotate="1, 0, 0, 180deg">
      <Dot />
      <Space />
      <Dot />
      <Space />
      <Dot />
      <Space />
      <Dot />
      <Space />
      <Dot />
    </Face>
  );
};

const Face6 = () => {
  return (
    <Face color="#277da1" rotate="0, 0, 1, 0deg">
      <Dot />
      <Dot />
      <Dot />
      <Space />
      <Space />
      <Space />
      <Dot />
      <Dot />
      <Dot />
    </Face>
  );
};

const Dice = () => {
  return (
    <>
      <Face1 />
      <Face2 />
      <Face3 />
      <Face4 />
      <Face5 />
      <Face6 />
    </>
  );
};

const spinAnimation = keyframes`
  from {
    transform: rotateY(0deg);
  }
  to {
    transform: rotateY(360deg);
  }
`;

const rollAnimation = keyframes`
  from {
    transform: rotate3D(1,1,1,0deg);
  }
  to {
    transform: rotate3d(1,1,1,360deg);
  }
`;

const DicePosition = styled.div<{ $x: number; $y: number }>`
  display: flex;
  justify-content: center;
  align-items: center;
  transform: ${({ $x, $y }) => `rotateX(${$x}deg) rotateY(${$y}deg)`};
  transform-style: preserve-3d;
`;

const DiceAnimation = styled.div<{ $animation: string }>`
  ${({ $animation }) => {
    if ($animation === "spin") {
      return css`
        animation: ${spinAnimation} 5s linear infinite;
      `;
    }
    if ($animation === "roll") {
      return css`
        animation: ${rollAnimation} 400ms linear infinite;
      `;
    }
    return css`
      transform: rotate3d(-1, 1, 0, 10deg);
    `;
  }}
  transform-style: preserve-3d;
`;

const VirtualDice = () => {
  const [rotation, setRotation] = useState({ x: 45, y: 45 });
  const [animation, setAnimation] = useState<string>("spin");

  const rollDice = () => {
    const x = 90 * Math.floor(4 * Math.random());
    const y = 90 * Math.floor(4 * Math.random());
    setRotation({ x, y });
    setAnimation("roll");
    setTimeout(() => {
      setAnimation("none");
    }, 2000);
  };

  return (
    <Container
      onClick={() => {
        rollDice();
      }}
    >
      <DiceAnimation $animation={animation}>
        <DicePosition $x={rotation.x} $y={rotation.y}>
          <Dice />
        </DicePosition>
      </DiceAnimation>
    </Container>
  );
};

export default VirtualDice;
