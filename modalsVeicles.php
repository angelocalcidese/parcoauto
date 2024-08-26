<div class="modal fade" id="addRow" tabindex="-1" aria-labelledby="addUserLabel" aria-hidden="true">
    <div class="modal-dialog modal-xl">
        <div class="modal-content">
            <div class="modal-body">
                <div class="alert alert-primary hide" id="alert-success" role="alert"></div>
                <div class="alert alert-danger hide" id="alert-error" role="alert"></div>

                <form id="form-add">
                    <div class="row">
                        <div class="col">
                            <div class="mb-3">
                                <label for="input-tipologia" class="col-form-label">Tipologia:</label>
                                <select class="form-select input-insert" id="input-tipologia">
                                    <option selected>Seleziona</option>
                                    <option>Autovettura</option>
                                    <option>Furgone</option>
                                    <option>Ciclomotore</option>
                                    <option>Ambulanza</option>
                                    <option>Altro</option>
                                </select>
                            </div>
                            <div class="mb-3">
                                <label for="input-stato" class="col-form-label">Stato:</label>
                                <select class="form-select input-insert" id="input-stato">
                                    <option selected>Attiva</option>
                                    <option>In Vendita</option>
                                    <option>Resa</option>
                                    <option>Venduta</option>
                                    <option>Rottamata</option>
                                    <option>Guasta</option>
                                    <option>Incidentata</option>
                                </select>
                            </div>
                            <div class="mb-3">
                                <label for="input-marca" class="col-form-label">Marca:</label>
                                <input type="text" class="form-control input-insert" id="input-marca">
                            </div>
                            <div class="mb-3">
                                <label for="input-modello" class="col-form-label">Modello:</label>
                                <input type="text" class="form-control input-insert" id="input-modello">
                            </div>
                            <div class="mb-3">
                                <label for="input-targa" class="col-form-label">Targa:</label>
                                <input type="text" class="form-control input-insert" id="input-targa">
                            </div>
                            <div class="mb-3">
                                <label for="input-posti" class="col-form-label">Posti Auto:</label>
                                <input type="text" class="form-control input-insert numberInput" id="input-posti">
                            </div>

                        </div>
                        <div class="col">
                            <div class="mb-3">
                                <label for="input-proprieta" class="col-form-label">Proprietà:</label>
                                <input type="text" class="form-control input-insert" id="input-proprieta">
                            </div>
                            <div class="mb-3">
                                <label for="input-acquisto" class="col-form-label">Data di acquisto:</label>
                                <input type="text" class="form-control input-insert format-data" id="input-acquisto" pattern="^\\s*($1)\\W*($2)?\\W*($3)?([0-9]*).*" maxlength="10">
                            </div>
                            <div class="mb-3">
                                <label for="input-vendita" class="col-form-label">Data di vendita:</label>
                                <input type="text" class="form-control input-insert format-data" id="input-vendita" pattern="^\\s*($1)\\W*($2)?\\W*($3)?([0-9]*).*" maxlength="10">
                            </div>
                            <div class="mb-3">
                                <label for="input-km" class="col-form-label">Km attuali:</label>
                                <input type="text" class="form-control input-insert numberInput" id="input-km">
                            </div>
                            <div class="mb-3">
                                <label for="input-alimentazione" class="col-form-label">Alimentazione:</label>
                                <input type="text" class="form-control input-insert" id="input-alimentazione">
                            </div>
                            <div class="mb-3">
                                <label for="input-kml" class="col-form-label">Consumo Km/l:</label>
                                <input type="text" class="form-control input-insert numberInput" id="input-kml">
                            </div>
                            <div class="mb-3">
                                <label for="input-classeinq" class="col-form-label">Classe Inquinamento:</label>
                                <input type="text" class="form-control input-insert" id="input-classeinq">
                            </div>
                        </div>
                        <div class="col">
                            <div class="mb-3">
                                <label for="input-tagliando" class="col-form-label">Tagliando ogni (km):</label>
                                <input type="text" class="form-control input-insert numberInput" id="input-tagliando">
                            </div>
                            <div class="mb-3">
                                <label for="input-distribuzione" class="col-form-label">Distribuzione ogni (km):</label>
                                <input type="text" class="form-control input-insert numberInput" id="input-distribuzione">
                            </div>
                            <div class="mb-3">
                                <label for="input-assicurazione" class="col-form-label">Scadenza Assicurazione:</label>
                                <input type="text" class="form-control input-insert format-data" id="input-assicurazione">
                            </div>
                            <div class="mb-3">
                                <label for="input-bollo" class="col-form-label">Scadenza Bollo:</label>
                                <input type="text" class="form-control input-insert format-data" id="input-bollo" pattern="^\\s*($1)\\W*($2)?\\W*($3)?([0-9]*).*" maxlength="10">
                            </div>
                            <div class="mb-3">
                                <label for="input-revisione" class="col-form-label">Scadenza Revisione:</label>
                                <input type="text" class="form-control input-insert format-data" id="input-revisione" pattern="^\\s*($1)\\W*($2)?\\W*($3)?([0-9]*).*" maxlength="10">
                            </div>
                            <div class="mb-3">
                                <label for="input-alimentazione" class="col-form-label">Autorizzazione ZTL:</label>
                                <select class="form-select input-insert" id="input-ztl">
                                    <option value="0" selected>No</option>
                                    <option value="1">Si</option>
                                </select>
                            </div>

                        </div>
                    </div>
                    <div class="row">
                        <div class="mb-3">
                            <label for="input-note" class="form-label">Note:</label>
                            <textarea class="form-control" id="input-note" rows="4" maxlength="3000"></textarea>
                        </div>
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
    <div class="modal-dialog modal-xl">
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
                            <p>Ultimo Tagliando a km: <b><span id="ultimo-tagliando"></span></b></p>
                            <p id="prossimo-tagliando">Prossimo Tagliando tra km: <b><span></span></b></p>
                            <p id="prossima-distribuzione">Prossima Distribuzione tra km: <b><span></span></b></p>
                            <h6 class="mt-3">Notifiche</h6>
                            <ul class="list-group mt-2">
                                <li class="list-group-item list-not-alarm alarm-tagliando-not hide" style="color: #f50505;">
                                    <i class="fa-solid fa-triangle-exclamation"></i><span></span> Km
                                </li>
                                <li class="list-group-item hide list-not-alarm alarm-distribuzione-not" style="color: #f50505;">
                                    <i class="fa-solid fa-triangle-exclamation"></i>
                                    Distribuzione in scadenza tra
                                    <span></span> km
                                </li>
                                <li class="list-group-item hide list-not-alarm alarm-bollo-not" style="color: #f50505;">
                                    <i class="fa-solid fa-triangle-exclamation"></i>
                                    Bollo in scadenza tra
                                    <span></span> giorni
                                </li>
                                <li class="list-group-item hide list-not-alarm alarm-assicurazione-not" style="color: #f50505;">
                                    <i class="fa-solid fa-triangle-exclamation"></i>
                                    Assicurazione in scadenza tra
                                    <span></span> giorni
                                </li>
                                <li class="list-group-item hide list-not-alarm alarm-revisione-not" style="color: #f50505;">
                                    <i class="fa-solid fa-triangle-exclamation "></i>
                                    Revisione in scadenza tra
                                    <span></span> giorni
                                </li>
                            </ul>
                        </div>
                        <div class="col-md-4 ms-auto">
                            <p>Tipologia: <b><span class="view-veicle" id="view-tipologia"></span></b></p>
                            <p>Marca: <b><span class="view-veicle" id="view-marca"></span></b></p>
                            <p>Modello: <b><span class="view-veicle" id="view-modello"></span></b></p>
                            <p>Posti Auto: <b><span class="view-veicle" id="view-posti"></span></b></p>
                            <p>Proprietà: <b><span class="view-veicle" id="view-proprieta"></span></b></p>
                            <p>Acquisto: <b><span class="view-veicle" id="view-acquisto"></span></b></p>
                            <p>Vendita: <b><span class="view-veicle" id="view-vendita"></span></b></p>
                            <p>Km: <b><span class="view-veicle" id="view-km"></span></b></p>
                            <p>Targa: <b><span class="view-veicle" id="view-targa"></span></b></p>
                            <p>Stato: <b><span class="view-veicle" id="view-stato"></span></b></p>
                            <p>Assegnato a: <b><span class="view-veicle" id="view-assegnato"></span></b></p>
                        </div>
                        <div class="col-md-4 ms-auto">

                            <p>Km/l: <b><span class="view-veicle" id="view-kml"></span></b></p>
                            <p>Alimentazione: <b><span class="view-veicle" id="view-alimentazione"></span></b></p>
                            <p>Classe Inquinamento: <b><span class="view-veicle" id="view-classeinq"></span></b></p>
                            <p>ZTL: <b><span class="view-veicle" id="view-ztl"></span></b></p>
                            <p>Scadenza Revisione: <b><span class="view-veicle" id="view-revisione"></span> <i class="fa-solid fa-triangle-exclamation alarm-not hide" id="alarm-revisione" style="color: #f50505;"></i></b></p>
                            <p>Scadenza Assicurazione: <b><span class="view-veicle" id="view-assicurazione"></span> <i class="fa-solid fa-triangle-exclamation alarm-not " id="alarm-assicurazione" style="color: #f50505;"></i></b></p>
                            <p>Scadenza Bollo: <b><span class="view-veicle" id="view-bollo"></span> <i class="fa-solid fa-triangle-exclamation alarm-not hide" id="alarm-bollo" style="color: #f50505;"></i></b></p>
                            <p>Tagliando ogni: <b><span class="view-veicle" id="view-tagliando"></span> <i class="fa-solid fa-triangle-exclamation alarm-not hide" id="alarm-tagliando" style="color: #f50505;"></i></b></p>
                            <p>Cinghia Distribuzione ogni: <b><span class="view-veicle" id="view-distribuzione"> </span><i class="fa-solid fa-triangle-exclamation alarm-not hide" id="alarm-distribuzione" style="color: #f50505;"></i></b></p>
                            <p>Multicard: <b><span class="view-veicle" id="view-multicard"></span></b></p>
                            <p>Telepass: <b><span class="view-veicle" id="view-telepass"></span></b></p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-4 ms-auto"></div>
                        <div class="col-md-8 ms-auto">
                            <p>Note: <br>
                                <span class="view-veicle" id="view-note"></span>
                            </p>
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
    <div class="modal-dialog modal-xl">
        <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="viewGestElLabel">
                    Interventi veicolo targato <u><b id="int-targa"></b></u> assegnato a <u><b id="int-assegnatoa"></b></u></h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <div class="container-fluid">
                    <div class="alert alert-primary hide" id="alert-success-intervento" role="alert"></div>
                    <div class="alert alert-danger hide" id="alert-error-intervento" role="alert"></div>
                    <div id="view-inter">
                        <div class="row">
                            <div class="col border border-primary rounded pt-3">

                                <div id="display-add-int">
                                    <div class="row" id="add-intervento-title">
                                        <p class="h6  add-new-int">Aggiungi Intervento al Veicolo</p>

                                        <div class="col-7 add-new-int">

                                            <label for="input-intervento" class="col-form-label">Tipo di Intervento:</label>
                                            <ul class="list-group" id="sel-ins-int">
                                                <li class="list-group-item">
                                                    <div class="row">
                                                        <div class="col">
                                                            <input class="form-check-input check-ins" type="checkbox" value="" onchange="selCheckIns('bollo')" name="Bollo" title="Bollo" id="check-ins-bollo">
                                                            Bollo
                                                        </div>
                                                        <div class="col">
                                                            <input class="form-control form-control-sm spesa-input" id="spesa-bollo" onchange="sumCheckIns('bollo')" type="number" placeholder="&euro;" disabled>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="list-group-item">
                                                    <div class="row">
                                                        <div class="col">
                                                            <input class="form-check-input check-ins" type="checkbox" value="" onchange="selCheckIns('assicurazione')" name="Assicurazione" title="Assicurazione" id="check-ins-assicurazione"> Assicurazione
                                                        </div>
                                                        <div class="col">
                                                            <input class="form-control form-control-sm spesa-input" onchange="sumCheckIns('assicurazione')" id="spesa-assicurazione" type="number" placeholder="&euro;" disabled>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="list-group-item">
                                                    <div class="row">
                                                        <div class="col">
                                                            <input class="form-check-input check-ins" type="checkbox" value="" onchange="selCheckIns('tagliando')" name="Tagliando" title="Tagliando" id="check-ins-tagliando"> Tagliando
                                                        </div>
                                                        <div class="col">
                                                            <input class="form-control form-control-sm spesa-input" id="spesa-tagliando" onchange="sumCheckIns('tagliando')" type="number" placeholder="&euro;" disabled>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="list-group-item">
                                                    <div class="row">
                                                        <div class="col">
                                                            <input class="form-check-input check-ins" type="checkbox" value="" onchange="selCheckIns('distribuzione')" name="Distribuzione" title="Distribuzione" id="check-ins-distribuzione"> Distribuzione
                                                        </div>
                                                        <div class="col">
                                                            <input class="form-control form-control-sm spesa-input" id="spesa-distribuzione" onchange="sumCheckIns('distribuzione')" type="number" placeholder="&euro;" disabled>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="list-group-item">
                                                    <div class="row">
                                                        <div class="col">
                                                            <input class="form-check-input check-ins" type="checkbox" value="" onchange="selCheckIns('revisione')" name="Revisione" title="Revisione" id="check-ins-revisione"> Revisione
                                                        </div>
                                                        <div class="col">
                                                            <input class="form-control form-control-sm spesa-input" id="spesa-revisione" onchange="sumCheckIns('revisione')" type="number" placeholder="&euro;" disabled>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="list-group-item">
                                                    <div class="row">
                                                        <div class="col">
                                                            <input class="form-check-input check-ins" type="checkbox" value="" onchange="selCheckIns('riparazione')" name="Riparazione" title="Riparazione" id="check-ins-riparazione"> Riparazione
                                                        </div>
                                                        <div class="col">
                                                            <input class="form-control form-control-sm spesa-input" id="spesa-riparazione" onchange="sumCheckIns('riparazione')" type="number" placeholder="&euro;" disabled>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="list-group-item">
                                                    <div class="row">
                                                        <div class="col">
                                                            <input class="form-check-input check-ins" type="checkbox" onchange="selCheckIns('gomme')" value="" name="Gomme" title="Cambio gomme" id="check-ins-gomme"> C. Gomme
                                                        </div>
                                                        <div class="col">
                                                            <input class="form-control form-control-sm spesa-input" id="spesa-gomme" onchange="sumCheckIns('gomme')" type="number" placeholder="&euro;" disabled>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="list-group-item">
                                                    <div class="row">
                                                        <div class="col">
                                                            <input class="form-check-input check-ins" type="checkbox" value="" onchange="selCheckIns('rottamata')" name="Rottamata" title="Rottamata" id="check-ins-rottamata"> Rottamata
                                                        </div>
                                                        <div class="col">
                                                            <input class="form-control form-control-sm spesa-input" id="spesa-rottamata" onchange="sumCheckIns('rottamata')" type="number" placeholder="&euro;" disabled>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="list-group-item">
                                                    <div class="row">
                                                        <div class="col">
                                                            <input class="form-check-input check-ins" type="checkbox" value="" onchange="selCheckIns('venduta')" name="Venduta" title="Venduta" id="check-ins-venduta"> Venduta
                                                        </div>
                                                        <div class="col">
                                                            <input class="form-control form-control-sm spesa-input" id="spesa-venduta" onchange="sumCheckIns('venduta')" type="number" placeholder="&euro;" disabled>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="list-group-item">
                                                    <div class="row">
                                                        <div class="col">
                                                            <input class="form-check-input check-ins" type="checkbox" onchange="selCheckIns('furto')" value="" name="Furto" title="Furto" id="check-ins-furto"> Furto
                                                        </div>
                                                        <div class="col">
                                                            <input class="form-control form-control-sm spesa-input" id="spesa-furto" onchange="sumCheckIns('furto')" type="number" placeholder="&euro;" disabled>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="list-group-item">
                                                    <div class="row">
                                                        <div class="col">
                                                            <input class="form-check-input check-ins" type="checkbox" value="" onchange="selCheckIns('incidente')" name="Incidente" title="Incidente" id="check-ins-incidente"> Incidente
                                                        </div>
                                                        <div class="col">
                                                            <input class="form-control form-control-sm spesa-input" id="spesa-incidente" onchange="sumCheckIns('incidente')" type="number" placeholder="&euro;" disabled>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="col-5">
                                            <label for="input-kmintervento" class="col-form-label add-new-int">Km del Veicolo:</label>
                                            <input type="text" class="form-control add-new-int" id="input-kmintervento" placeholder="km">

                                            <label for="input-intgiorno" class="col-form-label add-new-int" data-bs-toggle="tooltip" data-bs-placement="top" title="Per Assicurazione, Bollo e Revisione verrà calcolata poi la data di scadenza, quindi inserire il giorno di pagamento.">In Data <i class="fa-solid fa-circle-info"></i> :</label>
                                            <input type="text" class="form-control format-data add-new-int" id="input-intgiorno" placeholder="giorno intervento">

                                            <label for="input-costointervento " class="col-form-label add-new-int">Costo Totale Intervento &euro; :</label>
                                            <input type="number" class="form-control add-new-int" id="input-costointervento" placeholder="Tot. intervento" disabled>

                                            <p class="h6 hide" id="doc-intervento-title">Aggiungi Documento a Intervento al Veicolo
                                                <button type="button" class="btn btn-sm btn-outline-secondary" onclick="clearDocInt()">Annulla <i class="fa-solid fa-xmark"></i></button>
                                            </p>
                                            <label for="input-linkintervento" class="col-form-label">Fattura (pdf, jpg, png - max 10mb):</label>
                                            <p id="filenameint" class="hide"><span>Nome del file</span> <button type="button" class="btn btn-sm btn-outline-secondary" onclick="delFileInt()"><i class="fa-solid fa-trash"></i></button></p>
                                            <div id="upload-int-file" class="input-group">
                                                <input type="file" class="form-control" id="input-linkinterventoFile" aria-describedby="inputGroupFileAddon" aria-label="Upload">
                                            </div>
                                        </div>
                                    </div>

                                    <div class="row justify-content-center mt-3 mb-3">

                                        <div class="col-4" style="text-align:center">
                                            <button type="button" class="btn btn-outline-secondary" id="button-add-int" onclick="insIntervento()">Aggiungi</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="row">
                                    <div class="col-md-12 ms-auto " id="monitor-good">
                                        <div class="col border border-primary rounded pt-3 hide" id="adv-del-int">
                                            <div class="row">
                                                <p class="text-center"><b>Sicuro di Voler Cancellare questo Intervento?</b></p>
                                                <p class="text-center">(I km non verranno automaticamente resettati, se occorre, utilizzare la funzione apposita)</p>
                                                <div class="btn-group" role="group">
                                                    <button type="button" class="btn btn-link" onclick="delIntervento()">Si</button>
                                                    <button type=" button" class="btn btn-link" onclick="clearDelInt()">No</button>
                                                </div>
                                            </div>

                                        </div>
                                        <table class="table" id="added-goods-to-employee">
                                            <thead>
                                                <tr>
                                                    <th scope="col">Del.</th>
                                                    <th scope="col">Tipo Intervento</th>
                                                    <th scope="col">Data</th>
                                                    <th scope="col">Km</th>
                                                    <th scope="col">Costo</th>
                                                    <th scope="col">Fattura</th>
                                                </tr>
                                            </thead>
                                            <tbody id="bodyIntervento">

                                            </tbody>
                                        </table>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>





                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" id="butt-inter" onclick="closeModal()">Chiudi</button>
            </div>
        </div>
    </div>
