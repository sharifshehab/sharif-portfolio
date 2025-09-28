import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar/Navbar";

export interface IChildren {
    children: React.ReactNode;
}

const PublicLayout = ({ children }: IChildren) => {
    return (
        <>
            <Navbar />
            <main className="min-h-dvh">
                {children}
            </main>
            <Footer />
        </>
    )

};

export default PublicLayout;