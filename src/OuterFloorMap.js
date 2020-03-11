import React from "react"
import useSvgMap from "./useSvgMap"
import Defs from "./Defs"
import { gray } from "d3";

const styles = {
    svgContainer: {
        color: 'gray',
        position: 'relative',
        width: '100%',
        height: '100vw',
        maxHeight: '300px',
        width: '100%',
    },
    svg: {
        position: 'absolute',
        backgroundColor: 'rgb(200, 200, 2)',
        height: '66%',
        width: '100%',
        left: 500,
        top: -500,
    }
};

function OuterFloorMap(props) {
    useSvgMap();

    return (
        <div className={styles.svgContainer}>
            <svg className={styles.svg} xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 600 900">
                <Defs />
                {props.children}
                <text className="seat-num" x="-275" y="100"
                    style={{ fontWeight: "bold", fill: "#3273dc", fillOpacity: "1", fontSize: 84 }} />
                <g className="zoom-in" transform="translate(320 150)">
                    <path fill="#fff" fillOpacity="1" stroke="none" strokeOpacity="1" strokeWidth="0.3"
                        d="M471.8 576h51.4c5 0 9.1 4.1 9.1 9.1v60.5h-69.5v-60.5c0-5 4-9 9-9z" opacity="1" />
                    <rect className="plus" width="10.7" height="33.7" x="492.2" y="594" fill="#707070" fillOpacity="1"
                        stroke="none" strokeOpacity="1" strokeWidth="0.3" opacity="1" ry="5.3" />
                    <rect className="plus" width="10.7" height="33.7" x="605.5" y="-514.4" fill="#707070"
                        fillOpacity="1" stroke="none" strokeOpacity="1" strokeWidth="0.3" opacity="1" ry="5.3"
                        transform="rotate(90)" />
                </g>
                <g className="zoom-out" transform="translate(320 150)">
                    <path fill="#fff" fillOpacity="1" stroke="none" strokeOpacity="1" strokeWidth="0.3"
                        d="M462.8 646.7h69.5v60.5c0 5-4 9-9 9h-51.5c-5 0-9-4-9-9v-60.5z" opacity="1" />
                    <rect className="minus" width="10.7" height="33.7" x="676.1" y="-514.4" fill="#707070"
                        fillOpacity="1" stroke="none" strokeOpacity="1" strokeWidth="0.3" opacity="1" ry="5.3"
                        transform="rotate(90)" />
                </g>
            </svg>
        </div>
    )
}

export default OuterFloorMap