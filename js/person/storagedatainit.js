function CityStorageInit(tbl, data) {
    var cities = tbl.getAllEntities();

    if (cities.length == 0) {
        cities = [];
        data.forEach(function (elem) { cities.push(elem.city); });
        cities = utils.array.unique(cities);
        cities.forEach(function (elem, index, array) {
            array[index] = { 'value': elem };
        });
        cities = tbl.insertArr(cities);

    }
}

function PersonsStorageInit(tbl, data) {
    var persons = tbl.getAllEntities();

    if (persons.length == 0) {
        data.forEach(function (elem) {
            Person.calc_date.apply(elem);

        });
        persons = tbl.insertArr(data);
    }

}   