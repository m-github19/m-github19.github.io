am4core.ready(function() {

    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end
    
    var chart = am4core.create("chartdiv7", am4charts.XYChart);
  
    chart.titles.create().text = "USA Government Healthcare Expenditure in terms of GDP %";
  
    chart.data = [{
      "year": "1944",
      "Medical Service": 0.38,
      "Vendor Payment (Medical)": 0
    }, {
      "year": "1945",
      "Medical Service": 0.44,
      "Vendor Payment (Medical)": 0
    }, {
      "year": "1946",
      "Medical Service": 0.5,
      "Vendor Payment (Medical)": 0
    }, {
      "year": "1947",
      "Medical Service": 0.62,
      "Vendor Payment (Medical)": 0
    }, {
      "year": "1948",
      "Medical Service": 0.7,
      "Vendor Payment (Medical)": 0
    }, {
      "year": "1949",
      "Medical Service": 0.85,
      "Vendor Payment (Medical)": 0
    }, {
      "year": "1950",
      "Medical Service": 0.9,
      "Vendor Payment (Medical)": 0
    }, {
      "year": "1951",
      "Medical Service": 0.85,
      "Vendor Payment (Medical)": 0
    }, {
      "year": "1952",
      "Medical Service": 0.87,
      "Vendor Payment (Medical)": 0
    }, {
      "year": "1953",
      "Medical Service": 0.83,
      "Vendor Payment (Medical)": 0
    }, {
      "year": "1954",
      "Medical Service": 0.86,
      "Vendor Payment (Medical)": 0
    }, {
      "year": "1955",
      "Medical Service": 0.81,
      "Vendor Payment (Medical)": 0
    }, {
      "year": "1956",
      "Medical Service": 0.83,
      "Vendor Payment (Medical)": 0
    }, {
      "year": "1957",
      "Medical Service": 0.88,
      "Vendor Payment (Medical)": 0
    }, {
      "year": "1958",
      "Medical Service": 0.95,
      "Vendor Payment (Medical)": 0
    }, {
      "year": "1959",
      "Medical Service": 0.97,
      "Vendor Payment (Medical)": 0
    }, {
      "year": "1960",
      "Medical Service": 0.97,
      "Vendor Payment (Medical)": 0
    }, {
      "year": "1961",
      "Medical Service": 1.01,
      "Vendor Payment (Medical)": 0
    }, {
      "year": "1962",
      "Medical Service": 0.72,
      "Vendor Payment (Medical)": 0.1
    }, {
      "year": "1963",
      "Medical Service": 0.73,
      "Vendor Payment (Medical)": 0.11
    }, {
      "year": "1964",
      "Medical Service": 0.72,
      "Vendor Payment (Medical)": 0.12
    }, {
      "year": "1965",
      "Medical Service": 0.72,
      "Vendor Payment (Medical)": 0.19
    }, {
      "year": "1966",
      "Medical Service": 0.73,
      "Vendor Payment (Medical)": 0.25
    }, {
      "year": "1967",
      "Medical Service": 0.77,
      "Vendor Payment (Medical)": 0.46
    }, {
      "year": "1968",
      "Medical Service": 0.8,
      "Vendor Payment (Medical)": 0.47
    }, {
      "year": "1969",
      "Medical Service": 0.84,
      "Vendor Payment (Medical)": 0.52
    }, {
      "year": "1970",
      "Medical Service": 0.9,
      "Vendor Payment (Medical)": 0.61
    }, {
      "year": "1971",
      "Medical Service": 0.96,
      "Vendor Payment (Medical)": 0.7
    }, {
      "year": "1972",
      "Medical Service": 1.01,
      "Vendor Payment (Medical)": 0.78
    }, {
      "year": "1973",
      "Medical Service": 0.97,
      "Vendor Payment (Medical)": 0.8
    }, {
      "year": "1974",
      "Medical Service": 1.03,
      "Vendor Payment (Medical)": 0.84
    }, {
      "year": "1975",
      "Medical Service": 1.12,
      "Vendor Payment (Medical)": 0.96
    }, {
      "year": "1976",
      "Medical Service": 1.1,
      "Vendor Payment (Medical)": 0.98
    }, {
      "year": "1977",
      "Medical Service": 1.11,
      "Vendor Payment (Medical)": 0.99
    }, {
      "year": "1978",
      "Medical Service": 1.06,
      "Vendor Payment (Medical)": 0.97
    }, {
      "year": "1979",
      "Medical Service": 1.07,
      "Vendor Payment (Medical)": 0.99
    }, {
      "year": "1980",
      "Medical Service": 1.13,
      "Vendor Payment (Medical)": 1.05
    }, {
      "year": "1981",
      "Medical Service": 1.13,
      "Vendor Payment (Medical)": 1.08
    }, {
      "year": "1982",
      "Medical Service": 1.22,
      "Vendor Payment (Medical)": 1.09
    }, {
      "year": "1983",
      "Medical Service": 1.21,
      "Vendor Payment (Medical)": 1.08
    }, {
      "year": "1984",
      "Medical Service": 1.15,
      "Vendor Payment (Medical)": 1.06
    }, {
      "year": "1985",
      "Medical Service": 1.14,
      "Vendor Payment (Medical)": 1.04
    }, {
      "year": "1986",
      "Medical Service": 1.17,
      "Vendor Payment (Medical)": 1.08
    }, {
      "year": "1987",
      "Medical Service": 1.17,
      "Vendor Payment (Medical)": 1.14
    }, {
      "year": "1988",
      "Medical Service": 1.18,
      "Vendor Payment (Medical)": 1.16
    }, {
      "year": "1989",
      "Medical Service": 1.12,
      "Vendor Payment (Medical)": 1.18
    }, {
      "year": "1990",
      "Medical Service": 1.15,
      "Vendor Payment (Medical)": 1.34
    }, {
      "year": "1991",
      "Medical Service": 1.21,
      "Vendor Payment (Medical)": 1.65
    }, {
      "year": "1992",
      "Medical Service": 1.3,
      "Vendor Payment (Medical)": 1.6
    }, {
      "year": "1993",
      "Medical Service": 1.32,
      "Vendor Payment (Medical)": 1.67
    }, {
      "year": "1994",
      "Medical Service": 1.32,
      "Vendor Payment (Medical)": 1.72
    }, {
      "year": "1995",
      "Medical Service": 1.32,
      "Vendor Payment (Medical)": 1.77
    }, {
      "year": "1996",
      "Medical Service": 1.3,
      "Vendor Payment (Medical)": 1.71
    }, {
      "year": "1997",
      "Medical Service": 1.24,
      "Vendor Payment (Medical)": 1.68
    }, {
      "year": "1998",
      "Medical Service": 1.2,
      "Vendor Payment (Medical)": 1.63
    }, {
      "year": "1999",
      "Medical Service": 1.17,
      "Vendor Payment (Medical)": 1.63
    }, {
      "year": "2000",
      "Medical Service": 1.17,
      "Vendor Payment (Medical)": 1.69
    }, {
      "year": "2001",
      "Medical Service": 1.18,
      "Vendor Payment (Medical)": 1.84
    }, {
      "year": "2002",
      "Medical Service": 1.24,
      "Vendor Payment (Medical)": 2.01
    }, {
      "year": "2003",
      "Medical Service": 1.22,
      "Vendor Payment (Medical)": 2.16
    }, {
      "year": "2004",
      "Medical Service": 1.2,
      "Vendor Payment (Medical)": 2.3
    }, {
      "year": "2005",
      "Medical Service": 1.18,
      "Vendor Payment (Medical)": 2.38
    }, {
      "year": "2006",
      "Medical Service": 1.17,
      "Vendor Payment (Medical)": 2.3
    }, {
      "year": "2007",
      "Medical Service": 1.21,
      "Vendor Payment (Medical)": 2.28
    }, {
      "year": "2008",
      "Medical Service": 1.31,
      "Vendor Payment (Medical)": 2.37
    }, {
      "year": "2009",
      "Medical Service": 1.42,
      "Vendor Payment (Medical)": 2.59
    }, {
      "year": "2010",
      "Medical Service": 1.39,
      "Vendor Payment (Medical)": 2.73
    }, {
      "year": "2011",
      "Medical Service": 1.38,
      "Vendor Payment (Medical)": 2.85
    }, {
      "year": "2012",
      "Medical Service": 1.37,
      "Vendor Payment (Medical)": 2.75
    }, {
      "year": "2013",
      "Medical Service": 1.35,
      "Vendor Payment (Medical)": 2.82
    }, {
      "year": "2014",
      "Medical Service": 1.35,
      "Vendor Payment (Medical)": 2.93
    }, {
      "year": "2015",
      "Medical Service": 1.34,
      "Vendor Payment (Medical)": 3.3
    }, {
      "year": "2016",
      "Medical Service": 1.35,
      "Vendor Payment (Medical)": 3.38
    }, {
      "year": "2017",
      "Medical Service": 1.36,
      "Vendor Payment (Medical)": 3.46
    }, {
      "year": "2018",
      "Medical Service": 1.36,
      "Vendor Payment (Medical)": 3.46
    }, {
      "year": "2019",
      "Medical Service": 1.37,
      "Vendor Payment (Medical)": 3.48
    }];
    
    chart.dateFormatter.inputDateFormat = "yyyy";
    var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.renderer.minGridDistance = 60;
    dateAxis.startLocation = 0.5;
    dateAxis.endLocation = 0.5;
    dateAxis.baseInterval = {
      timeUnit: "year",
      count: 1
    }
    
    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.tooltip.disabled = true;
    
    var series = chart.series.push(new am4charts.LineSeries());
    series.dataFields.dateX = "year";
    series.name = "Medical Service-Total";
    series.dataFields.valueY = "Medical Service";
    series.tooltipText = "[#000]{valueY.value}[/]";
    series.tooltip.background.fill = am4core.color("#FFF");
    series.tooltip.getStrokeFromObject = true;
    series.tooltip.background.strokeWidth = 3;
    series.tooltip.getFillFromObject = false;
    series.fillOpacity = 0.6;
    series.strokeWidth = 2;
    series.stacked = true;
    
    var series3 = chart.series.push(new am4charts.LineSeries());
    series3.name = "Vendor Payment (Medical)-Total";
    series3.dataFields.dateX = "year";
    series3.dataFields.valueY = "Vendor Payment (Medical)";
    series3.tooltipText = "[#000]{valueY.value}[/]";
    series3.tooltip.background.fill = am4core.color("#FFF");
    series3.tooltip.getFillFromObject = false;
    series3.tooltip.getStrokeFromObject = true;
    series3.tooltip.background.strokeWidth = 3;
    series3.sequencedInterpolation = true;
    series3.fillOpacity = 0.6;
    series3.defaultState.transitionDuration = 1000;
    series3.stacked = true;
    series3.strokeWidth = 2;
    
    chart.cursor = new am4charts.XYCursor();
    chart.cursor.xAxis = dateAxis;
    chart.scrollbarX = new am4core.Scrollbar();
    
    // Add a legend
    chart.legend = new am4charts.Legend();
    chart.legend.position = "top";
    
    // axis ranges
  //  var range = dateAxis.axisRanges.create();
  //  range.date = new Date(2001, 0, 1);
  //  range.endDate = new Date(2003, 0, 1);
  //  range.axisFill.fill = chart.colors.getIndex(7);
  //  range.axisFill.fillOpacity = 0.2;
    
  //  range.label.text = "Fines for speeding increased";
  //  range.label.inside = true;
  //  range.label.rotation = 90;
  //  range.label.horizontalCenter = "right";
  //  range.label.verticalCenter = "bottom";
    
  //  var range2 = dateAxis.axisRanges.create();
  //  range2.date = new Date(2007, 0, 1);
  //  range2.grid.stroke = chart.colors.getIndex(7);
  //  range2.grid.strokeOpacity = 0.6;
  //  range2.grid.strokeDasharray = "5,2";
    
    
  //  range2.label.text = "Motorcycle fee introduced";
  //  range2.label.inside = true;
  //  range2.label.rotation = 90;
  //  range2.label.horizontalCenter = "right";
  //  range2.label.verticalCenter = "bottom";
    
    }); // end am4core.ready()