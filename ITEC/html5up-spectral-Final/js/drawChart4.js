am4core.ready(function() {

    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end
    
     // Create map instance
    var chart = am4core.create("chartdiv4", am4maps.MapChart);

    // Set map definition
    chart.geodata = am4geodata_usaLow;
    
    // Set projection
    chart.projection = new am4maps.projections.AlbersUsa();
    
    // Create map polygon series
    var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());
    
    //Set min/max fill color for each area
    polygonSeries.heatRules.push({
      property: "fill",
      target: polygonSeries.mapPolygons.template,
      min: chart.colors.getIndex(1).brighten(1),
      max: chart.colors.getIndex(1).brighten(-0.3)
    });
    
    // Make map load polygon data (state shapes and names) from GeoJSON
    polygonSeries.useGeodata = true;
    
    // Set heatmap values for each state
    polygonSeries.data = [
        {
            id: "US-MT",
            value: 19700
          },
      {
        id: "US-AL",
        value: 168200
      },
      {
        id: "US-AK",
        value: 50400
      },
      {
        id: "US-AZ",
        value: 869900
      },
      {
        id: "US-AR",
        value: 133400
      },
      {
        id: "US-CA",
        value: 10175800
      },
      {
        id: "US-CO",
        value: 495500
      },
      {
        id: "US-CT",
        value: 487200
      },
      {
        id: "US-DE",
        value: 76800
      },
      {
        id: "US-FL",
        value: 3698700
      },
      {
        id: "US-GA",
        value: 8186453
      },
      {
        id: "US-HI",
        value: 950700
      },
      {
        id: "US-ID",
        value: 1293953
      },
      {
        id: "US-IL",
        value: 93800
      },
      {
        id: "US-IN",
        value: 308100
      },
      {
        id: "US-IA",
        value: 137100
      },
      {
        id: "US-KS",
        value: 191100
      },
      {
        id: "US-KY",
        value: 143700
      },
      {
        id: "US-LA",
        value: 176000
      },
      {
        id: "US-ME",
        value: 45300
      },
      {
        id: "US-MD",
        value: 814700
      },
      {
        id: "US-MA",
        value: 991700
      },
      {
        id: "US-MI",
        value: 604200
      },
      {
        id: "US-RI",
        value: 138000
      },
      {
        id: "US-MN",
        value: 392000
      },
      {
        id: "US-MS",
        value: 66600
      },
      {
        id: "US-MO",
        value: 233600
      },
     
      {
        id: "US-NE",
        value: 116600
      },
      {
        id: "US-NV",
        value: 521900
      },
      {
        id: "US-NH",
        value: 71600
      },
      {
        id: "US-NJ",
        value: 1868800
      },
      {
        id: "US-NM",
        value: 203500
      },
      {
        id: "US-NY",
        value: 4314700
      },
      {
        id: "US-NC",
        value: 730800
      },
      {
        id: "US-ND",
        value: 18600
      },
      {
        id: "US-OH",
        value: 461300
      },
      {
        id: "US-WV",
        value: 1808344
      },
      {
        id: "US-OK",
        value: 209000
      },
      {
        id: "US-OR",
        value: 379700
      },
      {
        id: "US-PA",
        value: 759800
      },
      {
        id: "US-SC",
        value: 225300
      },
      {
        id: "US-SD",
        value: 23100
      },
      {
        id: "US-TN",
        value: 296400
      },
      {
        id: "US-TX",
        value: 4187900
      },
      {
        id: "US-UT",
        value: 231400
      },
      {
        id: "US-VT",
        value: 25600
      },
      {
        id: "US-VA",
        value: 917500
      },
      {
        id: "US-WA",
        value: 898100
      },
      {
        id: "US-WI",
        value: 266500
      },
      {
        id: "US-WY",
        value: 18600
      }
    ];
    
    // Set up heat legend
    let heatLegend = chart.createChild(am4maps.HeatLegend);
    heatLegend.series = polygonSeries;
    heatLegend.align = "right";
    heatLegend.valign = "bottom";
    heatLegend.width = am4core.percent(20);
    heatLegend.marginRight = am4core.percent(4);
    heatLegend.minValue = 0;
    heatLegend.maxValue = 40000000;
    
    // Set up custom heat map legend labels using axis ranges
    var minRange = heatLegend.valueAxis.axisRanges.create();
    minRange.value = heatLegend.minValue;
    minRange.label.text = "Little";
    var maxRange = heatLegend.valueAxis.axisRanges.create();
    maxRange.value = heatLegend.maxValue;
    maxRange.label.text = "A lot!";
    
    // Blank out internal heat legend value axis labels
    heatLegend.valueAxis.renderer.labels.template.adapter.add("text", function(labelText) {
      return "";
    });
    
    // Configure series tooltip
    var polygonTemplate = polygonSeries.mapPolygons.template;
    polygonTemplate.tooltipText = "{name}: {value}";
    polygonTemplate.nonScalingStroke = true;
    polygonTemplate.strokeWidth = 0.5;
    
    // Create hover state and set alternative fill color
    var hs = polygonTemplate.states.create("hover");
    hs.properties.fill = am4core.color("#3c5bdc");
    
    }); // end am4core.ready()