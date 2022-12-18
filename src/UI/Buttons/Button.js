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
  chechVariationValue: ({primary, secondary, success, warning, danger}) => {
    const count = Number(!!primary)
      + Number(!!secondary)
      + Number(!!success)
      + Number(!!warning)
      + Number(!!danger)
    if (count > 1) {
      return new Error('Only one of primary, secondary, success, warning, danger can be true')
    }
    //
  }
};

export default Button;


// Modern React with Redux [2023 Update] section 10 custom Nav and Routing
