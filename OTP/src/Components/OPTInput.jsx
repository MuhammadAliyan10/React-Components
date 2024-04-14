import React, { useEffect, useRef, useState } from "react";

const OPTInput = ({ length, onOTPSubmit }) => {
  const [OTP, setOTP] = useState(new Array(length).fill(""));
  const OTPFocus = useRef([]);
  useEffect(() => {
    if (OTPFocus.current[0]) {
      OTPFocus.current[0].focus();
    }
  }, []);

  const handleOTPChange = (index, e) => {
    const value = e.target.value;
    if (isNaN(value)) return;

    const newOTP = [...OTP];
    newOTP[index] = value.substring(value.length - 1);
    setOTP(newOTP);
    const combinedOTP = newOTP.join("");
    if (combinedOTP.length === length) onOTPSubmit(combinedOTP);

    if (value && index < length - 1 && OTPFocus.current[index + 1]) {
      OTPFocus.current[index + 1].focus();
    }
  };
  const handleOTPClick = (index) => {
    OTPFocus.current[index].setSelectionRange(1, 1);

    if (index > 0 && !OTP[index - 1]) {
      OTPFocus.current[OTP.indexOf("")].focus();
    }
    if (!OTP[index - 1]) {
    }
  };
  const handleOTPKey = (index, e) => {
    if (
      e.key === "Backspace" &&
      !OTP[index] &&
      index > 0 &&
      OTPFocus.current[index - 1]
    ) {
      OTPFocus.current[index - 1].focus();
    }
  };
  return (
    <div className="OPT">
      <p>Enter your OTP</p>
      {OTP.map((value, index) => {
        return (
          <input
            ref={(input) => (OTPFocus.current[index] = input)}
            value={value}
            type="text"
            key={index}
            onChange={(e) => handleOTPChange(index, e)}
            onClick={() => handleOTPClick(index)}
            onKeyDown={(e) => {
              handleOTPKey(index, e);
            }}
          />
        );
      })}
    </div>
  );
};

export default OPTInput;
