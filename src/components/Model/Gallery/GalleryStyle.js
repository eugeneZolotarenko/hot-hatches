import styled from "styled-components"

const GalleryStyle = styled.section`
  width: 70vw;
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
`

export default GalleryStyle
