import styled from "styled-components"

const SpecsStyle = styled.section`
  max-width: 2000px;
  display: flex;
  position: relative;
  .header-container {
    max-width: 17%;
    min-height: 150px;
    max-height: 160px;
    min-width: 15%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    background: linear-gradient(180deg, #fcfff3 50%, #f3b81d 50%);
    margin-right: 10vw;

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

  .specs-container {
    width: fit-content;
    margin-top: 120px;
    .specs-wrapper {
      list-style-type: none;
      padding: 45px 30px;
      margin: 0;
      .spec {
        font-size: 2.2rem;
        line-height: 1.8;
        font-weight: 500;
      }
    }
  }

  .dark-container {
    background: ${(props) => props.theme.nightBlue};
    min-width: 18%;
    max-width: 18%;
    height: 300px;
    .specs-wrapper {
      .spec {
        color: white;
      }
    }
  }

  .yellow-container {
    width: 35%;
    height: 250px;
    background-color: ${(props) => props.theme.yellow};
  }
`

export default SpecsStyle
