import { useState, useLayoutEffect } from "react";

// Restrict value to be between the range [0, value]
const clamp = (value) => Math.max(0, value);

// Check if number is between two values
const isBetween = (value, floor, ceil) =>
    value >= floor && value <= ceil;

const useScrollspy = (ids, offset = 0) => {
    const [activeId, setActiveId] = useState("home");

    useLayoutEffect(() => {
        const scroller = document.querySelector(".wrapper");
        const listener = () => {
            const scroll = scroller.scrollTop;
            const position = ids
                .map((id) => {
                    const element = document.getElementById(id);

                    if (!element) return { id, top: -1, bottom: -1 };

                    const rect = element.getBoundingClientRect();
                    const top = clamp(rect.top + scroll - offset);
                    const bottom = clamp(rect.bottom + scroll - offset);

                    return { id, top, bottom };
                })
                .find(({ top, bottom }) => isBetween(scroll, top, bottom));
            setActiveId(position?.id || "");
        };

        scroller.addEventListener("resize", listener);
        scroller.addEventListener("scroll", listener);

        return () => {
            scroller.removeEventListener("resize", listener);
            scroller.removeEventListener("scroll", listener);
        };
    }, [ids, offset]);

    return { activeId, setActiveId };
};
export default useScrollspy;