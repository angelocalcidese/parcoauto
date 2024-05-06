telepass = [];
function searchTargaTelepass(id) {
    var res = "-";
    for (var a = 0; a < rowel.length; a++) {
        if (rowel[a].telepass == id) {
            if (res != "-") {
                res = res + ' <a href="#" class="link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" onClick="viewVeicle(' + a + ')">' + rowel[a].targa + '</a>';
            } else {
                res = '<a href="#" class="link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" onClick="viewVeicle(' + a + ')">' + rowel[a].targa + '</a>';

            }
        }
    }
    return res;
}
function popTelepass(righe) {
    telepass = righe;
    for (i = 0; i < righe.length; i++) {
        var riga = righe[i];
        var element = '<td><i class="fa-solid fa-road" title="'+ riga.id +'"></i></td>';
        element += "<td>" + riga.tipologia + "</td>";
        element += '<td><a href="#" class="link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" onclick="searchVeicleTelepass(' + riga.id + ')">' + riga.seriale + '</a></td>';
        element += "<td>" + riga.codice + "</td>";
        element += "<td>" + riga.attivazione + "</td>";
        element += "<td>" + statoActive(riga.stato) + "</td>";
        element += "<td>" + searchTargaTelepass(riga.id) + "</td>";
        element += "<td>" + riga.validitaterritoriale + "</td>";
        element += '<td style="text-align:center"><button type="button" class="btn btn-sm btn-outline-secondary" onclick="viewListCarsTelepass(' + riga.id + ')"><i class="fa-solid fa-plus"></i></i></button></td>';
        element += '<td style="text-align:center"><button type="button" class="btn btn-sm btn-outline-secondary" onclick="openModRowTelepass(' + riga.id + ')"><i class="fa-solid fa-pen-to-square"></i></button></td>';
        $("<tr/>")
            .append(element)
            .appendTo("#tabella-telepass");
        
        var opt = '<option value="' + riga.id + '">' + riga.seriale + '</option>';
        $("#search-telepass-input").append(opt);
    }
}


function searchTelepass(id) {
    var data = "";
    for (var a = 0; a < telepass.length; a++) {
        if (id == telepass[a].id) {
            data = telepass[a];
        }
    }
    return data;
}
function openModRowTelepass(id) {
    cleanInput();
    var data = searchTelepass(id);
    idRow = data.id;
    $("#input-tipologiatelepass").val(data.tipologia);
    $("#input-codicetelepass").val(data.codice);
    $("#input-statotelepass").val(data.stato);
    $("#input-territorialetelepass").val(data.validitaterritoriale);
    $('#addRow3').modal('show');
}

function openNewRowTelepass() {
    cleanInput();
    idRow = null;
    $("#input-statotelepass").val(1);
    $("#input-territorialetelepass").val("Nazionale");
    $('#addRow3').modal('show');
}

function controlFormTelepass() {
    var codice = $("#input-codicetelepass").val();
    var tipologia = $("#input-tipologiatelepass").val();
    var stato = $("#input-statotelepass").val();
    var territorio = $("#input-territorialetelepass").val();
    var seriale = $("#input-serialetelepass").val();
    var attivazione = $("#input-attivazionetelepass").val();

    var count = 0;
    var html = "<ul>";
    if (codice == "") { html += "<li>Inserire Codice Contratto</li>"; count++; }
    if (tipologia == "") { html += "<li>Inserire la Tipologia del Contratto</li>"; count++; }
    if (stato == "") { html += "<li>Inserire lo stato del contratto</li>"; count++; }
    if (territorio == "") { html += "<li>inserire Territorio di Validità Contratto</li>"; count++; }
    if (seriale == "") { html += "<li>inserire il numero seriale del Telepass</li>"; count++; }
    if (attivazione == "") { html += "<li>Inserire la data di attivazione del Telepass</li>"; count++; }
    
    html += "</ul>";
    if (count > 0) {
        $("#alert-error-telepass").removeClass("hide");
        $("#alert-error-telepass").html(html);
    } else {
        $("#alert-error-telepass").addClass("hide");
        if (idRow) {
            var data = searchTelepass(idRow);
            data.codice = codice;
            data.tipologia = tipologia;
            data.stato = stato
            data.validitaterritoriale = territorio;
            data.attivazione = attivazione;
            data.seriale = seriale;

            modRowTelepass(data);
        } else {
            addRowTelepass();
        }
    }
}

