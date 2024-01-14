import { useState } from 'react';
import Link from 'next/link';

export default function Hamburger() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="flex items-center justify-between  py-8">
     
      <nav>
        <section className="MOBILE-MENU flex lg:hidden">
          <div
            className="HAMBURGER-ICON space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
          >
            <span className="block h-0.5 w-8  bg-white"></span>
            <span className="block h-0.5 w-8  bg-white"></span>
            <span className="block h-0.5 w-8  bg-white"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}> 
            <div
              className="CROSS-ICON absolute top-5 right-5 px-8 py-8"
              onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px]">
              <li className="border-b border-gray-400 my-8 uppercase">
               <Link href="/">Home</Link>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
              <Link href="/services">Services</Link>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
              <Link href="/">About Us</Link>
              </li>
            </ul>
          </div>
        </section>

        
      </nav>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: flex;
        position: absolute;
        width: calc(100% - 20px);
        height: calc(100vh - 20px);
        top: 10px; /* Adjusted for margin */
        left: 10px; /* Adjusted for margin */
        background-color: rgba(255, 255, 255, 0.9); /* Slightly transparent white */
        z-index: 10;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 10px;
        margin: 10px;
    }
    
    `}</style>
    </div>
  );
}
