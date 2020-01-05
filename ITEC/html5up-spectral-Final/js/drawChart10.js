
am4core.ready(function() {

  // Themes begin
  am4core.useTheme(am4themes_animated);
  // Themes end
  
  // Create chart instance
  var chart = am4core.create("chartdiv10", am4charts.XYChart);
  
  // Add data
  chart.data = [{
    "unemployment": "Mexico",
    "%": 4.4
  }, {
    "Unemployment": "South, East Asia",
    "%": 3.8
  }, {
    "Unemployment": "Eurrope/Canada",
    "%": 3.8
  }, {
    "Unemployment": "Caribbean",
    "%": 5.7
  },
    {
      "Unemployment": "Central America",
      "%": 4.4
  },
  {
    "Unemployment": "South America",
    "%": 4.6
  },
  {
    "Unemployment": "Middle East",
    "%": 6.0
  },
  {
    "Unemployment": "Sub-Saharan Africa",
    "%": 5.9
  },
  {
    "Unemployment": "Others",
    "%": 5.2
  
  }];
  
  // Create axes
  
  var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
  categoryAxis.dataFields.category = "Unemployment";
  categoryAxis.renderer.grid.template.location = 0;
  categoryAxis.renderer.minGridDistance = 30;
  
  categoryAxis.renderer.labels.template.adapter.add("dy", function(dy, target) {
    if (target.dataItem && target.dataItem.index & 2 == 2) {
      return dy + 25;
    }
    return dy;
  });
  
  var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
  
  // Create series
  var series = chart.series.push(new am4charts.LineSeries());
  series.dataFields.valueY = "%";
  series.dataFields.categoryX = "Unemployment";
  series.name = "Prevalence (%)";
  series.lines.template.tooltipText = "{categoryX}: [bold]{valueY}[/]";
  series.lines.template.fillOpacity = .8;
  
  var LineTemplate = series.Line.template;
  LineTemplate.strokeWidth = 2;
  LineTemplate.strokeOpacity = 1;
  
  var title = chart.titles.create();
  title.text = "Unemployment rate";
  title.fontSize = 20;
  title.marginTop = 20;
  title.marginBottom = 20;
  
  series.lines.template.adapter.add("fill", function (fill, target) {
      return chart.colors.getIndex(target.dataItem.index);
  });
  
  // alert(chart.colors.getIndex());
  // alert(chart.colors.getIndex(1));
  
  }); // end am4core.ready()
  