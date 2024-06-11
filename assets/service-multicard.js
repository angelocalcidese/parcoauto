var multicard = [];
function searchTargaMulti(id) {
    var res = "-";
    for (var a = 0; a < rowel.length; a++){
        if (rowel[a].multicard == id) {
             if (res != "-") {
                 res = res + ' <a href="#" class="link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" onClick="viewVeicle(' + a + ')">' + rowel[a].targa + '</a>';
            } else {
                 res = '<a href="#" class="link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" onClick="viewVeicle(' + a + ')">' + rowel[a].targa + '</a>';

            }
        }
    }
    return res;
}
function popMulticard(righe) {
    multicard = righe;
    for (i = 0; i < righe.length; i++) {
        var riga = righe[i];
        var element = '<td><i class="fa-solid fa-credit-card" title="' + riga.id + '"></i></td>';
        element += '<td><a href="#" class="link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" onclick="searchVeicleMulticard(' + riga.id + ')">' + riga.codice + '</a></td>';
        element += "<td>" + riga.tipologia + "</td>";
        element += "<td>" + riga.tipocontratto + "</td>";
        element += "<td>" + statoActive(riga.stato) + "</td>";
        element += "<td>" + searchTargaMulti(riga.id) + "</td>";
        element += "<td>" + riga.scadenzacarta + "</td>";
        element += "<td>" + yesOrNo(riga.rinnovabile) + "</td>";
        element += "<td>" + riga.pin + "</td>";
        element += '<td style="text-align:center"><button type="button" class="btn btn-sm btn-outline-secondary" onclick="viewListCars(' + riga.id + ')"><i class="fa-solid fa-plus"></i></i></button></td>';
        element += '<td style="text-align:center"><button type="button" class="btn btn-sm btn-outline-secondary" onclick="openModRowMulti(' + riga.id + ')"><i class="fa-solid fa-pen-to-square"></i></button></td>';
        
        $("<tr/>").append(element).appendTo("#tabella-multicard");
        
        var opt = '<option value="' + riga.id + '">' + riga.codice + '</option>';
        $("#search-multicard-input").append(opt);

        var element2 = '<td>' + riga.id + '</td>';
        element2 += '<td>' + riga.codice + '</a></td>';
        element2 += "<td>" + riga.tipologia + "</td>";
        element2 += "<td>" + riga.tipocontratto + "</td>";
        element2 += "<td>" + statoActive(riga.stato) + "</td>";
        element2 += "<td>" + searchTargaMulti(riga.id) + "</td>";
        element2 += "<td>" + riga.scadenzacarta + "</td>";
        element2 += "<td>" + yesOrNo(riga.rinnovabile) + "</td>";
        element2 += "<td>" + riga.pin + "</td>";
       
        $("<tr/>").append(element2).appendTo("#tabella-export-multicard");
    }
}
function searchMulticard(id) {
    var data = "";
    for (var a = 0; a < multicard.length; a++) {
        if (id == multicard[a].id) {
            data = multicard[a];
        }
    }
    return data;
}
function openModRowMulti(id) {
    cleanInput();
    var data = searchMulticard(id);
    console.log(data);
    idRow = data.id;

    $("#input-tipologiaCard").val(data.tipologia);
    $("#input-codicecard").val(data.codice);
    $("#input-tipocard").val(data.tipocontratto);
    $("#input-codcliente").val(data.codcliente);
    $("#input-statocard").val(data.statocarta);
    $("#input-statocliente").val(data.statocliente);
    $("#input-validitaterritoriale").val(data.validitaterritoriale);
    $("#input-rinnovabile").val(data.rinnovabile);
    $("#input-pincard").val(data.pin);
    $("#input-scadenzaCard").val(data.scadenzacarta);
    $(".check-serviziMulti").prop('checked', false);
    var prodotti = JSON.parse(data.prodottiacq);
    $("#input-carburanti").prop('checked', prodotti.carburanti);
    $("#input-lubrificanti").prop('checked', prodotti.lubrificanti);
    $("#input-accessoriCard").prop('checked', prodotti.accessori);
    $("#gplmetano").prop('checked', prodotti.gplmetano);
    $('#addRow2').modal('show');
}

