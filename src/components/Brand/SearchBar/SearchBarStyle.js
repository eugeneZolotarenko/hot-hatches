import styled from "styled-components"

const SearchBarStyle = styled.section`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  width: 50%;
  padding-right: 10%;
  form {
    height: 37px;
    width: fit-content;
    max-width: 400px;
    display: flex;
    position: relative;
    .form-text {
      height: 100%;
      width: 100%;
      min-width: 300px;
      border: none;
      background-color: #f9ce9d;
      font-size: 3rem;
      padding: 0 5%;
      color: ${(props) => props.theme.orange};
      @media (max-width: 1200px) {
        font-size: 2.2rem;
        min-width: 200px;
      }
      @media (max-width: 600px) {
        min-width: 0px;
        width: 80%;
      }
    }
    .form-submit {
      width: fit-content;
      font-size: 3rem;
      line-height: 1rem;
      height: 100%;
      background: linear-gradient(90deg, #f9ce9d 70%, #fcfff3 30%);
      border: none;
      color: ${(props) => props.theme.nightBlue};
      padding: 0;
      @media (max-width: 1200px) {
        font-size: 2.2rem;
      }
    }
    &::before {
      content: "";
      width: 95%;
      height: 4px;
      position: absolute;
      bottom: 3px;
      right: 0;
      background-color: ${(props) => props.theme.nightBlue};
    }
    @media (max-width: 800px) {
    }
  }
  @media (max-width: 850px) {
    margin-top: 10vh;
    padding-left: 10%;
    width: 100%;
  }
`

export default SearchBarStyle
