import propTypes from 'prop-types';

const Notification = ({ message }) => <p>{message}</p>;

export default Notification;

Notification.propTypes = {
  message: propTypes.string.isRequired,
};
