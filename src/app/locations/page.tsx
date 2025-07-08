import BaseLayout from "@/components/BaseLayout";
import { Navbar } from "@/components/Navbar";

const Locations = () => {
    return (
        <BaseLayout>
            <Navbar />
            <main className="flex flex-1 items-center justify-center">
                <h1 className="text-4xl font-bold">Locations</h1>
            </main>
        </BaseLayout>
    )
}

export default Locations;