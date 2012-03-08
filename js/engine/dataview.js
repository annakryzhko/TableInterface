function DataView(selector, templateFun) {
    var ui_elem = $(selector);

    this.view = function (data) {
        var htmlstr = templateFun(data);
        ui_elem.html(htmlstr);
    }

}
