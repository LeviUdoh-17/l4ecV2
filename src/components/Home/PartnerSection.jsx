import React from "react";

const PartnerSection = () => {
  return (
    <section class="flex flex-col justify-between lg:overflow-hidden mb-30 lg:mb-20 sm:py-20 lg:pt-0 lg:pb-20 gap-20">
      <h4 className="text-center font-bold text-slate-800 mx-3 text-3xl md:text-4xl">Collaborating for a Better Future</h4>
      <div class="h-[70px] grid grid-cols-2 md:grid-cols-3 lg:flex mx-auto lg:shrink-0 gap-5 lg:gap-13">
        <img className="object-contain h-15 opacity-90 " src="/P10.png" alt="" />
        <img className="object-contain h-15 opacity-90 " src="/P1.png" alt="" />
        <img className="object-contain h-15 opacity-90 " src="/P2.png" alt="" />
        <img className="object-contain h-15 opacity-90 " src="/P3.png" alt="" />
        <img className="object-contain h-15 opacity-90 " src="/P4.png" alt="" />
        <img className="object-contain h-13 opacity-90 " src="/P5.png" alt="" class="h-20" />
        <img className="object-contain h-15 opacity-90 " src="/P6.png" alt="" />
        {/* <img className="object-contain h-15 opacity-90 " src="/p7.png" alt="" /> */}
        <img className="object-contain h-15 opacity-90 " src="/P8.png" alt="" />
        <img className="object-contain h-15 opacity-90 " src="/P13.png" alt="" />
      </div>
    </section>
  );
};

export default PartnerSection;
