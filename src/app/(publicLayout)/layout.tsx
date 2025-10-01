import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar/Navbar";
import { IChildren } from "@/types";
import { Toaster } from "sonner";


const PublicLayout = async ({ children }: IChildren) => {

    return (
        <>
            <Navbar />
            <main className="min-h-dvh">
                {children}
                <Toaster />
            </main>
            <Footer />
        </>
    )

};

export default PublicLayout;