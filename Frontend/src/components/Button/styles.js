import styled from 'styled-components';

export const ButtonRemove = styled.button`
  min-width: 30px;
  height: 30px;
  color: #fff;
  padding: 5px 10px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  outline: none;
  border-radius: 5px;
  border: 2px solid #d90429;
  background: #d90429;

  &:hover {
    background: #0d1321;
    color: #d90429;
  }
`;

export const ButtonEdit = styled.button`
  min-width: 50px;
  height: 30px;
  color: #fff;
  padding: 5px 10px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  outline: none;
  border-radius: 5px;
  border: 2px solid #2c0b8e;
  background: #2c0b8e;

  &:hover {
    background: #0d1321;
    color: #2c0b8e;
  }
`;

export const ButtonDefault = styled.button`
  min-width: 130px;
  height: auto;
  color: #fff;
  padding: 5px 10px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  outline: none;
  border-radius: 5px;
  border: 2px solid #57cc99;
  background: #57cc99;

  &:hover {
    background: #1e1e1e;
    color: #57cc99;
  }
`;
