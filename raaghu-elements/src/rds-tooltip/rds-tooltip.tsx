import { Tooltip as BsTooltip } from "bootstrap";
import React, { useEffect, useRef } from "react";
import { placements } from "../../libs/types";

export const Tooltip = (p: {
  children: JSX.Element;
  text?: string;
  place?: placements;
}) => {
  const childRef = useRef(undefined as unknown as Element);

  useEffect(() => {
    const t = new BsTooltip(childRef.current, {
      title: p.text,
      placement: p.place,
      trigger: "hover",
    });
    return () => t.dispose();
  }, [p.text, p.place]);

  return React.cloneElement(p.children, { ref: childRef });
};

export default Tooltip;
