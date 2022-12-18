import PropTypes from 'prop-types';

function Button ({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded
}) {
  return <button>{children}</button>;
};

Button.propTypes = {
  chechVariationValue: (props) => {
    console.log(props);

  }
};

export default Button;


// Modern React with Redux [2023 Update] section 10 custom Nav and Routing
