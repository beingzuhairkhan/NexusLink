import { FiLinkedin } from "react-icons/fi";
import { VscGithubAlt } from "react-icons/vsc";
import { CiMail } from "react-icons/ci";
import { TbBrandLeetcode } from "react-icons/tb";
import { SiCodingninjas } from "react-icons/si";
import { SiGeeksforgeeks } from "react-icons/si";
import { SlSocialTwitter } from "react-icons/sl";

const links = [
  { href: "https://www.linkedin.com/in/zuhair-khan-55b9a624a/", icon: FiLinkedin, hoverBgColor: "hover:bg-gray-400 " },
  { href: "https://github.com/beingzuhairkhan", icon: VscGithubAlt, hoverBgColor: "hover:bg-gray-400" },
  { href: "mailto:zuhairkhan5134@gmail.com", icon: CiMail, hoverBgColor: "hover:bg-gray-400" },
  { href: "https://leetcode.com/u/beingzuhairkhan/", icon: TbBrandLeetcode, hoverBgColor: "hover:bg-gray-400" },
  { href: "https://www.naukri.com/code360/profile/beingzuhairkhan", icon: SiCodingninjas, hoverBgColor: "hover:bg-gray-400" },
  { href: "https://www.geeksforgeeks.org/user/beingzuhairkhan/", icon: SiGeeksforgeeks,  hoverBgColor: "hover:bg-gray-400" },
  { href: "https://twitter.com/zuhair-khan", icon: SlSocialTwitter,  hoverBgColor: "hover:bg-gray-400" },
];

const Link = () => {
  return (
    <div className="flex justify-center gap-4 mt-5 lg:gap-8">
      {links.map((link, index) => (
        <a
          key={index}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center justify-center p-2 transition-all duration-500 ease-in-out ${link.hoverColor} ${link.hoverBgColor} hover:rounded-lg`}
        >
          <link.icon className="text-2xl sm:text-3xl md:text-5xl lg:text-3xl hover:scale-110 transition-transform duration-400 ease-in-out" />
        </a>
      ))}
    </div>
  );
};

export default Link;
