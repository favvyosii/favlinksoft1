"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BiLogoGmail } from "react-icons/bi";
import { FaWhatsappSquare } from "react-icons/fa";
// import { toast } from "@/components/ui/use-toast";
import {toast} from "../hooks/use-toast"
import { ContactMessage } from "@/types";

export default function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState<ContactMessage>({
        name: "",
        email: "",
        message: ""
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Failed to send message');
            }

            toast({
                title: "Success!",
                description: "Your message has been sent successfully.",
                variant: "default",
            });

            // Reset form
            setFormData({
                name: "",
                email: "",
                message: ""
            });
        } catch (error) {
            toast({
                title: "Error",
                description: "Failed to send message. Please try again.",
                variant: "destructive",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <Card className="p-8 bg-white">
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#1c7293] focus:ring-[#1c7293]"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#1c7293] focus:ring-[#1c7293]"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Message
                    </label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={4}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#1c7293] focus:ring-[#1c7293]"
                    ></textarea>
                </div>
                <Button 
                    type="submit" 
                    className="w-full bg-[#1c7293] hover:bg-[#065a82] text-white"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
                <div className="flex justify-center items-center gap-x-4">
                    <a href="mailto:favlinkdev@gmail.com">
                        <BiLogoGmail color="#1c7293" size={30} />
                    </a>
                    <a href="tel:+2349068611553">
                        <FaWhatsappSquare color="#1c7293" size={30} />
                    </a>
                </div>
            </form>
        </Card>
    );
}