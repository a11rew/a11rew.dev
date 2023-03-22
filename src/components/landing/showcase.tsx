/* eslint-disable react/display-name */
import React, { forwardRef } from "react";

const Showcase = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div
      ref={ref}
      className="h-screen text-black bg-theme-bg-white doc-padding"
    >
      <p className="max-w-[275px] font-medium">
        Currently, I work at SuaCode.ai as a full-stack developer. My work is
        focused on building technology to help democratize STEM education in
        Africa.
      </p>

      <div>
        <div className="flex w-full h-auto gap-4 overflow-hidden mt-14">
          <h2
            style={{
              WebkitTextStroke: "1px #000",
              WebkitTextFillColor: "#fff",
            }}
            className="italic font-bold text-[40px] transition-all ease-linear duration-200 whitespace-nowrap text-white"
          >
            featured-work
          </h2>
          <h2
            style={{
              WebkitTextStroke: "1px #000",
              WebkitTextFillColor: "#fff",
            }}
            className="italic font-bold text-[40px] transition-all ease-linear duration-200 whitespace-nowrap text-white"
          >
            featured-work
          </h2>
        </div>
      </div>
    </div>
  );
});

export default Showcase;
