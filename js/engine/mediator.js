var mediator = {
    filters: [],
    storage: {},
    dataview: {},

    filterChanged: function () {
        var result = this.createStateObj();
        AN_History.forward(result);
        this.updateData(result.state);
    },
    dataChanged: function(){
        var state = AN_History.getState();
        this.updateData(state);
    },
    addFilter: function (obj) {
        this.filters.push(obj);
    },

    back: function (state) {
        var i, lng, filters = this.filters;
        lng = filters.length;
        this.updateData(state)
        for (i = 0; i < lng; i++) {
            filters[i].setState(state.data);
        }
    },
    updateData: function (state) {
        var data, i, lng, filters = this.filters;
        lng = filters.length;

        data = this.storage.getAllEntities();
        for (i = 0; i < lng; i++) {
            if (state[filters[i].name]) {
                data = filters[i].process(data, state[filters[i].name]);
            }
        }

        this.dataview.view(data);
    },

    createStateObj: function () {
        var filters = this.filters, i, lng, arr = [], result = {}, fname, fdata;
        lng = filters.length;
        result.state = {};
        result.url = "";

        for (i = 0; i < lng; i++) {
            fname = filters[i].name;
            fdata = filters[i].data;
            if (fdata) {
                arr.push(fname + "=" + fdata);
                result.state[fname] = fdata;
            }
        }
        result.url = encodeURI("?" + arr.join("&"));
        return result;
    }

}