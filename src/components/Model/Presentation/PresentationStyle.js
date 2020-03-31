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
  .model-slider {
    width: 67vw;
    .awssld__bullets {
      display: none;
    }
    .awssld__controls {
      button {
        span {
          &::before,
          &::after {
            background-color: ${(props) => props.theme.yellow};
          }
        }
      }
    }
    .awssld__bar {
      background-color: ${(props) => props.theme.yellow};
    }
  }
`

export default PresentationStyle
