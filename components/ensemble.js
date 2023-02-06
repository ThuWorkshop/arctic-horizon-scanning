/**** Start of imports. If edited, may not auto-convert in the playground. ****/
var cavm = ee.FeatureCollection("projects/master-thesis-375622/assets/aga_circumpolar_geobotanical_2003"),
    glonaf = ee.FeatureCollection("projects/master-thesis-375622/assets/257_9_257_2_GloNAF_Shapefile"),
    test = ee.ImageCollection("projects/master-thesis-375622/assets/worldClimDataCollection"),
    bioVars = ee.Image("projects/master-thesis-375622/assets/WorldClim2-1Files/wc2-1_10m_bio_1");
/***** End of imports. If edited, may not auto-convert in the playground. *****/

var bioClip = bioVars.clip(cavm);
var gloClip = glonaf.filterBounds(cavm);
var cavmGeo = cavm.geometry();

Map.centerObject(cavm);

Map.addLayer(cavmGeo);


/*
// Extract geometries from you regions 
// for more than one region (type: featureCollection), do something like:
var regionGeom = cavmImg.map(function(f) {
  return f.geometry();
});

// Now map over your study sites and use intersect to clip them on the region(s)
var studySitesClip = glonaf.map(function(f) {
  return f.intersection(regionGeom, 1); //1 refers to the maxError argument
});
*/
	


//var arcticGlonaf = glonaf.clip(cavm);

Map.setCenter(-5, 75, 2);

var annualMeanTemp = bioClip.select('b1');
var visParams = {
  min: -54.7243537902832,
  max: 30.987640380859375,
  palette: ['blue', 'purple', 'cyan', 'green', 'yellow', 'red'],
};

var warmestMonth = test.select('bio05');
var visParamsWarmestMonth = {
  min: -96,
  max: 490,
  palette: ['blue', 'purple', 'cyan', 'green', 'yellow', 'red'],
};

Map.addLayer(annualMeanTemp, visParams, 'Annual Mean Temperature');
print(annualMeanTemp);
//Map.addLayer(warmestMonth, visParamsWarmestMonth, 'Warmest Month');
//Map.addLayer(glonaf);
//Map.addLayer(arcticGlonaf)
//Map.addLayer(cavm);