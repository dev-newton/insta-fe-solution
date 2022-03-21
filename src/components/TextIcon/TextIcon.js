import PropTypes from "prop-types";

const TextIcon = ({ icon, label, onClick }) => {
  return (
    <div className="text_icon_wrapper" onClick={onClick}>
      <i className={`fa ${icon}`}></i>
      <p>{label}</p>
    </div>
  );
};

TextIcon.propTypes = {
  icon: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default TextIcon;
