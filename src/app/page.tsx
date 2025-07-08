"use client"
import BaseLayout from "@/components/BaseLayout";
import Button from "@/components/Button";
import Card from "@/components/Card";
import { Navbar } from "@/components/Navbar";
import Image from "next/image";

export default function Home() {

  const handleVisitNow =()=> {
    console.log("John Michael Suarez");
  };

  return (
    <BaseLayout>

      <Navbar />

      <section className="relative flex flex-row items-center w-full min-h-0" aria-labelledby="hero-section-wrapper">
        <div className="hidden lg:block h-full mx-auto z-20" aria-label="hero-image">
          <Image
            src="/img-hero.svg"
            alt="Hero Image"
            width={0}
            height={0}
            sizes="100vh"
            style={{ width: 'auto', height: '100%' }}
            className="object-contain"
          />
        </div>

        <div className="relative mt-24 mx-auto lg:mt-12 lg:-ml-[35%] flex flex-col items-center w-full max-w-[560px] min-w-[300px]" aria-labelledby="hero-section-content-wrapper">
          <Card>
            <h1 id="hero-heading" className="text-[1.6rem] lg:text-6xl font-black text-[#23375F] mb-6 leading-tight">
              <span className="block lg:hidden ">Remarkable new journeys on every road</span>
              <span className="hidden lg:block">Remarkable new journeys on every flight</span>
            </h1>
            <Button
              variant="primary"
              rightIcon="/ic-arrow-right.svg"
              rightIconWidth={20}
              rightIconHeight={13}
              onClick={handleVisitNow}
              aria-label="visit-now-button"
            >
              Visit Now
            </Button>
            <p className="text-[14px] text-black mt-[14px] lg:mt-6">No delay in your current progress</p>
          </Card>
          <div className="mt-4 w-full flex justify-center z-300">
            <div className="bg-white rounded-full shadow-[5px_4px_14px_5px_#00000040] px-4 py-1 flex items-center justify-center space-x-2 text-xs border border-gray-100 w-full">
              <Image src="/img-trustpilot.svg" alt="Trustpilot" width={351} height={33} />
            </div>
          </div>
        </div>

      </section>
    </BaseLayout>
  );
}