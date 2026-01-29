import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors());

app.use(express.json());

app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;

  const time = new Date().toLocaleString("en-IN", {
  timeZone: "Asia/Kolkata",
  dateStyle: "medium",
  timeStyle: "short",
  });

  if (!name || !email || !message) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      replyTo: email,
      subject: `New message from ${name}`,
      html: `
         <table
      width="100%"
      cellpadding="0"
      cellspacing="0"
      style="padding: 40px 0"
    >
      <tr>
        <td align="center">
          <!-- Main Card -->
          <table
            width="600"
            cellpadding="0"
            cellspacing="0"
            style="
              background-color: #ffffff;
              border-radius: 8px;
              overflow: hidden;
            "
          >
            <!-- Header -->
            <tr>
              <td
                style="
                  background: linear-gradient(90deg, #0ea5e9, #22c55e);
                  padding: 32px 40px;
                  text-align: center;
                  color: #ffffff;
                "
              >
                <div style="font-size: 24px; font-weight: 700">
                  New Contact Form Message
                </div>
                <div
                  style="
                    margin-top: 8px;
                    font-size: 14px;
                    opacity: 0.9;
                  "
                >
                  You have received a new message from your portfolio website
                </div>
              </td>
            </tr>

            <!-- Content -->
            <tr>
              <td style="padding: 32px 40px">
                <!-- From Section -->
                <table
                  width="100%"
                  cellpadding="0"
                  cellspacing="0"
                  style="
                    background-color: #f8fafc;
                    border-left: 4px solid #0ea5e9;
                    border-radius: 6px;
                    margin-bottom: 24px;
                  "
                >
                  <tr>
                    <td style="padding: 16px">
                      <div
                        style="
                          font-size: 12px;
                          color: #64748b;
                          font-weight: 600;
                          text-transform: uppercase;
                          letter-spacing: 0.5px;
                          margin-bottom: 8px;
                        "
                      >
                        From
                      </div>

                      <div
                        style="
                          font-size: 16px;
                          font-weight: 600;
                          color: #0f172a;
                        "
                      >
                        ${name}
                      </div>
                      <div style="color: #64748b; font-size: 14px">
                        <a
                          href="mailto:${email}"
                          style="
                            color: #0ea5e9;
                            text-decoration: none;"
                        >
                          ${email}
                        </a>
                      </div>
                    </td>
                  </tr>
                </table>

                <!-- Message Section -->
                <div style="margin-bottom: 24px">
                  <div
                    style="
                      color: #64748b;
                      font-size: 12px;
                      font-weight: 600;
                      text-transform: uppercase;
                      letter-spacing: 0.5px;
                      margin-bottom: 12px;
                    "
                  >
                    Message
                  </div>

                  <div
                    style="
                      background-color: #f8fafc;
                      padding: 16px;
                      border-radius: 6px;
                      font-size: 14px;
                      color: #0f172a;
                      line-height: 1.6;
                    "
                  >
                    ${message}
                  </div>
                </div>

                <!-- Reply Button -->
                <table
                  width="100%"
                  cellpadding="0"
                  cellspacing="0"
                >
                  <tr>
                    <td align="center">
                      <a
                        href="mailto:${email}"
                        style="
                          display: inline-block;
                          background-color: #0ea5e9;
                          color: #ffffff;
                          text-decoration: none;
                          padding: 12px 24px;
                          border-radius: 6px;
                          font-size: 14px;
                          font-weight: 600;
                        "
                      >
                        Reply to ${name}
                      </a>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td
                style="
                  background-color: #f8fafc;
                  padding: 24px 40px;
                  text-align: center;
                  border-top: 1px solid #e2e8f0;
                "
              >
                <p
                  style="
                    margin: 0;
                    color: #64748b;
                    font-size: 12px;
                    line-height: 1.5;
                  "
                >
                  This email was sent from your portfolio contact form.<br />
                  <span style="color: #94a3b8">
                    ${time}
                  </span>
                </p>
              </td>
            </tr>
          </table>

      `,
    });

    res.status(200).json({ message: "Email sent successfully" });
  } catch (err) {
    console.error("Email error:", err);
    res.status(500).json({ message: "Failed to send email" });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});

