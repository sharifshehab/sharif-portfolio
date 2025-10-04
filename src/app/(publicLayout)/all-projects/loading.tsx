import { Skeleton } from "@/components/ui/skeleton";

const loading = () => {
    return (
        <div className="container mx-auto flex items-center justify-between mt-20 space-x-10">
            <div className="w-full">
                <Skeleton className="h-[125px] rounded-xl" />
                <div className="space-y-5">
                    <Skeleton className="h-4 w-[80%] mt-5" />
                    <Skeleton className="h-4 w-[200px]" />
                </div>
            </div>
            <div className="w-full">
                <Skeleton className="h-[125px] rounded-xl" />
                <div className="space-y-5">
                    <Skeleton className="h-4 w-[80%] mt-5" />
                    <Skeleton className="h-4 w-[200px]" />
                </div>
            </div>
        </div>
    );
};

export default loading;