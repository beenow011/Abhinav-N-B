import { cn } from "@/lib/utils"
import { ReactNode } from "react"

const MaxWidthWrapper = ({
    className, children
}: {
    className?: string
    children: ReactNode
}) => {
    return (
        <div className={cn(" w-full max-w-screen-2xl mx-auto md:px-20 mb-12 mt-16 md:mt-2 flex flex-col   text-center", className)}>

            {children}
        </div>)
}

export default MaxWidthWrapper