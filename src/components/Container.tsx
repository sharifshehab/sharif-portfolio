import { IChildren } from "@/app/(publicLayout)/layout";


const Container = ({ children }: IChildren) => {
    return (
        <div className="container mx-auto px-5">
            {children}
        </div>
    );
};

export default Container;