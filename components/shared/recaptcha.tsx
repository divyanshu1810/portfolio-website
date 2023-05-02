import React from "react";
import ReCAPTCHA from "react-google-recaptcha";

const Recaptcha = () => {
  const sitekey: any = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
  const recaptchaRef: any = React.createRef();
  const onReCAPTCHAChange = (captchaCode: any) => {
    if (!captchaCode) {
      return;
    }
    recaptchaRef.current.reset();
  };
  return (
    <div>
      <ReCAPTCHA
        ref={recaptchaRef}
        size="invisible"
        sitekey={sitekey}
        onChange={onReCAPTCHAChange}
      />
    </div>
  );
};

export default Recaptcha;
