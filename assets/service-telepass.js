telepass = [];
function popTelepass(righe) {
    telepass = righe;
    for (i = 0; i < righe.length; i++) {
        var riga = righe[i];
        var element = '<td><i class="fa-solid fa-road" title="'+ riga.id +'"></i></td>';
        element += "<td>" + riga.tipologia + "</td>";
        element += "<td>" + riga.codice + "</td>";
        element += "<td>" + statoActive(riga.stato) + "</td>";
        element += "<td>" + riga.validitaterritoriale + "</td>";
        element += '<td><button type="button" class="btn btn-sm btn-outline-secondary" onclick="viewListCarsTelepass(' + riga.id + ')"><i class="fa-solid fa-plus"></i></i></button></td>';
        element += '<td><button type="button" class="btn btn-sm btn-outline-secondary" onclick="openModRowTelepass(' + riga.id + ')"><i class="fa-solid fa-pen-to-square"></i></button></td>';
        $("<tr/>")
            .append(element)
            .appendTo("#tabella-telepass");
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

    var count = 0;
    var html = "<ul>";
    if (codice == "") { html += "<li>Inserire Codice Contratto</li>"; count++; }
    if (tipologia == "") { html += "<li>Inserire la Tipologia del Contratto</li>"; count++; }
    if (stato == "") { html += "<li>Inserire lo stato del contratto</li>"; count++; }
    if (territorio == "") { html += "<li>inserire Territorio di Validità Contratto</li>"; count++; }
    
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

    $.ajax({
        method: "POST",
        url: "api/createTelepass.php",
        data: JSON.stringify({ codice: codice, tipologia: tipologia, stato: stato, validitaterritoriale: territorio}),
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
        data: JSON.stringify({ id: data.id, tipologia: data.tipologia, stato: data.stato, codice: data.codice, validitaterritoriale: data.validitaterritoriale}),
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
        var check = '<li class="list-group-item">';
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
    $(".check-cars-telepass").prop('checked', false);
    callListCarTelepass();
    $('#viewListCarsTelepass').modal('show');
}
$(document).ready(function () {
    new DateTime(document.getElementById('input-scadenzaCard'), {
        format: 'DD/MM/YYYY'
    });
});