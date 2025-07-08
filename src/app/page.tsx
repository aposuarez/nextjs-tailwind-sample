"use client"
import Button from "@/components/Button";
import Card from "@/components/Card";
import CardContent from "@/components/CardContent";
import { Navbar } from "@/components/Navbar";
import Image from "next/image";

export default function Home() {

  const handleVisitNow = () => {
    console.log("John Michael Suarez");
  };

  return (
    <div
      className="
        relative min-h-screen flex flex-col overflow-hidden p-4 lg:px-30
        bg-[url('/bg-mobile.svg')] lg:bg-[url('/bg-desktop.svg')]
        bg-cover bg-center
      ">

      {/* Navbar - at the very top, centered */}
      <Navbar />
     
      {/* Hero Section Wrapper */}
      <div className="relative flex flex-row items-center w-full min-h-0 mt-24 lg:flex-1 lg:mt-5">
        {/* Left Side Image */}
        <div className="hidden lg:block h-full mx-auto z-20">
          <Image
            src="/img-hero.svg"
            alt="Hero"
            width={0}
            height={0}
            sizes="100vh"
            style={{ width: 'auto', height: '100%' }}
            className="object-contain"
          />
        </div>
        {/* Main Hero Card Container */}
        <div className="relative mx-auto lg:-ml-[35%] lg:-ml-[20%] lg:-ml-[10%] flex flex-col items-center w-full max-w-[560px] min-w-[300px]">
          {/* Main Hero Card */}
          <Card className="z-10 w-full text-center p-0 bg-white rounded-3xl lg:rounded-[45px] shadow-[3px_4px_13.4px_0px_#00000040] border-0">
            <CardContent className="lg:px-[70px] lg:pt-[60px] lg:pb-[40px] pt-7 pb-6 px-7 leading-[1.1]">
              <h1 className="text-[1.6rem] lg:text-6xl font-black text-[#23375F] mb-6 leading-tight">
                <span className="block lg:hidden">Remarkable new journeys on every road</span>
                <span className="hidden lg:block">Remarkable new journeys on every flight</span>
              </h1>
              <Button
                variant="primary"
                className="
                  bg-orange-500 text-white font-bold rounded-full
                  px-8 py-3 text-lg
                  shadow-[0_0_10px_5px_rgba(255,140,0,0.40)]
                "
                rightIcon="/ic-arrow-right.svg"
                rightIconWidth={20}
                rightIconHeight={13}
                onClick={handleVisitNow}
              >
                Visit Now
              </Button>
              <p className="text-[14px] text-black mt-[14px] lg:mt-6">No delay in your current progress</p>
            </CardContent>
          </Card>
          {/* Trustpilot bar */}
          <div className="mt-4 w-full flex justify-center z-300">
            <div className="bg-white rounded-full shadow-[5px_4px_14px_5px_#00000040] px-4 py-1 flex items-center justify-center space-x-2 text-xs border border-gray-100 w-full">
              <Image src="/img-trustpilot.svg" alt="Trustpilot" width={351} height={33} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}