var blueberries = {
    name: 'Blueberries',
    scientificName: 'Vaccinium corymbosum',
    growsOnShrub: true,
    energyInKJ: 240,
    carbohydratesInG: 14.49,
    proteinInG: 0.74,
}

var grapes = {
    name: 'Grapes',
    scientificName: 'Vitis vinifera',
    growsOnShrub: false,
    energyInKJ: 288,
    carbohydratesInG: 18.1,
    proteinInG: 0.72,
}

var redCurrant = {
    name: 'Red Currant',
    scientificName: 'Ribes rubrum',
    growsOnShrub: true,
    energyInKJ: 234,
    carbohydratesInG: 13.8,
    proteinInG: 1.4,
}

var writeBerryInfo = function (berry) {
    document.write('<h1>' + berry.name + '</h1>');
    document.write('<dl>');
    document.write('<dt>scientificName</dt>');
    document.write('<dd>' + berry.scientificName + '</dd>');
    document.write('<dt>growsOnShrub</dt>');
    document.write('<dd>' + berry.growsOnShrub + '</dd>');
    document.write('<dt>energyInKJ</dt>');
    document.write('<dd>' + berry.energyInKJ + '</dd>');
    document.write('<dt>carbohydratesInG</dt>');
    document.write('<dd>' + berry.carbohydratesInG + '</dd>');
    document.write('<dt>proteinInG</dt>');
    document.write('<dd>' + berry.proteinInG + '</dd>');
    document.write('</dl>');
};

var allTheBerries = [blueberries,grapes,redCurrant];

allTheBerries.forEach(writeBerryInfo);

//writeBerryInfo(blueberries);
//writeBerryInfo(grapes);
//writeBerryInfo(redCurrant);