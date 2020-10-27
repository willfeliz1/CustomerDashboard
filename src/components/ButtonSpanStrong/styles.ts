import styled from 'styled-components';

interface IButtonColor {
  buttonColor: string;
}

export const Container = styled.div`
  display: flex;
  margin-right: 18px;
`;

export const Button = styled.button<IButtonColor>`
  width: 40px;
  height: 40px;
  border: 0;
  border-radius: 5px;
  margin-right: 10px;
  color: #fff;
  background: ${(props) => props.buttonColor};
`;
