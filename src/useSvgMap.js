import { useEffect } from "react"
import * as d3 from "d3"

export default () => {
    useEffect(() => {
        const width = 600;
        const height = 700;
        const all = d3.selectAll(".all");
        const svg = d3.select("svg");
        const zoom = d3.zoom().on("zoom", () => all.attr("transform", d3.event.transform));

        d3.selectAll(".all").on("zoom", function () {
            console.log(d3.event)
        })

        d3.selectAll(".all").on("mouseover", function () {
            console.log(d3.event)
        })

        d3.selectAll(".all").on("mouseover", function () {
            console.log(d3.event)
        })

        svg.call(zoom);
        svg.call(d3.zoom().extent([[0, 0], [width, height]]).scaleExtent([1, 8]).on("zoom", () => all.attr("transform", d3.event.transform)));

        let buttonZoom = d3.zoom().on("zoom", function () {
            all.attr('transform', d3.event.transform);
        });

        d3.select(".zoom-in").on("mouseover", function (d) {
            console.log(d3.event)
            d3.selectAll(".plus").attr("fill", "#4a4a4a")
        }).on("mouseout", function (d) {
            d3.selectAll(".plus").attr("fill", "#707070")
        }).on("click", function () {
            buttonZoom.scaleBy(svg.transition().duration(750), 2);
        });

        d3.select(".zoom-out").on("mouseover", function (d) {
            d3.select(".minus").attr("fill", "#4a4a4a")
        }).on("mouseout", function (d) {
            d3.selectAll(".minus").attr("fill", "#707070")
        }).on("click", function () {
            buttonZoom.scaleBy(svg.transition().duration(750), .5);
        });
    });
};