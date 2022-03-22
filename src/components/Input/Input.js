import { useEffect, useRef } from "react";
import { getCurrentDate } from "@helpers";

const Input = ({
  type,
  size,
  color,
  label,
  onChange,
  value,
  name,
  placeholder,
  showInput = true,
}) => {
  const inputRef = useRef();

  useEffect(() => {
    if (type === "date") {
      inputRef.current?.setAttribute("min", getCurrentDate());
    }
  }, []);

  return (
    <div className={`input_wrapper ${type}`}>
      <p className={`text_${color}`}>{label}</p>
      {showInput ? (
        <>
          <input
            name={name}
            ref={inputRef}
            className={`input ${size} ${type === "time" && "pad_80"}`}
            type={type}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
          />
          {type === "time" && <i className="fa fa-angle-down"></i>}
        </>
      ) : (
        type === "date" && <p className="dash">-</p>
      )}
    </div>
  );
};

export default Input;
