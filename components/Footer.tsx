import React from "react";
import LogoUi from "./ui/LogoUi";
import Link from "next/link";
const infoArray = [
  {
    title: "About us",
    href: "/about",
  },
  {
    title: "Contact us",
    href: "/about",
  },
  {
    title: "Terms & Conditions",
    href: "/terms",
  },
  {
    title: "Privacy Policy",
    href: "/privacy",
  },
];

const contactArray = [
  {
    title: "videos",
    href: "/videos",
  },
  {
    title: "Gaming",
    href: "/gaming",
  },
  {
    title: "Travel",
    href: "/travel",
  },
  {
    title: "Sports",
    href: "/sports",
  },
  {
    title: "music",
    href: "/music",
  },
];
const Information = ({ contact }: { contact: boolean }) => {
  return (
    <div className="flex flex-col text-gray-400">
      {contact
        ? contactArray.map((item,index) => (
            <Link
              href={item?.href}
              key={index}
              className="hover:text-red-600 text-sm mb-1 cursor-pointer duration-200 border-b border-b-[#222] py-1 flex items-center
      gap-x-3 group"
            >
              <span className="w-2 h-2 rounded-full border border-red-700 inline-flex group-hover:bg-red-700 duration-200" />
              {item?.title}
            </Link>
          ))
        : infoArray.map((item,index) => (
            <Link
              href={item?.href}
              key={index}
              className="hover:text-red-600 text-sm mb-1 cursor-pointer duration-200 border-b border-b-[#222] py-1 flex items-center
      gap-x-3 group"
            >
              <span className="w-2 h-2 rounded-full border border-red-700 inline-flex group-hover:bg-red-700 duration-200" />
              {item?.title}
            </Link>
          ))}
    </div>
  );
};

const Footer = () => {
  return (
    <div className="bg-[#191919] text-gray-100 px-10 py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
      <div>
        <h2 className="text-base uppercase font-bold tracking-wide border-b border-b-gray-600 py-2 mb-5 relative">
          {" "}
          About Us{" "}
          <span className="w-16 h-1 bg-red-600 inline-block absolute left-0 -bottom-[1.5px] z-10" />
        </h2>
        <Link href={"/"}>
          <LogoUi />
        </Link>
        <p className="text-gray-400 text-sm leading-6 tracking-wide mt-5 max-w-72">
          Dive into the ultimate action experience — explosive battles,
          high-speed chases, fearless heroes, and non-stop excitement! Our
          latest action-packed titles are streaming now, only on [Your Site
          Name]. From blockbuster hits to hidden gems, there’s no shortage of
          thrills. Hit play and feel the rush — all from the comfort of your
          screen. 🎬💣🔥 Watch Now — Only on{" "}
          <Link
            href={"/"}
            className="text-red-600 text-md hover:text-red-500 font-bold px-2"
          >
            movie streaming studio
          </Link>
        </p>
      </div>
      <div>
        <h2 className="text-base uppercase font-bold tracking-wide border-b border-b-gray-600 py-2 mb-5 relative">
          {" "}
          information{" "}
          <span className="w-16 h-1 bg-red-600 inline-block absolute left-0 -bottom-[1.5px] z-10" />
        </h2>
        <Information contact={false} />
      </div>
      <div>
        <h2 className="text-base uppercase font-bold tracking-wide border-b border-b-gray-600 py-2 mb-5 relative">
          {" "}
          category{" "}
          <span className="w-16 h-1 bg-red-600 inline-block absolute left-0 -bottom-[1.5px] z-10" />
        </h2>
        <Information contact={true} />
      </div>
      <div>
        {" "}
        <h2 className="text-base uppercase font-bold tracking-wide border-b border-b-gray-600 py-2 mb-5 relative">
          {" "}
          connect with us{" "}
          <span className="w-16 h-1 bg-red-600 inline-block absolute left-0 -bottom-[1.5px] z-10" />
        </h2>
        <div className="text-gray-400 text-sm flex flex-col gap-2">
          <p>Phone : <span className="text-white font-medium ">0718 867 289</span></p>
          <p>Email : <span className="text-white font-medium ">kabogomichael@outlook.com</span></p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
