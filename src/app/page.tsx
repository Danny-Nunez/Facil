import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="bg-white flex min-h-screen flex-col items-center justify-between p-5">
  <div className="navbarHome flex justify-between items-center w-full">
    <div className="flex items-center">
      <Image className="mr-24 ml-8 mt-1" src="/logo.png" alt="Description" width={81} height={64} />
      <div className="flex space-x-14 text-white pt-1 ml-28 hidden lg:flex md:flex">
        <div className="butWrapHome absolute z-0 top-9 ml-4 "></div>
        <Link className="buttonHome z-10" href="/">Home</Link>
        <Link href="/services">Services</Link>
        <Link href="/services">About Us</Link>
      </div>
    </div>
    <div>
      <Link className="demoButton mt-1" href="/services">Try Demo</Link>
    </div>
  </div>
</main>

  )
}
