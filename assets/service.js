
var multicard = [];
var telepass = [];
var users = [];
var rowel = [];
var idRow = null;


function tablePagination(){
    $('table.display').DataTable({
            responsive: true,
            searchable: false,
            orderable: false,
            targets: 0
    });
}

function popVeicles(righe) {
    rowel = righe;
    for (i = 0; i < righe.length; i++) {
        var riga = righe[i];
        var element = "<td>" + riga.id + "</td>";
        element += "<td>" + riga.tipologia + "</td>";
        element += "<td>" + riga.marca + "</td>";
        element += "<td>" + riga.modello + "</td>";
        element += "<td>" + riga.targa + "</td>";
        element += "<td>" + riga.proprieta + "</td>";
        element += "<td>" + riga.assegnatoa + "</td>";
        element += "<td>" + riga.km + "</td>";
        element += '<td><button type="button" class="btn btn-sm btn-outline-secondary" onClick="viewVeicle(' + i + ')"><i class="fa-solid fa-desktop"></i></td>';
        element += '<td><button type="button" class="btn btn-sm btn-outline-secondary" onClick="openModRow(' + riga.id + ')"><i class="fa-solid fa-square-pen"></i></button></td>';
        element += '<td><button type="button" class="btn btn-sm btn-outline-secondary" onClick="storyVeicle(' + riga.id + ')"><i class="fa-solid fa-screwdriver-wrench"></i></button></td>';
        element += '<td><button type="button" class="btn btn-sm btn-outline-secondary"><i class="fa-solid fa-trash"></i></button></td>';
        $("<tr/>")
            .append(element)
            .appendTo("#tabella-veicoli");
    }
}

function closeModal() {
    window.location.reload(true);
}

function searchData(id) {
    var data = "";
    for (var a = 0; a < rowel.length; a++) {
        if (id == rowel[a].id) {
            data = rowel[a];
        }
    }
    return data;
}

function openModRow(id) {
    cleanInput();
    var data = searchData(id);
    console.log(data);
    idRow = data.id;
    $("#input-marca").val(data.marca);
    $("#input-modello").val(data.modello);
    $("#input-targa").val(data.targa);
    $("#input-tipologia").val(data.tipologia);
    $("#input-acquisto").val(data.acquisto);
    $("#input-proprieta").val(data.proprieta);
    $("#input-km").val(data.km);
    $('#addRow').modal('show');
}

function cleanInput() {
    $("#input-id").val("");
    $("#input-marca").val("");
    $("#input-modello").val("");
    $("#input-targa").val("");
    $("#input-tipologia").val("");
    $("#input-acquisto").val("");
    $("#input-proprieta").val("");
    $("#input-km").val("");
}

function openNewRow() {
    cleanInput();
    $('#addRow').modal('show');
}

function addRow() {
    var marca = $("#input-marca").val();
    var modello = $("#input-modello").val();
    var tipologia = $("#input-tipologia").val();
    var targa = $("#input-targa").val();
    var acquisto = $("#input-acquisto").val();
    var proprieta = $("#input-proprieta").val();
    var km = $("#input-km").val();

    $.ajax({
        method: "POST",
        url: "api/createVeicle.php",
        data: JSON.stringify({ marca: marca, modello: modello, tipologia: tipologia, targa: targa, acquisto: acquisto, proprieta: proprieta, km: km }),
        contentType: "application/json",
        success: function (data) {
            console.log("funzione chiamata quando la chiamata ha successo (response 200)", data);
            $("#alert-success").removeClass("hide");
            $("#alert-success").text("Veicolo inserito correttamente");
            $("#form-add").addClass("hide");
            $("#add-button").addClass("hide");
            cleanInput();
        },
        error: function (error) {
            console.log("funzione chiamata quando la chiamata fallisce", error);
            $("#alert-error").removeClass("hide");
            $("#alert-error").text(error);
        }
    });
}

