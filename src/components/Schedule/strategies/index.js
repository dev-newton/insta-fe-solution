let label;
let color;
let showInput;
let scheduleInput;

export const fixedStrategy = (counter, length) => {
  if (counter === length - (length - 1)) {
    label = "Pick up date";
    color = "primary";
    showInput = true;
  } else {
    label = "Estimated arrival";
    color = "muted";
    showInput = false;
  }

  return { label, color, showInput };
};

export const semiFlexibleStrategy = (counter, length) => {
  if (counter === length - (length - 1)) {
    label = { date: "Pick up date", from: "From", to: "To" };
    color = "primary";
    showInput = true;
  } else {
    label = { date: "Estimated arrival" };
    color = "muted";
    showInput = false;
  }
  return { label, color, showInput };
};

export const flexibleStrategy = () => {
  label = { date: "Pick up date", from: "From", to: "To" };
  color = "primary";
  showInput = true;

  return { label, color, showInput };
};
