var multicard = [];
var idMulti = null;
var mesemulti = [];
var tipocontratto = [];
function searchTargaMulti(id) {
    var res = "-";
    for (var a = 0; a < rowel.length; a++){
        if (rowel[a].multicard == id) {
             if (res != "-") {
                 res = res + ' <a href="#" data-toggle="tooltip" data-bs-html="true" title="' + searchAssignedCars(rowel[a].assegnatoa) + '" class="link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" onClick="viewVeicle(' + a + ')">' + rowel[a].targa + '</a>';
            } else {
                 res = '<a href="#" data-toggle="tooltip" data-bs-html="true" title="' + searchAssignedCars(rowel[a].assegnatoa) + '" class="link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" onClick="viewVeicle(' + a + ')">' + rowel[a].targa + '</a>';

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
        element += '<td style="text-align:center"><button type="button" class="btn btn-sm btn-outline-secondary" onclick="choiceYearMulticard(' + riga.id + ')"><i class="fa-solid fa-coins"></i></button></td>';
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

        if (riga.stato == "1") {
            var typecontr = riga.tipocontratto.replace(" ", "");
            var listspesa = '<tr class="allmulti-lists list-paid-' + typecontr +' hide" ><th scope="row" class="text-start">' + riga.codice + '</th>'; 
            listspesa += '<td><div class="container"><div class="row"><div class="col-md-2">&euro;</div>';
            listspesa += '<div class="col-md-8"><input class="form-control form-control-sm mese-card" id="spesa-list-' + riga.id + '" type="number" placeholder="0,00"></div>';
            listspesa += '<div class="col-md-2"><button type="button" class="btn btn-outline-success btn-sm" onclick="saveForMonthAngYear(' + riga.id + ')">Save</button></div></div></div></td>';
            listspesa += '<td id="spesalist-messaggio-' + riga.id + '"> <p class="text-secondary"><i class="fa-regular fa-share-from-square"></i> Non Caricato</p></td></tr>';
            //$("<tr/>").append(listspesa).appendTo("#yaear-month-spesa-lists");

            $("#yaear-month-spesa-lists").append(listspesa);
            
            var found = false;
            for (var a = 0; a < tipocontratto.length; a++){
                if (tipocontratto[a] == riga.tipocontratto) {
                    found = true;
                }
            }
            if (!found) tipocontratto.push(riga.tipocontratto);
        }
        

    }

    console.log("TIPI CONTRATTO", tipocontratto);
    for (var a = 0; a < tipocontratto.length; a++) {
        $("#input-typemulticards").append('<option>' + tipocontratto[a] + '</option>');
    }
    var totList = '<tr class="table-secondary"><td></td><td><b>Totale: <span id="tot-spesa-list">&euro; 0,00</span></b></td><td></td></tr>';
    $("#yaear-month-spesa-lists").append(totList);
    //$("<tr/>").append(totList).appendTo("#yaear-month-spesa-lists");
}
function openModalYearMonthCard() {
    $("#input-mesemulticards").val(d.getMonth() + 1);
    $("#input-annomulticards").val(d.getFullYear());
    $("#choiceYearAndMonth").modal("show");
}

function openListSpesa() {
    $(".allmulti-lists").addClass("hide");
    var mese = $("#input-mesemulticards").val();
    var anno = $("#input-annomulticards").val();
    var tipocontratto = $("#input-typemulticards").val();
    $("#spesa-fornitore-list").text(tipocontratto);
    tipocontr = tipocontratto.replace(" ", "");
    $(".mese-card").val("");

    for (var a = 0; a < multicard.length; a++){
        $("#spesalist-messaggio-" + multicard[a].id).html('<p class="text-secondary"><i class="fa-regular fa-share-from-square"></i> Non Caricato</p>');
    }

    $(".list-paid-" + tipocontr).removeClass("hide");
    
    console.log("TIPOCONTRATTO", tipocontratto);
    $("#spesa-mese-list").text(mese);
    $("#anno-mese-list").text(anno);
    
    $.ajax({
        method: "POST",
        url: "api/getMultiPaidMonthYear.php",
        data: JSON.stringify({ mese: mese, anno: anno, tipocontratto: tipocontratto }),
        dataType: 'json',
        success: function (data) {
             console.log("MULTICARD PAID", data);
            mesemulti = data;
            $("#choiceYearAndMonth").modal("hide");
            $("#insertSpesaAllMulticard").modal("show");
            var spesatot = 0;
            for (var a = 0; a < data.length; a++) {
                $("#spesa-list-" + data[a].codice).val(data[a].spesa);
                $("#spesalist-messaggio-" + data[a].codice).html('<p class="text-success"><i class="fa-solid fa-circle-check"></i> Presente</p>');
                spesatot = spesatot + parseFloat(data[a].spesa);
            }
            $("#tot-spesa-list").text(formatCurrency(spesatot));
        },
        error: function (error) {
            console.log("funzione chiamata quando la chiamata fallisce", error);
        }
    });
}

function choiceYearMulticard(id) {
    idMulti = searchMulticard(id);
    var card = searchMulticard(id);
    $("#modalChoiceMulticard").modal("show");
    $(".multicard-name").html("<b>" + card.codice + "</b>");
}

function searchYear() {
    $(".mese-card").val("");
    var anno = $("#input-annomulticard").val();
    $("#multicard-year").text(anno);
    var totalespesa = 0;
    for (var a = 1; a <= 12; a++) {
          $("#stato-mese-multi-" + a).html('<p class="text-secondary"><i class="fa-regular fa-share-from-square"></i> Non Caricato</p>');
        }
    $("#totale-spesa-multi").text(formatCurrency(totalespesa));
    
    $.ajax({
        method: "POST",
        url: "api/getMultiPaid.php",
        data: JSON.stringify({ id: idMulti.id, anno: anno}),
        dataType: 'json',
        success: function (data) {
           // console.log("MULTICARD PAID", data);
            mesemulti = data;
            $("#modalChoiceMulticard").modal("hide");

            for (var a = 0; a < data.length; a++){
                $("#multi-mounth-" + data[a].mese).val(data[a].spesa);
                $("#stato-mese-multi-" + data[a].mese).html('<p class="text-success"><i class="fa-solid fa-circle-check"></i> Presente</p>');
                totalespesa = totalespesa + parseFloat(data[a].spesa);
            }
            
            $("#totale-spesa-multi").text(formatCurrency(totalespesa));
            $("#insertMulticardSpesa").modal("show");
        },
        error: function (error) {
            console.log("funzione chiamata quando la chiamata fallisce", error);
        }
    });    
}

function saveForMonthAngYear(codice) {
    var mese = $("#input-mesemulticards").val();
    var anno = $("#input-annomulticards").val();
    var spesa = $("#spesa-list-" + codice).val();
    var preso = false;
    idMulti = searchMulticard(codice);
    for (var a = 0; a < mesemulti.length; a++) {
        if (mesemulti[a].codice == codice) {
            preso = true;
        }
    }

    if (preso) {
        editPaid(anno, mese, codice, spesa);
    } else {
        addPaid(anno, mese, codice, spesa)
    }
}

function saveMultiPaid(id) {
    var anno = $("#input-annomulticard").val();
    var spesa = $("#multi-mounth-" + id).val();
    var preso = false;

    for (var a = 0; a < mesemulti.length; a++){
        if (mesemulti[a].mese == id) {
            preso = true;
        }
    }

    if (preso) {
        editPaid(anno, id, idMulti, spesa, true);
    } else {
        addPaid(anno, id, idMulti, spesa, true)
    }
}

function addPaid(anno, mese, codice, spesa, single) { 
    $.ajax({
        method: "POST",
        url: "api/insertMultiPaid.php",
        data: JSON.stringify({ idcodice: idMulti.id, anno: anno, mese: mese, spesa: spesa, tipocontratto: idMulti.tipocontratto }),
        contentType: "application/json",
        success: function (data) {
            if (single) { searchYear(); } else { openListSpesa(); }
        },
        error: function (error) {
            console.log("funzione chiamata quando la chiamata fallisce", error);
        }
    });
}

function editPaid(anno, mese, codice, spesa, single) {
    $.ajax({
        method: "POST",
        url: "api/modMultiPaid.php",
        data: JSON.stringify({ idcodice: idMulti.id, anno: anno, mese: mese, spesa: spesa, tipocontratto: idMulti.tipocontratto }),
        contentType: "application/json",
        success: function (data) {
            if (single) { searchYear(); } else { openListSpesa(); }
        },
        error: function (error) {
            console.log("funzione chiamata quando la chiamata fallisce", error);
        }
    });
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
    console.log("DATA Multicard: ", data);
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