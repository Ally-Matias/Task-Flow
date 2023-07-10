import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
`;

export const Sidebar = styled.div`
  display: flex;
  flex-direction: column;

  min-width: 13%;
  max-width: auto;
  min-height: 100vh;
  height: auto;

  padding: 0 20px;

  background-color: #1e1e1e;
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 35vh;

  margin-top: 24px;
`;

export const TaskInput = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

export const TextArea = styled.textarea`
  max-width: 100%;
  min-height: 6.25rem;
  max-height: 6.25rem;

  margin-bottom: 10px;

  padding: 5px 10px;

  font-size: 15px;

  border: 1px solid #ffffff;
  border-radius: 5px;

  outline: none;

  border-color: rgb(48, 52, 54);
`;

export const Main = styled.main`
  width: 100%;
`;

export const Header = styled.header`
  display: flex;
  justify-content: center;

  margin-top: 10px;
`;

export const ButtonSearch = styled.button`
  width: 50px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #1e1e1e;
  background: #191919;
  text-align: center;
  color: #fff;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 20px;

  &:active {
    background: #323232;
  }
`;

export const ButtonLogin = styled.button`
  width: 80px;
  height: 45px;
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-right: 20px;
  margin-top: 20px;
  justify-content: center;
  border: 1px solid #1e1e1e;
  background: #191919;
  text-align: center;
  color: #fff;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 17px;

  &:active {
    background: #323232;
  }
`;

export const Title = styled.p`
  display: inline-block;
  color: #ffffff;
  font-size: 28px;
  font-weight: bold;

  border-bottom-width: 0.325rem;
  border-bottom-style: solid;
  border-bottom-color: #ffffff;
`;

export const TasksContainer = styled.div`
  height: auto;

  margin-top: 20px;
  margin-left: 60px;
`;

export const TaskList = styled.div`
  width: auto;
  display: flex;
  flex: 3;
  justify-content: center;
  flex-wrap: wrap;
`;
