import { resend } from "@/lib/resend";
import { ApiResponse } from "@/types/apiResponse";
import VerificationEmail from "../../emails/verificationEmail";

export default async function sendVerificationEmail(
    username: string,
    email: string,
    verifyCode: string
): Promise<ApiResponse> {
    try {
        await resend.emails.send({
            from: 'Acme <onboarding@resend.dev>',
            to: email,
            subject: 'Mstry Message | Verification Code',
            react: VerificationEmail({ username, otp: verifyCode }),
        });
        return {
            success: true,
            message: "Verification email sent successfully.",
        }
    } catch(emailError) {
        console.error("Error sending verification email:", emailError);
        return {
            success: false,
            message: "Failed to send verification email.",
        }
    }
}