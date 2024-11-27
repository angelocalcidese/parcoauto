var allData = [];
var telepass = [];
var users = [];
var rowel = [];
var company = [];
var veicle = [];
var interventi = [];
var kmMeseList = [];
var selected = [];
var kmInsMounth = [];
var giri = 0;
var caburantiDB = [];
var carburantiUSD = [];
var carburantiEU = [];
var statoveicoli = [0, 0, 0];
var intTypeNum = 0;
var mesekmaddmod = null;
var idRow = null;
var idInt = null;
var userAss = null;
var kmAssMoment = 0;
var idIntervento = null;
var d = new Date();
var day = d.getDate();
var idModkm = null;
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

if (day < 10) {
    day = "0" + day;
}
var year = d.getFullYear();
var mounth = d.getMonth() + 1;
if (mounth < 10) {
    mounth = "0" + mounth;
}
var strDate = day + "/" + mounth + "/" + d.getFullYear();

function tablePagination(){
    /*var table = $('table.display').DataTable({
        responsive: true,
        argets: 0,
    });

    var table = new DataTable('table.display');*/

    $('[data-toggle="tooltip"]').tooltip();

    $(".page-link").on("click", function () {
        console.log("CAMBIO PAGINA");
        controlKmMounth();
    });
    $('select[name="tabella-veicoli_length"]').on("change", function () {
        console.log("Modifico lunghezza tabella");
        controlKmMounth();
    });
    $('#dt-search-0').keyup(function () {
        controlKmMounth();
    });
}


function searchAssignedCars(id) {
    var assegnatoUser = searchUser(id);
    var assUser = "Non Assegnato";
    if ((id != '-') && (id != 0)) {
        assUser = "<b>" + assegnatoUser.nome + " " + assegnatoUser.cognome + "</b>";
    }
    return assUser;
}

function searchKmStory(id) {
    if (day <= 15) {
        mounth = mounth - 1;
    }
    $.ajax({
        method: "POST",
        url: 'api/getInsertKm.php',
        data: JSON.stringify({ mese: mounth, anno: year }),
        dataType: 'json',
        complete: function (resp) {
            kmInsMounth = resp;
            controlKmMounth();
        }
    });
}

function searchInsKm(id, resp) {
    var responce = false;
    for (var a = 0; a < resp.length; a++){
        if (id == resp[a].veicolo) {
            responce = true;
        }
    }
    return responce;
}

function controlKmMounth() {
    //console.log("CONTROLLO KM", kmInsMounth);

    for (i = 0; i < rowel.length; i++) { 
        //var riga = righe[i];
        if ((rowel[i].stato == "Attiva") && (rowel[i].assegnatoa != "-") && (rowel[i].assegnatoa != "")) {
 //console.log("KM VEICOLO Ricerca: " + righe[i].id);
            if (searchInsKm(rowel[i].id, kmInsMounth.responseJSON)) {
                $("#storykm-" + rowel[i].id).css("background-color", "#a3cd44");
            } else {
                $("#storykm-" + rowel[i].id).css("background-color", "#efce2b");
            }
        }
    }
}

