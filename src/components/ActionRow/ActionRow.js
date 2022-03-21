import PropTypes from "prop-types";
import TextIcon from "../TextIcon/TextIcon";

const ActionRow = ({
  position,
  continueLabel,
  label,
  open,
  openLabel,
  onClick,
  children,
}) => {
  return (
    <>
      <div className="action_wrapper">
        {position === "left" && <hr className={position} />}
        <div className="action_row">
          {open && <h6>{openLabel}</h6>}
          {!open && <TextIcon label={label} icon="fa-plus" onClick={onClick} />}
        </div>
        {position === "right" && <hr className={position} />}
      </div>
      {children}

      {open && (
        <div className="action_wrapper">
          <hr className="left" />
          <div className="action_row">
            <h6 onClick={onClick}>Cancel</h6>
            <TextIcon label={continueLabel} icon="" onClick={() => {}} />
          </div>
        </div>
      )}
    </>
  );
};

ActionRow.propTypes = {
  position: PropTypes.oneOf(["left", "right"]),
  // canCancel: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
};

export default ActionRow;
