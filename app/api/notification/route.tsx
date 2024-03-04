import nodemailer from "nodemailer";

export async function POST(request: Request) {
  // Example Request Body
  // {
  //     "to": "yourdestinatione@mail.com",
  //     "subject": "The Testing email!",
  //     "body": "<h1>Your Email Body!</h1>"
  // }

  const data = await request.json();

  try {
    const transporter = nodemailer.createTransport({
      service: "",
      host: process.env.SMTP_HOST,
      port: 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.SMTP_USER,
      to: data.to,
      subject: data.subject,
      html: data.body,
    };

    const sendingTheNotification = await transporter.sendMail(mailOptions);
    console.log(sendingTheNotification);

    return Response.json(
      { message: "Email sent Successfully" },
      { status: 200 }
    );
  } catch (error) {
    return Response.json({ message: "Failed to send email." }, { status: 500 });
  }
}
