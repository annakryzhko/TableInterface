function setFilters(cols, CityTable) {

    var searchCnt = new Searching({ selector: "input.ui-filter-text", name: "search" });
    var selectCnt = new SelectFiltering({ selector: "select.ui-filter-select", name: "city" });
    var sortCnt = new Sorting({ selector: "thead.ui-fixed-thead", name: "sort" });

    searchCnt.process = function (data, param) {
        var new_data = [], i, lng = data.length,
            ut_str = utils.string;
        for (var i = 0; i < lng; i++) {
            if (ut_str.filterPattern(data[i].name, param) ||
                     ut_str.filterPattern(data[i].description, param)) {
                new_data.push(data[i]);
            }
        }
        return new_data;
    }

    selectCnt.process = function (data, param) {
        var new_data = [], i, lng = data.length,
            city_name = CityTable.getEntity(param).value;

        for (i = 0; i < lng; i++) {
            if (data[i].city == city_name) {
                new_data.push(data[i]);
            }
        }

        return new_data;
    }

    sortCnt.process = function (data, param) {
        var ut_array = utils.array, col,
            sortArr = param.split("-");
        col = ut_array.search(cols, 'name', sortArr[0]);
        data.sort(ut_array.getSortFun(col["sort_prop"], col["sort"]));
        if (sortArr[1] == "desc") {
            data.reverse();
        }

        return data;
    }
};