function openNewRowMulticard() {
    cleanInput();
    idRow = null;
    $(".check-serviziMulti").prop('checked', false);
    $("#input-statocard").val(1);
    $("#input-statocliente").val(1);
    $("#input-statocliente").val(1);
    $("#input-rinnovabile").val(1);
    $("#input-validitaterritoriale").val("Nazionale");
    $('#addRow2').modal('show');
}

function controlFormMulticard() {
    var codicecard = $("#input-codicecard").val();
    var tipocard = $("#input-tipocard").val();
    var tipologia = $("#input-tipologiaCard").val();
    var codcliente = $("#input-codcliente").val();
    var statocard = $("#input-statocard").val();
    var statocliente = $("#input-statocliente").val();
    var validitaterritoriale = $("#input-validitaterritoriale").val();
    var rinnovabile = $("#input-rinnovabile").val();
    var pincard = $("#input-pincard").val();
    var scadenza = $("#input-scadenzaCard").val();

    var prodotti = { "carburanti": $("#input-carburanti").is(':checked'), "lubrificanti": $("#input-lubrificanti").is(':checked'), "accessori": $("#input-accessoriCard").is(':checked'), "gplmetano": $("#gplmetano").is(':checked') }
    //console.log(JSON.stringify(prodotti));

    var count = 0;
    var html = "<ul>";
    if (codicecard == "") { html += "<li>Inserire Codice Card</li>"; count++; }
    if (tipologia == "") { html += "<li>Inserire Tipologia Card</li>"; count++; }
    if (tipocard == "") { html += "<li>Inserire Gestore Card</li>"; count++; }
    if (codcliente == "") { html += "<li>inserire Codice Cliente</li>"; count++; }
    if (statocliente == "") { html += "<li>inserire lo stato del Cliente</li>"; count++; }
    if (validitaterritoriale == "") { html += "<li>inserire Validità territoriale</li>"; count++; }
    if (rinnovabile == "") { html += "<li>Inserire Rinnovabilità della card</li>"; count++; }
    if (statocard == "") { html += "<li>Selezionare Stato della card</li>"; count++; }
    if (pincard == "") { html += "<li>Inserire Pin card</li>"; count++; }
    if (scadenza == "") { html += "<li>Inserire La scadenza della Card</li>"; count++; }


    html += "</ul>";
    if (count > 0) {
        $("#alert-error-multicard").removeClass("hide");
        $("#alert-error-multicard").html(html);
    } else {
        $("#alert-error-multicard").addClass("hide");
        if (idRow) {
            var data = searchMulticard(idRow);
            data.codice = codicecard;
            data.tipologia = tipologia;
            data.tipocontratto = tipocard
            data.statocarta = statocard;
            data.codcliente = codcliente;
            data.statocliente = statocliente;
            data.validitaterritoriale = validitaterritoriale;
            data.rinnovabile = rinnovabile;
            data.pin = pincard;
            data.scadenzacarta = scadenza;
            data.prodottiacq = JSON.stringify(prodotti);
            modRowMulticard(data);
        } else {
            addRowMulticard();
        }
    }
}

