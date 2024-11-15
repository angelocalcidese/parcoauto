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
<div class="modal fade" id="modalChoiceMulticard" tabindex="-1" aria-labelledby="choiceModalMulticard" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content rounded-3 shadow">
            <div class="modal-body p-4 text-center">
                <h5 class="mb-0">Seleziona l'anno di ricerca per la Multicard: <span class="multicard-name"></span></h5>
                <select class="form-select mt-4" id="input-annomulticard">
                    <option selected>2024</option>
                    <option>2023</option>
                </select>
            </div>
            <div class="modal-footer flex-nowrap p-0">
                <button type="button" class="btn btn-lg btn-link fs-6 text-decoration-none col-6 py-3 m-0 rounded-0 border-end" onClick="searchYear()"><strong>Cerca</strong></button>
                <button type="button" class="btn btn-lg btn-link fs-6 text-decoration-none col-6 py-3 m-0 rounded-0" data-bs-dismiss="modal">Chiudi</button>
            </div>
        </div>
    </div>
</div>
<div class="modal fade" id="insertMulticardSpesa" tabindex="-1" aria-labelledby="insertMulticardSpesa" aria-hidden="true">
    <div class="modal-dialog  modal-lg">
        <div class="modal-content rounded-3 shadow">
            <div class="modal-header">
                <h5 class="modal-title">Gestisci Anno <span id="multicard-year"></span> della multicard: <span class="multicard-name"></span></h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body p-4 text-center">

                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Mese</th>
                            <th scope="col">Spesa</th>
                            <th scope="col">Stato</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Gennaio</td>
                            <td>
                                <div class="container">
                                    <div class="row">
                                        <div class="col-md-2">&euro;</div>
                                        <div class="col-md-8" class="align-self-end"><input class="form-control form-control-sm mese-card" id="multi-mounth-1" type="number" placeholder="0,00"></div>
                                        <div class="col-md-2"><button type="button" class="btn btn-outline-success btn-sm" onclick="saveMultiPaid(1)">Save</button></div>

                                    </div>
                                </div>

                            </td>
                            <td id="stato-mese-multi-1" class="text-center">
                                <p class="text-secondary">Non Caricato</p>
                            </td>
                        </tr>
                        <tr>
                            <td>Febbraio</td>
                            <td>
                                <div class="container">
                                    <div class="row">
                                        <div class="col-md-2">&euro;</div>
                                        <div class="col-md-8"><input class="form-control form-control-sm mese-card" id="multi-mounth-2" type="number" placeholder="0,00"></div>
                                        <div class="col-md-2"><button type="button" class="btn btn-outline-success btn-sm" onclick="saveMultiPaid(2)">Save</button></div>
                                    </div>
                                </div>

                            </td>
                            <td id="stato-mese-multi-2" class="text-center">
                                <p class="text-secondary">Non Caricato</p>
                            </td>
                        </tr>
                        <tr>
                            <td>Marzo</td>
                            <td>
                                <div class="container">
                                    <div class="row">
                                        <div class="col-md-2">&euro;</div>
                                        <div class="col-md-8"><input class="form-control form-control-sm mese-card" id="multi-mounth-3" type="number" placeholder="0,00"></div>
                                        <div class="col-md-2"><button type="button" class="btn btn-outline-success btn-sm" onclick="saveMultiPaid(3)">Save</button></div>
                                    </div>
                                </div>

                            </td>
                            <td id="stato-mese-multi-3" class="text-center">
                                <p class="text-secondary">Non Caricato</p>
                            </td>
                        </tr>
                        <tr>
                            <td>Aprile</td>
                            <td>
                                <div class="container">
                                    <div class="row">
                                        <div class="col-md-2">&euro;</div>
                                        <div class="col-md-8"><input class="form-control form-control-sm mese-card" id="multi-mounth-4" type="number" placeholder="0,00"></div>
                                        <div class="col-md-2"><button type="button" class="btn btn-outline-success btn-sm" onclick="saveMultiPaid(4)">Save</button></div>
                                    </div>
                                </div>

                            </td>
                            <td id="stato-mese-multi-4" class="text-center">
                                <p class="text-secondary">Non Caricato</p>
                            </td>
                        </tr>
                        <tr>
                            <td>Maggio</td>
                            <td>
                                <div class="container">
                                    <div class="row">
                                        <div class="col-md-2">&euro;</div>
                                        <div class="col-md-8"><input class="form-control form-control-sm mese-card" id="multi-mounth-5" type="number" placeholder="0,00"></div>
                                        <div class="col-md-2"><button type="button" class="btn btn-outline-success btn-sm" onclick="saveMultiPaid(5)">Save</button></div>
                                    </div>
                                </div>

                            </td>
                            <td id="stato-mese-multi-5" class="text-center">
                                <p class="text-secondary">Non Caricato</p>
                            </td>
                        </tr>
                        <tr>
                            <td>Giugno</td>
                            <td>
                                <div class="container">
                                    <div class="row">
                                        <div class="col-md-2">&euro;</div>
                                        <div class="col-md-8"><input class="form-control form-control-sm mese-card" id="multi-mounth-6" type="number" placeholder="0,00"></div>
                                        <div class="col-md-2"><button type="button" class="btn btn-outline-success btn-sm" onclick="saveMultiPaid(6)">Save</button></div>
                                    </div>
                                </div>

                            </td>
                            <td id="stato-mese-multi-6" class="text-center">
                                <p class="text-secondary">Non Caricato</p>
                            </td>
                        </tr>
                        <tr>
                            <td>Luglio</td>
                            <td>
                                <div class="container">
                                    <div class="row">
                                        <div class="col-md-2">&euro;</div>
                                        <div class="col-md-8"><input class="form-control form-control-sm mese-card" id="multi-mounth-7" type="number" placeholder="0,00"></div>
                                        <div class="col-md-2"><button type="button" class="btn btn-outline-success btn-sm" onclick="saveMultiPaid(7)">Save</button></div>
                                    </div>
                                </div>

                            </td>
                            <td id="stato-mese-multi-7" class="text-center">
                                <p class="text-secondary">Non Caricato</p>
                            </td>
                        </tr>
                        <tr>
                            <td>Agosto</td>
                            <td>
                                <div class="container">
                                    <div class="row">
                                        <div class="col-md-2">&euro;</div>
                                        <div class="col-md-8"><input class="form-control form-control-sm mese-card" id="multi-mounth-8" type="number" placeholder="0,00"></div>
                                        <div class="col-md-2"><button type="button" class="btn btn-outline-success btn-sm" onclick="saveMultiPaid(8)">Save</button></div>
                                    </div>
                                </div>

                            </td>
                            <td id="stato-mese-multi-8" class="text-center">
                                <p class="text-secondary">Non Caricato</p>
                            </td>
                        </tr>
                        <tr>
                            <td>Settembre</td>
                            <td>
                                <div class="container">
                                    <div class="row">
                                        <div class="col-md-2">&euro;</div>
                                        <div class="col-md-8"><input class="form-control form-control-sm mese-card" id="multi-mounth-9" type="number" placeholder="0,00"></div>
                                        <div class="col-md-2"><button type="button" class="btn btn-outline-success btn-sm" onclick="saveMultiPaid(9)">Save</button></div>
                                    </div>
                                </div>

                            </td>
                            <td id="stato-mese-multi-9" class="text-center">
                                <p class="text-secondary">Non Caricato</p>
                            </td>
                        </tr>
                        <tr>
                            <td>Ottobre</td>
                            <td>
                                <div class="container">
                                    <div class="row">
                                        <div class="col-md-2">&euro;</div>
                                        <div class="col-md-8"><input class="form-control form-control-sm mese-card" id="multi-mounth-10" type="number" placeholder="0,00"></div>
                                        <div class="col-md-2"><button type="button" class="btn btn-outline-success btn-sm" onclick="saveMultiPaid(10)">Save</button></div>
                                    </div>
                                </div>

                            </td>
                            <td id="stato-mese-multi-10" class="text-center">
                                <p class="text-secondary">Non Caricato</p>
                            </td>
                        </tr>
                        <tr>
                            <td>Novembre</td>
                            <td>
                                <div class="container">
                                    <div class="row">
                                        <div class="col-md-2">&euro;</div>
                                        <div class="col-md-8"><input class="form-control form-control-sm mese-card" id="multi-mounth-11" type="number" placeholder="0,00"></div>
                                        <div class="col-md-2"><button type="button" class="btn btn-outline-success btn-sm" onclick="saveMultiPaid(11)">Save</button></div>
                                    </div>
                                </div>

                            </td>
                            <td id="stato-mese-multi-11" class="text-center">
                                <p class="text-secondary">Non Caricato</p>
                            </td>
                        </tr>
                        <tr>
                            <td>Dicembre</td>
                            <td>
                                <div class="container">
                                    <div class="row">
                                        <div class="col-md-2">&euro;</div>
                                        <div class="col-md-8"><input class="form-control form-control-sm mese-card" id="multi-mounth-12" type="number" placeholder="0,00"></div>
                                        <div class="col-md-2"><button type="button" class="btn btn-outline-success btn-sm" onclick="saveMultiPaid(12)">Save</button></div>
                                    </div>
                                </div>

                            </td>
                            <td id="stato-mese-multi-12" class="text-center">
                                <p class="text-secondary">Non Caricato</p>
                            </td>
                        </tr>
                        <tr>
                            <td>Totale Spesa Annuale:</td>
                            <td>
                                <p class="h4" id="totale-spesa-multi"></p>
                            </td>
                            <td class="text-center">

                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="modal-footer p-4 text-center">
                <button type="button" class="btn btn-outline-secondary btn-sm" data-bs-dismiss="modal">Chiudi</button>
            </div>
        </div>
    </div>
