import styled from 'styled-components'

export const Container = styled.div`
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

export const SignInContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #000;
  h1 {
    font-weight: bold;
    margin: 0;
  }
  span {
    font-size: 12px;
  }
`

export const SignUpContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  align-items: center;
  text-align: center;
  color: #fff;
  background-color: #01072d;
  h1 {
    font-weight: bold;
    margin: 0;
  }
  span {
    font-size: 14px;
    width: 70%;
  }
`

export const Input = styled.input`
  background-color: #eee;
  border: none;
  padding: 12px 15px;
  margin: 8px 0;
  width: 60%;
`

export const Button = styled.button`
  border-radius: 20px;
  border: 1px solid #01072d;
  background-color: #01072d;
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
