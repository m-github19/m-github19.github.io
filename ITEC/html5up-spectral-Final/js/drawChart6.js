am4core.ready(function() {

// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

 // Create map instance
var chart = am4core.create("chartdiv6", am4maps.MapChart);



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
  min: chart.colors.getIndex(9).brighten(1),
  max: chart.colors.getIndex(9).brighten(-0.3)
});

// Make map load polygon data (state shapes and names) from GeoJSON
polygonSeries.useGeodata = true;

// Set heatmap values for each state
polygonSeries.data = [

  {
    id: "US-AZ",
    value: 472
  },

  {
    id: "US-CA",
    value: 60
  },

  {
    id: "US-CT",
    value: 2
  },

  {
    id: "US-FL",
    value: 228
  },

  {
    id: "US-IL",
    value: 91
  },

  {
    id: "US-KS",
    value: 10
  },
  {
    id: "US-MA",
    value: 1
  },
  {
    id: "US-MD",
    value: 22
  },

  {
    id: "US-MI",
    value: 91
  },

  {
    id: "US-NJ",
    value: 1
  },

  {
    id: "US-NY",
    value: 458
  },

  {
    id: "US-OR",
    value: 4
  },
  {
    id: "US-PA",
    value: 32
  },

  {
    id: "US-SC",
    value: 4
  },

  {
    id: "US-TX",
    value: 1147
  },

  {
    id: "US-VA",
    value: 24
  },
  {
    id: "US-WA",
    value: 9
  },


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
hs.properties.fill = am4core.color("#FF0078");

var title = chart.titles.create();
    title.text = "Number of Seperated Children";
    title.fontColor = 'white'
    title.fontSize = 20;
    title.marginTop = 20;
    title.marginBottom = 20;

}); // end am4core.ready()