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
  height: 335px;
  width: 800px;
  background-image: url(./img/Ticket.png);
  background-size: cover;
  margin-top: 70px;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 50px;
`;

export const InputForm = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 537.44px;
  height: 57.17px;
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

export const Button = styled.button`
  background-color: #3c87bd;
  border-radius: 7px;
  border: none;
  color: white;
  width: 537.44px;
  height: 57.17px;
  font-size: x-large;
`;

export const Icon = styled.img`
  width: 36px;
  height: 36px;
  margin: 15px;
`;
