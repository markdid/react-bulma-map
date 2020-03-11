import React from "react"

function Defs() {
    return (
        <defs>
            <filter id="d" colorInterpolationFilters="sRGB">
                <feFlood floodColor="#000" floodOpacity="0.427" result="flood"/>
                <feComposite in="flood" in2="SourceGraphic" operator="in" result="composite1"/>
                <feGaussianBlur in="composite1" result="blur" stdDeviation="0"/>
                <feOffset dx="0.262" dy="2.6" result="offset"/>
                <feComposite in="SourceGraphic" in2="offset" operator="over" result="composite2"/>
            </filter>
            <filter id="c" colorInterpolationFilters="sRGB">
                <feFlood floodColor="#000" floodOpacity="0.427" result="flood"/>
                <feComposite in="flood" in2="SourceGraphic" operator="in" result="composite1"/>
                <feGaussianBlur in="composite1" result="blur" stdDeviation="0"/>
                <feOffset dx="0.262" dy="2.6" result="offset"/>
                <feComposite in="SourceGraphic" in2="offset" operator="over" result="composite2"/>
            </filter>
            <filter id="b" colorInterpolationFilters="sRGB">
                <feFlood floodColor="#000" floodOpacity="0.427" result="flood"/>
                <feComposite in="flood" in2="SourceGraphic" operator="in" result="composite1"/>
                <feGaussianBlur in="composite1" result="blur" stdDeviation="0"/>
                <feOffset dx="0.262" dy="2.6" result="offset"/>
                <feComposite in="SourceGraphic" in2="offset" operator="over" result="composite2"/>
            </filter>
            <filter id="a" colorInterpolationFilters="sRGB">
                <feFlood floodColor="#000" floodOpacity="0.498" result="flood"/>
                <feComposite in="flood" in2="SourceGraphic" operator="in" result="composite1"/>
                <feGaussianBlur in="composite1" result="blur" stdDeviation="0"/>
                <feOffset dx="1.309" dy="7.9" result="offset"/>
                <feComposite in="SourceGraphic" in2="offset" operator="over" result="composite2"/>
            </filter>
        </defs>
    )
}

export default Defs
