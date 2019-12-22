am4core.ready(function() {

    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end
    
    var chart = am4core.create("chartdiv5", am4charts.PieChart);
    chart.hiddenState.properties.opacity = 0; // this creates initial fade-in
    
    chart.data = [
      {
        country: "Mexico",
        value: 19.1
      },
      {
        country: "South and East Asia",
        value: 11.7
      },
      {
        country: "Europe/Canada",
        value: 9.8
      },
      {
        country: "Caribean",
        value: 16.5
      },
      {
        country: "Central America",
        value: 18.6
      },
      {
        country: "South America",
        value: 12.7
      },
      {
        country: "Middle East",
        value: 22.3
      },
      {
        country: "Sub-Saharan Africa",
        value: 19.4
      },
    ];
    chart.radius = am4core.percent(70);
    chart.innerRadius = am4core.percent(40);
    chart.startAngle = 180;
    chart.endAngle = 360;  
    
    var series = chart.series.push(new am4charts.PieSeries());
    series.dataFields.value = "value";
    series.dataFields.category = "country";
    
    series.slices.template.cornerRadius = 10;
    series.slices.template.innerCornerRadius = 7;
    series.slices.template.draggable = true;
    series.slices.template.inert = true;
    series.alignLabels = false;
    
    series.hiddenState.properties.startAngle = 90;
    series.hiddenState.properties.endAngle = 90;
    
    var title = chart.titles.create();
    title.text = "Immigrants Poverty Rate (%) in US";
    title.fontSize = 30;
    title.marginTop = 20;
    title.marginBottom = 20;
    
    chart.legend = new am4charts.Legend();
    
    }); // end am4core.ready()