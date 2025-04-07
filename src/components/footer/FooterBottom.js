import React from "react";

const FooterBottom = () => {
  return (
    <div className="w-full py-10">
      <p className="text-center text-designColor text-base">
        &copy; {new Date().getFullYear()}. All rights reserved by Brian Kunkel
      </p>
    </div>
  );
};

export default FooterBottom;
