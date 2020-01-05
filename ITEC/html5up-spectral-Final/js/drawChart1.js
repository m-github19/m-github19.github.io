am4core.ready(function() {

    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end
    
    // Create chart instance
    var chart = am4core.create("chartdiv1", am4charts.XYChart);
    
    
    // Export
    chart.exporting.menu = new am4core.ExportMenu();
    
    // Data for both series
    var data = [ {
      "year": "1900",
      "number of immigrants": 10.3,
      "share of population (percentage)": 13.6,
      "fill": "#add8e6"
    }, {
      "year": "1910",
      "number of immigrants": 13.5,
      "share of population (percentage)": 14.7,
      "fill": "#add8e6"
    }, {
      "year": "1920",
      "number of immigrants": 13.9,
      "share of population (percentage)": 13.2,
      "fill": "#add8e6"
    }, {
      "year": "1930",
      "number of immigrants": 14.2,
      "share of population (percentage)": 11.6,
      "fill": "#add8e6"
    }, {
      "year": "1940",
      "number of immigrants": 11.6,
      "share of population (percentage)": 8.8,
      "fill": "#add8e6"
    }, {
        "year": "1950",
        "number of immigrants": 10.3,
        "share of population (percentage)": 6.9,
        "fill": "#add8e6"
      }, {
        "year": "1960",
        "number of immigrants": 9.7,
        "share of population (percentage)": 5.4,
        "fill": "#add8e6"
      }, {
        "year": "1970",
        "number of immigrants": 9.6,
        "share of population (percentage)": 4.7,
        "fill": "#add8e6"
      }, {
        "year": "1980",
        "number of immigrants": 14.1,
        "share of population (percentage)": 6.2,
        "fill": "#add8e6"
      }, {
        "year": "1990",
        "number of immigrants": 19.8,
        "share of population (percentage)": 7.9,
        "fill": "#add8e6"
      }, {
        "year": "2000",
        "number of immigrants": 31.1,
        "share of population (percentage)": 11.1,
        "fill": "#add8e6"
      }, {
        "year": "2010",
        "number of immigrants": 40.0,
        "share of population (percentage)": 12.9,
        "fill": "#add8e6"
    }, {
      "year": "2020",
      "number of immigrants": 46.7,
      "share of population (percentage)": 14.0,
      "strokeWidth": 1,
      "columnDash": "5,5",
      "fillOpacity": 0.2,
      "additional": "(projection)",
      "fill": "#add8e6"
    } ];
    
    /* Create axes */
    var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "year";
    categoryAxis.renderer.minGridDistance = 40;
    
    /* Create value axis */
    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    
    /* Create series */
    var columnSeries = chart.series.push(new am4charts.ColumnSeries());
    columnSeries.name = "number of immigrants";
    columnSeries.dataFields.valueY = "number of immigrants";
    columnSeries.dataFields.categoryX = "year";
    columnSeries.fill = am4core.color("white");
    
    columnSeries.columns.template.tooltipText = "[black font-size: 15px]{name} in {categoryX}:\n[/][black font-size: 20px]{valueY}[/] [black]{additional}[/]"
    columnSeries.columns.template.propertyFields.fillOpacity = "fillOpacity";
    columnSeries.columns.template.propertyFields.stroke = "stroke";
    columnSeries.columns.template.propertyFields.strokeWidth = "strokeWidth";
    columnSeries.columns.template.propertyFields.strokeDasharray = "columnDash";
    columnSeries.columns.template.propertyFields.fill = "fill";
    columnSeries.tooltip.label.textAlign = "middle";
  
    var lineSeries = chart.series.push(new am4charts.LineSeries());
    lineSeries.name = "share of population (percentage)";
    lineSeries.dataFields.valueY = "share of population (percentage)";
    lineSeries.dataFields.categoryX = "year";
    
    lineSeries.stroke = am4core.color("red");
    lineSeries.strokeWidth = 3;
    lineSeries.propertyFields.strokeDasharray = "lineDash";
    lineSeries.tooltip.label.textAlign = "middle";
    
    var bullet = lineSeries.bullets.push(new am4charts.Bullet());
    bullet.fill = am4core.color("black"); // tooltips grab fill from parent by default
    bullet.tooltipText = "[white font-size: 15px]{name} in {categoryX}:\n[/][white font-size: 20px]{valueY}[/] [white]{additional}[/]"
    
    var circle = bullet.createChild(am4core.Circle);
    circle.radius = 4;
    circle.fill = am4core.color("white");
    circle.strokeWidth = 3;

    chart.legend = new am4charts.Legend();
    chart.legend.position = "top";
    chart.legend.fontColor = "white"

    var title = chart.titles.create();
    title.text = "Number of immigrants (in millions)";
    title.fontColor = "white"
    title.fontSize = 20;
    title.marginTop = 20;
    title.marginBottom = 20;
   
    
    chart.data = data;
    
    }); // end am4core.ready()