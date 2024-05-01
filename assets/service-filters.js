
function openFilter() {
    $("#alert-search").addClass("hide");
    cambioTab('veicoli');
    $("#viewFilters").modal('show');
    
}

function clearInputSearch() {
    $("#button-clear-filters").addClass("hide");
    $(".search-input").val("");
    popVeicles(allData.veicoli);
    $("#alert-search").addClass("hide");
}

function searchFilterDataMese(data, campo, date) {
    var result = [];
    console.log("DATA", date);
    for (var a = 0; a < data.length; a++) {
        dataSplit = data[a][campo].split("/");
        if (date == dataSplit[1]) {
            result.push(data[a]);
        }
        console.log("SPLIT MESE", dataSplit[1]);
    }
    return result;
}

function searchFilterDataAnno(data, campo, date) {
    var result = [];
    console.log("DATA", date);
    for (var a = 0; a < data.length; a++) {
        dataSplit = data[a][campo].split("/");
        if (date == dataSplit[2]) {
            result.push(data[a]);
        }
        console.log("SPLIT ANNO", dataSplit[2]);
    }
    return result;
}

function searchFilterUser(data, user) {
    var result = [];
    //console.log("DATA", date);
    for (var a = 0; a < data.length; a++) {
        if (data[a].assegnatoa == user) {
            result.push(data[a]);
        }
    }
    return result;
}

function filterCampo(data, value, campo) {
    var result = [];
    for (var a = 0; a < data.length; a++){
        if (data[a][campo] == value) {
            result.push(data[a]);
        }
    }
    return result;
}

function filterData() {
    $("#alert-search").addClass("hide");
    var filteredNames = allData.veicoli;
    var bollo = $("#search-bollo-input").val();
    var assicurazione = $("#search-assicurazione-input").val();
    var revisione = $("#search-revisione-input").val();
    var kmmin = $("#search-km-min").val();
    var kmmax = $("#search-km-max").val();
    var assegnato = $("#search-assegnato-input").val();
    var bolloanno = $("#search-bolloanno-input").val();
    var assicurazioneanno = $("#search-assicurazioneanno-input").val();
    var revisioneanno = $("#search-revisioneanno-input").val();
    var telepass = $("#search-telepass-input").val();
    var multicard = $("#search-multicard-input").val();
    
    //console.log("kmmax", kmmax);

    if (bollo !== "") { filteredNames = searchFilterDataMese(filteredNames, "bollo", bollo) }
    if (assicurazione !== "") { filteredNames = searchFilterDataMese(filteredNames, "assicurazione", assicurazione) }
    if (revisione !== "") { filteredNames = searchFilterDataMese(filteredNames, "revisione", revisione) }
    if (bolloanno !== "") { filteredNames = searchFilterDataAnno(filteredNames, "bollo", bolloanno) }
    if (assicurazioneanno !== "") { filteredNames = searchFilterDataAnno(filteredNames, "assicurazione", assicurazioneanno) }
    if (revisioneanno !== "") { filteredNames = searchFilterDataAnno(filteredNames, "revisione", revisioneanno) }
    if (assegnato !== "") { filteredNames = searchFilterUser(filteredNames, assegnato) }
    if (telepass !== "") { filteredNames = filterCampo(filteredNames, telepass, "telepass") }
    if (multicard !== "") { filteredNames = filterCampo(filteredNames, multicard, "multicard") }

    var filteredNames = $(filteredNames).filter(function (idx) {
        if (kmmin && kmmax) {
            //console.log("kmin + kmmax");
            return filteredNames[idx].km >= parseInt(kmmin) && filteredNames[idx].km <= parseInt(kmmax);
        } else if (kmmin) {
            //console.log("kmin");
            return filteredNames[idx].km >= parseInt(kmmin);
        } else if (kmmax) {
            //console.log("kmmax");
            return filteredNames[idx].km <= parseInt(kmmax);
        } else {
            return filteredNames;
        }

    });
    //console.log("filteredNames:", filteredNames);
    if (filteredNames.length > 0) {
        // table.destroy();
        $("#button-clear-filters").removeClass("hide");
        $("#viewFilters").modal('hide');
        popVeicles(filteredNames, true);
    } else {
        popVeicles(allData.veicoli);
        $("#alert-search").removeClass("hide");
        console.log("NESSUN RISULTATO");
    }

    //table.destroy();
    //tablePagination();

}
function searchVeicleMulticard(id) {
    $("#search-multicard-input").val(id);
    cambioTab('veicoli');
    filterData();
}

function searchVeicleTelepass(id) {
    $("#search-telepass-input").val(id);
    cambioTab('veicoli');
    filterData();
}

// A $( document ).ready() block.
$(document).ready(function () {
    var year = d.getFullYear();

    for (var a = 0; a <= 2; a++){
        var yearnew = year + a;
        var opt = '<option value="' + yearnew + '">' + yearnew + '</option>';
        $(".select-search-year3").append(opt);
    }
    for (var a = 0; a <= 1; a++) {
        var yearnew = year + a;
        var opt = '<option value="' + yearnew + '">' + yearnew + '</option>';
        $(".select-search-year2").append(opt);
    }
    for (var a = 0; a < mesiSchema.length; a++) {
        var opt = '<option value="' + mesiSchema[a].val + '">' + mesiSchema[a].mese + '</option>';
        $(".select-search").append(opt);
    }
    
});

