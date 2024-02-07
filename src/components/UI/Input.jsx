import React from "react";

const Input = React.forwardRef((props, ref) => {
  return (
    <div className={props.className}>
      <label>
        {props.label}:{" "}
        <input
          className={props.inputStyle}
          ref={ref}
          min={props.min}
          max={props.max}
          type={props.type}
        />
      </label>
    </div>
  );
});

export default Input;
