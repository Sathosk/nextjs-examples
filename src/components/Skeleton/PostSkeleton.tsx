import { Skeleton } from '../ui/skeleton'

export default function PostSkeleton() {
  return (
    <div className="space-y-10">
      <div className="flex flex-col space-y-3">
        <Skeleton className="h-8 w-[100px] rounded-xl" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[580px]" />
          <Skeleton className="h-4 w-[570px]" />
          <Skeleton className="h-4 w-[580px]" />
          <Skeleton className="h-4 w-[300px]" />
        </div>
      </div>
      <div className="flex flex-col space-y-3">
        <Skeleton className="h-8 w-[100px] rounded-xl" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[580px]" />
          <Skeleton className="h-4 w-[570px]" />
          <Skeleton className="h-4 w-[580px]" />
          <Skeleton className="h-4 w-[300px]" />
        </div>
      </div>
    </div>
  )
}