</div>
<div class="modal fade" id="viewListEl" tabindex="-1" aria-labelledby="viewListElLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="viewListElLabel">
                    <span id="titolo-bene">Assegnatari Veicoli targato <u><b id="story-targa"></b></u></span>
                </h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <div class="container-fluid">
                    <div class="alert alert-primary hide" id="alert-success-guida" role="alert"></div>
                    <div class="alert alert-danger hide" id="alert-error-guida" role="alert"></div>
                    <div id="view-assign">

                        <div class="row">


                            <div class="col-md ms-auto " id="monitor-good">

                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Assegnato dal</th>
                                            <th scope="col">restituito</th>
                                            <th scope="col">da km</th>
                                            <th scope="col">a km</th>
                                            <th scope="col">Nome</th>
                                            <th scope="col">Cognome</th>
                                        </tr>
                                    </thead>
                                    <tbody id="bodyGuida">

                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div id="display-add-ass">
                            <div class="row">
                                <p class="h6">Assegna Veicolo</p>
                                <div class="col">
                                    <label for="user-gest" class="col-form-label">Nuovo assegnatario:</label>
                                    <select class="form-select" id="user-gest">
                                        <option value="0" selected>Nessuno</option>
                                    </select>
                                </div>
                                <div class="col">
                                    <label for="input-kmattuali" class="col-form-label">da Km:</label>
                                    <input type="text" class="form-control" id="input-kmattuali" placeholder="km">
                                </div>
                                <div class="col">
                                    <label for="input-assgiorno" class="col-form-label">dal giorno :</label>
                                    <input type="text" class="form-control format-data" id="input-assgiorno" pattern="^\\s*($1)\\W*($2)?\\W*($3)?([0-9]*).*" maxlength="10" placeholder="dal giorno">
                                </div>
                            </div>
                            <div class="row mt-3">
                                <div class="col">
                                    <button type="button" class="btn btn-outline-secondary" id="button-add-ass" onclick="insAssegnatario()">Assegna</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" id="butt-assign" data-bs-dismiss="modal" onClick="closeModal()">Chiudi</button>
            </div>
        </div>
    </div>
