const password = document.getElementById('password');
//Toggle Password visiblity
const toggle = document.getElementById('togglePassword');

toggle.addEventListener('change', function () {
    if (this.checked) {
        password.type = 'text';
    } else {
        password.type = 'password';
    }
});

//Table Search Function
$(document).ready(function () {
    $('.datatable').DataTable({
        order: [[0, 'asc']], 
    });

    $('#searchInput').on('keyup', function () {
        var value = $(this).val().toLowerCase();
        $('table tbody tr').filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
        });
    });
});

//Table Column based filtering
$(document).ready(function () {
    $('.table').DataTable();
});
