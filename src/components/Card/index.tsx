"use client"
import { DefaultProps } from "@/constants/interfaces";
import React from "react";


const Card: React.FC<DefaultProps> =({children})=> {
    return (
        <div className={`z-10 w-full text-center p-0 bg-white rounded-3xl lg:rounded-[45px] shadow-[3px_4px_13.4px_0px_#00000040] border-0`}>
            <div className={`lg:px-[73px] lg:pt-[60px] lg:pb-[40px] pt-7 pb-6 px-7 leading-[1.1]`}>
                {children}
            </div>
        </div>
    )
}

export default Card