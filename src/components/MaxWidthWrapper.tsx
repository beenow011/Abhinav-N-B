import { cn } from "@/lib/utils"
import { ReactNode } from "react"

const MaxWidthWrapper = ({
    className, children
}: {
    className?: string
    children: ReactNode
}) => {
    return (
        <div className={cn("mx-auto w-[90%] md:w-full max-w-screen-2xl px-24 md:px-20 mb-12 mt-16 md:mt-2 flex flex-col   text-center", className)}>

            {children}
        </div>)
}

export default MaxWidthWrapper