import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendTwoFactorEmail = async (email, token) =>{

    await resend.emails.send({
        from : "onboarding@resend.dev",
        to  : email,
        subject : "Two Factor Authentication Code",
        html: `<p>Your Two Factor Authentication Code is <span style="font-weight: bold; color: blue">${token}</span></p>`
    })
}

export const sendResetPasswordEmail = async (email, token) => {
    const resetLink = `http://localhost:3000/auth/new-password?token=${token}`;

    await resend.emails.send({
        from : "onboarding@resend.dev",
        to : email,
        subject : "Reset Your Password",
        html : `<P>Click<a href="${resetLink}"> here </a> to reset your password </P>`
    })
}

export const sendVerficationEmail = async (email, token) => {
    const confirmLink = `http://localhost:3000/auth/new-verification?token=${token}`;

    await resend.emails.send({
        from : "onboarding@resend.dev",
        to : email,
        subject : "Confirm Your Email",
        html : `<P>Click<a href="${confirmLink}"> here </a> to confirm your email </P>`
    })
}