import { LuLinkedin } from "react-icons/lu";
import { FiGithub } from "react-icons/fi";
import { MdMailOutline } from "react-icons/md";
import { SiLeetcode } from "react-icons/si";
import { SiCodingninjas } from "react-icons/si";
import { SiGeeksforgeeks } from "react-icons/si";
import { RiTwitterLine } from "react-icons/ri";

const links = [
  { href: "https://www.linkedin.com/in/zuhair-khan-55b9a624a/", icon: LuLinkedin, color: "text-blue-600", hoverColor: "text-blue-800" },
  { href: "https://github.com/beingzuhairkhan", icon: FiGithub, color: "text-black", hoverColor: "text-gray-800" },
  { href: "mailto:zuhair-khan@example.com", icon: MdMailOutline, color: "text-red-600", hoverColor: "text-red-800" },
  { href: "https://leetcode.com/u/beingzuhairkhan/", icon: SiLeetcode, color: "text-yellow-600", hoverColor: "text-yellow-800" },
  { href: "https://www.naukri.com/code360/profile/beingzuhairkhan", icon: SiCodingninjas, color: "text-orange-600", hoverColor: "text-orange-800" },
  { href: "https://www.geeksforgeeks.org/user/beingzuhairkhan/", icon: SiGeeksforgeeks, color: "text-green-600", hoverColor: "text-green-800" },
  { href: "https://twitter.com/zuhair-khan", icon: RiTwitterLine, color: "text-blue-500", hoverColor: "text-blue-700" },
];

const Link = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6 mt-5 lg:gap-12">
      {links.map((link, index) => (
        <a
          key={index}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center justify-center ${link.color} hover:${link.hoverColor} hover:scale-125 hover:rotate-12 hover:shadow-lg transition-transform duration-300 ease-in-out`}
        >
          <link.icon className="text-2xl sm:text-3xl md:text-5xl lg:text-4xl" />
        </a>
      ))}
    </div>
  );
};

export default Link;
