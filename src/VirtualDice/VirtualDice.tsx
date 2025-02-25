import styled, { keyframes } from "styled-components";

const Face = styled.div<{ $color?: string; $rotate: string }>`
  background-color: ${(props) => props.$color};
  font-size: xx-large;
  color: black;
  display: flex;
  width: 100px;
  height: 100px;
  align-items: center;
  justify-content: center;
  position: absolute;
  transform: rotate3d(${(props) => props.$rotate}) translateZ(50px);
`;

const Dice = ({ className }: { className?: string }) => {
  return (
    <div className={className} style={{ position: "relative" }}>
      <Face $color="teal" $rotate="1, 0, 0, 90deg">
        1
      </Face>
      <Face $color="coral" $rotate="1, 0, 0, -90deg">
        2
      </Face>
      <Face $color="mediumorchid" $rotate="0, 1, 0, 90deg">
        3
      </Face>
      <Face $color="plum" $rotate="0, 1, 0, -90deg">
        4
      </Face>
      <Face $color="deepskyblue" $rotate="1, 0, 0, 180deg">
        5
      </Face>
      <Face $color="gold" $rotate="0, 0, 1, -90deg">
        6
      </Face>
    </div>
  );
};

const RotatedDice = styled(Dice)`
  display: flex;
  justify-content: center;
  align-items: center;
  transform: rotateZ(45deg) rotateY(45deg);
  transform-style: preserve-3d;
`;

const spin = keyframes`
  from {
    transform: rotateY(0deg);
  }
  to {
    transform: rotateY(360deg);
  }
`;

const SpiningDice = styled.div`
  animation: ${spin} 10s linear infinite;
  transform-style: preserve-3d;
`;

function VirtualDice() {
  return (
    <SpiningDice>
      <RotatedDice />
    </SpiningDice>
  );
}

export default VirtualDice;
