import styled from "styled-components"

const PresentationStyle = styled.section`
  width: fit-content;
  display: flex;
  justify-content: flex-end;
  box-shadow: ${(props) => props.theme.cardShadow};
  margin: 10vh auto;
  canvas {
    cursor: grab;
  }
`

export default PresentationStyle