</div>
<div class="modal fade" id="choiceYearAndMonth" tabindex="-1" aria-labelledby="choiceYearAndMonth" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content rounded-3 shadow">
            <div class="modal-body p-4 text-center">
                <h5 class="mb-0">Seleziona Mese, Anno per visualizzare le spese delle multicard</h5>
                <div class="container">
                    <div class="row">
                        <div class="col-md-4">
                            <select class="form-select mt-4" id="input-typemulticards">
                            </select>
                        </div>
                        <div class="col-md-4">
                            <select class="form-select mt-4" id="input-mesemulticards">
                                <option selected value="1">Gennaio</option>
                                <option value="2">Febbraio</option>
                                <option value="3">Marzo</option>
                                <option value="4">Aprile</option>
                                <option value="5">Maggio</option>
                                <option value="6">Giugno</option>
                                <option value="7">Luglio</option>
                                <option value="8">Agosto</option>
                                <option value="9">Settembre</option>
                                <option value="10">Ottobre</option>
                                <option value="11">Novembre</option>
                                <option value="12">Dicembre</option>
                            </select>
                        </div>
                        <div class="col-md-4">
                            <select class="form-select mt-4" id="input-annomulticards">
                                <option selected>2024</option>
                                <option>2023</option>
                            </select>
                        </div>
                    </div>
                </div>

            </div>
            <div class="modal-footer flex-nowrap p-0">
                <button type="button" class="btn btn-lg btn-link fs-6 text-decoration-none col-6 py-3 m-0 rounded-0 border-end" onClick="openListSpesa()"><strong>Cerca</strong></button>
                <button type="button" class="btn btn-lg btn-link fs-6 text-decoration-none col-6 py-3 m-0 rounded-0" data-bs-dismiss="modal">Chiudi</button>
            </div>
        </div>
    </div>
</div>

<div class="modal fade" id="insertSpesaAllMulticard" tabindex="-1" aria-labelledby="insertSpesaAllMulticard" aria-hidden="true">
    <div class="modal-dialog  modal-lg">
        <div class="modal-content rounded-3 shadow">
            <div class="modal-header">
                <h5 class="modal-title">Gestisci le spese delle multicard del periodo <span id="spesa-mese-list">MESE</span>/<span id="anno-mese-list">ANNO</span>
                    del Forniore <span id="spesa-fornitore-list">FORNITORE</span></h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body p-4 text-center">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col" class="text-start">Multicard</th>
                            <th scope="col">Spesa</th>
                            <th scope="col">Stato</th>
                        </tr>
                    </thead>
                    <tbody id="yaear-month-spesa-lists">
                    </tbody>
                </table>
            </div>
            <div class="modal-footer p-4 text-center">
                <button type="button" class="btn btn-outline-secondary btn-sm" data-bs-dismiss="modal">Chiudi</button>
            </div>
        </div>
    </div>
</div>