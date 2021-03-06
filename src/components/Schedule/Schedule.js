import { useState } from "react";
import {
  ActionRow,
  CargoItemForm,
  Input,
  LocationDetails,
  Marker,
  TextIcon,
} from "components";
import {
  useFixedStrategy,
  useSemiFlexibleStrategy,
  useFlexibleStrategy,
} from "hooks";

const Schedule = ({ counter, length, stop, strategy, canAddCargo }) => {
  const [value, setValue] = useState({});
  const [open, setOpen] = useState(false);

  const getMarkerType = counter === length ? "icon" : "text";
  const { address, company, openingHours, schedule } = stop;

  let date = schedule.start.split(" ")[0];
  let start_time = schedule.start.split(" ")[1];
  let end_time = schedule.end.split(" ")[1];

  const handleInputChange = (event) => {
    setValue({ ...value, [event.target.name]: event.target.value });
  };

  const handleClick = () => {
    setOpen(!open);
  };

  let scheduleInput;

  if (strategy === "fixed") {
    const { label, color, showInput } = useFixedStrategy(counter, length);
    scheduleInput = (
      <div className="input_row_wrapper">
        <Input
          label={label}
          size="xl"
          color={color}
          type="date"
          onChange={handleInputChange}
          showInput={showInput}
          name={`date_${counter}`}
          value={value[`date_${counter}`] || date}
        />
      </div>
    );
  } else if (strategy === "semiFlexible") {
    const { label, color, showInput } = useSemiFlexibleStrategy(
      counter,
      length
    );
    scheduleInput = (
      <div className="input_row_wrapper">
        <Input
          label={label.date}
          size="xs"
          color={color}
          type="date"
          onChange={handleInputChange}
          showInput={showInput}
          name={`date_${counter}`}
          value={value[`date_${counter}`] || date}
        />
        <Input
          label={label.from}
          size="xs"
          color={color}
          type="time"
          onChange={handleInputChange}
          showInput={showInput}
          name={`from_${counter}`}
          value={value[`from_${counter}`] || start_time}
        />
        <Input
          label={label.to}
          size="xs"
          color={color}
          type="time"
          onChange={handleInputChange}
          showInput={showInput}
          name={`to_${counter}`}
          value={value[`to_${counter}`] || end_time}
        />
      </div>
    );
  } else if (strategy === "flexible") {
    const { label, color, showInput } = useFlexibleStrategy();
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
          value={value[`date_${counter}`] || date}
        />
        <Input
          label={label.from}
          size="xs"
          color={color}
          type="time"
          onChange={handleInputChange}
          showInput={showInput}
          name={`from_${counter}`}
          value={value[`from_${counter}`] || start_time}
        />
        <Input
          label={label.to}
          size="xs"
          color={color}
          type="time"
          onChange={handleInputChange}
          showInput={showInput}
          name={`to_${counter}`}
          value={value[`to_${counter}`] || end_time}
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
