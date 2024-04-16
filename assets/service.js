var telepass = [];
var users = [];
var rowel = [];
var idRow = null;
var userAss = null;
var kmAssMoment = 0;
var d = new Date();
var strDate = d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear()

function tablePagination(){
   $('table.display').DataTable({
            responsive: true,
            searchable: false,
            orderable: false,
            targets: 0
    });
}

function searchAssignedCars(id) {
    var assegnatoUser = searchUser(id);
    var assUser = "Non Assegnata";
    if ((id != '-') && (id != 0)) {
        assUser = assegnatoUser.nome + " " + assegnatoUser.cognome;
    }
    return assUser;
}

function popVeicles(righe) {
    rowel = righe;
    addCars(righe);
    addCarsTelepass(righe);
    for (i = 0; i < righe.length; i++) {
        var riga = righe[i];
        var type = "fa-car";
        if (riga.tipologia == "Ciclomotore") {
            type = "fa-motorcycle";
        } else if (riga.tipologia == "Furgone") {
            type = "fa-truck";
        }

        var element = '<td ><i id="id-car-' + riga.id +'" class="fa-solid ' + type +'" alt="' + riga.id + '" title="' + riga.id + '"></i></td>';
        element += '<td>' + riga.tipologia + '</td>';
        element += "<td>" + riga.marca + "</td>";
        element += "<td>" + riga.modello + "</td>";
        element += "<td>" + riga.targa + "</td>";
        element += "<td>" + riga.proprieta + "</td>";
        element += "<td>" + searchAssignedCars(riga.assegnatoa)  + "</td>";
        element += "<td>" + riga.km + "</td>";
        element += "<td>" + riga.stato + "</td>";
        element += '<td><button type="button" class="btn btn-sm btn-outline-secondary" onClick="viewVeicle(' + i + ')"><i class="fa-solid fa-desktop"></i></td>';
        element += '<td><button type="button" class="btn btn-sm btn-outline-secondary" onClick="addIntervento(' + riga.id + ')"><i class="fa-solid fa-screwdriver-wrench"></i></button></td>';
        element += '<td><button type="button" class="btn btn-sm btn-outline-secondary" onClick="storyAssigned(' + riga.id + ')"><i class="fa-solid fa-user"></i></td>';
        element += '<td><button type="button" class="btn btn-sm btn-outline-secondary" onClick="openModRow(' + riga.id + ')"><i class="fa-solid fa-square-pen"></i></button></td>';
        $("<tr/>").append(element).appendTo("#tabella-veicoli");
        controlAlarm(riga.id); 
    }

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

function searchUser(id) {
    var data = "";
    for (var a = 0; a < users.length; a++) {
        if (id == users[a].id) {
            data = users[a];
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
    $("#input-stato").val(data.stato);
    $("#input-modello").val(data.modello);
    $("#input-targa").val(data.targa);
    $("#input-tipologia").val(data.tipologia);
    $("#input-acquisto").val(data.acquisto);
    $("#input-vendita").val(data.vendita);
    $("#input-proprieta").val(data.proprieta);
    $("#input-km").val(data.km);
    $("#input-kml").val(data.kml);
    $("#input-tagliando").val(data.tagliando);
    $("#input-distribuzione").val(data.distribuzione);
    $("#input-revisione").val(data.revisione);
    $("#input-bollo").val(data.bollo);
    $("#input-assicurazione").val(data.assicurazione);
    $('#addRow').modal('show');
}

function openNewRow() {
    cleanInput();
    $("#input-stato").val("Attiva");
    $('#addRow').modal('show');
}

function storyAssigned(id) {
    var data = searchData(id);

    $("#input-assgiorno").val(strDate);
    userAss = null;
    idRow = id;
     
    if ((data.stato === "Attiva") || (data.stato === "In Vendita")) {
        $("#button-add-ass").removeAttr("disabled");
        $("#display-add-ass").removeClass("hide");
    } else {
        $("#display-add-ass").addClass("hide");
        $("#button-add-ass").attr("disabled");
    }
    
    $("#bodyGuida").empty();
    $("#input-kmattuali").val(data.km);
    $.ajax({
        method: "POST",
        url: "api/readGuida.php",
        data: JSON.stringify({ veicolo: id }),
        dataType: 'json',
        success: function (data) {
            //console.log("GUIDE", data);
            for (var b = 0; b < data.length; b++){
                var user = searchUser(data[b].dipendente);
                var nome = "Non";
                var cognome = "Assegnata";
                if (user) {
                    nome = user.nome;
                    cognome = user.cognome;
                } 

                var row = '<tr>';
                row += '<td>' + data[b].id + '</td>';
                row += '<td>' + data[b].da +'</td>';
                row += '<td>' + data[b].a +'</td>';
                row += '<td>' + data[b].kmda + '</td>';
                row += '<td>' + data[b].kma + '</td>';
                row += '<td>' + nome + '</td>';
                row += '<td>' + cognome + '</td>';
                row += '</tr > ';
                $("#bodyGuida").append(row);
                userAss = data[b].id;
            }
            $('#viewListEl').modal('show');
            
        },
        error: function (error) {
            console.log("funzione chiamata quando la chiamata fallisce", error);
            $("#alert-error").removeClass("hide");
            $("#alert-error").text(error);
        }
    });

    
}

function addIntervento(id) {
    $("#alert-error-intervento").addClass("hide");
    var data = searchData(id);
    idRow = id;
    $("#bodyIntervento").empty();
    $("#input-kmintervento").val(data.km);
    $("#input-intgiorno").val(strDate);
    $.ajax({
        method: "POST",
        url: "api/getIntervento.php",
        data: JSON.stringify({ veicolo: id }),
        dataType: 'json',
        success: function (data) {
            //console.log("GUIDE", data);
            for (var b = 0; b < data.length; b++) {
                var row = '<tr>';
                row += '<td>' + data[b].id + '</td>';
                row += '<td>' + data[b].intervento + '</td>';
                row += '<td>' + data[b].data + '</td>';
                row += '<td>' + data[b].km + '</td>';
                row += '<td>&euro; ' + data[b].prezzo + '</td>';
                row += '<td><i class="fa-solid fa-file"></i></td>';
                row += '</tr > ';
                $("#bodyIntervento").append(row);
                userAss = data[b].id;
            }
            $('#viewGestEl').modal('show');

        },
        error: function (error) {
            console.log("funzione chiamata quando la chiamata fallisce", error);
            $("#alert-error").removeClass("hide");
            $("#alert-error").text(error);
        }
    });


}

function addRow() {
    var marca = $("#input-marca").val();
    var modello = $("#input-modello").val();
    var stato = $("#input-stato").val();
    var tipologia = $("#input-tipologia").val();
    var targa = $("#input-targa").val();
    var acquisto = $("#input-acquisto").val();
    var proprieta = $("#input-proprieta").val();
    var km = $("#input-km").val();
    var kml = $("#input-kml").val();
    var tagliando = $("#input-tagliando").val();
    var distribuzione = $("#input-distribuzione").val();
    var revisione = $("#input-revisione").val();
    var bollo = $("#input-bollo").val();
    var assicurazione = $("#input-assicurazione").val();
    var vendita = $("#input-vendita").val();

    $.ajax({
        method: "POST",
        url: "api/createVeicle.php",
        data: JSON.stringify({ marca: marca, modello: modello, tipologia: tipologia, targa: targa, acquisto: acquisto, proprieta: proprieta, km: km, tagliando: tagliando, distribuzione: distribuzione, kml: kml, stato: stato, revisione: revisione, bollo: bollo, assicurazione: assicurazione, vendita: vendita}),
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
        data: JSON.stringify({ id: data.id, marca: data.marca, modello: data.modello, tipologia: data.tipologia, targa: data.targa, acquisto: data.acquisto, proprieta: data.proprieta, stato: data.stato, assegnazione: data.assegnatoa, km: data.km, tagliando: data.tagliando, distribuzione: data.distribuzione, kml: data.kml, revisione: data.revisione, bollo: data.bollo, assicurazione: data.assicurazione, vendita: data.vendita }),
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
    var stato = $("#input-stato").val();
    var km = $("#input-km").val();
    var kml = $("#input-kml").val();
    var tagliando = $("#input-tagliando").val();
    var distribuzione = $("#input-distribuzione").val();
    var revisione = $("#input-revisione").val();
    var bollo = $("#input-bollo").val();
    var assicurazione = $("#input-assicurazione").val();
    var vendita = $("#input-vendita").val();
   
    var count = 0;
    var html = "<ul>";
    if (marca == "") { html += "<li>Inserire Marca</li>"; count++; }
    if (modello == "") { html += "<li>Inserire Modello</li>"; count++; }
    if (tipologia == "Seleziona") { html += "<li>Selezionare la Tipologia</li>"; count++; }
    if (targa == "") { html += "<li>Inserire targa</li>"; count++; }
    if (proprieta == "") { html += "<li>Inserire la Proprietà del veicolo</li>"; count++; }
    if (acquisto == "") { html += "<li>Inserire Data di acquisto</li>"; count++; }
    if (km == "") { html += "<li>Inserire i Km</li>"; count++; }
    if (tagliando == "") { html += "<li>Inserire i Km per la cadenza del tagliando</li>"; count++; }
    if (distribuzione == "") { html += "<li>Inserire i Km per la cadenza della distribuzione</li>"; count++; }
    if (kml == "") { html += "<li>Inserire il consumo de Veicolo (km/l)</li>"; count++; }

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
            data.kml = kml;
            data.tagliando = tagliando;
            data.distribuzione = distribuzione;
            data.stato = stato;
            data.revisione = revisione;
            data.bollo = bollo;
            data.assicurazione = assicurazione;
            data.vendita = vendita;
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
 
function allCall() { 
    $.ajax({
        url: 'api/getVeicles.php', 
        dataType: 'json', //restituisce un oggetto JSON
        complete: function (obj, stato) {
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
    localStorage['tab'] = tab;
}

function viewVeicle(id) {
    //console.log("ID VIEW: " + id);
    $(".view-veicle").text("");
    var veicolo = rowel[id];
    controlAlarm(veicolo.id);
    $("#view-tipologia").text(veicolo.tipologia);
    $("#view-proprieta").text(veicolo.proprieta);
    $("#view-marca").text(veicolo.marca);
    $("#view-modello").text(veicolo.modello);
    $("#view-targa").text(veicolo.targa);
    $("#view-assegnato").text(searchAssignedCars(veicolo.assegnatoa));
    $("#view-acquisto").text(veicolo.acquisto);
    $("#view-vendita").text(veicolo.vendita);
    $("#view-km").text(veicolo.km);
    $("#view-stato").text(veicolo.stato);
    $("#view-revisione").text(veicolo.revisione);
    $("#view-bollo").text(veicolo.bollo);
    $("#view-assicurazione").text(veicolo.assicurazione);
    $("#view-tagliando").text(veicolo.tagliando);
    $("#view-distribuzione").text(veicolo.distribuzione);
    $("#view-kml").text(veicolo.kml);
    $("#view-telepass").text(searchTelepass(veicolo.telepass).codice);
    $("#view-multicard").text(searchMulticard(veicolo.multicard).codice) ;
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
           
                $("#user-gest").append(element);
            }
            
        }
    });
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

function insAssegnatario() {
    var dipendente = $("#user-gest").val();
    var km = $("#input-kmattuali").val();
    var day = $("#input-assgiorno").val();

    $.ajax({
        method: "POST",
        url: "api/insertGuida.php",
        data: JSON.stringify({ idex: userAss, veicolo: idRow, da: day, dipendente: dipendente, kmda: km, km: km}),
        contentType: "application/json",
        success: function (data) {
            console.log("funzione chiamata quando la chiamata ha successo (response 200)", data);
            $("#alert-success-guida").removeClass("hide");
            $("#alert-success-guida").text("Veicolo modificato correttamente");
            $("#view-assign").addClass("hide"); 
            $("#butt-assign").text("OK");
        },
        error: function (error) {
            console.log("funzione chiamata quando la chiamata fallisce", error);
            $("#alert-error").removeClass("hide");
            $("#alert-error").text(error);
        }
    });

}
function insIntervento() {
    var prezzo = $("#input-costointervento").val();
    var km = $("#input-kmintervento").val();
    var intervento = $("#input-intervento").val();
    var data = $("#input-intgiorno").val();
    var count = 0;
    var html = "<ul>";
    if (intervento == "Seleziona") { html += "<li>Selezionare il tipo di intervento</li>"; count++; }
    if (km == "") { html += "<li>Inserire i km</li>"; count++; }
    if (data == "") { html += "<li>Inserire la data </li>"; count++; }
    if (prezzo == "") { html += "<li>Inserire il costo dell'intervento</li>"; count++; }

    html += "</ul>";
    if (count > 0) {
        $("#alert-error-intervento").removeClass("hide");
        $("#alert-error-intervento").html(html);
    } else {
        $("#alert-error-intervento").addClass("hide");
        $.ajax({
        method: "POST",
        url: "api/insertIntervento.php",
        data: JSON.stringify({ veicolo: idRow, data: data, intervento: intervento, km: km, prezzo: prezzo }),
        contentType: "application/json",
        success: function (data) {
            console.log("funzione chiamata quando la chiamata ha successo (response 200)", data);
            $("#alert-success-intervento").removeClass("hide");
            $("#alert-success-intervento").text("Veicolo modificato correttamente");
            $("#view-inter").addClass("hide");
            $("#butt-inter").text("OK");
        },
        error: function (error) {
            console.log("funzione chiamata quando la chiamata fallisce", error);
            $("#alert-error").removeClass("hide");
            $("#alert-error").text(error);
        }
        });
    }

    

}

$(document).ready(function () {
    console.log(localStorage['tab']);
    if (localStorage['tab']) {
        cambioTab(localStorage['tab'])
    }
    usersCall();
    allCall();

    new DateTime(document.getElementById('input-acquisto'), {
        format: 'DD/MM/YYYY'
    });
    new DateTime(document.getElementById('input-vendita'), {
        format: 'DD/MM/YYYY'
    });
    new DateTime(document.getElementById('input-assgiorno'), {
        format: 'DD/MM/YYYY'
    });
    new DateTime(document.getElementById('input-intgiorno'), {
        format: 'DD/MM/YYYY'
    });
    new DateTime(document.getElementById('input-bollo'), {
        format: 'DD/MM/YYYY'
    });
    new DateTime(document.getElementById('input-assicurazione'), {
        format: 'DD/MM/YYYY'
    });
    new DateTime(document.getElementById('input-revisione'), {
        format: 'DD/MM/YYYY'
    });
});


           