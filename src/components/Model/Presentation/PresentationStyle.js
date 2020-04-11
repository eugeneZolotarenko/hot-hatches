import styled from "styled-components"

const PresentationStyle = styled.section`
  width: fit-content;
  display: flex;
  justify-content: flex-end;
  box-shadow: ${props => props.theme.cardShadow};
  border-left: 6px solid ${props => props.theme.yellow};
  border-top: 6px solid ${props => props.theme.yellow};
  canvas {
    cursor: grab;
  }
  .model-slider {
    width: 67vw;
    max-height: calc(67vw * 0.65);
    .awssld__bullets {
      display: none;
    }
    .awssld__content {
      background-color: ${props => props.theme.nightBlue};
    }
    .awssld__controls {
      button {
        span {
          &::before,
          &::after {
            background-color: ${props => props.theme.yellow};
          }
        }
      }
    }
    .awssld__bar {
      background-color: ${props => props.theme.orange};
    }
    @media (max-width: 600px) {
      width: 85vw;
    }
  }

  @media (max-width: 600px) {
    box-shadow: ${props => props.theme.mobileCardShadow};
  }
`

export default PresentationStyle
