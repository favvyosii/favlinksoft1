import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { pb } from '@/lib/pocketbase';

export async function POST(req: NextRequest) {
    try {
        const { name, email, message } = await req.json();
        
        // Create record in PocketBase
        await pb.collection('contact_messages').create({ name, email, message });

        // Email configuration
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_APP_PASSWORD,
            },
        });

        // Email content
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: 'favlinkdev@gmail.com',
            subject: `New Contact Form Submission from ${name}`,
            text: `
                Name: ${name}
                Email: ${email}
                Message: ${message}
            `,
            html: `
                <h2>New Contact Form Submission</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Message:</strong> ${message}</p>
            `,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ message: 'Message sent successfully' }, { status: 200 });
    } catch (error) {
        console.error('Error processing contact form:', error);
        return NextResponse.json(
            { message: 'Error processing your message' },
            { status: 500 }
        );
    }
}