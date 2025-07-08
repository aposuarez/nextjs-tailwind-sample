import BaseLayout from "@/components/BaseLayout";
import { Navbar } from "@/components/Navbar";

const ContactUs = () => {
    return (
        <BaseLayout>
            <Navbar />
            <main className="flex flex-1 items-center justify-center">
                <h1 className="text-4xl font-bold">Contact Us</h1>
            </main>
        </BaseLayout>
    )
}

export default ContactUs;