
function openFilter() {
    $("#collapseFilters").toggle();
}


// A $( document ).ready() block.
$(document).ready(function () {
    //console.log(mesiSchema);
    for (var a = 0; a < mesiSchema.length; a++) {
        var opt = '<option val="' + mesiSchema[a].val + '">' + mesiSchema[a].mese + '</option>';
        $(".select-search").append(opt);
    }
    
});