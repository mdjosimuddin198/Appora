import React, { useRef } from "react";
import { useCountUp } from "react-countup";

const StatItem = ({ label, end, decimals, suffix, subtitle }) => {
  const countUpRef = useRef(null);

  useCountUp({
    ref: countUpRef,
    end: end,
    decimals: decimals,
    duration: 2,
    suffix: suffix,
    enableScrollSpy: true,
  });

  return (
    <div>
      <p className="text-sm opacity-80 mb-2">{label}</p>
      <span ref={countUpRef} className="text-4xl md:text-5xl font-bold" />
      <p className="text-xs opacity-70 mt-2">{subtitle}</p>
    </div>
  );
};

const StatsSection = () => {
  return (
    <section className="py-16  rounded-xl bg-linear-to-b from-[#5B2EFF] to-[#9F62F2] text-white text-center">
      <h2 className="text-2xl md:text-4xl font-bold mb-10">
        Trusted By Millions, Built For You
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        <StatItem
          label="Total Downloads"
          end={29.6}
          decimals={1}
          suffix="M"
          subtitle="21% More Than Last Month"
        />
        <StatItem
          label="Total Reviews"
          end={4.8}
          decimals={1}
          suffix="M"
          subtitle="46% More Than Last Month"
        />
        <StatItem
          label="Active Apps"
          end={150}
          decimals={0}
          suffix="+"
          subtitle="31 More Will Launch"
        />
      </div>
    </section>
  );
};

export default StatsSection;
