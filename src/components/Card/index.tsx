"use client"
import { DefaultProps } from "@/constants/interfaces";
import React from "react";


const Card: React.FC<DefaultProps> =({children, className = ""})=> {
    return (
        <div className={`bg-white rounded-2xl shadow-lg ${className}`}>
            {children}
        </div>
    )
}

export default Card