</div>

<div class="modal fade" id="viewListKm" tabindex="-1" aria-labelledby="viewListKmLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="viewListKmLabel">
                    <span id="titolo-bene">Storico Km Veicoli <b id="title-km-story"></b> del veicolo targato <u><b id="km-story-targa"></b></u></span>
                </h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <div class="container-fluid">
                    <div class="alert alert-primary hide" id="alert-success-km" role="alert"></div>
                    <div class="alert alert-danger hide" id="alert-error-km" role="alert"></div>

                    <div id="view-assign">
                        <div class="alert alert-secondary hide" id="form-addmodkm">
                            <p class="h6">Modifica o Aggiungi km e spese</p>
                            <div class="row">
                                <div class="col">
                                    <label for="mod-km-mese" class="col-form-label">Mese:</label>
                                    <br><b><span id="mod-km-mese"></span></b>
                                </div>
                                <div class="col">
                                    <label for="input-km-mese-old" class="col-form-label">KM mese prec.:</label>
                                    <input type="text" class="form-control input-insert numberInput" id="input-km-mese-old">
                                </div>
                                <div class="col">
                                    <label for="input-km-mese" class="col-form-label">KM del mese:</label>
                                    <input type="text" class="form-control input-insert numberInput " id="input-km-mese">
                                </div>
                                <div class="col">
                                    <label for="input-spese-mese" class="col-form-label">Spese extra del mese:</label>
                                    <input type="text" class="form-control input-insert numberInput" id="input-spese-mese">
                                </div>
                            </div>
                            <div class="row">
                                <div class="col mt-3" style="text-align: center;">
                                    <button type="button" class="btn btn-primary" onclick="kmaddmod()">Salva</button>
                                    <button type="button" class="btn btn-secondary" onclick="closekmaddmod()">Cancella</button>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md ms-auto " id="monitor-good">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Mese</th>
                                            <th scope="col">Assegnata a</th>
                                            <th scope="col">Km da</th>
                                            <th scope="col">Km a</th>
                                            <th scope="col">Km effettuati</th>
                                            <th scope="col">Spese Extra</th>
                                            <th scope="col">Add/Mod.</th>
                                        </tr>
                                    </thead>
                                    <tbody id="bodyKm">

                                    </tbody>
                                </table>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" id="butt-assign" data-bs-dismiss="modal" onClick="closeModal()">Chiudi</button>
            </div>
        </div>
    </div>
