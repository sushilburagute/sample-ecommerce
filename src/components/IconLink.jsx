import { Link } from "react-router-dom";

export const IconLink = ({ icon: Icon, label, to, ...props }) => {
  return (
    <div className="flex justify-center ml-16 align-middle bg-white cursor-pointer text-zuckGrey-600 hover:text-zuckRed-500">
      <div className="text-lg align-baseline stroke-1 ">{Icon}</div>
      <p className="ml-2 text-sm font-semibold align-baseline ">{label}</p>
    </div>
  );
};

// add <link> later
