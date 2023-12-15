const sgMail = require("@sendgrid/mail");
const { SENDGRID_API_KEY } = require("../../config/endpoints");

sgMail.setApiKey(SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "ltwebfree46@gmail.com",
    subject: "Thanks for joining in!",
    text: `Welcome to the app, ${name}. Let me know how you get along with the app.`,
  });
};

const sendCancelationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "ltwebfree46@gmail.com",
    subject: "Sorry to see you go!",
    text: `Goodbye, ${name}. I hope to see you back sometime soon.`,
  });
};
sendWelcomeEmail("premierleague6633@gmail.com", "khoa le");
module.exports = {
  sendWelcomeEmail,
  sendCancelationEmail,
};
