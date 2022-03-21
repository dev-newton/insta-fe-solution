import PropTypes from "prop-types";

const Marker = ({ type, value }) => {
  let markerLabel;
  if (type === "icon") {
    markerLabel = <i className="fa fa-flag"></i>;
  } else if (type === "text") {
    markerLabel = <p>{value}</p>;
  }
  return (
    <div className="pin_wrapper">
      <i className="fa fa-location-pin"></i>
      {markerLabel}
    </div>
  );
};

Marker.propTypes = {
  type: PropTypes.oneOf(["icon", "text"]).isRequired,
};

export default Marker;
