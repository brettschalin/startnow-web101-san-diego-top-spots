$(document).ready(function() {
    $.getJSON("data.json", callback);
});

function callback(data){


    for (var i = 0; i < data.length; i++) {
        var entry = data[i];
        var name = $("<td></td>").text(entry.name);

        var description = $("<td></td>").text(entry.description);

        var link = $("<td></td>").append(getLink(entry.location));

        var row = $("<tr></tr>").append(name).append(description).append(link);

        $("#json-data").append(row);
    }

};

function getLink(link) {

    var out = $("<input></input>");
    out.attr({"type":"button",
              "onclick": `location.href='https://www.google.com/maps?q=${link[0]},${link[1]}'`,
              "value": "Open in Google Maps"});

    return out;
}
