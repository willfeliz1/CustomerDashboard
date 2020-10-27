import React from 'react';

import { Container, Button } from './styles';

interface IButtonSpanStrong {
  buttonText: string;
  buttonColor: string;
  title: string;
  description: string;
}

const ButtonSpanStrong: React.FC<IButtonSpanStrong> = ({
  buttonText = '',
  buttonColor,
  title,
  description,
}: IButtonSpanStrong) => {
  return (
    <Container>
      <Button type="button" buttonColor={buttonColor}>
        {buttonText}
      </Button>
      <div>
        <strong>{title}</strong>
        <p>{description}</p>
      </div>
    </Container>
  );
};

export default ButtonSpanStrong;
