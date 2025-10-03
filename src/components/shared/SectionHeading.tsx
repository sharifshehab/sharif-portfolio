import { Jost } from "next/font/google";

export const jost = Jost({ weight: ['400', '500', '600', '700', '800'], subsets: ['latin'], fallback: ['system-ui', 'arial'] })

const SectionHeading = ({ bgHeading = "About", Heading = "Know a little bit about me" }) => {
    return (
        <div className="relative flex items-center justify-center font-jost py-14 capitalize">
            <div className="relative z-10">
                <h2 className={`${jost.className} font-bold text-secondary text-3xl md:text-5xl border-x-4 border-primary px-5`}>{Heading}</h2>
            </div>
            <div className={`${jost.className} absolute bottom-14 inset-0 flex items-center justify-center text-primary text-7xl md:text-9xl font-bold opacity-15`}>
                {bgHeading}
            </div>
        </div>
    );
};

export default SectionHeading;