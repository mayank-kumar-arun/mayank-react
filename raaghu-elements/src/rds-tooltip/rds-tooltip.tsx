import { Tooltip as BsTooltip } from "bootstrap"
import React, { useEffect, useRef } from "react"
import { Placements } from "../Types"   

export const Tooltip = (p: {children: JSX.Element, text: string, place: Placements}) => {
    const childRef = useRef(undefined as unknown as Element)

    useEffect(() => {
        const t = new BsTooltip(childRef.current, {
            title: p.text,
            placement: p.place,
            trigger: "hover"
        })
        return () => t.dispose()
    }, [p.text, p.place])

    return React.cloneElement(p.children, { ref: childRef })
}

export default Tooltip;