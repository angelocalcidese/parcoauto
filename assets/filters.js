function populateFiltered(item) {
    var minEl = document.querySelector('#min');
    var maxEl = document.querySelector('#max');

    var table = new DataTable('table.filtered', {
        ajax: item, 
        columns: [
            { data: 'id' },
            { data: 'marca' },
            { data: 'modello' },
            { data: 'targa' },
            { data: 'assegnatoa' },
            { data: 'stato' },
            { data: 'km' },
            { data: 'km' },
            { data: 'km' },
            { data: 'km' },
            { data: 'km' },
        ]
    });

    // Custom range filtering function
    table.search.fixed('range', function (searchStr, data, index) {
        var min = parseInt(minEl.value, 10);
        var max = parseInt(maxEl.value, 10);
        var age = parseFloat(data[3]) || 0; // use data for the age column

        if ((isNaN(min) && isNaN(max)) || (isNaN(min) && age <= max) || (min <= age && isNaN(max)) ||(min <= age && age <= max)) {
            return true;
        }

        return false;
    });

    // Changes to the inputs will trigger a redraw to update the table
    minEl.addEventListener('input', function () {
        table.draw();
    });
    maxEl.addEventListener('input', function () {
        table.draw();
    });
}
