"use client"

const BaseLayout = ({children}: {children: React.ReactNode}) => {
    return (
        <div className="relative min-h-screen flex flex-col overflow-hidden p-4 lg:px-30
        bg-[url('/bg-mobile.svg')] lg:bg-[url('/bg-desktop.svg')]
        bg-cover bg-center">
            {children}
        </div>
    )
}

export default BaseLayout;