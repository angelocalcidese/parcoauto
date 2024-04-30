<p>

    <button class="btn btn-sm btn-outline-secondary" type="button" onclick="openFilter()">
        Filtri di Ricerca
    </button>
</p>
<div class="collapse" id="collapseFilters">
    <div class="card card-body">
        <div class="row">
            <div class="col">
                <div class="list-group">
                    <label class="list-group-item">
                        <input class="form-check-input me-1" id="search-bollo" type="checkbox" value="">
                        Scadenza del Bollo nel mese di:
                        <select class="form-select select-search" id="search-bollo-input" aria-label="Default select example">
                            <option selected>Seleziona</option>
                        </select>
                    </label>
                    <label class="list-group-item">
                        <input class="form-check-input me-1" id="search-assicurazione" type="checkbox" value="">
                        Scadenza del Assicurazione nel mese di:
                        <select class="form-select select-search" id="search-assicurazione-input" aria-label="Default select example">
                            <option selected>Seleziona</option>
                        </select>
                    </label>
                    <label class="list-group-item">
                        <input class="form-check-input me-1" id="search-revisione" type="checkbox" value="">
                        Scadenza del Revisione nel mese di:
                        <select class="form-select select-search" id="search-revisione-input" aria-label="Default select example">
                            <option selected>Seleziona</option>
                        </select>
                    </label>
                </div>
            </div>
            <div class="col">
                <div class="list-group">
                    <label class="list-group-item">
                        <input class="form-check-input me-1" id="search-km" type="checkbox" value="">
                        Veicoli con km maggiore di :
                        <input type="text" class="form-control w-25 mt-1" id="search-km-ins" max="10">
                    </label>
                    <label class="list-group-item">
                        <input class="form-check-input me-1" type="checkbox" value="">
                        Second checkbox
                    </label>
                    <label class="list-group-item">
                        <input class="form-check-input me-1" type="checkbox" value="">
                        Third checkbox
                    </label>
                    <label class="list-group-item">
                        <input class="form-check-input me-1" type="checkbox" value="">
                        Fourth checkbox
                    </label>
                    <label class="list-group-item">
                        <input class="form-check-input me-1" type="checkbox" value="">
                        Fifth checkbox
                    </label>
                </div>
            </div>
            <div class="col">
                <div class="list-group">
                    <label class="list-group-item">
                        <input class="form-check-input me-1" type="checkbox" value="">
                        First checkbox
                    </label>
                    <label class="list-group-item">
                        <input class="form-check-input me-1" type="checkbox" value="">
                        Second checkbox
                    </label>
                    <label class="list-group-item">
                        <input class="form-check-input me-1" type="checkbox" value="">
                        Third checkbox
                    </label>
                    <label class="list-group-item">
                        <input class="form-check-input me-1" type="checkbox" value="">
                        Fourth checkbox
                    </label>
                    <label class="list-group-item">
                        <input class="form-check-input me-1" type="checkbox" value="">
                        Fifth checkbox
                    </label>
                </div>
            </div>
            <div class="row">
                <div class="col"></div>
                <div class="col" style="text-align:center">
                    <button class="btn btn-sm btn-outline-secondary mt-3 w-25" type="button">
                        Ricerca
                    </button>
                </div>
                <div class="col"></div>

            </div>
        </div>
    </div>
</div>