function modRow(data) {
    console.log("DATA", data);
    $.ajax({
        method: "POST",
        url: "api/modVeicle.php",
        data: JSON.stringify({ id: data.id, marca: data.marca, modello: data.modello, tipologia: data.tipologia, targa: data.targa, acquisto: data.acquisto, proprieta: data.proprieta, stato: data.stato, assegnazione: data.assegnatoa, km: data.km }),
        contentType: "application/json",
        success: function (data) {
            console.log("funzione chiamata quando la chiamata ha successo (response 200)", data);
            $("#alert-success").removeClass("hide");
            $("#alert-success").text("Veicolo modificato correttamente");
            $("#form-add").addClass("hide");
            $("#add-button").addClass("hide");
            cleanInput();
        },
        error: function (error) {
            console.log("funzione chiamata quando la chiamata fallisce", error);
            $("#alert-error").removeClass("hide");
            $("#alert-error").text(error);
        }
    });
}

function controlForm() {
    var marca = $("#input-marca").val();
    var modello = $("#input-modello").val();
    var tipologia = $("#input-tipologia").val();
    var targa = $("#input-targa").val();
    var proprieta = $("#input-proprieta").val();
    var acquisto = $("#input-acquisto").val();
    var km = $("#input-km").val();
   
    var count = 0;
    var html = "<ul>";
    if (marca == "") { html += "<li>Inserire Marca</li>"; count++; }
    if (modello == "") { html += "<li>Inserire Modello</li>"; count++; }
    if (tipologia == "Seleziona") { html += "<li>Selezionare la Tipologia</li>"; count++; }
    if (targa == "") { html += "<li>Inserire targa</li>"; count++; }
    if (proprieta == "") { html += "<li>Inserire la Proprietà del veicolo</li>"; count++; }
    if (acquisto == "") { html += "<li>Inserire Data di acquisto</li>"; count++; }
    if (km == "") { html += "<li>Inserire i Km</li>"; count++; }

    html += "</ul>";
    if (count > 0) {
        $("#alert-error").removeClass("hide");
        $("#alert-error").html(html);
    } else {
        $("#alert-error").addClass("hide");
        if (idRow) {
            var data = searchData(idRow);
            data.marca = marca;
            data.modello = modello;
            data.tipologia = tipologia;
            data.targa = targa;
            data.proprieta = proprieta;
            data.acquisto = acquisto;
            data.km = km;
            modRow(data);
        } else {
          addRow();
        }
    }
}

function searchVeicle(id) { 
    var targa = "Non Assegnata";
    for (var a = 0; a < rowel.length; a++) {
        if (id === rowel[a].id) {
            targa = rowel[a].targa;
        }
    }
    return targa;
}

function statoActive(val) {
    var res = "<b style='color:#FF0000'>Disattivata</b>";
    if (val == 1) { 
        res = "<b style='color:#27a504'>Attiva</b>";
    }
    return res;
 }

function popMulticard(righe) {
    multicard = righe;
    for (i = 0; i < righe.length; i++) {
        var riga = righe[i];
        var element = "<td>" + riga.id + "</td>";
        element += "<td>" + riga.tipologia + "</td>";
        element += "<td>" + riga.codice + "</td>";
        element += "<td>" + searchVeicle(riga.veicolo) + "</td>";
        element += "<td>" + statoActive(riga.stato) + "</td>";
        element += '<td><button type="button" class="btn btn-sm btn-outline-secondary"><i class="fa-solid fa-trash"></i></button></td>';
        element += '<td><button type="button" class="btn btn-sm btn-outline-secondary"><i class="fa-solid fa-trash"></i></button></td>';
        element += '<td><button type="button" class="btn btn-sm btn-outline-secondary"><i class="fa-solid fa-trash"></i></button></td>';
        $("<tr/>")
            .append(element)
            .appendTo("#tabella-multicard");
    }
}

