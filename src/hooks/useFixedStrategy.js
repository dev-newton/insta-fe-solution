let label;
let color;
let showInput;

const useFixedStrategy = (counter, length) => {
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

export default useFixedStrategy;
