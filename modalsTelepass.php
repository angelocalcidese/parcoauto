<div class="modal fade" id="addRow3" tabindex="-1" aria-labelledby="addUserLabel" aria-hidden="true">
    <div class="modal-dialog ">
        <div class="modal-content">
            <div class="modal-body">
                <div class="alert alert-primary hide" id="alert-success-telepass" role="alert"></div>
                <div class="alert alert-danger hide" id="alert-error-telepass" role="alert"></div>

                <form id="form-add-telepass">
                    <div class="row">
                        <div class="col">
                            <div class="mb-3">
                                <label for="input-tipologiatelepass" class="col-form-label">Tipologia Contratto (Telepass, UnipolMove ecc.):</label>
                                <input type="text" class="form-control input-insert" id="input-tipologiatelepass">
                            </div>
                            <div class="mb-3">
                                <label for="input-serialetelepass" class="col-form-label">Serial Number:</label>
                                <input type="text" class="form-control input-insert" id="input-serialetelepass">
                            </div>
                            <div class="mb-3">
                                <label for="input-codicetelepass" class="col-form-label">Codice Contratto:</label>
                                <input type="text" class="form-control input-insert" id="input-codicetelepass">
                            </div>
                            <div class="mb-3">
                                <label for="input-attivazionetelepass" class="col-form-label">Data Attivazione:</label>
                                <input type="text" class="form-control input-insert" id="input-attivazionetelepass">
                            </div>
                            <div class="mb-3">
                                <label for="input-statotelepass" class="col-form-label">Stato Apparecchio:</label>
                                <select class="form-select input-insert" id="input-statotelepass">
                                    <option selected value="1">Attivo</option>
                                    <option value="0">Disattiva</option>
                                </select>
                            </div>
                            <div class="mb-3">
                                <label for="input-territorialetelepass" class="col-form-label">Validità territoriale Contratto:</label>
                                <select class="form-select input-insert" id="input-territorialetelepass">
                                    <option selected>Nazionale</option>
                                    <option>Comunità Europea</option>
                                </select>
                            </div>


                        </div>
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" onClick="closeModal()">Chiudi</button>
                <button type="button" class="btn btn-primary" id="add-button-telepass" onClick="controlFormTelepass()">Inserisci</button>
            </div>
        </div>
    </div>
</div>
<div class="modal fade" id="viewListCarsTelepass" tabindex="-1" aria-labelledby="viewListLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="addListLabel">Targhe da Associare alla Telepass</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" onclick="closeModal()"></button>
            </div>
            <div class="modal-body">
                <div class="container-fluid">
                    <ul class="list-group" id="check-cars-telepass">
                    </ul>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" onclick="closeModal()">Chiudi</button>
            </div>
        </div>
    </div>
</div>