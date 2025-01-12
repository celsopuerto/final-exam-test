import React from "react";
type ContactFormEmailProps = {
  otp: string;
};

export default function ContactFormEmail({ otp }: ContactFormEmailProps) {
  return <div>Your OTP Code: {otp}</div>;
}
