import React from "react";

/**
 * Container component for consistent site-wide layout
 * Provides uniform spacing on left and right sides.
 * Default max-width is 90rem. Pass a custom `maxWidth` prop to override.
 */
const Container = ({ children, className = "", maxWidth = "max-w-[90rem]" }) => {
  return (
    <div className={`mx-auto px-4 md:px-8 lg:px-16 w-full ${maxWidth} ${className}`}>
      {children}
    </div>
  );
};

export default Container;
