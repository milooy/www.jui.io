var chart = jui.include("chart.builder");

chart("#chart-content", {
    axis : [{
        x : {
            type : "block",
            domain : "quarter"
        },
        y : {
            type : "range",
            domain : function(d) {
                // You may set the range to the maximum value of the data value.
                return Math.max(d.sales, d.profit) + 10;
            },
            step : 5,
            line : "solid"
        },
        data : [
            { quarter : "1Q", sales : 50, profit : 35 },
            { quarter : "2Q", sales : 20, profit : 30 },
            { quarter : "3Q", sales : 10, profit : 5 },
            { quarter : "4Q", sales : 30, profit : 25 }
        ]
    }]
});