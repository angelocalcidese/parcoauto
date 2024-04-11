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