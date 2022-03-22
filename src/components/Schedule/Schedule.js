import { useState } from "react";
import {
  ActionRow,
  CargoItemForm,
  Input,
  LocationDetails,
  Marker,
  TextIcon,
} from "../../components";

const Schedule = ({ counter, length, stop, strategy, canAddCargo }) => {
  const [value, setValue] = useState({});
  const [open, setOpen] = useState(false);

  const { address, company, openingHours, schedule } = stop;
  const getMarkerType = counter === length ? "icon" : "text";

  const handleInputChange = (event) => {
    setValue({
      [event.target.name]: event.target.value,
    });
  };

  const handleClick = () => {
    setOpen(!open);
  };

  console.log(schedule);

  let label;
  let color;
  let showInput;
  let scheduleInput;

  const fixedStrategy = () => {
    if (counter === length - (length - 1)) {
      label = "Pick up date";
      color = "primary";
      showInput = true;
    } else {
      label = "Estimated arrival";
      color = "muted";
      showInput = false;
    }
  };

  const semiFlexibleStrategy = () => {
    if (counter === length - (length - 1)) {
      label = { date: "Pick up date", from: "From", to: "To" };
      color = "primary";
      showInput = true;
    } else {
      label = { date: "Estimated arrival" };
      color = "muted";
      showInput = false;
    }
  };

  const flexibleStrategy = () => {
    if (counter === length - (length - 1)) {
      label = { date: "Pick up date", from: "From", to: "To" };
      color = "primary";
      showInput = true;
    } else {
      label = { date: "Arrival date" };
      color = "primary";
      showInput = true;
    }
  };

  if (strategy === "fixed") {
    fixedStrategy();
    scheduleInput = (
      <div className="input_row_wrapper">
        <Input
          name="date"
          label={label}
          size="xl"
          color={color}
          type="date"
          onChange={handleInputChange}
          showInput={showInput}
        />
      </div>
    );
  } else if (strategy === "semiFlexible") {
    semiFlexibleStrategy();
    scheduleInput = (
      <div className="input_row_wrapper">
        <Input
          label={label.date}
          size="xs"
          color={color}
          type="date"
          onChange={handleInputChange}
          showInput={showInput}
        />
        <Input
          label={label.from}
          size="xs"
          color={color}
          type="time"
          onChange={handleInputChange}
          showInput={showInput}
        />
        <Input
          label={label.to}
          size="xs"
          color={color}
          type="time"
          onChange={handleInputChange}
          showInput={showInput}
        />
      </div>
    );
  } else if (strategy === "flexible") {
    flexibleStrategy();
    scheduleInput = (
      <div className="input_row_wrapper">
        <Input
          name={`date_${counter}`}
          label={label.date}
          size="xs"
          color={color}
          type="date"
          onChange={handleInputChange}
          showInput={showInput}
        />
        <Input
          name={`date_${counter}`}
          label={label.from}
          size="xs"
          color={color}
          type="time"
          onChange={handleInputChange}
          showInput={showInput}
        />
        <Input
          name={`date_${counter}`}
          label={label.to}
          size="xs"
          color={color}
          type="time"
          onChange={handleInputChange}
          showInput={showInput}
        />
      </div>
    );
  }

  return (
    <>
      <div className="route">
        <div className="route_company_wrapper">
          <Marker type={getMarkerType} value={counter} />
          <LocationDetails
            address={address}
            company={company}
            openingHours={openingHours}
          />
        </div>
        <div className="route_wrapper">
          {scheduleInput}
          <TextIcon label="Gate reference" icon="fa-plus" />
          {/* Component expects a fontAwesome Icon */}
        </div>
      </div>
      {canAddCargo && (
        <>
          <ActionRow
            position="right"
            label="Add cargo"
            onClick={handleClick}
            open={open}
            openLabel="Cargo item"
            continueLabel="Save"
          >
            {open && (
              <CargoItemForm onChange={handleInputChange} value={value} />
            )}
          </ActionRow>
        </>
      )}
    </>
  );
};

export default Schedule;
