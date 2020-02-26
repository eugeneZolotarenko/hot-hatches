import styled from "styled-components"

const MainHeaderStyle = styled.section`
  background: linear-gradient(
    90deg,
    ${(props) => props.theme.yellow} 50%,
    ${(props) => props.theme.semiWhite} 50%
  );
  min-height: 150px;
  position: relative;
  padding: 14vh 0 10vh 0;
  display: flex;
  align-items: center;
  justify-content: center;

  .logo {
    color: #cf7207;
    font-size: 4rem;
    font-weight: bold;
    position: absolute;
    top: 4%;
    left: 2%;
    margin: 0;
  }

  h2 {
    font-size: 6.3rem;
    font-weight: normal;
    width: 50%;
    margin-right: 5%;
    position: relative;
    line-height: 9rem;

    &::before {
      content: "T";
      color: ${(props) => props.theme.orange};
      font-size: 16rem;
      font-weight: bold;
      position: absolute;
      opacity: 0.3;
      top: -3rem;
      left: -5rem;
    }
  }

  .little-hatch {
    background: url("little-hatch.gif");
    width: 300px;
    height: 170px;
  }

  &::before {
    content: "";
    background: ${(props) => props.theme.nightBlue};
    width: 51vw;
    height: 11px;
    position: absolute;
    top: 0;
    right: 0;
  }
`

export default MainHeaderStyle
