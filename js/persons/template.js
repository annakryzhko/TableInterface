﻿
var PersonsTemplate = {};
PersonsTemplate.TblRows = function (data) {
    var str = "", i, j, lng;

    lng = data.length;
    for (i = 0; i < lng; i++) {
        str += "<tr>";
        str += "<td>" + data[i].name + "</td>";
        str += "<td class='center'>" + data[i].age + "</td>";
        str += "<td class='right'>" + local.formatNumber(data[i].salary) + "</td>";
        str += "<td>" + data[i].city + "</td>";
        str += "<td class='cut' style='max-width:10em;'>" + data[i].phone.join(", ") + "</td>";
        str += "<td class='cut' style='max-width:6em;'>" + data[i].email.join(", ") + "</td>";
        str += "<td class='cut' style='max-width:6em;'>" + data[i].site.join(", ") + "</td>";
        str += "<td>" + data[i].localDate + "</td>";
        str += "<td class='cut' style='max-width:6em'>" + data[i].description + "</td>";
        str += "<td><a class='ui-action person-edit' data-index='" + data[i].index + "'>Редактировать</a></td></tr>";
    }
    return str;
}


PersonsTemplate.FormUser = function (data) {
    var str = "<h2></h2>";
    str += "<input type='submit'  value='but'/>"
    str += FormTemplate.TableForm(data);
    
    return str;
};
