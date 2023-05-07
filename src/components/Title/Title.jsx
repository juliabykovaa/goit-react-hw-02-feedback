import PropTypes from 'prop-types';

export const Title = ({ title, children }) => {
  return (
    <section>
      <h1>{title}</h1>
      {children}
    </section>
  );
};

Title.propTypes = {
  title: PropTypes.string,
  children: PropTypes.array,
};
