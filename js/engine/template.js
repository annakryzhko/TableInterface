

var FormTemplate = {};

FormTemplate.TableForm = function (data) {
    var str, i, lng = data.length;
    str = "<table class='formtable'>";
    for (i = 0; i < lng; i++) {
        str += "<tr><td>" + FormTemplate.FieldLbl(data[i]) + "</td><td>" + FormTemplate.FieldCnt(data[i]) + "</td></tr>";
    }
    str += "</table>";

    return str;
}
FormTemplate.FieldLbl = function (data) {
    var reqLbl = '', attr = data.attr;
    if (attr['required']) {
        reqLbl = "<span class='ui-required'>*</span>"
    }
    return "<label for='" + data.name + "'>" + data.lbl + reqLbl + "</label>";
}

FormTemplate.FieldCnt = function (data) {
    var i, lng, elem,
        cont = document.createElement("div"),
        at, attr = data.attr, invalid = '';
    data.elem = data.elem || "input";
    elem = document.createElement(data.elem);
    if (data.type) {
        elem.type = data.type;
    }
    if (data.className) {
        elem.className = data.className;
    }
    if (data.invalid) {
        invalid = "<span class='ui-invalid'>" + data.invalid + "</span>";
    }
    for (at in attr) {
        if (attr.hasOwnProperty(at)) {
            $(elem).attr(at, attr[at]);
        }
    }

    cont.appendChild(elem);
    return cont.innerHTML + invalid;
}

FormTemplate.SelectOptions = function (data) {
    var str = "<option value=''>Все</option>", i, lng = data.length;
    for (i = 0; i < lng; i++) {
        str += "<option value='" + data[i].index + "'>" + data[i].value + "</option>";
    }
    return str;

};


var TblTemplate = {};

TblTemplate.SortCols = function (cols) {
    var str = "", j,
        lng = cols.length;
    str += "<tr>";
    for (j = 0; j < lng; j++) {
        str += "<th> <a href='' data-col='" + cols[j].name + "'  >" + cols[j].title + "</a></th>";
    }
    str += "<td></td></tr>";
    return str;
}

