import {
  RiSpeedMiniLine,
  RiShoppingCart2Line,
  RiHeart3Line,
  RiUser3Line,
  RiSearchLine,
} from "react-icons/ri";
import { IconLink } from "./IconLink";

const navLinks = [
  {
    label: "Search",
    icon: <RiSearchLine />,
    to: "/",
  },
  {
    label: "Wishlist",
    icon: <RiHeart3Line />,
    to: "/",
  },
  {
    label: "Cart",
    icon: <RiShoppingCart2Line />,
    to: "/",
  },
  {
    label: "Sign In",
    icon: <RiUser3Line />,
    to: "/",
  },
];

export const Header = () => {
  return (
    <header className="flex items-center justify-between h-16 py-4 bg-white shadow-lg px-36">
      <div className="flex App-header-logo">
        <h2 className="text-2xl font-normal tracking-wider align-baseline text-zuckRed-400">
          zuck
        </h2>
        <div className="w-6 h-6 text-lg">
          <RiSpeedMiniLine className="w-full h-full text-lg text-zuckRed-500 " />
        </div>
      </div>
      <div className="flex mt-1.5">
        {navLinks.map(({ label, icon, to }) => (
          <IconLink icon={icon} label={label} t0={to} key={label} />
        ))}
      </div>
    </header>
  );
};

// Add the abilty to save your order, give a good branding name.
