import { IChildren } from "@/types";
import { Toaster } from "sonner";


const DashboardLayout = async ({ children }: IChildren) => {

    return (
        <>
            <div className="grid grid-cols-12">
                <div className="col-span-2 bg-red-500">

                    <header>Herader</header>
                </div>
                <main className="min-h-dvh bg-blue-500 col-span-10">
                    {children}
                    <Toaster />
                </main>
            </div>

        </>
    )

};

export default DashboardLayout;