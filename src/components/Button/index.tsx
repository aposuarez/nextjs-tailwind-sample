"use client"
import Image from "next/image";
import { ReactNode } from "react";
import { ButtonVariants } from "@/constants/types";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode,
    className?: string,
    variant?: ButtonVariants,
    leftIcon?: string,
    leftIconWidth?: number,
    leftIconHeight?: number,
    rightIcon?: string,
    rightIconWidth?: number,
    rightIconHeight?: number,
    onClick: ()=> void
}

const Button : React.FC<ButtonProps>  = ({
    children, 
    className="",
    variant = 'primary', 
    leftIcon = null,
    leftIconWidth = 0,
    leftIconHeight = 0,
    rightIcon = null,
    rightIconWidth = 0,
    rightIconHeight = 0,
    onClick,
    ...rest}) => {

    const baseStyle = "rounded-full px-4 py-2 font-semibold shadow text-sm cursor-pointer";

    const variantStyle =
        variant === "primary"
        ? "w-full bg-[#FD8121] text-white font-bold rounded-full px-8 py-3 text-lg shadow-[0_0_10px_5px_rgba(255,140,0,0.40)]"
        : "bg-white text-[#253451] border border-gray-300 rounded-full pl-[13px] pr-[11px] py-[5px] text-sm shadow-none hover:border-orange hover:text-orange";

        const handleVisitNow =()=> {
            console.log("John Michael Suarez");
          };

    return (
        <button {...rest} className={`${baseStyle} ${variantStyle} ${className}`} onClick={onClick}>
            <span className="flex items-center justify-center gap-2">
                {leftIcon && <Image src={leftIcon} alt="left icon" width={leftIconWidth} height={leftIconHeight} />}
                {children}
                {rightIcon && <Image src={rightIcon} alt="right icon" width={rightIconWidth} height={rightIconHeight} />}
            </span>
        </button>
    )
}

export default Button