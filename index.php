<!doctype html>
<html lang="it" data-bs-theme="auto">
<?php include("../portale/head.php"); ?>

<body>

  <?php include("../portale/header.php"); ?>

  <div class="container-fluid">
    <div class="row">
      <?php include("../portale/menu.php"); ?>

      <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1 class="h2">Gestione</h1>
        </div>
        <div class="row">
          <div class="col">
            <div class="text-end">
              <button class="btn btn-sm btn-outline-secondary" type="button" onclick="openFilter()">
                <i class="fa-solid fa-filter"></i> Filtri di Ricerca
              </button>
              <button type="button" class="btn btn-sm btn-outline-secondary buttNew" id="button-add-veicoli" onclick="openNewRow()">
                <i class="fa-solid fa-file-circle-plus"></i>
                Nuovo veicolo
              </button>
              <button type="button" class="btn btn-sm btn-outline-secondary buttNew hide" id="button-add-multicard" onclick="openNewRowMulticard()">
                <i class="fa-solid fa-file-circle-plus"></i>
                Nuova Multicard
              </button>
              <button type="button" class="btn btn-sm btn-outline-secondary buttNew hide" id="button-add-telepass" onclick="openNewRowTelepass()">
                <i class="fa-solid fa-file-circle-plus"></i>
                Nuovo Telepass
              </button>

              <button type="button" class="btn btn-sm btn-outline-secondary" onClick="sendEmailKmMassive()">
                <i class=" fa-solid fa-reply-all"></i>
                Invia Richieste Km
              </button>
            </div>
          </div>
        </div>
        <?php include("modalsVeicles.php"); ?>
        <?php include("modalsMulticard.php"); ?>
        <?php include("modalsTelepass.php"); ?>
        <ul class="nav nav-tabs">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" id="tab-veicoli" onClick="cambioTab('veicoli')" href="#">Veicoli</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" id="tab-multicard" onClick="cambioTab('multicard')">Multicard</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" id="tab-telepass" onClick="cambioTab('telepass')">Contratti Viabilità</a>
          </li>
        </ul>

        <div class="table-responsive small tabs-veicolo" id="veicoli-page">
          <h2 class="mt-4">Veicoli
            <button class="btn btn-sm btn-outline-secondary hide" id="button-clear-filters" type="button" onclick="clearInputSearch()">
              <i class="fa-solid fa-filter "></i> Cancella Filtri
            </button>
          </h2>

          <table class="table table-striped display" id="tabella-veicoli" style="width:100%">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Stato</th>
                <th scope="col">Tipologia</th>
                <th scope="col">Marca</th>
                <th scope="col">Modello</th>
                <th scope="col">Targa</th>
                <th scope="col">Assegnato</th>
                <th scope="col" data-bs-toggle="tooltip" data-bs-placement="top" title="Visualizza Dettaglio Veicolo">Vis.</th>
                <th scope="col" data-bs-toggle="tooltip" data-bs-placement="top" title="Visualizza Storico Interventi Veicolo">Int.</th>
                <th scope="col" data-bs-toggle="tooltip" data-bs-placement="top" title="Visualizza Storico Assegnatari Veicolo">Ass.</th>
                <th scope="col" data-bs-toggle="tooltip" data-bs-placement="top" title="Modifica Dati del Veicolo">Mod.</th>
                <th scope="col" data-bs-toggle="tooltip" data-bs-placement="top" title="Visualizza Storico Km">Km Mese</th>
                <th scope="col" data-bs-toggle="tooltip" data-bs-placement="top" title="Invia Email di richiesta km al Assegnatario">Ric. Km</th>
              </tr>
            </thead>
            <tbody>
            </tbody>
          </table>
        </div>
        <div class="table-responsive small tabs-veicolo hide" id="multicard-page">
          <h2 class="mt-4">Multicard</h2>
          <table class="table table-striped display" id="tabella-multicard" style="width:100%">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col" data-bs-toggle="tooltip" data-bs-placement="top" title="Cliccando sul codice farai una ricerca automatica sul Veicolo assegnato">Codice <i class="fa-solid fa-circle-info"></i></th>
                <th scope="col">Tipologia</th>
                <th scope="col">Tipo Contratto</th>
                <th scope="col">Stato </th>
                <th scope="col">Scadenza</th>
                <th scope="col">Rinnovabile</th>
                <th scope="col">PIN</th>
                <th scope="col" style="text-align:center" data-bs-toggle="tooltip" data-bs-placement="top" title="Visualizza Targhe Veicoli Assegnati"><i class="fa-solid fa-list"></i></th>
                <th scope="col" style="text-align:center" data-bs-toggle="tooltip" data-bs-placement="top" title="Modifica Dettaglio Multicard"><i class="fa-solid fa-file-pen"></i></th>
              </tr>
            </thead>
            <tbody>
            </tbody>
          </table>
        </div>
        <div class="table-responsive small tabs-veicolo hide" id="telepass-page">
          <h2 class="mt-4">Contratti Viabilità</h2>
          <table class="table table-striped display" id="tabella-telepass" style="width:100%">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Tipologia</th>
                <th scope="col" data-bs-toggle="tooltip" data-bs-placement="top" title="Cliccando sul codice farai una ricerca automatica sul Veicolo assegnato">Numero Seriale <i class="fa-solid fa-circle-info"></i></th>
                <th scope="col">Codice Contratto</th>
                <th scope="col">Attivazione</th>
                <th scope="col">Stato </th>
                <th scope="col">Validità Territoriale</th>
                <th scope="col" style="text-align:center" data-bs-toggle="tooltip" data-bs-placement="top" title="Visualizza Targhe Veicoli Assegnati"><i class="fa-solid fa-list"></i></th>
                <th scope="col" style="text-align:center" data-bs-toggle="tooltip" data-bs-placement="top" title="Modifica Contratto Viabilità"><i class="fa-solid fa-file-pen"></i></th>
              </tr>
            </thead>
            <tbody>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  </div>
  <!-- jQuery library -->
  <script src="assets/jquery/jquery-3.7.1.min.js"></script>
  <script src="assets/jquery-ui/jquery-ui.js"></script>

  <script src="../portale/assets/bootstrap/js/bootstrap.bundle.min.js"></script>
  <script src="../portale/assets/fontawesome/js/all.min.js"></script>
  <script src="../portale/assets/moment.min.js"></script>
  <script src="../portale/assets/DataTables/datatables.min.js"></script>
  <script src="../portale/assets/DataTables/dataTables.dateTime.min.js"></script>

  <script src="../portale/assets/generalFunction.js"></script>
  <script src="assets/service-multicard.js"></script>
  <script src="assets/service-telepass.js"></script>
  <script src="assets/service.js"></script>
  <script src="assets/service-filters.js"></script>
  <script>

  </script>
  <script src="https://cdn.jsdelivr.net/npm/chart.js@4.3.2/dist/chart.umd.js" integrity="sha384-eI7PSr3L1XLISH8JdDII5YN/njoSsxfbrkCTnJrzXt+ENP5MOVBxD+l6sEG4zoLp" crossorigin="anonymous"></script>
  <script src="dashboard.js"></script>
  <?php include("../portale/footer.php"); ?>
</body>

</html>