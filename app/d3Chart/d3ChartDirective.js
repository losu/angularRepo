'use strict';

angular.module('d3ChartModule')
    .directive('chart', function () {
        return {
            restrict: 'E',
            scope: {},
            replace: true,
            link: function (scope, element, attr) {
                var h = 120;
                var w = 300;


                var padding = 2;
                var monthSale = [5, 23, 13, 19, 21, 25, 11, 25, 22, 18, 7];

                var svg = d3.select(".chart").append("svg")
                    .attr({
                        width: w,
                        height: h
                    });

                var axisScale = d3.scale.linear()
                    .domain([0, 25])
                    .range([h, 0]);

                var yAxis = d3.svg.axis()
                    .scale(axisScale)
                    .orient("left")
                    .ticks(5);

                var yAxisGenerate = svg.append("g")
                    .call(yAxis)
                    .attr("transform", "translate(25,0)");


                function colorPicker(v) {
                    if (v <= 20) {
                        return "#666666";
                    } else if (v > 20) {
                        return "#FF0033";
                    }
                }

                svg.selectAll("rect")
                    .data(monthSale)
                    .enter()
                    .append("rect")
                    .attr({
                        x: function (d, i) {
                            return i * (w / monthSale.length) + 30;
                        },
                        y: function (d) {
                            return h - (d * 5);
                        },

                        width: w / monthSale.length - padding,
                        height: function (d) {
                            return d * 5;
                        },

                        fill: function (d) {
                            return colorPicker(d)
                        }
                    })
                    .on("mouseover", function (d) {
                        svg.append("text")
                            .text(d)
                            .attr({
                                "text-anchor": "middle",
                                x: parseFloat(d3.select(this).attr("x")) + parseFloat(d3.select(this).attr("width") / 2),

                                y: parseFloat(d3.select(this).attr("y")) + 20,
                                "font-family": "sans-serif",
                                "font-size": 12,
                                "fill": "#ffffff",
                                id: "tooltip"
                            })
                    })
                    .on("mouseout", function () {
                        d3.select("#tooltip").remove();
                    })




            },
            templateUrl: 'd3Chart/d3ChartTemplate.html'
        };
    })