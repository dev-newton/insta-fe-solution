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
  return (
    <div className={`input_wrapper ${type}`}>
      <p className={`text_${color}`}>{label}</p>
      {showInput ? (
        <>
          <input
            name={name}
            className={`input ${size} ${type === "time" && "pad_80"}`}
            type={type}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            data-testid="input"
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