</div>
<div class="modal fade" id="modalChoicekm" tabindex="-1" aria-labelledby="choiceModalKm" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content rounded-3 shadow">
            <div class="modal-body p-4 text-center">
                <h5 class="mb-0">Seleziona l'anno di ricerca per lo storico</h5>
                <h6 id="km-targa-1"></h6>
                <select class="form-select mt-4" id="input-annokmstoricos">
                    <option selected>2024</option>
                    <option>2023</option>
                </select>
            </div>
            <div class="modal-footer flex-nowrap p-0">
                <button type="button" class="btn btn-lg btn-link fs-6 text-decoration-none col-6 py-3 m-0 rounded-0 border-end" onClick="kmSend()"><strong>Cerca</strong></button>
                <button type="button" class="btn btn-lg btn-link fs-6 text-decoration-none col-6 py-3 m-0 rounded-0" data-bs-dismiss="modal">Chiudi</button>
            </div>
        </div>
    </div>
</div>
<div class="modal fade" id="modalChoice" tabindex="-1" aria-labelledby="choiceModal" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content rounded-3 shadow">
            <div class="modal-body p-4 text-center">
                <h5 class="mb-0" id="choice-title"></h5>
                <p class="mb-0" id="choice-text"></p>
                <div id="mounth-choice">
                    <h6 class="mt-2">Seleziona il mese di richiesta km veicolo</h6>
                    <div class="alert alert-danger hide" id="alert-error-rickm" role="alert">Selezionare il mese della richiesta</div>
                    <select class="form-select mt-4" id="input-mesekmrichiesta">

                    </select>
                </div>
                <ul class="list-group mt-2" id="list-send-email">

                </ul>
                <input type="hidden" id="input-id">

            </div>
            <div class="modal-footer flex-nowrap p-0">
                <button type="button" class="btn btn-lg btn-link fs-6 text-decoration-none col-6 py-3 m-0 rounded-0 border-end button-send hide " onClick="yesSend()"><strong>Si</strong></button>
                <button type="button" class="btn btn-lg btn-link fs-6 text-decoration-none col-6 py-3 m-0 rounded-0 border-end button-send-massive hide " onClick="yesSendMassive()"><strong>Si</strong></button>
                <button type="button" class="btn btn-lg btn-link fs-6 text-decoration-none col-6 py-3 m-0 rounded-0 button-no-send" data-bs-dismiss="modal">No</button>
                <button type="button" class="btn btn-lg btn-link fs-6 text-decoration-none col-6 py-3 m-0 rounded-0 button-close-send hide" onclick="closeModal()">Chiudi</button>
            </div>
        </div>
    </div>
