import { Skeleton } from "@/components/ui/skeleton";

const loading = () => {
    return (
        <div className="flex flex-col justify-center items-end gap-2 pt-10">
            <Skeleton className="h-8 rounded-none w-36 bg-primary border border-white" />
            <Skeleton className="h-12 rounded-none w-full border border-primary" />
            <Skeleton className="h-12 rounded-none w-full border border-primary" />
            <Skeleton className="h-12 rounded-none w-full border border-primary" />
            <Skeleton className="h-12 rounded-none w-full border border-primary" />
        </div>

    );
};

export default loading;