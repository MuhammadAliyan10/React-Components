import React, { useState } from "react";
import OPTInput from "./OPTInput";

const PhoneOTP = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showOTPField, setShowOTPField] = useState(false);
  const handlePhoneNumber = (e) => {
    setPhoneNumber(e.target.value);
  };
  const handlePhoneSubmit = (e) => {
    e.preventDefault();
    const regex = /[^0-9]/g;
    if (phoneNumber.length < 10 || regex.test(phoneNumber)) {
      alert("Invalid phone number");
      return;
    }
    setShowOTPField(true);
  };
  const handleOTPSubmit = (otp) => {
    console.log("The otp is " + otp);
  };
  return (
    <div>
      {!showOTPField ? (
        <form onSubmit={handlePhoneSubmit}>
          <input
            type="text"
            value={phoneNumber}
            onChange={handlePhoneNumber}
            placeholder="Enter your phone number"
          />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <>
          <OPTInput length={4} onOTPSubmit={handleOTPSubmit} />
        </>
      )}
    </div>
  );
};

export default PhoneOTP;
