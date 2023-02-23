import Title from "components/title/Title";
import React from "react";

const SectionHome = ({
  children,
  className,
  classNameTitle,
  titleLeft,
  titleRight,
}) => {
  return (
    <section className={`${className}`}>
      <div className="container">
        <Title
          titleLeft={titleLeft}
          titleRight={titleRight}
          className={classNameTitle}
        ></Title>
      </div>
      {children}
    </section>
  );
};

export default SectionHome;
