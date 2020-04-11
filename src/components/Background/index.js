import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function Background({ children, alignItems }) {
  return <Container alignItems={alignItems}>{children}</Container>;
}

Background.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
  alignItems: PropTypes.bool,
};

Background.defaultProps = {
  alignItems: true,
};
