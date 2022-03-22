let label;
let color;
let showInput;

const useFlexibleStrategy = (counter, length) => {
  label = { date: "Pick up date", from: "From", to: "To" };
  color = "primary";
  showInput = true;

  return { label, color, showInput };
};

export default useFlexibleStrategy;
