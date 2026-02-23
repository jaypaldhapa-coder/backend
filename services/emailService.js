import transporter from './transporter.js'
const sendOtp = async (to) => {
  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to,
      subject: "OTP Verification",
      text:"Hello"
    });
  } catch (err) {
    console.log("main mail error", err);
  }
};

export default sendOtp;