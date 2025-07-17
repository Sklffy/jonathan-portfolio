import React from "react";

const SectionWrapper = (Component, idName) => {
  function HOC() {
    return (
      <section id={idName} className="relative z-0">
        <Component />
      </section>
    );
  }

  return HOC;
};

export default SectionWrapper;

