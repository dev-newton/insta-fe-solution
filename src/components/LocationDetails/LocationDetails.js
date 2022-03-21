import { convertToTime } from "../../helpers";

const LocationDetails = ({ address, company, openingHours }) => {
  const { from, to } = openingHours;
  return (
    <div className="company_location_wrapper">
      <h2>{address}</h2>
      <h6>{company}</h6>
      <p>
        Opening hours: &nbsp;
        <span>{`${convertToTime(from)} - ${convertToTime(to)}`}</span>
      </p>
    </div>
  );
};

export default LocationDetails;
