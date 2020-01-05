am4core.ready(function() {

    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end
    
    // Create chart instance
    var chart = am4core.create("chartdiv2", am4charts.PieChart);
    
    // Add data
    chart.data = [{
      "Based": "Immediate relatives of US citizens",
      "Number of immigrants": 462454 
    }, {
      "Based": "Family-sponsored preferences",
      "Number of immigrants": 210206
    }, {
      "Based": "Employment-based preferences",
      "Number of immigrants": 147144
    }, {
      "Based": "Refugees & asylees",
      "Number of immigrants": 147144
    }, {
      "Based": "Diversity",
      "Number of immigrants": 52552
    }, {
      "Based": "Others",
      "Number of immigrants": 31531
    }];
    
    // Add and configure Series
    var pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "Number of immigrants";
    pieSeries.dataFields.category = "Based";
    pieSeries.innerRadius = am4core.percent(50);
    pieSeries.ticks.template.disabled = true;
    pieSeries.labels.template.disabled = true;
    
    var rgm = new am4core.RadialGradientModifier();
    rgm.brightnesses.push(-0.8, -0.8, -0.5, 0, - 0.5);
    pieSeries.slices.template.fillModifier = rgm;
    pieSeries.slices.template.strokeModifier = rgm;
    pieSeries.slices.template.strokeOpacity = 0.4;
    pieSeries.slices.template.strokeWidth = 0;
    
    chart.legend = new am4charts.Legend();
    chart.legend.position = "right";
    
    }); // end am4core.ready()