function dunutsDiagarm() {
    // Recupera il contesto del canvas
    const ctx = document.getElementById('myDoughnutChart').getContext('2d');

    // Configurazione dei dati e delle opzioni del grafico
    const myDoughnutChart = new Chart(ctx, {
        type: 'doughnut', // Tipo di grafico
        data: {
            labels: ['Veicoli Senza Int.', 'Prossimi interventi', 'Interventi scaduti'], // Etichette per ogni sezione
            datasets: [{
                label: 'Veicoli',
                data: statoveicoli, // Valori di ogni sezione
                backgroundColor: [
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(255, 99, 132, 0.2)'
                ],
                borderColor: [
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(255, 99, 132, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true, // Il grafico si adatta al contenitore
            plugins: {
                legend: {
                    position: 'top', // Posizione della legenda
                },
                tooltip: {
                    enabled: true // Mostra tooltip al passaggio del mouse
                }
            }
        }
    });
};

var statoattiva = 0;
var statoguaste = 0;
var statovendute = 0;
function popVeicles(righe) {
    rowel = righe;
    
    console.log("ROWEL Veicle:", rowel);
    
    addCars(righe);
    addCarsTelepass(righe);
    $("#tabella-veicoli tbody").empty();
    for (i = 0; i < righe.length; i++) {
        var riga = righe[i];
        var type = "fa-car";
        if ((riga.stato == "Venduta") || (riga.stato == "Resa") || (riga.stato == "Rottamata")) {
            type = "fa-xmark";
            statovendute++;
        } else if ((riga.stato == "Incidentata") || (riga.stato == "Guasta")) {
            type = "fa-car-burst";
            statoguaste++;
        } else if (riga.tipologia == "Ciclomotore") {
            type = "fa-motorcycle";
            statoattiva++;
        } else if (riga.tipologia == "Furgone") {
            type = "fa-truck";
            statoattiva++;
        } else {
            statoattiva++;
        }
        var disabledSend = null;

        if ((riga.assegnatoa == "0") || ((riga.stato != "Attiva") && (riga.stato != "In Vendita"))) {
            disabledSend = "disabled";
        } 
        var element = '<td id="id-car-' + riga.id +'" title="' + riga.id + '"><i  class="fa-solid ' + type +'" alt="' + riga.id + '" ></i></td>';
        element += "<td>" + riga.stato + "</td>";
        element += '<td>' + riga.tipologia + '</td>';
        element += "<td>" + riga.marca + "</td>";
        element += "<td>" + riga.modello + "</td>";
        element += '<td>' + riga.targa + '</td>';
        element += "<td>" + searchAssignedCars(riga.assegnatoa)  + "</td>";
        element += '<td style="text-align:center"><button title="Visualizza Dati del veicolo"  type="button" class="btn btn-sm btn-outline-secondary" onClick="viewVeicle(' + i + ')"><i class="fa-solid fa-desktop"></i></td>';
        element += '<td style="text-align:center"><button title="Visualizza Interventi del veicolo" type="button" class="btn btn-sm btn-outline-secondary" onClick="addIntervento(' + riga.id + ')"><i class="fa-solid fa-screwdriver-wrench"></i> + <i class="fa-solid fa-file-arrow-up"></i></button></td>';
        element += '<td style="text-align:center"><button title="Visualizza Assegnatari del veicolo" type="button" class="btn btn-sm btn-outline-secondary" onClick="storyAssigned(' + riga.id + ')"><i class="fa-solid fa-user"></i></td>';
        element += '<td style="text-align:center"><button title="Modifica Dati del veicolo" type="button" class="btn btn-sm btn-outline-secondary" onClick="openModRow(' + riga.id + ')"><i class="fa-solid fa-square-pen"></i></button></td>';
        element += '<td style="text-align:center"><button title="Visualizza km e spese mensile veicolo" type="button" class="btn btn-sm btn-outline-secondary" id="storykm-' + riga.id + '" onClick="openKmStory(' + riga.id + ')"><i class="fa-regular fa-calendar-days"></i></td>';
        element += '<td style="text-align:center"><button title="Invia email richiesta km" type="button" class="btn btn-sm btn-outline-secondary alarm-button ' + disabledSend  + '" id="id-km-' + riga.id +'" onClick="sendEmailKm(' + riga.id + ')"><i class="fa-solid fa-reply"></i></button></td>';
        $("<tr/>").append(element).appendTo("#tabella-veicoli");
        
        controlAlarm(riga.id);  

        var telepassSearch = "";
        var res = searchTelepass(riga.telepass);
        if (res.seriale) {
            telepassSearch = res.seriale;
        }

        var multicard = "";
        var resMulti = searchMulticard(riga.multicard);
        if (resMulti.codice) {
            multicard = resMulti.codice;
        }

        var element2 = "<td>" + riga.stato + "</td>";
        element2 += '<td>' + riga.tipologia + '</td>';
        element2 += "<td>" + riga.marca + "</td>";
        element2 += "<td>" + riga.modello + "</td>";
        element2 += "<td>" + riga.targa + "</td>";
        element2 += "<td>" + searchAssignedCars(riga.assegnatoa) + "</td>";
        element2 += "<td>" + riga.km + "</td>";
        element2 += "<td>" + riga.alimentazione + "</td>";
        element2 += "<td>" + riga.classeinq + "</td>";
        element2 += "<td>" + yesOrNo(riga.ztl) + "</td>";
        element2 += "<td>" + riga.acquisto + "</td>";
        element2 += "<td>" + telepassSearch + "</td>";
        element2 += "<td>" + multicard + "</td>";
        element2 += "<td>" + riga.revisione + "</td>";
        element2 += "<td>" + riga.assicurazione + "</td>";
        element2 += "<td>" + riga.bollo + "</td>";

        

        $("<tr/>").append(element2).appendTo("#tabella-export-veicoli");

    }
    $("#testa-stato-attivo").text(statoattiva);
    if (statoguaste > 0) $("#stato-guaste").removeClass("hide");
    $("#testa-stato-guaste").text(statoguaste);
    if (statovendute > 0) $("#stato-vendute").removeClass("hide");
    $("#testa-stato-vendute").text(statovendute);

    //statoveicoli[0] = righe.length;
    //console.log("STATO VEICOLI FINALE", statoveicoli);
    dunutsDiagarm();
    searchKmStory();
}

function openKmStory(id) {
    veicle = searchData(id);
    $("#km-targa-1").html("Veicolo targato <u><b>" + veicle.targa + "</b></u>");
    $('#modalChoicekm').modal('show');
}

function searchKm(row, mese) {
    var resp = null;
    for (var a = 0; a < row.length; a++){
        if (row[a].mese == mese) {
            resp = row[a];
        }
    }
    return resp;
}

function closekmaddmod() {
    $("#alert-success-km").addClass("hide");
    $("#mod-km-mese").text("");
    $("#input-km-mese").val("");
    $("#input-km-mese-old").val("");
    $("#input-spese-mese").val("");
    //$("#input-km-mese-old").attr("disabled", true);
    idModkm = null;
    $("#form-addmodkm").addClass("hide");
}

function searchKmForMounth(mese) {
    var resp = null;

    for (var a = 1; a < mese; a++) { 
        if (kmMeseList[a] && kmMeseList[a].km) {
            resp = kmMeseList[a].km
        }
    }

    return resp;
}

function modKm(id) {
    closekmaddmod();
    for (var a = 0; a < kmMeseList.length; a++){
        if (id == kmMeseList[a].id) {
            idModkm = id;
            mesekmaddmod = kmMeseList[a].mese;
            mese = kmMeseList[a].mese - 1;
            $("#mod-km-mese").text(mesiMap[mese]);
            $("#input-km-mese").val(kmMeseList[a].km);
            $("#input-km-mese-old").val(kmMeseList[a].kmold);
            $("#input-spese-mese").val(kmMeseList[a].spesaextra);
            //$("#input-km-mese-old").attr("disabled", false);
            $("#form-addmodkm").removeClass("hide");
        }
    }
}
function newKm(mese) {
    console.log(veicle);
    closekmaddmod();
    mesekmaddmod = mese + 1;
    //$("#input-km-mese-old").attr("disabled", false);
    $("#input-km-mese-old").val(veicle.km);
    $("#mod-km-mese").text(mesiMap[mese]);
    $("#form-addmodkm").removeClass("hide");
}

function kmaddmod() {
    var km = $("#input-km-mese").val();
    var kmold = $("#input-km-mese-old").val();
    var spese = $("#input-spese-mese").val();
    var anno = $("#input-annokmstoricos").val();
    var last = false;
    if (idModkm) {
       for (var a = 0; a < kmMeseList.length; a++) {
           if (idModkm == kmMeseList[a].id) { 
               if (parseInt(kmMeseList[a].mese) == parseInt(mounth)) { last = true; }
            }
        } 
    } else {
        if (mesekmaddmod == mounth) {last = true;} 
    }
    
    $.ajax({
        method: "POST",
        url: 'api/modKmMensili.php',
        data: JSON.stringify({ id: idModkm, km: km, kmold: kmold, spese: spese, veicolo: veicle.id, assegnato: veicle.assegnatoa, lastmonth: last, mounth: mesekmaddmod, year: anno }),
        dataType: 'json',
        complete: function (responce) {
            $("#alert-success-km").removeClass("hide");
            $("#alert-success-km").text("km modificati con successo");
            closekmaddmod();
            kmSend();

        }
    });
}

function kmSend() {
    var anno = $("#input-annokmstoricos").val();
    $("#title-km-story").text(anno);
    $("#bodyKm").empty();
    var dativeicolo = searchData(veicle.id);
    
    $("#km-story-targa").text(dativeicolo.targa);
    kmMeseList = [];
    $.ajax({
        method: "POST",
        url: 'api/getStoryKm.php',
        data: JSON.stringify({ id: veicle.id, anno: anno }),
        dataType: 'json',
        complete: function (responce) {
            //console.log("KM: ", responce.responseJSON);
            var dataRow = responce.responseJSON;
            kmMeseList = dataRow;
            var mesi = 12;
            var totkm = 0;
            for (a = 1; a <= mesi; a++){
                var row = "<tr>";
                var mese = a - 1;
                var respRow = searchKm(dataRow, a);
                if (respRow) {
                    var assegnatoUser = searchUser(respRow.assegnata);
                    var kmeffettuati = respRow.km - respRow.kmold;
                    totkm = totkm + kmeffettuati;
                    row += '<td>' + mesiMap[mese] + "</td>";
                    row += '<td class="text-center">' + assegnatoUser.nome + " " + assegnatoUser.cognome +"</td>";
                    row += '<td class="text-center">' + respRow.kmold + "</td>";
                    row += '<td class="text-center">' + respRow.km + "</td>";
                    row += '<td class="text-center">(' + kmeffettuati + ')</td>';
                    row += '<td class="text-center">&euro;' + Number(respRow.spesaextra).toLocaleString("it-IT", { minimumFractionDigits: 2 }) + "</td>";
                    row += '<td class="text-center" id="multi-spesa-mese-' + a + '"> - </td>';
                    row += '<td class="text-center"><button class="btn btn-sm btn-outline-secondary" onclick="modKm(' + respRow.id + ')"><i class="fa-solid fa-pen-to-square"></i></button></td>';
                } else {
                    row += '<td>' + mesiMap[mese] + '</td><td class="text-center"> - </td><td class="text-center"> - </td><td class="text-center"> - </td><td class="text-center"> - </td><td class="text-center"> - </td><td class="text-center"> - </td><td class="text-center"><button class="btn btn-sm btn-outline-secondary" onclick="newKm(' + mese + ')"><i class="fa-solid fa-plus"></i></button></td>';
                }
               
                row += "</tr > ";
                $("#bodyKm").append(row);
            }

            var totali = '<tr class="table-secondary"><td colspan="4"></td><td>Tot.Km: <b>' + totkm + '</b></td><td></td><td>Tot. Spesa Carb: <b id="tot-spesa-carb"></b></td><td></td></tr>';
            $("#bodyKm").append(totali);

            if (dativeicolo.multicard != "") {
                addDataMulticard(dativeicolo.multicard, anno);
            }
            $('#modalChoicekm').modal('hide');
            $('#viewListKm').modal('show');
        }
    });
}

function addDataMulticard(multicard, anno) {
    var tot = 0;
    $.ajax({
        method: "POST",
        url: "api/getMultiPaidIdMulti.php",
        data: JSON.stringify({ codice: multicard, anno: anno }),
        dataType: 'json',
        success: function (data) {
            for (var a = 0; a < data.length; a++) {
                if ($("#multi-spesa-mese-" + data[a].mese).length) tot = tot + parseFloat(data[a].spesa);
                $("#multi-spesa-mese-" + data[a].mese).html(formatCurrency(data[a].spesa));
            }
            $("#tot-spesa-carb").text(formatCurrency(tot))
        },
        error: function (error) {
            console.log("Nessuna Checkbox attiva", error);

        }
    });
}

function sendEmailKmMassive() {
    $.ajax({
        method: "POST",
        url: 'api/getSingleCompany.php',
        data: JSON.stringify({ id: userlog.company }),
        dataType: 'json',
        complete: function (responce) {
            console.log(responce.responseJSON);
            company = responce.responseJSON;
            $('#choice-title').text("Sei sicuro?");
            $('#choice-text').html("Stai per Inviare la richiesta dei km a tutti i dipendenti con un veicolo assegnato.</b>");
            $(".button-send").addClass("hide");
            $(".button-send-massive").removeClass("hide");
            $("#input-mesekmrichiesta").val(mounth);
            $('#modalChoice').modal('show');
        }
    });
}

function sendEmailKm(id) {
    veicle = searchData(id);
    idRow = id;
    console.log(veicle.assegnatoa);
    if (veicle.assegnatoa != "-") {
        $.ajax({
            method: "POST",
            url: 'api/getSingleCompany.php',
            data: JSON.stringify({ id: userlog.company }),
            dataType: 'json',
            complete: function (responce) {
                console.log(responce.responseJSON);
                company = responce.responseJSON;
                $('#choice-title').text("Sei sicuro?");
                $('#choice-text').html("Stai per Inviare la richiesta dei km a <b>" + searchUser(veicle.assegnatoa).nome + " " + searchUser(veicle.assegnatoa).cognome + "</b>");
                $(".button-send").removeClass("hide");
                $(".button-send-massive").addClass("hide");
                $("#input-mesekmrichiesta").val(mounth);
                $('#modalChoice').modal('show');
            }
        });
    } 

    
}

function yesSend(massive) {
    var userVeicle = searchUser(veicle.assegnatoa);
    var nominativo = userVeicle.nome + " " + userVeicle.cognome;
   
    var mese = $("#input-mesekmrichiesta").val();
    console.log("MESE: ", mese);

    if (mese != null) {
    
    $(".button-close-send").addClass("disabled");
    $(".button-send").addClass("hide");
    $(".button-send-massive").addClass("hide");
    $(".button-no-send").addClass("hide");
    $('#choice-text').html("<b>Attendere ...</b>");
       $.ajax({
        method: "POST",
        url: 'api/sendKmMail.php',
        data: JSON.stringify({ company: company[0].name, nominativo: nominativo, targa: veicle.targa, email: userVeicle.email, id: veicle.assegnatoa, veicolo: idRow, mese : mese }),
        dataType: 'json',
        complete: function (responce) {
            //console.log(responce);
            if (massive) {
                $('#choice-title').text("Invio email a ...");
                $('#choice-text').html("Elenco Assegnatari:");
                

                $("#list-send-email").append('<li class="list-group-item">Email km inviata a <b>' + nominativo + '</b></li>');
            } else {
                $('#choice-title').text("Hai inviato l'email");
                $('#choice-text').html("L'invio del email è andato a buon fine");
                $(".button-send").addClass("hide");
            }
            
            $(".button-close-send").removeClass("hide");
            $(".button-close-send").removeClass("disabled");

        }
     }); 
    } else {
        $("#alert-error-rickm").removeClass("hide");
        setTimeout(closeAlarm, 1000);
    }
    
}


function yesSendMassive() {
    for (var a = 0; a < rowel.length; a++){
        if ((rowel[a].assegnatoa != "-") && ((rowel[a].stato == "Attiva") || (rowel[a].stato == "In Vendita"))) {
            idRow = rowel[a].id;
            veicle = searchData(rowel[a].id);
            console.log(rowel[a]);
            yesSend(true);
        }
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
    $("#input-alimentazione").val(data.alimentazione);
    $("#input-classeinq").val(data.classeinq);
    $("#input-ztl").val(data.ztl);
    $("#input-tagliando").val(data.tagliando);
    $("#input-distribuzione").val(data.distribuzione);
    $("#input-revisione").val(data.revisione);
    $("#input-bollo").val(data.bollo);
    $("#input-assicurazione").val(data.assicurazione);
    $("#input-note").val(data.note);
    $("#input-posti").val(data.posti);
    $('#addRow').modal('show');
}

function openNewRow() {
    cleanInput();
    $("#input-stato").val("Attiva");
    $("#input-tipologia").val("Seleziona");
    $('#addRow').modal('show');
}

function storyAssigned(id) {
    var data = searchData(id);
    $("#story-targa").text(data.targa);
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
function downloadfile(id) {
    console.log(interventi[id]);
    var data = interventi[id];
    $.ajax({
        method: "POST",
        url: "../portale/api/getFile.php",
        data: JSON.stringify({ name: data.fattura }),
        dataType: 'json',
        success: function (result) {
            //var decoded = window.atob(result[0].file);
            //console.log(decoded)
             var a = document.createElement("a"); //Create <a>
            a.href = window.atob(result[0].file); 
            a.download = "fattura.pdf"; 
            a.click(); 
        },
        error: function (error) {
            console.log("funzione chiamata quando la chiamata fallisce", error);
            
        }
    });

}

function clearDocInt() {
    //$("#add-intervento-title").removeClass("hide");
    $(".add-new-int").removeClass("hide");
    $("#doc-intervento-title").addClass("hide");
    $("#input-linkinterventoFile").val("");
    $("#colonna-carica").removeClass("col-12");
    $("#colonna-carica").addClass("col-5");
    delFileInt();
    idIntervento = null;
}

function addDocInt(id) {
    // $("#add-intervento-title").addClass("hide");
    $("#input-linkinterventoFile").val("");
    $(".add-new-int").addClass("hide");
    $("#doc-intervento-title").removeClass("hide");
    $("#colonna-carica").removeClass("col-5");
    $("#colonna-carica").addClass("col-12");
    idIntervento = id;
}
function delIntAdv(id) {
    $(".int-btn").removeClass("select-btn-int");
    idInt = id;
    $("#int-btn-sel-" + id).addClass("select-btn-int");
    $("#adv-del-int").removeClass("hide");
}

function clearDelInt() {
    addIntervento(idRow); 
}

function delIntervento() {
    $.ajax({
        method: "POST",
        url: "api/delIntervento.php",
        data: JSON.stringify({ id: idInt }),
        dataType: 'json',
        success: function (result) {
            addIntervento(idRow)
        },
        error: function (error) {
            console.log("funzione chiamata quando la chiamata fallisce", error);

        }
    });
}
function addIntervento(id) {
    delFileInt();
    clearDocInt();
    $(".form-control").val("");
    $(".spesa-input").prop("disabled", true);
    $(".check-ins").prop("checked", false);
    $("#adv-del-int").addClass("hide");
    $("#alert-error-intervento").addClass("hide");
    $("#alert-success-intervento").addClass("hide");
    var data = searchData(id);
    idRow = id;
    $("#bodyIntervento").empty();
    $("#int-targa").text(data.targa);
    $("#int-assegnatoa").html(searchAssignedCars(data.assegnatoa));
    $("#input-kmintervento").val(data.km);
    $("#input-intgiorno").val(strDate);
    $.ajax({
        method: "POST",
        url: "api/getIntervento.php",
        data: JSON.stringify({ veicolo: id }),
        dataType: 'json',
        success: function (data) {
            //console.log("GUIDE", data);
            interventi = data;
            var spesa = 0;
            for (var b = 0; b < data.length; b++) {
                var row = '<tr>';
                row += '<td><button type="button" class="btn btn-sm btn-outline-secondary int-btn" id="int-btn-sel-' + data[b].id + '" onclick="delIntAdv(' + data[b].id + ')"><i class="fa-solid fa-trash"></i></button></td>';
                row += '<td>' + data[b].intervento + '</td>';
                row += '<td>' + data[b].data + '</td>';
                row += '<td>' + data[b].km + '</td>';
                var nuovoprezzo = data[b].prezzo.replace(/,/g, ".");
                row += '<td class="table-secondary text-end">' + formatCurrency(nuovoprezzo) + '</td>';
                if (data[b].prezzo) spesa = spesa + parseFloat(data[b].prezzo);
                if (data[b].fattura) {
                    row += '<td class="text-center"><a class="btn btn-sm btn-outline-success" href="../../portale/file/' + data[b].fattura + '" target="_blank"><i class="fa-solid fa-file-arrow-down"></i></a></td>'; 
                } else {
                    row += '<td class="text-center"><button type="button" class="btn btn-sm btn-outline-secondary" onclick="addDocInt(' + data[b].id + ')"><i class="fa-solid fa-upload"></i></button></td>';
                }
                
                row += '</tr > ';
                $("#bodyIntervento").append(row);
                userAss = data[b].id;
            }
            var totint = '<tr><td colspan="3"></td><td class="text-end"><b>Totale: </b></td><td class="table-secondary text-end"><b> ' + formatCurrency(spesa) + '</b></td><td></td></tr>';
            $("#bodyIntervento").append(totint);
           
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
    var alimentazione = $("#input-alimentazione").val();
    var classeinq = $("#input-classeinq").val();
    var ztl = 0;
    if ($("#input-ztl").val() != null) {
        ztl = $("#input-ztl").val();
    }
     
    var tagliando = $("#input-tagliando").val();
    var distribuzione = $("#input-distribuzione").val();
    var revisione = $("#input-revisione").val();
    var bollo = $("#input-bollo").val();
    var assicurazione = $("#input-assicurazione").val();
    var vendita = $("#input-vendita").val();
    var note = $("#input-note").val();
    var posti = $("#input-posti").val();

    $.ajax({
        method: "POST",
        url: "api/createVeicle.php",
        data: JSON.stringify({ marca: marca, modello: modello, tipologia: tipologia, targa: targa, acquisto: acquisto, proprieta: proprieta, km: km, tagliando: tagliando, distribuzione: distribuzione, kml: kml, alimentazione: alimentazione, classeinq: classeinq, ztl: ztl, stato: stato, revisione: revisione, bollo: bollo, assicurazione: assicurazione, vendita: vendita, note: note, posti: posti}),
        contentType: "application/json",
        success: function (data) {
            console.log("funzione chiamata quando la chiamata ha successo (response 200)", data);
            if (!data.error) {
                $("#alert-success").removeClass("hide");
                $("#alert-success").text("Veicolo inserito correttamente");
                $("#form-add").addClass("hide");
                $("#add-button").addClass("hide");
                cleanInput();
            } else {
                $("#alert-error").removeClass("hide");
                $("#alert-error").text("TARGA già esistente");
            }
            
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
        data: JSON.stringify({ id: data.id, marca: data.marca, modello: data.modello, tipologia: data.tipologia, targa: data.targa, acquisto: data.acquisto, proprieta: data.proprieta, stato: data.stato, assegnazione: data.assegnatoa, km: data.km, tagliando: data.tagliando, distribuzione: data.distribuzione, kml: data.kml, alimentazione: data.alimentazione, classeinq: data.classeinq, ztl: data.ztl, revisione: data.revisione, bollo: data.bollo, assicurazione: data.assicurazione, vendita: data.vendita, note: data.note, posti: data.posti }),
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
    var alimentazione = $("#input-alimentazione").val();
    var classeinq = $("#input-classeinq").val();
    var ztl = $("#input-ztl").val();
    var tagliando = $("#input-tagliando").val();
    var distribuzione = $("#input-distribuzione").val();
    var revisione = $("#input-revisione").val();
    var bollo = $("#input-bollo").val();
    var assicurazione = $("#input-assicurazione").val();
    var vendita = $("#input-vendita").val();
    var note = $("#input-note").val();
    var posti = $("#input-posti").val();
   
    var count = 0;
    var html = "<ul>";

    //console.log("Tipologia", tipologia);
    if (marca == "") { html += "<li>Inserire Marca</li>"; count++; }
    if (modello == "") { html += "<li>Inserire Modello</li>"; count++; }
    //if ((tipologia == "Seleziona") || (tipologia == null)) { html += "<li>Selezionare la Tipologia</li>"; count++; }
    if (tipologia == "Seleziona") { html += "<li>Selezionare la Tipologia</li>"; count++; }
    if (targa == "") { html += "<li>Inserire targa</li>"; count++; }
    if (proprieta == "") { html += "<li>Inserire la Proprietà del veicolo</li>"; count++; }
    if (acquisto == "") { html += "<li>Inserire Data di acquisto</li>"; count++; }
    if (km == "") { html += "<li>Inserire i Km</li>"; count++; }
    if (tagliando == "") { html += "<li>Inserire i Km per la cadenza del tagliando</li>"; count++; }
    if (distribuzione == "") { html += "<li>Inserire i Km per la cadenza della distribuzione</li>"; count++; }
    if (kml == "") { html += "<li>Inserire il consumo del Veicolo (km/l)</li>"; count++; }
    if (alimentazione == "") { html += "<li>Inserire alimentazione Veicolo</li>"; count++; }
    if (posti == "") { html += "<li>Inserire Posti Disponibili nel veicolo</li>"; count++; }

    html += "</ul>";
    if (count > 0) {
        $("#alert-error").removeClass("hide");
        $("#alert-error").html(html);
        setTimeout(closeAlarm, 4000);
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
            data.alimentazione = alimentazione;
            data.classeinq = classeinq;
            data.ztl = ztl;
            data.tagliando = tagliando;
            data.distribuzione = distribuzione;
            data.stato = stato;
            data.revisione = revisione;
            data.bollo = bollo;
            data.assicurazione = assicurazione;
            data.vendita = vendita;
            data.note = note;
            data.posti = posti;
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
function clearFilter() {
    $(".input-data-filter").val("");
    window.location.href = "/parcoauto/";
}
function activeFilter() {
    var link = "/parcoauto/";

    var stato = $("#input-stato-filter").val();
    var assegnatoa = $("#input-assegnatoa-filter").val();
    //var categoria = $("#input-categoria-filter").val();
    //var tipologia = $("#input-tipologia-filter").val();
    if ((stato != "") || (assegnatoa != "")) {
        link += "?filter=on";
    }
    if (stato != "") { link += "&stato=" + stato; }
    if (assegnatoa != "") { link += "&asse=" + assegnatoa; }
    //if (categoria != "") { link += "&cat=" + categoria; }
    //if (tipologia != "") { link += "&type=" + tipologia; }

    window.location.href = link;
}

function allCallServ() { 
    var filter = urlParams.get('filter');
    var statofilter = urlParams.get('stato');
    var assegnatofilter = urlParams.get('asse');

    //console.log("ALL CALL");
    $.ajax({
        url: 'api/getVeicles.php', 
        dataType: 'json', 
        data: JSON.stringify({ stato: statofilter, assegnatoa: assegnatofilter, filter: filter }),
        method: "POST",
        complete: function (obj) {
            var righe = obj.responseJSON;
            allData = righe;
            telepass = righe.telepass;
            multicard = righe.multicard;

            popVeicles(righe.veicoli);
            popMulticard(righe.multicard);
            popTelepass(righe.telepass);
            
            tablePaginationNew();
            tablePagination();
            closeCarica();
        }
    });

    $("#input-stato-filter").val(statofilter);
    if (assegnatofilter != null) {
        var asse = assegnatofilter.split(",");
        $("#input-assegnatoa-filter").val(asse);
    }
    
}



function cambioTab(tab) {
    var url = new URL(window.location.href);
    $(".buttNew").addClass("hide");
    $("#button-add-" + tab).removeClass("hide");
    $("#button-exp-" + tab).removeClass("hide");
    $(".tabs-veicolo").addClass("hide");
    $("#" + tab + "-page").removeClass("hide");
    $(".nav-link").removeClass("active");
    $("#tab-" + tab).addClass("active");
    if (tab != "veicoli") {
        url.searchParams.delete('length');
        url.searchParams.delete('search');
        window.history.replaceState(null, null, url);
    }
    localStorage['tab'] = tab;
}

function viewVeicle(id) {
    $("#dowload-assicurazione").addClass("hide");
    $("#dowload-libretto").addClass("hide");
    $(".view-veicle").text("");
    var veicolo = rowel[id];
    controlAlarm(veicolo.id);
    console.log("ID VIEW: ", veicolo);
    $("#view-tipologia").text(veicolo.tipologia);
    $("#view-proprieta").text(veicolo.proprieta);
    $("#view-marca").text(veicolo.marca);
    $("#view-modello").text(veicolo.modello);
    $("#view-targa").text(veicolo.targa);
    $("#view-assegnato").html(searchAssignedCars(veicolo.assegnatoa));
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
    $("#view-alimentazione").text(veicolo.alimentazione);
    $("#view-classeinq").text(veicolo.classeinq);
    $("#view-ztl").text(yesOrNo(veicolo.ztl));
    $("#view-note").html(veicolo.note);
    $("#view-posti").html(veicolo.posti);
    if (veicolo.ultimo_tagliando) {
       $("#ultimo-tagliando").html(veicolo.ultimo_tagliando); 
    } else {
        $("#ultimo-tagliando").html("Non registrato"); 
    }
    
    $("#view-telepass").text(searchTelepass(veicolo.telepass).seriale);
    $("#view-multicard").text(searchMulticard(veicolo.multicard).codice);
    
    console.log("RISPOSTA", rowel[id].id);

    $.ajax({
        method: "POST",
        url: "api/getDocumenti.php",
        data: JSON.stringify({ veicolo: rowel[id].id }),
        dataType: 'json',
        success: function (data) {
            console.log("RISPOSTA", data);
            var path = "../../portale/file/";
            for (i = 0; i < data.length; i++) { 
                var riga = data[i];
                if (riga.intervento == "Libretto" && riga.fattura != "") {
                    $("#dowload-libretto").removeClass("hide");
                    var filelibretto = path + riga.fattura;
                    $("#dowload-libretto a").attr("href", filelibretto);
                }
                if (riga.intervento == "Assicurazione" && riga.fattura != "") {
                    $("#dowload-assicurazione").removeClass("hide");
                    var fileass = path + riga.fattura;
                    $("#dowload-assicurazione a").attr("href", fileass);
                }
            }
            $('#viewVeicle').modal('show');
        },
        error: function (error) {
            console.log("funzione chiamata quando la chiamata fallisce", error);
            $('#viewVeicle').modal('show');
        }
    });

    
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
                $("#search-assegnato-input").append(element);
                $("#input-assegnatoa-filter").append(element);
                
            }
            allCallServ();
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

function delFileInt() {
    $("#input-linkintervento").val("");
    $("#filenameint span").text("");
    $("#filenameint").addClass("hide");
    $("#upload-int-file").removeClass("hide");
}

function uploadFattura(evt) {
    //var f = evt.target.files[0]; // FileList object
    var f = document.querySelector('#input-linkinterventoFile').files[0];
    console.log(f);
   
    // Closure to capture the file information.
    if (f) {
        var reader = new FileReader();
        reader.onload = (function (theFile) {
        return function (e) {
            var binaryData = e.target.result;
            //Converting Binary Data to base 64
            var base64String = window.btoa(binaryData);
            //showing file converted to base64
            $("#filenameint span").text(f.name);
            $("#filenameint").removeClass("hide");
            $("#upload-int-file").addClass("hide");
            document.getElementById('input-linkintervento').value = base64String;
        };
        })(f);
    }
    
    // Read in the image file as a data URL.
    reader.readAsBinaryString(f);
}

function addInterventiType(file, nomefile) {
    //var prezzo = $("#input-costointervento").val();
    var km = $("#input-kmintervento").val();
    var selectEl = selected[intTypeNum];
    var intervento = selectEl.name;
    var prezzo = selectEl.value;
    var data = $("#input-intgiorno").val();
    var selcount = selected.length - 1;

    console.log("Intervento:", intervento);
    console.log("Intervento NUM :", intTypeNum);
    if (prezzo == "") prezzo = 0;
    $.ajax({
        method: "POST",
        url: "api/insertIntervento.php",
        data: JSON.stringify({ veicolo: idRow, data: data, intervento: intervento, km: km, prezzo: prezzo, fattura: file, nomefile: nomefile }),
        contentType: "application/json",
        success: function (data) {
            if (intTypeNum < selcount) {
                intTypeNum++;  
                addInterventiType(file, nomefile);
            } else {
              console.log("funzione chiamata quando la chiamata ha successo (response 200)", data);
                addIntervento(idRow);
                $("#alert-success-intervento").removeClass("hide");
                $("#alert-success-intervento").text("Intervento veicolo inserito correttamente");
                setTimeout(function () {
                    $(".alert").addClass("hide");
                }, 2000);
                //$("#view-inter").addClass("hide");
                //$("#butt-inter").text("OK");  
                
            }
            
        },
        error: function (error) {
            console.log("funzione chiamata quando la chiamata fallisce", error);
            $("#alert-error").removeClass("hide");
            $("#alert-error").text(error);
        }
    });
}

function selCheckIns(type) {
    console.log("CHECK", type);
    var sum = $("#input-costointervento").val();
    if ($("#check-ins-" + type).is(':checked')) { 
        $("#spesa-" + type).prop("disabled", false);
        /*if (type == "libretto") {
            $("#input-costointervento").val(parseInt(sum) + 0);
        }*/
    } else {
        $("#spesa-" + type).prop("disabled", true);
        $("#spesa-" + type).val("");
        sumCheckIns();
    }
    
}

function sumCheckIns() {
    var spesa = 0;
    $('.spesa-input').each(function () {
        var val = $(this).val() * 1;
        if (val != "") {
           spesa = spesa + val; 
        } 
       
    });
    if (spesa == 0) {
            spesa = "";
    } else {
        spesa = spesa.toFixed(2);
    }
    $("#input-costointervento").val(spesa);
}

function interventoService(file, nomefile) {
    var prezzo = $("#input-costointervento").val();
    var km = $("#input-kmintervento").val();
    //var intervento = $("#input-intervento").val();
    var libretto = false;
    var onlylibretto = false;
    var data = $("#input-intgiorno").val();
    
    //if (!file) { var file = null; }
    var count = 0;
    var countVal = 0;
    selected = [];

    $('#sel-ins-int input:checked').each(function () {
        //selected.push($(this).attr('name'));
        var name = $(this).attr('name');
        var title = $(this).attr('title');
        var idname = name.toLowerCase();
        var value = $("#spesa-" + idname).val();

        if (name == "Libretto") {
            //value = 0;
            libretto = true;
        }
        if ((value == "") && (name != "Libretto")) countVal++;
        var el = { "name": title, "value": value };
        selected.push(el);
    });

    if ((selected.length == 1) && libretto) {
        onlylibretto = true;
    }
    var html = "<ul>";
    /*if (countVal > 0) {
        html += "<li>Inserire il costo di tutti gli interventi selezionati</li>"; count++;
    }*/
    //if (intervento == "Seleziona") { html += "<li>Selezionare il tipo di intervento</li>"; count++; }
    if (selected.length == 0) { html += "<li>Selezionare il tipo di intervento</li>"; count++; }
    if (km == "") { html += "<li>Inserire i km</li>"; count++; }
    if (data == "") { html += "<li>Inserire la data </li>"; count++; }
    //if ((prezzo == "") && !onlylibretto) { html += "<li>Inserire il costo dell'intervento</li>"; count++; }
    if (file == 'filerror') { html += "<li>Estensione file errato o troppo grande</li>"; count++; }
    //console.log(file);
    html += "</ul>";
    if (count > 0) {
        $("#alert-error-intervento").removeClass("hide");
        $("#alert-error-intervento").html(html);
    } else {

        $("#alert-error-intervento").addClass("hide");
        addInterventiType(file, nomefile);

       
    }
}
function interventoServiceDoc(file, nomefile) {
    var interv = null;
    for (var a = 0; a < interventi.length; a++){
        if (idIntervento == interventi[a].id) {
            interv = interventi[a];
        }
    }
    var fileIntName = nomefile.split(".");
    var namefile = interv.intervento + "_" + idIntervento + "." + fileIntName[1];
    $.ajax({
        method: "POST",
        url: "api/insertDocIntervento.php",
        data: JSON.stringify({ id: idIntervento, fattura: file, namefile: namefile}),
        contentType: "application/json",
        success: function (data) {
            console.log("funzione chiamata quando la chiamata ha successo (response 200)", data);
            
            addIntervento(idRow);
            $("#alert-success-intervento").removeClass("hide");
            $("#alert-success-intervento").text("Documento Caricato Correttamente");
            setTimeout(function () {
                $(".alert").addClass("hide");
            }, 2000);
            //$("#view-inter").addClass("hide");
            //$("#butt-inter").text("OK");
        },
        error: function (error) {
            console.log("funzione chiamata quando la chiamata fallisce", error);
            $("#alert-error").removeClass("hide");
            $("#alert-error").text(error);
        }
    });
}

function insIntervento() {
    var upload = document.querySelector('#input-linkinterventoFile').files[0];
    
    if (upload && controlFileType(upload) && idIntervento) {
        var reader = new FileReader();
        reader.readAsDataURL(upload);
        reader.onload = function () {
            file = reader.result;
            interventoServiceDoc(file, upload.name);
        };
    } else if (upload && controlFileType(upload)) {
        var reader = new FileReader();
        reader.readAsDataURL(upload);
        reader.onload = function () {
            file = reader.result;
            interventoService(file, upload.name);
        };
    } else if (upload && !controlFileType(upload)) {
        interventoService('filerror');
    } else {
        interventoService();
    }
}

function importCSV() {
    $("#import-csv").val("");
    $('#modalCSV').modal('show');
}

function yesSendCsv() {
    console.log("IMPORT", importXLS);
}

document.querySelector('#import-csv').addEventListener('change', function () {
    var reader = new FileReader();
    reader.onload = function () {
        var arrayBuffer = this.result,
            array = new Uint8Array(arrayBuffer),
            binaryString = String.fromCharCode.apply(null, array);
    
        /* Call XLSX */
        var workbook = XLSX.read(binaryString, {
            type: "binary"
        });

        /* DO SOMETHING WITH workbook HERE */
        var first_sheet_name = workbook.SheetNames[0];
        /* Get worksheet */
        var worksheet = workbook.Sheets[first_sheet_name];
        console.log(XLSX.utils.sheet_to_json(worksheet, {
            raw: true
        }));
        importXLS = XLSX.utils.sheet_to_json(worksheet, {
            raw: true
        });
    }
    reader.readAsArrayBuffer(this.files[0]);
});

function caricaInterventi() {
    $.ajax({
        url: 'api/getInterventi.php',
        dataType: 'json', //restituisce un oggetto JSON
        complete: function (interventi) {
            //console.log("Interventi", interventi.responseJSON);
            interventi = interventi.responseJSON;
            var somma = 0;
            for (i = 0; i < interventi.length; i++) {
                var riga = interventi[i];
                var data = riga.data.split("/");
                //console.log("DATA:", data);
                if ((data[2] == d.getFullYear()) && riga.prezzo) {
                    somma = somma + parseFloat(riga.prezzo);
                }
            }
            //console.log("SOMMA", somma);
            $("#spesatorint").text(formatCurrency(somma));
            $("#title-int-spesa").text(d.getFullYear());
        }
    });
}



function convertUsdInEuro() {
    if (giri < carburantiUSD.length) {
        $.ajax({
            url: `https://v6.exchangerate-api.com/v6/751431015b56c692d1d5e837/latest/USD`, // URL dell'API
            method: "GET",
            success: function (response) {
                const rate = response.conversion_rates.EUR; // Ottieni il tasso di cambio USD -> EUR
                const amountInEUR = carburantiUSD[giri] * rate; // Converte l'importo
                console.log(`L'importo in EUR è: ${amountInEUR.toFixed(2)}`);
                carburantiUSD[giri] = amountInEUR;
                giri++;
                convertUsdInEuro();
            },
            error: function (error) {
                console.log("Errore nella chiamata API:", error);
            }
        }); 
    } else {
        $.ajax({
            method: "POST",
            url: "api/addMediaCarburanti.php",
            data: JSON.stringify({ benzina: carburantiUSD[0], diesel: carburantiUSD[1], gpl: carburantiUSD[2], day: strDate }),
            contentType: "application/json",
            success: function (data) {
                medieCarburantiDb()
            },
            error: function (error) {
                console.log("funzione chiamata quando la chiamata fallisce", error);
                
            }
        });
    }   
}

function mediaCarburanti() {
    $("#btn-media-carb").prop("disabled", true);
    $.ajax({
        url: 'api/mediaCarburanti.php',
        dataType: 'json', //restituisce un oggetto JSON
        complete: function (data) {
            console.log("RISPOSTA CARBURANTI: ", data.responseJSON);
            var resp = data.responseJSON;
            if (resp.success) {
                var bodyres = resp.result;
                carburantiUSD = [bodyres.gasoline, bodyres.diesel, bodyres.lpg];
                convertUsdInEuro();

                $("#btn-media-carb").prop("disabled", true);
            }
        }
    });
}

function medieCarburantiDb() {
    $.ajax({
        method: "POST",
        url: 'api/getMedieCarburanti.php',
        data: JSON.stringify({ day: strDate }),
        dataType: 'json', //restituisce un oggetto JSON
        complete: function (data) {  
            caburantiDB = data.responseJSON;
            console.log("RISPOSTA CARBURANTI DB: ", caburantiDB);
            var ricarica = 0;
            for (var a = 0; a < caburantiDB.length; a++){
                $("#input-benzina-price").val(caburantiDB[a].benzina);
                $("#input-diesel-price").val(caburantiDB[a].diesel);
                $("#input-gpl-price").val(caburantiDB[a].gpl);
                $(".benzina-price").text(formatCurrency(caburantiDB[a].benzina));
                $(".diesel-price").text(formatCurrency(caburantiDB[a].diesel));
                $(".gpl-price").text(formatCurrency(caburantiDB[a].gpl));
            }

            //if (caburantiDB.length == 0) mediaCarburanti();
        }
    });
}

function addCarburanti() {
    var benzina = $("#input-benzina-price").val();
    var diesel = $("#input-diesel-price").val();
    var gpl = $("#input-gpl-price").val();
    benzina = benzina.replace(",", ".");
    diesel = diesel.replace(",", ".");
    gpl = gpl.replace(",", ".");
    $.ajax({
        method: "POST",
        url: "api/addMediaCarburanti.php",
        data: JSON.stringify({ benzina: benzina, diesel: diesel, gpl: gpl, day: strDate }),
        contentType: "application/json",
        success: function (data) {
            medieCarburantiDb()
        },
        error: function (error) {
            console.log("funzione chiamata quando la chiamata fallisce", error);

        }
    });
}

// Attiva il trascinamento quando la modale viene mostrata
const modalElement = document.getElementById('viewVeicle');
modalElement.addEventListener('shown.bs.modal', () => {
    makeModalDraggable(modalElement);
});

const modalElement1 = document.getElementById('viewGestEl');
modalElement1.addEventListener('shown.bs.modal', () => {
    makeModalDraggable(modalElement1);
});

const modalElement2 = document.getElementById('viewListEl');
modalElement2.addEventListener('shown.bs.modal', () => {
    makeModalDraggable(modalElement2);
});

const modalElement3 = document.getElementById('viewListKm');
modalElement3.addEventListener('shown.bs.modal', () => {
    makeModalDraggable(modalElement3);
});

$(document).ready(function () {
    openCarica();
    if (localStorage['tab']) {
        cambioTab(localStorage['tab'])
    }
    usersCall();
    caricaInterventi();
    medieCarburantiDb();
    for (var a = 0; a < mesiSchema.length; a++){
        var opt = '<option value="' + mesiSchema[a].val + '">' + mesiSchema[a].mese + '</option>';
        $("#input-mesekmrichiesta").append(opt);
    }

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
    new DateTime(document.getElementById('input-attivazionetelepass'), {
        format: 'DD/MM/YYYY'
    });
    deleteNotifiche("parcoauto");
    
});

  
    

           