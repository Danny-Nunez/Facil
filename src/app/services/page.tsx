import Link from 'next/link';
import Image from 'next/image';

export default function Services() {
    return (
        <main className="bg-white flex min-h-screen flex-col items-center justify-between p-5">
        <div className="navbarServices flex justify-between items-center w-full">
          <div className="flex items-center">
            <Image className="mr-24 ml-8 mt-1" src="/logoblue.png" alt="Description" width={81} height={64} />
            <div className="flex space-x-14 text-white pt-2 ml-28 pl-14 hidden lg:flex md:flex">
            
              <Link className="navText" href="/">Home</Link>
           
              <div className="butWrapServices absolute z-0"></div>
              <Link  className="buttonService z-10" href="/services">Services</Link>
              <Link  className="navText" href="/services">About Us</Link>
            </div>
          </div>
          <div>
            <Link className="demoServicesButton mt-1" href="/services">Try Demo</Link>
          </div>
        </div>
      </main>
    )
  }
  