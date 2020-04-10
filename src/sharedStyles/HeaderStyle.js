import styled from "styled-components"

const HeaderStyle = styled.section`
  width: 49%;
  height: 13vh;
  background: ${(props) => props.theme.yellowSemiWhite};
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-right: 7%;
  h2 {
    font-size: 7rem;
    font-weight: normal;
    margin: 0;
    transform: translateY(40%);
    @media (max-width: 1400px) {
      font-size: 5.3rem;
      line-height: 8rem;
    }
    @media (max-width: 900px) {
      font-size: 4.3rem;
      line-height: 6rem;
      margin-right: 2%;
    }

    @media (max-width: 600px) {
      margin-top: 12vh;
      width: 85%;
      font-size: 3.5rem;
      line-height: 5rem;
    }
  }
  .model-header {
    font-size: 5.2rem;
    @media (max-width: 900px) {
      font-size: 3.5rem;
    }

    @media (max-width: 600px) {
      font-size: 3rem;
      transform: translate(-18%, 40%);
    }
  }
  .brand-country {
    width: 65px;
    height: 65px;
    display: inline-block;
    transform: translateY(40%);
    margin-left: 30px;
    @media (max-width: 1200px) {
      width: 45px;
      height: 45px;
    }
    @media (max-width: 600px) {
      margin-left: 0;
      margin-right: 20px;
    }
  }
  .first-letter {
    transform: translate(75%, 40%);
    position: relative;
  }
  .first-model-letter {
    transform: translate(75%, 40%) scale(0.8);
    @media (max-width: 600px) {
      transform: translate(0, 40%) scale(0.8);
    }
  }
  @media (max-width: 850px) {
    padding-right: 0;
    height: 10vh;
  }
`

export default HeaderStyle
