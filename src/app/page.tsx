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
    <div className="relative min-h-screen flex flex-col overflow-hidden p-4 sm:px-30">
      {/* Navbar - at the very top, centered */}
      <Navbar />

      {/* Background SVG for desktop */}
      <div className="hidden sm:block absolute inset-0 -z-10">
        <Image src="/bg-desktop.svg" alt="desktop background" fill className="object-cover" priority />
      </div>

      {/* Background SVG for mobile */}
      <div className="sm:hidden absolute inset-0 -z-10">
        <Image src="/bg-mobile.svg" alt="mobile background" fill className="object-cover" />
      </div>

      {/* Hero Section Wrapper */}
      <div className="relative flex flex-row items-center w-full min-h-0 mt-24 sm:flex-1 sm:mt-5">
        {/* Left Side Image */}
        <div className="hidden sm:block h-full mx-auto z-10000">
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
        <div className="relative z-10 mx-auto sm:-ml-[30%] flex flex-col items-center w-full max-w-[528px] min-w-[300px]">
          {/* Main Hero Card */}
          <Card className="w-full text-center p-0 bg-white rounded-3xl sm:rounded-[45px] shadow-[3px_4px_13.4px_0px_#00000040] border-0">
            <CardContent className="p-6 sm:p-12">
              <h1 className="text-[1.6rem] sm:text-4xl font-extrabold text-[#1A2341] mb-6 leading-tight">
                <span className="block sm:hidden">Remarkable new journeys on every road</span>
                <span className="hidden sm:block">Remarkable new journeys on every flight</span>
              </h1>
              <Button
                variant="primary"
                className="mb-2 shadow-lg text-base sm:text-lg py-3 px-8 rounded-full font-semibold"
                rightIcon="/ic-arrow-right.svg"
                rightIconWidth={20}
                rightIconHeight={13}
                onClick={handleVisitNow}
              >
                Visit Now
              </Button>
              <p className="text-xs text-gray-500 mt-2">No delay in your current progress</p>
            </CardContent>
          </Card>
          {/* Trustpilot bar */}
          <div className="mt-4 w-full flex justify-center">
            <div className="bg-white rounded-full shadow-[5px_4px_14px_5px_#00000040] px-4 py-1 flex items-center justify-center space-x-2 text-xs border border-gray-100 w-full">
              <Image src="/img-trustpilot.svg" alt="Trustpilot" width={351} height={33} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}