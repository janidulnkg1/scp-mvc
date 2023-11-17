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

// Handle login
function handleUserLogin(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const userData = {
        username: formData.get('login-username'),
        password: formData.get('login-password'),
    };

    const baseAddress = "https://events.quantraxcloud.com/SysControlWebAPI";

    const AuthEndPoint = baseAddress + "/api/Auth/Login";

    fetch(AuthEndPoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            "Authorization": "Basic UVRYQVBJU0VDOkhaOTRzVmtxRCQ3ZW5HXj12UkhLRnVzSl5tbmF5NlNjM1MyZGtQNFZLTXhDJWtRNDJNKlBNckZUQHZRRTclc0VreUdAJXZKVEtFRDdjYU5XK3hOTXhZQnFkR0R4V2txXjJMUzUtREImeDJnR0QjJGdoYkVGVkRxP3M1YWpZK1NwQTJwM1o5VCZHaG1HRWNleWsmRTVuQ0JDTj1AUV5Udk0jWmMyPXBtanFoenVoOHNqNFQzNjNqS3VYPVEhWFZlUlVoKlZrYmV5cXBidVUmUGdfWWJZQDVZdXBZI1UkS1FIdUomSkRqWjMyIyF0Y2NyJCslWkt0RXVVZjRTbUR6Q24=",
        },
        body: JSON.stringify(userData)
    })
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Login failed.');
            }
        })
        .then(data => {
            
            alert("Login successful!");
            setTimeout(() => {
                window.location.href = '/Dashboard/IsConfiguration';
            }, 500);
        })
        .catch(error => {
            // Handle failed login
            alert("Login failed. Please check your credentials.");
        });
}



    $("#loginForm").submit(handleUserLogin);
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
