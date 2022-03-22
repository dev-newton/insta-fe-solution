let label;
let color;
let showInput;

const useSemiFlexibleStrategy = (counter, length) => {
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

export default useSemiFlexibleStrategy;
