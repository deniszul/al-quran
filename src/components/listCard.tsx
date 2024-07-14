import React from "react"

const ListCard: React.FC<React.PropsWithChildren> = ({ children }) => {
    return (
        <div
            className="w-full mt-3 md:mt-6 grid md:gap-x-0 grid-cols-1 md:grid-cols-3 justify-items-center gap-2 md:gap-y-4">
            {children}
        </div>
    )
}

export default ListCard