function addRowTelepass() {
    var codice = $("#input-codicetelepass").val();
    var tipologia = $("#input-tipologiatelepass").val();
    var stato = $("#input-statotelepass").val();
    var territorio = $("#input-territorialetelepass").val();
    var seriale = $("#input-serialetelepass").val();
    var attivazione = $("#input-attivazionetelepass").val();

    $.ajax({
        method: "POST",
        url: "api/createTelepass.php",
        data: JSON.stringify({ codice: codice, tipologia: tipologia, stato: stato, validitaterritoriale: territorio, seriale: seriale, attivazione: attivazione}),
        contentType: "application/json",
        success: function (data) {
            console.log("funzione chiamata quando la chiamata ha successo (response 200)", data);
            $("#alert-success-telepass").removeClass("hide");
            $("#alert-success-telepass").text("Contratto Viabilità inserito correttamente");
            $("#form-add-telepass").addClass("hide");
            $("#add-button-telepass").addClass("hide");
            cleanInput();
        },
        error: function (error) {
            console.log("funzione chiamata quando la chiamata fallisce", error);
            $("#alert-error-telepass").removeClass("hide");
            $("#alert-error-telepass").text(error);
        }
    });
}
function modRowTelepass(data) {
    console.log("DATA", data);
    $.ajax({
        method: "POST",
        url: "api/modTelepass.php",
        data: JSON.stringify({ id: data.id, tipologia: data.tipologia, stato: data.stato, codice: data.codice, validitaterritoriale: data.validitaterritoriale, attivazione: data.attivazione, seriale: data.seriale}),
        contentType: "application/json",
        success: function (data) {
            console.log("funzione chiamata quando la chiamata ha successo (response 200)", data);
            $("#alert-success-telepass").removeClass("hide");
            $("#alert-success-telepass").text("Contratto Viabilità modificato correttamente");
            $("#form-add-telepass").addClass("hide");
            $("#add-button-telepass").addClass("hide");
            cleanInput();
        },
        error: function (error) {
            console.log("funzione chiamata quando la chiamata fallisce", error);
            $("#alert-error-telepass").removeClass("hide");
            $("#alert-error-telepass").text(error);
        }
    });
}
function callCarsTelepass(id) {
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

function addTelepassToCars(id) {
    $(".check-cars-telepass").attr("disabled", "disabled");
    var idcard = null;
    if ($("#checkcars-telepass-" + id).is(':checked')) {
        idcard = idRow;
    }

    $.ajax({
        method: "POST",
        url: "api/addTelepassToCars.php",
        data: JSON.stringify({ idcard: idcard, idveicle: id }),
        dataType: 'json',
        success: function (data) {
            $(".check-cars-telepass").removeAttr('disabled');
        },
        error: function (error) {
            $(".check-cars-telepass").removeAttr('disabled');
            console.log("Nessuna Checkbox attiva", error);

        }
    });
}
function addCarsTelepass(cars) {
    for (var a = 0; a < cars.length; a++) {
        var check = '<li class="list-group-item list-telepass" id="list-telepass-' + cars[a].id + '">';
        check += '<div class="row"><div class="col-1"><input class="form-check-input check-cars-telepass" type = "checkbox" onChange="addTelepassToCars(' + cars[a].id + ')" value = "" id="checkcars-telepass-' + cars[a].id + '" ';
        check += ' >  </div><div class="col-3"><b>Targa: </b>' + cars[a].targa + '  </div><div class="col-4"><b>Assegnata a: </b> ' + searchAssignedCars(cars[a].assegnatoa) + '</div><div class="col-4"></div></div></li >';
        $('#check-cars-telepass').append(check);
    }
}
function callListCarTelepass() {
    $.ajax({
        method: "POST",
        url: "api/searchTelepassInCars.php",
        data: JSON.stringify({ id: idRow }),
        dataType: 'json',
        success: function (list) {
            for (var a = 0; a < list.length; a++) {
                $("#checkcars-telepass-" + list[a].id).prop('checked', true);
            }
        },
        error: function (error) {
            $(".check-cars").removeAttr('disabled');
            console.log("Errore chiamata", error);

        }
    });
}

function viewListCarsTelepass(id) {
    idRow = id;
    $(".list-telepass").removeClass("hide");
    $(".check-cars-telepass").prop('checked', false);
    callListCarTelepass();
    for (var b = 0; b < rowel.length; b++) {
        if (rowel[b].telepass && (rowel[b].telepass != id)) {
            $("#list-telepass-" + rowel[b].id).addClass("hide");
        }
    }
    $('#viewListCarsTelepass').modal('show');
}
$(document).ready(function () {
    new DateTime(document.getElementById('input-scadenzaCard'), {
        format: 'DD/MM/YYYY'
    });
});