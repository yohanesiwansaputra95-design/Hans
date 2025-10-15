var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Potensi__1 = new ol.format.GeoJSON();
var features_Potensi__1 = format_Potensi__1.readFeatures(json_Potensi__1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Potensi__1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Potensi__1.addFeatures(features_Potensi__1);
var lyr_Potensi__1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Potensi__1, 
                style: style_Potensi__1,
                popuplayertitle: 'Potensi_',
                interactive: true,
    title: 'Potensi_<br />\
    <img src="styles/legend/Potensi__1_0.png" /> (5-6) Sedang<br />\
    <img src="styles/legend/Potensi__1_1.png" /> (7-8) Tinggi<br />' });
var format_Dolina_2 = new ol.format.GeoJSON();
var features_Dolina_2 = format_Dolina_2.readFeatures(json_Dolina_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Dolina_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Dolina_2.addFeatures(features_Dolina_2);
var lyr_Dolina_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Dolina_2, 
                style: style_Dolina_2,
                popuplayertitle: 'Dolina',
                interactive: true,
                title: '<img src="styles/legend/Dolina_2.png" /> Dolina'
            });
var format_Uvala_3 = new ol.format.GeoJSON();
var features_Uvala_3 = format_Uvala_3.readFeatures(json_Uvala_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Uvala_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Uvala_3.addFeatures(features_Uvala_3);
var lyr_Uvala_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Uvala_3, 
                style: style_Uvala_3,
                popuplayertitle: 'Uvala',
                interactive: true,
                title: '<img src="styles/legend/Uvala_3.png" /> Uvala'
            });
var format_Polje_4 = new ol.format.GeoJSON();
var features_Polje_4 = format_Polje_4.readFeatures(json_Polje_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Polje_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Polje_4.addFeatures(features_Polje_4);
var lyr_Polje_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Polje_4, 
                style: style_Polje_4,
                popuplayertitle: 'Polje',
                interactive: true,
                title: '<img src="styles/legend/Polje_4.png" /> Polje'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Potensi__1.setVisible(true);lyr_Dolina_2.setVisible(true);lyr_Uvala_3.setVisible(true);lyr_Polje_4.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Potensi__1,lyr_Dolina_2,lyr_Uvala_3,lyr_Polje_4];
lyr_Potensi__1.set('fieldAliases', {'Join_Count': 'Join_Count', 'ID': 'ID', 'Luas_Ha': 'Luas_Ha', 'Potensi': 'Potensi', 'Skala': 'Skala', 'Ket': 'Ket', });
lyr_Dolina_2.set('fieldAliases', {'Id': 'Id', });
lyr_Uvala_3.set('fieldAliases', {'Nilai_1': 'Nilai_1', 'ORIG_FID': 'ORIG_FID', 'Tipe': 'Tipe', 'Luas_m2': 'Luas_m2', 'Keliling_m': 'Keliling_m', });
lyr_Polje_4.set('fieldAliases', {'Tipe': 'Tipe', 'Luas_m2': 'Luas_m2', 'Keliling_m': 'Keliling_m', });
lyr_Potensi__1.set('fieldImages', {'Join_Count': 'TextEdit', 'ID': 'TextEdit', 'Luas_Ha': 'TextEdit', 'Potensi': 'TextEdit', 'Skala': 'TextEdit', 'Ket': 'TextEdit', });
lyr_Dolina_2.set('fieldImages', {'Id': 'Range', });
lyr_Uvala_3.set('fieldImages', {'Nilai_1': 'TextEdit', 'ORIG_FID': 'TextEdit', 'Tipe': 'TextEdit', 'Luas_m2': 'TextEdit', 'Keliling_m': 'TextEdit', });
lyr_Polje_4.set('fieldImages', {'Tipe': 'TextEdit', 'Luas_m2': 'TextEdit', 'Keliling_m': 'TextEdit', });
lyr_Potensi__1.set('fieldLabels', {'Join_Count': 'hidden field', 'ID': 'hidden field', 'Luas_Ha': 'inline label - visible with data', 'Potensi': 'hidden field', 'Skala': 'inline label - visible with data', 'Ket': 'inline label - visible with data', });
lyr_Dolina_2.set('fieldLabels', {'Id': 'no label', });
lyr_Uvala_3.set('fieldLabels', {'Nilai_1': 'hidden field', 'ORIG_FID': 'hidden field', 'Tipe': 'inline label - always visible', 'Luas_m2': 'inline label - visible with data', 'Keliling_m': 'hidden field', });
lyr_Polje_4.set('fieldLabels', {'Tipe': 'inline label - visible with data', 'Luas_m2': 'inline label - visible with data', 'Keliling_m': 'hidden field', });
lyr_Polje_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});