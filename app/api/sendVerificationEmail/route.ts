export const runtime = 'nodejs'
import nodemailer from 'nodemailer'

export async function POST(req: Request) {
  try {
    const { email, code } = await req.json()

    if (!email || !code) {
      return new Response(
        JSON.stringify({ error: 'Email and code are required' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      )
    }
 const email1 = process.env.email
    const pass = process.env.pass

    const transporter = nodemailer.createTransport({
      host: 'smtp.hostinger.com',
      port: 587,
      secure: false,
      auth: {
        user: email1,
         pass: pass,
      },
    })

    await transporter.sendMail({
      from: '"OnlineMed" <prince@univisionz.com>',
      to: email,
      subject: 'Your OnlineMed Verification Code',
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: auto; border: 1px solid #E1E8F7; padding: 20px; border-radius: 8px; background: #F0F5FF;">
          <h2 style="color: #1A73E8; margin-bottom: 10px;">Verify Your Email</h2>
          <p style="color: #333;">Hi there,</p>
          <p style="color: #555;">
            Thanks for choosing <strong>OnlineMed</strong>. Use the verification code below to complete your registration:
          </p>
          <div style="font-size: 28px; font-weight: 700; color: #fff; background-color: #1A73E8; padding: 15px 25px; width: fit-content; border-radius: 6px; margin: 20px 0;">
            ${code}
          </div>
          <p style="color: #555;">If you didn’t request this, just ignore this email.</p>
          <p style="color: #333;">Cheers,<br/>The OnlineMed Team</p>
        </div>
      `,
    })

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    )
  } catch (error: any) {
    console.error('Email sending failed:', error)
    return new Response(
      JSON.stringify({ error: 'Failed to send email' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    )
  }
}
