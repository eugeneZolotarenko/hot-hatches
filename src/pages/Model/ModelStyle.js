import styled from "styled-components"

const ModelStyle = styled.section`
  .full-presentation {
    display: flex;
    width: fit-content;
    height: fit-content;
    justify-content: center;
    margin: 10vh auto;

    @media (max-width: 600px) {
      flex-direction: column;
    }
  }
`

export default ModelStyle
