import type { Metadata } from "next";
import { ContactForm } from "./contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description: "Send a website project or quote enquiry.",
};

export default function ContactPage() {
  return <ContactForm />;
}
