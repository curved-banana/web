import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Ticket = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 390px;
  width: 930px;
  background-image: url(./img/Ticket.png);
  background-size: cover;
  margin-top: 70px;
`;

export const LoginForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 10px;
  padding-top: 59px;
`;

export const InputForm = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 618px;
  height: 67px;
  border: 2px solid #3c87bd;
  border-radius: 20px;
  margin-bottom: 5px;
`;

export const Input = styled.input`
  border: none;
  outline: none;
  place-content: #c6c6c6;
  font-weight: bold;
  font-size: medium;
  margin-left: 10px;
  opacity: 55%;
`;

export const StateForm = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  margin: 10px;
  cursor: pointer;
`;

export const State = styled.div`
  width: 100%;
  font-size: medium;
  font-weight: bold;
`;

export const Button = styled.button`
  background-color: #3c87bd;
  border-radius: 7px;
  border: none;
  color: white;
  width: 618px;
  height: 67px;
  font-size: 30px;
`;

export const Find = styled.div`
  display: flex;
  flex-direction: row;
  margin: 58px 0 30.47px;
  font-weight: bold;
`;

export const Icon = styled.img`
  width: 36px;
  height: 36px;
  margin: 15px;
`;

export const SocialIcon = styled.img`
  width: 52px;
  height: 54px;
  margin: 5px;
`;
