
    <div id="alert-search" class="alert alert-warning hide" role="alert">
        La ricerca effettuata non ha restituito risultati
    </div>
    <div class="row">
        <div class="col">
            <div class="list-group">
                <label class="list-group-item">
                    Scadenza del Bollo nel mese di:
                    <select class="form-select select-search mt-1 search-input" id="search-bollo-input" aria-label="Default select example">
                        <option value="" selected>Seleziona</option>
                    </select>
                </label>
                <label class="list-group-item">
                    Scadenza del Assicurazione nel mese di:
                    <select class="form-select select-search mt-1 search-input" id="search-assicurazione-input" aria-label="Default select example">
                        <option value="" selected>Seleziona</option>
                    </select>
                </label>
                <label class="list-group-item">
                    Scadenza del Revisione nel mese di:
                    <select class="form-select select-search mt-1 search-input" id="search-revisione-input" aria-label="Default select example">
                        <option value="" selected>Seleziona</option>
                    </select>
                </label>
            </div>
        </div>
        <div class="col">
            <div class="list-group">
                <label class="list-group-item">
                    Scadenza del Bollo nel anno di:
                    <select class="form-select select-search-year2 mt-1 search-input" id="search-bolloanno-input" aria-label="Default select example">
                        <option value="" selected>Seleziona</option>
                    </select>
                </label>
                <label class="list-group-item">
                    Scadenza del Assicurazione nel anno di:
                    <select class="form-select select-search-year2 mt-1 search-input" id="search-assicurazioneanno-input" aria-label="Default select example">
                        <option value="" selected>Seleziona</option>
                    </select>
                </label>
                <label class="list-group-item">
                    Scadenza del Revisione nel anno di:
                    <select class="form-select select-search-year3 mt-1 search-input" id="search-revisioneanno-input" aria-label="Default select example">
                        <option value="" selected>Seleziona</option>
                    </select>
                </label>
            </div>
        </div>
        <div class="col">
            <div class="list-group">
                <label class="list-group-item">
                    Veicoli con km maggiore di :
                    <input type="text" class="form-control mt-1 search-input" id="search-km-min" max="10">
                </label>
                <label class="list-group-item">
                    Veicoli con km minore di :
                    <input type="text" class="form-control mt-1 search-input" id="search-km-max" max="10">
                </label>
                <label class="list-group-item">
                    Veicolo Assegnato a:
                    <select class="form-select mt-1 search-input" id="search-assegnato-input" aria-label="Default select example">
                        <option value="" selected>Seleziona</option>
                    </select>
                </label>
            </div>
        </div>
        <div class="col">
            <div class="list-group">
                <label class="list-group-item">
                    Ricerca Multicard:
                    <select class="form-select select-search-multicard mt-1 search-input" id="search-multicard-input" aria-label="Default select example">
                        <option value="" selected>Seleziona</option>
                    </select>
                </label>
                <label class="list-group-item">
                    Ricerca Telepass:
                    <select class="form-select select-search-telepass mt-1 search-input" id="search-telepass-input" aria-label="Default select example">
                        <option value="" selected>Seleziona</option>
                    </select>
                </label>
            </div>
        </div>
        <div class="row">
            <div class="col"></div>
            <div class="col" style="text-align:center">
                <button class="btn btn-sm btn-outline-secondary mt-3" type="button" onclick="filterData()">
                    Ricerca
                </button>
                <button class="btn btn-sm btn-outline-secondary mt-3" type="button" onclick="clearInputSearch()">
                    Cancella Filtri
                </button>
            </div>
            <div class="col">

            </div>

        </div>
    </div>