function addRowMulticard() {
    var codicecard = $("#input-codicecard").val();
    var tipocard = $("#input-tipocard").val();
    var tipologia = $("#input-tipologiaCard").val();
    var codcliente = $("#input-codcliente").val();
    var statocliente = $("#input-statocliente").val();
    var validitaterritoriale = $("#input-validitaterritoriale").val();
    var rinnovabile = $("#input-rinnovabile").val();
    var pincard = $("#input-pincard").val();
    var statocard = $("#input-statocard").val();
    var scadenza = $("#input-scadenzaCard").val();
    var prodotti = { "carburanti": $("#servizi-1").is(':checked'), "lubrificanti": $("#servizi-2").is(':checked'), "accessori": $("#servizi-3").is(':checked'), "gplmetano": $("#servizi-4").is(':checked') }
    var prodottiacq = JSON.stringify(prodotti);
    $.ajax({
        method: "POST",
        url: "api/createCard.php",
        data: JSON.stringify({ codice: codicecard, tipocontratto: tipocard, tipologia:tipologia, codcliente: codcliente, statocliente: statocliente, validitaterritoriale: validitaterritoriale, rinnovabile: rinnovabile, pincard: pincard, prodottiacq: prodottiacq, statocard: statocard, scadenza: scadenza }),
        contentType: "application/json",
        success: function (data) {
            console.log("funzione chiamata quando la chiamata ha successo (response 200)", data);
            $("#alert-success-multicard").removeClass("hide");
            $("#alert-success-multicard").text("Card inserita correttamente");
            $("#form-add-multicard").addClass("hide");
            $("#add-button-multicard").addClass("hide");
            cleanInput();
        },
        error: function (error) {
            console.log("funzione chiamata quando la chiamata fallisce", error);
            $("#alert-error-multicard").removeClass("hide");
            $("#alert-error-multicard").text(error);
        }
    });
}
function modRowMulticard(data) {
    console.log("DATA", data);
    $.ajax({
        method: "POST",
        url: "api/modCard.php",
        data: JSON.stringify({ id: data.id, tipologia: data.tipologia, codcliente: data.codcliente, tipocontratto: data.tipocontratto, statocliente: data.statocliente, statocarta: data.statocarta, scadenzacarta: data.scadenzacarta, rinnovabile: data.rinnovabile, prodottiacq: data.prodottiacq, validitaterritoriale: data.validitaterritoriale, pin: data.pin, codice: data.codice }),
        contentType: "application/json",
        success: function (data) {
            console.log("funzione chiamata quando la chiamata ha successo (response 200)", data);
            $("#alert-success-multicard").removeClass("hide");
            $("#alert-success-multicard").text("Card modificata correttamente");
            $("#form-add-multicard").addClass("hide");
            $("#add-button-multicard").addClass("hide");
            cleanInput();
        },
        error: function (error) {
            console.log("funzione chiamata quando la chiamata fallisce", error);
            $("#alert-error-multicard").removeClass("hide");
            $("#alert-error-multicard").text(error);
        }
    });
}
function callCars(id) {
    $.ajax({
        method: "POST",
        url: "api/getCars.php",
        data: JSON.stringify({ id: id }),
        dataType: 'json',
        success: function (data) {
            for (var a = 0; a < data.length; a++) {
                //$("#checkaddon-" + data[a].func).attr('checked', 'checked');
                $("#checkaddon-" + data[a].func).prop('checked', true);
            }
        },
        error: function (error) {
            console.log("Nessuna Checkbox attiva", error);

        }
    });
}

function addCardToCars(id) {
    $(".check-cars").attr("disabled", "disabled");
    var idcard = null;
    if ($("#checkcars-" + id).is(':checked')) {
        idcard = idRow;
    }

    $.ajax({
        method: "POST",
        url: "api/addCardToCars.php",
        data: JSON.stringify({ idcard: idcard, idveicle: id}),
        dataType: 'json',
        success: function (data) {
            $(".check-cars").removeAttr('disabled');
        },
        error: function (error) {
            $(".check-cars").removeAttr('disabled');
            console.log("Nessuna Checkbox attiva", error);

        }
    });
}
function addCars(cars) {
    for (var a = 0; a < cars.length; a++) {
        
        var check = '<li class="list-group-item list-multi" id="list-multi-' + cars[a].id + '">';
        check += '<input class="form-check-input check-cars" type = "checkbox" onChange="addCardToCars(' + cars[a].id + ')" value = "" id="checkcars-' + cars[a].id + '" ';
        check += ' >  <b>Targa: </b>' + cars[a].targa + '  <b>Assegnata a: </b> ' + searchAssignedCars(cars[a].assegnatoa) + '</li >';
        $('#check-cars').append(check);
        }
}

function callListCar() { 
    $.ajax({
        method: "POST",
        url: "api/searchCardInCars.php",
        data: JSON.stringify({ id: idRow }),
        dataType: 'json',
        success: function (list) {
            for (var a = 0; a < list.length; a++){
                $("#checkcars-" + list[a].id).prop('checked', true);
            }
        },
        error: function (error) {
            $(".check-cars").removeAttr('disabled');
            console.log("Errore chiamata", error);

        }
    });
}

function viewListCars(id) {
    idRow = id;
    $(".list-multi").removeClass("hide");

    $(".check-cars").prop('checked', false);
    callListCar();
    for (var b = 0; b < rowel.length; b++) {
        if (rowel[b].multicard && (rowel[b].multicard != id)) {
            $("#list-multi-" + rowel[b].id).addClass("hide");
        }
    }
    $('#viewListCars').modal('show');
}
$(document).ready(function () { 
    new DateTime(document.getElementById('input-scadenzaCard'), {
        format: 'DD/MM/YYYY'
    });
});