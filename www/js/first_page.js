$(function () {
    // body...

    var defaults_daily = {
        "chartData": [65, 159, 124, 81, 56, 55, 40],
        "chartLabels": ["14-Jan", "15-Jan", "16-Jan", "17-Jan", "18-Jan", "19-Jan", "20-Jan"]
    };

    var defaults_weekly = {
        "chartData": [35, 129, 121, 11, 46, 54, 70],
        "chartLabels": ["Wk 1", "Wk 2", "Wk 3", "Wk 4", "Wk 5", "Wk 6", "Wk 7"]
    };

    var defaults_monthly = {
        "chartData": [6, 155, 12, 22, 52, 55, 20],
        "chartLabels": ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"]
    };

    $(".back").on("click",function(){
        window.location.href = "../www/index.html";
    });

    $(".back-fd").on("click",function(){
        window.location.href = "../www/first_page.html";
    });

    $("#feeding").on("click",function(){
        window.location.href = "../www/feeding-device.html";
    });

    // $("#myModalTrend").hide();
    $(".btn-trend").on("click",function(){
    	$(this).addClass("js-go-back");
    	$("#myModalexample").addClass("active");
    	plotChart(defaults_daily.chartLabels, defaults_daily.chartData);
    });

    $("#js-daily").on("click",function(){
    	$(this).addClass("js-go-back");
    	$("#myModalexample").addClass("active");
    	plotChart(defaults_daily.chartLabels, defaults_daily.chartData);
    });

    $("#js-weekly").on("click",function(){
    	$(this).addClass("js-go-back");
    	$("#myModalexample").addClass("active");
    	plotChart(defaults_weekly.chartLabels, defaults_weekly.chartData);
    });

    $("#js-monthly").on("click",function(){
    	$(this).addClass("js-go-back");
    	$("#myModalexample").addClass("active");
    	plotChart(defaults_monthly.chartLabels, defaults_monthly.chartData);
    });

    $("#closeModal").on("click", function() {
        var elmId = $(this).attr("href");
        $(elmId).removeClass("active");
    });

    /* AJAX Data binding starts */
 

    /* Chart function starts */
    function plotChart(labels, data) {
        var chartData = {
            labels: labels,
            datasets : [
                {
                    fillColor: "rgba(151,187,205,0.2)",
		            strokeColor: "rgba(151,187,205,1)",
		            pointColor: "rgba(151,187,205,1)",
		            pointStrokeColor: "#fff",
		            pointHighlightFill: "#fff",
		            pointHighlightStroke: "rgba(151,187,205,1)",
                    data : data
                }
            ]
        };

        var charts = document.getElementsByClassName("js-chart");
        var chartLength = charts.length;

        for(var i = 0; i < chartLength; i++) {
            var ctx = charts[i].getContext("2d");
            ctx.canvas.width = 300;
			ctx.canvas.height = 200;
            window.myLine = new Chart(ctx).Line(chartData);
        }
    }
    /* Chart function ends */

});