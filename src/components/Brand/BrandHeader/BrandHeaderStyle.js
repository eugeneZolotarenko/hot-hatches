import styled from "styled-components"

const BrandHeaderStyle = styled.section`
  width: 49%;
  height: 15vh;
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
  }
  .first-letter {
    transform: translate(75%, 40%);
    position: relative;
  }
`

export default BrandHeaderStyle
