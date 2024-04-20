<div class="modal fade" id="addRow2" tabindex="-1" aria-labelledby="addUserLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-body">
                <div class="alert alert-primary hide" id="alert-success-multicard" role="alert"></div>
                <div class="alert alert-danger hide" id="alert-error-multicard" role="alert"></div>

                <form id="form-add-multicard">
                    <div class="row">
                        <div class="col">

                            <div class="mb-3">
                                <label for="input-codicecard" class="col-form-label">Codice Card:</label>
                                <input type="text" class="form-control input-insert" id="input-codicecard">
                            </div>
                            <div class="mb-3">
                                <label for="input-statocard" class="col-form-label">Stato Card:</label>
                                <select class="form-select input-insert" id="input-statocard">
                                    <option selected value="1">Attiva</option>
                                    <option value="0">Disattiva</option>
                                </select>
                            </div>
                            <div class="mb-3">
                                <label for="input-tipologiaCard" class="col-form-label">Tipologia Carta:</label>
                                <input type="text" class="form-control input-insert" id="input-tipologiaCard">
                            </div>
                            <div class="mb-3">
                                <label for="input-tipocard" class="col-form-label">Gestore Card:</label>
                                <input type="text" class="form-control input-insert" id="input-tipocard">
                            </div>
                            <div class="mb-3">
                                <label for="input-codcliente" class="col-form-label">Codice Cliente:</label>
                                <input type="text" class="form-control input-insert" id="input-codcliente">
                            </div>
                            <div class="mb-3">
                                <label for="input-statocliente" class="col-form-label">Stato Cliente:</label>
                                <select class="form-select input-insert" id="input-statocliente">
                                    <option selected value="1">Attivo</option>
                                    <option value="0">Disattivo</option>
                                </select>
                            </div>

                        </div>
                        <div class="col">
                            <div class="mb-3">
                                <label for="input-validitaterritoriale" class="col-form-label">Validità territoriale card:</label>
                                <select class="form-select input-insert" id="input-validitaterritoriale">
                                    <option selected>Nazionale</option>
                                    <option>Comunità Europea</option>
                                </select>
                            </div>
                            <div class="mb-3">
                                <label for="input-rinnovabile" class="col-form-label">Rinnovabile:</label>
                                <select class="form-select input-insert" id="input-rinnovabile">
                                    <option selected value="1">Si</option>
                                    <option value="0">No</option>
                                </select>
                            </div>
                            <div class="mb-3">
                                <label for="input-pincard" class="col-form-label">Pin:</label>
                                <input type="text" class="form-control input-insert numberInput" id="input-pincard">
                            </div>
                            <div class="mb-3">
                                <label for="input-scadenzaCard" class="col-form-label">Scadenza:</label>
                                <input type="text" class="form-control input-insert" id="input-scadenzaCard">
                            </div>
                            <h6 class="mt-4">prodotti Acquistabili</h6>
                            <ul class="list-group mt-3">
                                <li class="list-group-item">
                                    <input class="form-check-input check-serviziMulti" type="checkbox" value="" id="input-carburanti">
                                    Carburanti
                                </li>
                                <li class="list-group-item">
                                    <input class="form-check-input check-serviziMulti" type="checkbox" value="" id="input-lubrificanti">
                                    Lubrificanti
                                </li>
                                <li class="list-group-item">
                                    <input class="form-check-input check-serviziMulti" type="checkbox" value="" id="input-accessoriCard">
                                    Lavaggi e accessori per i tuoi mezzi
                                </li>
                                <li class="list-group-item">
                                    <input class="form-check-input check-serviziMulti" type="checkbox" value="" id="input-gplmetano">
                                    GPL e Metano
                                </li>
                            </ul>

                        </div>
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" onclick="closeModal()">Chiudi</button>
                <button type="button" class="btn btn-primary" id="add-button-multicard" onClick="controlFormMulticard()">Inserisci</button>
            </div>
        </div>
    </div>
</div>
<div class="modal fade" id="viewListCars" tabindex="-1" aria-labelledby="viewListLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="addListLabel">Targhe da Associare alla Multicard</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" onclick="closeModal()"></button>
            </div>
            <div class="modal-body">
                <div class="container-fluid">
                    <ul class="list-group" id="check-cars">
                    </ul>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" onclick="closeModal()">Chiudi</button>
            </div>
        </div>
    </div>
</div>