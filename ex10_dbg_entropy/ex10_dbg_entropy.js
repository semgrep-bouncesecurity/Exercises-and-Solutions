function login(user) {
    //ruleid: ex10_dbg_entropy
    var password = "bm5nhSkxCXZkKRy4";
    $.ajax({
        type: 'POST',
        url: 'JWT/refresh/login',
        contentType: "application/json",
        //ruleid: ex10_dbg_entropy
        data: JSON.stringify({user: user, password: password})
    }).success(
        function (response) {
            localStorage.setItem('access_token', response['access_token']);
            localStorage.setItem('refresh_token', response['refresh_token']);
        }
    )
}

$(document).ready(function () {
    login('Jerry');
})

function login(user) {
    $.ajax({
        type: 'POST',
        url: 'JWT/refresh/login',
        contentType: "application/json",
        //ruleid: ex10_dbg_entropy
        data: JSON.stringify({user: user, password: "bm5nhSkxCXZkKRy4"})
    }).success(
        function (response) {
            localStorage.setItem('access_token', response['access_token']);
            localStorage.setItem('refresh_token', response['refresh_token']);
        }
    )
}
