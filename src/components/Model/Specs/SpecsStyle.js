import styled from "styled-components"

const SpecsStyle = styled.section`
  max-width: 2000px;
  .header-container {
    max-width: 17vw;
    min-height: 150px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    background: linear-gradient(180deg, #fcfff3 50%, #f3b81d 50%);

    h3 {
      font-size: 5.2rem;
      transform: translateX(50%);
      font-weight: normal;
      margin: 0;
      color: ${(props) => props.theme.nightBlue};

      .model-first-letter {
        top: -140%;
        left: -45%;
        transform: scale(0.8);
      }
    }
  }
`

export default SpecsStyle
