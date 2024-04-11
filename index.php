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
              <button type="button" class="btn btn-sm btn-outline-secondary buttNew" id="button-add-veicoli" onclick="openNewRow()">
                <i class="fa-solid fa-file-circle-plus"></i>
                Nuovo veicolo
              </button>
              <button type="button" class="btn btn-sm btn-outline-secondary buttNew hide" id="button-add-multicard" onclick="openNewRow()">
                <i class="fa-solid fa-file-circle-plus"></i>
                Nuova Multicard
              </button>
              <button type="button" class="btn btn-sm btn-outline-secondary buttNew hide" id="button-add-telepass" onclick="openNewRow()">
                <i class="fa-solid fa-file-circle-plus"></i>
                Nuovo Telepass
              </button>

            </div>
          </div>
        </div>
        <?php include("modalsVeicles.php"); ?>

        <ul class="nav nav-tabs">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" id="tab-veicoli" onClick="cambioTab('veicoli')" href="#">Veicoli</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" id="tab-multicard" onClick="cambioTab('multicard')">Multicard</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" id="tab-telepass" onClick="cambioTab('telepass')">Telepass</a>
          </li>
        </ul>

        <div class="table-responsive small tabs-veicolo" id="veicoli-page">
          <h2 class="mt-4">Veicoli</h2>
          <button type="button" class="btn btn-sm btn-outline-secondary buttNew" id="button-add-veicoli" onclick="openNewRow()">
            <i class="fa-solid fa-filter"></i> Filtri Ricerca
          </button>
          <table class="table table-striped display" id="tabella-veicoli" style="width:100%">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Tipologia</th>
                <th scope="col">Marca</th>
                <th scope="col">Modello</th>
                <th scope="col">Targa</th>
                <th scope="col">Proprietà</th>
                <th scope="col">Assegnato</th>
                <th scope="col">Stato</th>
                <th scope="col">Km</th>
                <th scope="col">Vis.</th>
                <th scope="col">Int.</th>
                <th scope="col">Ass.</th>
                <th scope="col">Mod.</th>
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
                <th scope="col">Tipologia</th>
                <th scope="col">Codice</th>
                <th scope="col">Assegnata</th>
                <th scope="col">Stato </th>
                <th scope="col"></th>
                <th scope="col"></th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
            </tbody>
          </table>
        </div>
        <div class="table-responsive small tabs-veicolo hide" id="telepass-page">
          <h2 class="mt-4">Telepass</h2>
          <table class="table table-striped display" id="tabella-telepass" style="width:100%">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Codice</th>
                <th scope="col">Assegnata</th>
                <th scope="col">Stato </th>
                <th scope="col"></th>
                <th scope="col"></th>
                <th scope="col"></th>
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
  <script src="../portale/assets/DataTables/datatables.min.js"></script>
  <script src="../portale/assets/DataTables/dataTables.dateTime.min.js"></script>
  <script src="../portale/assets/moment.min.js"></script>
  <script src="../portale/assets/generalFunction.js"></script>
  <script src="assets/service-multicard.js"></script>
  <script src="assets/service-telepass.js"></script>
  <script src="assets/service.js"></script>
  <script>

  </script>
  <script src="https://cdn.jsdelivr.net/npm/chart.js@4.3.2/dist/chart.umd.js" integrity="sha384-eI7PSr3L1XLISH8JdDII5YN/njoSsxfbrkCTnJrzXt+ENP5MOVBxD+l6sEG4zoLp" crossorigin="anonymous"></script>
  <script src="dashboard.js"></script>
</body>

</html>