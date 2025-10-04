import { Skeleton } from "@/components/ui/skeleton";

const loading = () => {
    return (
        <div className="flex items-center justify-center mt-20">
            <div className="grid grid-cols-12 gap-5">
                <div className="space-y-2 col-span-6">
                    <Skeleton className="h-4 " />
                    <Skeleton className="h-4 w-72" />
                    <Skeleton className="h-4 w-[200px]" />
                </div>
                <Skeleton className="h-[125px] col-span-4 rounded-xl" />
            </div>
            <div className="grid grid-cols-12 gap-5">
                <div className="space-y-2 col-span-6">
                    <Skeleton className="h-4 " />
                    <Skeleton className="h-4 w-72" />
                    <Skeleton className="h-4 w-[200px]" />
                </div>
                <Skeleton className="h-[125px] col-span-4 rounded-xl" />
            </div>
        </div>

    );
};

export default loading;