function popTelepass(righe) {
    telepass = righe;
    for (i = 0; i < righe.length; i++) {
        var riga = righe[i];
        var element = "<td>" + riga.id + "</td>";
        element += "<td>" + riga.codice + "</td>";
        element += "<td>" + searchVeicle(riga.veicolo) + "</td>";
        element += "<td>" + statoActive(riga.stato) + "</td>";
        element += '<td><button type="button" class="btn btn-sm btn-outline-secondary"><i class="fa-solid fa-trash"></i></button></td>';
        element += '<td><button type="button" class="btn btn-sm btn-outline-secondary"><i class="fa-solid fa-trash"></i></button></td>';
        element += '<td><button type="button" class="btn btn-sm btn-outline-secondary"><i class="fa-solid fa-trash"></i></button></td>';
        $("<tr/>")
            .append(element)
            .appendTo("#tabella-telepass");
    }
}

function allCall() { 
    $.ajax({
        url: 'api/getVeicles.php', 
        dataType: 'json', //restituisce un oggetto JSON
        complete: function (obj, stato) {
            console.log("RISPOSTA", obj.responseJSON);
           
            var righe = obj.responseJSON;
            popVeicles(righe.veicoli);
            popMulticard(righe.multicard);
            popTelepass(righe.telepass);
            tablePagination();
        }
    });
}

function cambioTab(tab) {
    $(".buttNew").addClass("hide");
    $("#button-add-" + tab ).removeClass("hide");
    $(".tabs-veicolo").addClass("hide");
    $("#" + tab + "-page").removeClass("hide");
    $(".nav-link").removeClass("active");
    $("#tab-" + tab).addClass("active");
}

function viewVeicle(id) {
    console.log(rowel[id]);
    var veicolo = rowel[id];
    $("#view-tipologia").text(veicolo.tipologia);
    $("#view-marca").text(veicolo.marca);
    $("#view-modello").text(veicolo.modello);
    $("#view-targa").text(veicolo.targa);
    $("#view-assegnato").text(veicolo.assegnatoa);
    $("#view-acquisto").text(veicolo.acquisto);
    $('#viewVeicle').modal('show');
}

function usersCall() {
    $.ajax({
        url: 'api/getEmployees.php',
        dataType: 'json', //restituisce un oggetto JSON
        complete: function (user) {
            console.log("RISPOSTA", user.responseJSON);
            users = user.responseJSON;
            for (i = 0; i < users.length; i++) {
                var riga = users[i];
                var element = "<option value='" + riga.id + "'>" + riga.nome + " " + riga.cognome + "</option>";
           
                $("#user-gest")
                    .append(element);
            }
            
        }
    });
}
function storyVeicle(id) { 
    $('#viewGestEl').modal('show');
}



function viewUser(user) { 
    console.log(rowel[user]);
    var utente = rowel[user - 1];
}

function openListGoods() { 
    goodAssingenedRemove();
    var valore = $("#user-gest").val();
    console.log("utente: ", valore);
    $("#monitor-good").removeClass("hide");
}

function gestListEl(id) { 
    for (var a = 0; a < rowel.length; a++){
        if (rowel[a].id == id) {
            var titolo = rowel[a].marca + " - " + rowel[a].modello + " - " + rowel[a].seriale;
            $("#titolo-bene").text(titolo);
            $('#viewListEl').modal('show');
        }
    } 
}

function goodAssingenedStep1() { 
    $("#added-goods-to-employee").addClass("hide");
    $("#start-add-good-to-employee").addClass("hide");
    $("#tipologia-add-to-employee").removeClass("hide");
    $("#button-remove-add-goods").removeClass("hide");
}

function goodAssingenedStep2() {
    $("#tipologia-add-to-employee").addClass("hide");
    $("#add-good-to-employee").removeClass("hide");
}

function goodAssingenedRemove() { 
    $("#added-goods-to-employee").removeClass("hide");
    $("#start-add-good-to-employee").removeClass("hide");
    $("#tipologia-add-to-employee").addClass("hide");
    $("#add-good-to-employee").addClass("hide");
    $("#button-remove-add-goods").addClass("hide");
}

$(document).ready(function () {
    usersCall();
    allCall();
});


           