import styled from 'styled-components'

export const Container = styled.body`
  display: flex;
  background-color: #fff;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
`

export const FormContainer = styled.div`
  display: flex;

  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  position: relative;
  overflow: hidden;
  width: 768px;
  max-width: 100%;
  min-height: 480px;
`

export const SignInContainer = styled.form`
  width: 50%;
  display: flex;
  background-color: #183286;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  align-items: center;
  color: #fff;
  h1 {
    width: 304px;
    text-align: center;
    font-weight: bold;
    font-size: 2em;
    margin: 0;
  }
  p {
    width: 290px;
    text-align: center;
    font-size: 14px;
  }
`

export const SignUpContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* gap: 20px; */
  align-items: center;
  text-align: center;
  color: #000000;
  background-color: #fff;
  h1 {
    font-weight: bold;
    font-size: 2em;
    margin: 0;
  }
  span {
    font-size: 12px;
    width: 70%;
  }
`

export const Input = styled.input`
  background-color: #eee;
  border: none;
  padding: 12px 15px;
  margin: 8px 0;
  width: 80%;
`

export const Button = styled.button`
  border-radius: 20px;
  border: 1px solid #ffffff;
  background-color: transparent;
  color: #ffffff;
  font-size: 12px;
  font-weight: bold;
  padding: 12px 45px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: transform 80ms ease-in;

  &:active {
    transform: scale(0.95);
  }

  &:focus {
    outline: none;
  }

  &.ghost {
    background-color: transparent;
    border-color: #ffffff;
  }
`
