var Searching = function (conf) {
    conf.etypes = ["keyup", "paste"];

    var Cnt = new Filter(conf);

    Cnt.getChange = function (e) {
        return e.target.value;
    }

    Cnt.setBack = function (val) {
        this.cnt.attr("value", val);
    }

    Cnt.initFilter();

    return Cnt;

}






