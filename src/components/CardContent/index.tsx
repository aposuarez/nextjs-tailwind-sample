"use client"
import { DefaultProps } from "@/constants/interfaces";
import React from "react";


const CardContent: React.FC<DefaultProps> =({children, className = ""})=> {
    return (
        <div className={`p-4 ${className}`}>
            {children}
        </div>
    )
}

export default CardContent