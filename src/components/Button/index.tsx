import React from 'react';

import { StyledButton } from './styles';

export interface BtnProps {
  primary?: boolean;
}

const Button: React.FC<BtnProps> = (props) => {
  return <StyledButton {...props} />;
}

export default Button;