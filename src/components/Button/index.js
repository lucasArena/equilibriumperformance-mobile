import React from 'react';
import PropTypes from 'prop-types';

import { Container, ButtonContainer, ButtonContainerText } from './styles';

export default function Button({ children, ...rest }) {
  return (
    <Container>
      <ButtonContainer {...rest}>
        <ButtonContainerText>{children}</ButtonContainerText>
      </ButtonContainer>
    </Container>
  );
}

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
};

Button.defaultProps = {
  children: '',
};
