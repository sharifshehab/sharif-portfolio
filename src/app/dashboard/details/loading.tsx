import { Skeleton } from "@/components/ui/skeleton";

const loading = () => {
    return (
        <div className="flex flex-col justify-center items-end gap-4 pt-10">
            <Skeleton className="h-8 rounded-none w-64 bg-primary border border-white" />
            <Skeleton className="h-44 rounded-none w-full border border-primary" />
            <Skeleton className="h-8 rounded-none w-64 bg-primary border border-white" />
        </div>
    );
};

export default loading;