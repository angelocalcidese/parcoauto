<div class="modal fade" id="addRow" tabindex="-1" aria-labelledby="addUserLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-body">
                <div class="alert alert-primary hide" id="alert-success" role="alert"></div>
                <div class="alert alert-danger hide" id="alert-error" role="alert"></div>
                <form id="form-add">
                    <div class="mb-3">
                        <label for="input-tipologia" class="col-form-label">Tipologia:</label>
                        <select class="form-select" id="input-tipologia">
                            <option selected>Seleziona</option>
                            <option>Autovettura</option>
                            <option>Furgone</option>
                            <option>Ciclomotore</option>
                            <option>Altro</option>
                        </select>
                    </div>
                    <div class="mb-3">
                        <label for="input-marca" class="col-form-label">Marca:</label>
                        <input type="text" class="form-control" id="input-marca">
                    </div>
                    <div class="mb-3">
                        <label for="inputmodello" class="col-form-label">Modello:</label>
                        <input type="text" class="form-control" id="input-modello">
                    </div>
                    <div class="mb-3">
                        <label for="input-targa" class="col-form-label">Targa:</label>
                        <input type="text" class="form-control" id="input-targa">
                    </div>
                    <div class="mb-3">
                        <label for="input-proprieta" class="col-form-label">Proprietà:</label>
                        <input type="text" class="form-control" id="input-proprieta">
                    </div>
                    <div class="mb-3">
                        <label for="input-acquisto" class="col-form-label">Data di acquisto:</label>
                        <input type="text" class="form-control" id="input-acquisto">
                    </div>
                    <div class="mb-3">
                        <label for="input-km" class="col-form-label">Km attuali:</label>
                        <input type="text" class="form-control" id="input-km">
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" onClick="closeModal()">Chiudi</button>
                <button type="button" class="btn btn-primary" id="add-button" onClick="controlForm()">Inserisci</button>
            </div>
        </div>
    </div>
</div>
<div class="modal fade" id="viewVeicle" tabindex="-1" aria-labelledby="viewVeicleLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="viewVeicleLabel">Visualizza dati veicolo</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-4">
                            <div class="text-center">
                                <img data-src="holder.js/200x200" class="rounded" alt="200x200" style="width: 200px; height: 200px;" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22200%22%20height%3D%22200%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20200%20200%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_18e2832c287%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_18e2832c287%22%3E%3Crect%20width%3D%22200%22%20height%3D%22200%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2274.41666603088379%22%20y%3D%22104.40000009536743%22%3E200x200%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" data-holder-rendered="true">
                            </div>
                        </div>
                        <div class="col-md-7 ms-auto">
                            <p>Tipologia: <b><span id="view-tipologia"></span></b></p>
                            <p>Marca: <b><span id="view-marca"></span></b></p>
                            <p>Modello: <b><span id="view-modello"></span></b></p>
                            <p>Targa: <b><span id="view-targa"></span></b></p>
                            <p>Data di acquisto: <b><span id="view-acquisto"></span></b></p>
                            <p>Assegnato a: <b><span id="view-assegnato"></span></b></p>
                            <p>Scadenza revisione: <b><span id="view-revisione">01/01/2025</span></b></p>
                            <p>Scadenza Assicurazione: <b><span id="view-revisione">01/01/2025</span></b></p>
                            <p>Ufficio appartenenza: <b><span id="view-revisione">Pomezia</span></b></p>
                            <h4>Elenco Storico Assignatari:</h4>
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Assegnato dal</th>
                                        <th scope="col">restituito</th>
                                        <th scope="col">Nome</th>
                                        <th scope="col">Cognome</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th>10/01/2023</th>
                                        <td>20/10/2023</td>
                                        <td>Mario</td>
                                        <td>Rossi</td>
                                    </tr>
                                    <tr>
                                        <th>21/10/2023</th>
                                        <td>-</td>
                                        <td>Franco</td>
                                        <td>Bianchi</td>
                                    </tr>
                                </tbody>
                            </table>
                            <h4>Assegna a:</h4>
                            <label>Seleziona un Dipendente</label>
                            <div class="mb-3">
                                <select class="form-select" id="user-gest">
                                    <option selected>Seleziona</option>
                                </select>
                            </div>
                            <div class="mb-3">
                                <label for="formFile" class="form-label">Aggiungi documento</label>
                                <input class="form-control" type="file" id="formFile">
                            </div>
                            <div class="mb-3">
                                <button type="button" class="btn btn-sm btn-outline-secondary">
                                    <i class="fa-solid fa-user-plus"></i>
                                    Cambia Assegnatario
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Chiudi</button>
            </div>
        </div>
    </div>
</div>
<div class="modal fade" id="viewGestEl" tabindex="-1" aria-labelledby="viewGestElLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="viewGestElLabel">
                    Interventi veicolo</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-4">

                        </div>
                        <div class="col-md-12 ms-auto " id="monitor-good">

                            <table class="table" id="added-goods-to-employee">
                                <thead>
                                    <tr>
                                        <th scope="col">Tipo Intervento</th>
                                        <th scope="col">Data</th>
                                        <th scope="col">Km</th>
                                        <th scope="col">Costo</th>
                                        <th scope="col">Fattura</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">Tagliando</th>
                                        <td>15/10/2023</td>
                                        <td>50.000</td>
                                        <td>&euro; 260,00</td>
                                        <td><i class="fa-solid fa-file"></i></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Cambio Gomme</th>
                                        <td>02/12/2023</td>
                                        <td>55.000</td>
                                        <td>&euro; 800,00</td>
                                        <td><i class="fa-solid fa-file"></i></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Revisione</th>
                                        <td>10/01/2024</td>
                                        <td>65.000</td>
                                        <td>&euro; 75,00</td>
                                        <td><i class="fa-solid fa-file"></i></td>
                                    </tr>
                                </tbody>
                            </table>

                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Chiudi</button>
            </div>
        </div>
    </div>
</div>
<div class="modal fade" id="viewListEl" tabindex="-1" aria-labelledby="viewListElLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="viewListElLabel">
                    <span id="titolo-bene">Assegnatari Veicoli</span>
                </h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <div class="container-fluid">
                    <div class="row">

                        <div class="col-md ms-auto " id="monitor-good">

                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Assegnato dal</th>
                                        <th scope="col">restituito</th>
                                        <th scope="col">km</th>
                                        <th scope="col">Nome</th>
                                        <th scope="col">Cognome</th>
                                    </tr>
                                </thead>
                                <tbody id="bodyGuida">
                                    
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Chiudi</button>
            </div>
        </div>
    </div>
</div>