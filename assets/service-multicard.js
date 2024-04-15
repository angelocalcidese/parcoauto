function popMulticard(righe) {
    multicard = righe;
    for (i = 0; i < righe.length; i++) {
        var riga = righe[i];
        var element = '<td><i class="fa-solid fa-credit-card" title="' + riga.id + '"></i></td>';
        element += "<td>" + riga.codice + "</td>";
        element += "<td>" + riga.tipologia + "</td>";
        element += "<td>" + riga.tipocontratto + "</td>";
        element += "<td>" + searchVeicle(riga.veicolo) + "</td>";
        element += "<td>" + statoActive(riga.stato) + "</td>";
        element += "<td>" + riga.scadenzacarta + "</td>";
        element += "<td>" + yesOrNo(riga.rinnovabile) + "</td>";
        element += "<td>" + riga.pin + "</td>";
        element += '<td><button type="button" class="btn btn-sm btn-outline-secondary" onclick="viewListCars(' + riga.id + ')"><i class="fa-solid fa-plus"></i></i></button></td>';
        element += '<td><button type="button" class="btn btn-sm btn-outline-secondary"><i class="fa-solid fa-pen-to-square"></i></button></td>';
        
        $("<tr/>")
            .append(element)
            .appendTo("#tabella-multicard");
    }
}
function openNewRowMulticard() {
    cleanInput();
    $('#addRow2').modal('show');
}

function controlForm() {
    var codicecard = $("#input-codicecard").val();
    var tipocard = $("#input-tipocard").val();
    var codcliente = $("#input-codcliente").val();
    var statocliente = $("#input-statocliente").val();
    var validitaterritoriale = $("#input-validitaterritoriale").val();
    var rinnovabile = $("#input-rinnovabile").val();
    var pincard = $("#input-pincard").val();
    

    var count = 0;
    var html = "<ul>";
    if (codicecard == "") { html += "<li>Inserire Codice Card</li>"; count++; }
    if (tipocard == "") { html += "<li>Inserire Tipologia Card</li>"; count++; }
    if (codcliente == "") { html += "<li>inserire Codice Cliente</li>"; count++; }

    html += "</ul>";
    if (count > 0) {
        $("#alert-error").removeClass("hide");
        $("#alert-error").html(html);
    } else {
        $("#alert-error").addClass("hide");
        if (idRow) {
            var data = searchData(idRow);
            data.codicecard = codicecard;
            data.tipocard = tipocard;
            data.codcliente = codcliente;
            data.statocliente = statocliente;
            data.validitaterritoriale = validitaterritoriale;
            data.rinnovabile = rinnovabile;
            data.pincard = pincard;
            modRowMulticard(data);
        } else {
            addRowMulticard();
        }
    }
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

function addCars(cars) {
    for (var a = 0; a < cars.length; a++) {
        var check = '<li class="list-group-item">';
        check += '<input class="form-check-input check-cars" type = "checkbox" onChange="modCars(' + cars[a].id + ')" value = "" id="checkcars-' + cars[a].id + '" ';
        check += ' >  <b>Targa: </b>' + cars[a].targa + '  <b>Assegnata a: </b> ' + searchAssignedCars(cars[a].assegnatoa) + '</li >';
        $('#check-cars').append(check);
        }
}
 

function viewListCars(id) {
    idRow = id;
    $(".check-cars").prop('checked', false);
    //callCars(id);
    $('#viewListCars').modal('show');
}
