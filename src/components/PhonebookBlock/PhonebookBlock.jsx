import css from './PhonebookBlock.module.css';
import PropTypes from 'prop-types';

const PhonebookBlock = ({ title, children }) => {
  return (
    <div className={css.wrapper}>
      <h3 className={css.title}>{title}</h3>
      {children}
    </div>
  );
};

export default PhonebookBlock;

PhonebookBlock.propTypes = {
  children: PropTypes.node,
};
