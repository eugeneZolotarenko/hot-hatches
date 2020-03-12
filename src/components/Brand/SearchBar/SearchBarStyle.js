import styled from "styled-components"

const SearchBarStyle = styled.section`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  width: 100%;
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

export default SearchBarStyle
