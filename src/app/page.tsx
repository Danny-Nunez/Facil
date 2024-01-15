"use client";

import Link from 'next/link';
import { Urbanist } from '@next/font/google';
import gsap from "gsap";
import { useEffect, useRef } from 'react';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Image from 'next/image';

const urbanistone = Urbanist({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
});

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const leftImageRef = useRef(null);
  const rightImageRef = useRef(null);

  useEffect(() => {
    if (!leftImageRef.current || !rightImageRef.current) {
      console.error("Refs not attached");
      return;
    }

    // Apply initial state immediately
    gsap.set(leftImageRef.current, { y: 600, opacity: 0 });
    gsap.set(rightImageRef.current, { x: 600, opacity: 0 });
    // ScrollTrigger animations
    ScrollTrigger.create({
      trigger: ".hero",
      start: "top bottom",
      end: "15% top",
      onEnter: () => {
        gsap.to(leftImageRef.current, { y: 0, opacity: 1, duration: 1 });
        gsap.to(rightImageRef.current, { x: 0, opacity: 1, duration: 1 });
      },
      onLeave: () => {
        gsap.to(leftImageRef.current, { y: 600, opacity: 0, duration: 1 });
        gsap.to(rightImageRef.current, { x: 600, opacity: 0, duration: 1 });
      },
      onEnterBack: () => {
        gsap.to(leftImageRef.current, { y: 0, opacity: 1, duration: 1 });
        gsap.to(rightImageRef.current, { x: 0, opacity: 1, duration: 1 });
      },
      onLeaveBack: () => {
        gsap.to(leftImageRef.current, { y: 600, opacity: 0, duration: 1 });
        gsap.to(rightImageRef.current, { x: 600, opacity: 0, duration: 1 });
      },
  });
  }, []);


  return (
    <>
    <main className={urbanistone.className}>
      <div className="bg-white h-1/4 flex mt-24 lg:hidden"></div>
      <div className="PageWrapper hero mt-3 lg:mt-3 flex flex-col lg:flex-row w-full items-center justify-center">
  <div className="lg:w-1/2 text-left text-white lg:text-6xl text-3xl font-semibold">
  <p className="pl-12 pb-6">A Blockchain-powered</p>
  <p className="pl-12 pb-6">AI-integrated</p> 
  <p className="pl-12 pb-6">Messaging and</p> 
  <p className="pl-12 pb-6">Payment Platform</p>
  <p className="text-base lg:text-xl pl-12 font-normal">Revolutionizing Web3 Chat, Payment, and DeFi Banking</p>
  <Link className="ml-12 mt-6 border border-solid pt-5 pl-9 pr-7 pb-5 rounded-full flex w-40 text-xl" href="#">Try Demo</Link>
  </div>
  <div className="container hidden lg:flex lg:w-1/2 flex justify-center items-center overflow-hidden">
            <div ref={leftImageRef} style={{ opacity: 0 }}>
              <img src="/leftphone.png" alt="Description" style={{ width: '312px', height: '533px' }} />
            </div>
            <div className="absolute rightPhone overflow-hidden">
    <div ref={rightImageRef} style={{ opacity: 0 }}>
    <img src="/rightphone.png" alt="Description" style={{ width: '312px', height: '425px' }} />
    </div>
    </div>
    </div>
    </div>
    <div>
{/* Additional content can go here */}
</div>
<div className="flex flex-col lg:flex-row componentWrapper">
  <div className="w-1/4">
  <Image className="m-auto pt-10 hidden lg:block " src="/logoblue.png" alt="Logo" width={160} height={97} />
  </div>
<div className="p-10 w-3/4">
  <h2 className="HomeTitle text-6xl font-bold pb-4">Introducing Facil</h2>
<span className="text-xl font-normal">A Cutting-Edge Web 3.0 Messaging and Payment Platform. Facil seamlessly integrates with blockchain-based decentralized applications, offering secure peer-to-peer messaging and global cryptocurrency payments at your fingertips. Send funds worldwide to friends, contacts, or merchants using Facil.</span>
</div>
</div>
</main>
</>
);
}



