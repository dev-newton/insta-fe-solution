import { Fragment } from "react";
import PropTypes from "prop-types";
import Schedule from "./Schedule/Schedule";

const RouteDetails = ({ stops, schedulingStrategy, canAddCargo }) => {
  return (
    <>
      <div className="container">
        {stops.map((stop, i) => (
          <Fragment key={i}>
            <Schedule
              counter={i + 1}
              length={stops.length}
              strategy={schedulingStrategy}
              stop={stop}
              canAddCargo={canAddCargo}
            />
          </Fragment>
        ))}
      </div>
    </>
  );
};

RouteDetails.propTypes = {
  stops: PropTypes.arrayOf(
    PropTypes.shape({
      address: PropTypes.string.isRequired,
      company: PropTypes.string,
      openingHours: PropTypes.shape({
        from: PropTypes.number.isRequired,
        to: PropTypes.number.isRequired,
      }),
      schedule: PropTypes.shape({
        start: PropTypes.string.isRequired,
        end: PropTypes.string.isRequired,
      }),
    })
  ).isRequired,
  schedulingStrategy: PropTypes.oneOf(["fixed", "semiFlexible", "flexible"])
    .isRequired,
  canAddCargo: PropTypes.bool.isRequired,
};

export default RouteDetails;