</div>
<div class="modal fade" id="modalCSV" tabindex="-1" aria-labelledby="csvModal" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content rounded-3 shadow">
            <div class="modal-body p-4 text-center">
                <h5 class="mb-0">Carica XLSX</h5>
                <h5 class="mb-0" id="csv-title"></h5>
                <p class="mb-0" id="csv-text"></p>
                <div class="spinner-border mb-3 hide" id="spinner-modal" role="status">
                    <span class="sr-only">Loading...</span>
                </div>
                <div class="mb-3" id="import-csv">
                    <input class="form-control" type="file" id="import-csv">
                </div>
            </div>
            <div class="modal-footer flex-nowrap p-0">
                <button type="button" class="btn btn-lg btn-link fs-6 text-decoration-none col-6 py-3 m-0 rounded-0 border-end button-send" onClick="yesSendCsv()"><strong>Si</strong></button>
                <button type="button" class="btn btn-lg btn-link fs-6 text-decoration-none col-6 py-3 m-0 rounded-0 button-no-send" data-bs-dismiss="modal">No</button>
                <button type="button" class="btn btn-lg btn-link fs-6 text-decoration-none col-6 py-3 m-0 rounded-0 button-close-send hide" onclick="closeModal()">Chiudi</button>
            </div>
        </div>
    </div>
</div>
<div class="modal fade" id="viewFilters" tabindex="-1" aria-labelledby="viewFiltersLabel" aria-hidden="true">
    <div class="modal-dialog modal-xl">
        <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="viewFiltersLabel">
                    <span id="titolo-bene">Filtri di ricerca Veicoli</span>
                </h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <?php include("filterPage.php"); ?>
            </div>

        </div>
    </div>
</div>