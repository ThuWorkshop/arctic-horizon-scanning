/**** Start of imports. If edited, may not auto-convert in the playground. ****/
var cavm = ee.FeatureCollection("projects/master-thesis-375622/assets/aga_circumpolar_geobotanical_2003"),
    glonaf = ee.FeatureCollection("projects/master-thesis-375622/assets/257_9_257_2_GloNAF_Shapefile"),
    bioVars = ee.Image("WORLDCLIM/V1/BIO"),
    tif = ee.Image("projects/master-thesis-375622/assets/raster_cavm_v1");
/***** End of imports. If edited, may not auto-convert in the playground. *****/
var bioClip = bioVars.clip(cavm);
var gloClip = glonaf.filterBounds(cavm);

print(cavm.geometry())
print(cavm.geometry().type());
print(tif.geometry());
Map.centerObject(cavm);
Export.table.toAsset(tif, "cavmMapPolygon", "Earth Engine files", 10)
//Export.table.toAsset(cavm, "cavmMapMultipolygon", "https://drive.google.com/drive/u/1/folders/1wTxIM5QenDNmproIueldtahpIxl9zdkQ", 645951)

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

var annualMeanTemp = bioClip.select('bio01');
var visParams = {
  min: -230.0,
  max: 300.0,
  palette: ['blue', 'purple', 'cyan', 'green', 'yellow', 'red'],
};

var warmestMonth = bioClip.select('bio05');
var visParamsWarmestMonth = {
  min: -96,
  max: 490,
  palette: ['blue', 'purple', 'cyan', 'green', 'yellow', 'red'],
};

//Map.addLayer(annualMeanTemp, visParams, 'Annual Mean Temperature');
//Map.addLayer(warmestMonth, visParamsWarmestMonth, 'Warmest Month');
//Map.addLayer(glonaf);
//Map.addLayer(arcticGlonaf)
//Map.addLayer(cavm);