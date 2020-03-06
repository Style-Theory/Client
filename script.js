$("document").ready(() => {
    const token = localStorage.token
    if(!token) {
        $("#login-page").hide()
        $('.navbar1').hide()
        $("#form-create-page").hide()
        $('main').hide()
        $('#rent').hide()
        $('#my-order').hide()
        $("#login-btn-signup").on('click', (e) => {
            e.preventDefault()
            $("#login-page").slideDown()
            $("#landing-page").css('filter', 'blur(3px)')
        })
        $("#xlogin").on('click', (e) => {  
            e.preventDefault()
            $("#landing-page").css('filter', '')
            $("#login-page").slideUp()
        })
    } else {
        $("#landing-page").css('filter', '')
        $("#form-create-page").hide()
        $('#name-home').empty()
        $('#name-home').append(`${localStorage.name}`)
        $("#dashboard-home-page").show()
        homeFashionNews()
        $('#rent').hide()
        $('#my-order').hide()
        $('#my-stuff').hide()
        $("#login-page").hide()
        $('.navbar1').show()
        $('#landing-page').hide()
    }

    $('#btn-navbar-home').on('click', (e) => {
        e.preventDefault()
        $("#dashboard-home-page").show()
        $("#form-create-page").hide()
        $("#my-stuff").empty()
        $('#rent').hide()
        $("#my-order").empty()
        $('#my-order').hide()
        $('#my-stuff').hide()
        $("#login-page").hide()
        $('.navbar1').show()
        $("#content-body-rent").empty()
        $('#landing-page').hide()
    })

    $('#btn-navbar-rent').on('click', (e) => {
        e.preventDefault()
        fetchDress()
        $("#my-stuff").empty()
        $("#my-order").empty()
        $("#dashboard-home-page").hide()
        $("#form-create-page").hide()
        $('#rent').show()
        $('#my-order').hide()
        $("#content-body-rent").empty()
        $('#my-stuff').hide()
        $("#login-page").hide()
        $('.navbar1').show()
        $('#landing-page').hide()
    })

  
    $('#btn-navbar-myStuff').on('click', (e) => {
        e.preventDefault()
        $("#my-stuff").empty()
        $("#my-stuff").css('filter', '')
        fetchMyStuff()
        $("#dashboard-home-page").hide()
        $("#form-create-page").hide()
        $('#rent').hide()
        $('#my-order').hide()
        $("#my-order").empty()
        $('#my-stuff').show()
        $('#rent').hide()
        $("#login-page").hide()
        $('.navbar1').show()
        $("#content-body-rent").empty()
        $('#landing-page').hide()
        $("#create-btn").on('click', (e) => {
            e.preventDefault()
            $("#form-create-page").slideDown()
            $("#my-stuff").css('filter', 'blur(3px)')
        })
        $("#xcreate").on('click', (e) => {  
            $("#my-stuff").css('filter', '')
            $("#form-create-page").slideUp()
        })
    })
    

    $('#btn-navbar-myOrder').on('click', (e) => {
        e.preventDefault()
        $("#dashboard-home-page").hide()
        $("#form-create-page").hide()
        $("#my-stuff").empty()
        $("#my-order").empty()
        $('#rent').hide()
        $('#my-order').show()
        $('#my-stuff').hide()
        $("#login-page").hide()
        $('.navbar1').show()
        $("#content-body-rent").empty()
        $('#landing-page').hide()
        fetchMyOrder()
    })
    $('#btn-navbar-logout').on('click', (e) => {
        e.preventDefault()
        resetLandingPage ()
        $("#my-stuff").empty()
        signOut()
        $("#content-body-rent").empty()
        localStorage.clear()
        $("#form-create-page").hide()
        $("#login-page").hide()
        $('.navbar1').hide()
        $('main').hide()
        $('#rent').hide()
        $('#my-order').hide()
        $('#landing-page').show()
        $("#login-btn-signup").on('click', (e) => {
            e.preventDefault()
            $("#login-page").slideDown()
            $("#landing-page").css('filter', 'blur(3px)')
        })
        $("#xlogin").on('click', (e) => {  
            e.preventDefault()
            $("#landing-page").css('filter', '')
            $("#login-page").slideUp()
        })
    })

    $('#form-login').on('submit', (e) => {
        e.preventDefault()
        const email = $('#login-email').val()
        const password = $('#login-password').val()
        $.ajax({
            method: 'post',
            url:'http://localhost:3000/login',
            data: {
                email,
                password
            }
        })
            .done(login => {
                localStorage.setItem('token', login.token)
                localStorage.setItem('name', login.name)
                $('#name-home').empty()
                $('#name-home').append(`${localStorage.name}`)
                $('main').show()
                $('#rent').hide()
                $('#my-order').hide()
                $('#my-stuff').hide()
                $("#login-page").hide()
                $('.navbar1').show()
                $('#landing-page').hide()
                $("#dashboard-home-page").show()
            })
            .fail(err => {
                $("#login-page").hide()
                $('.navbar1').hide()
                $('main').hide()
                $('#rent').hide()
                $('#my-order').hide()
                $("#login-btn-signup").on('click', (e) => {
                    e.preventDefault()
                    $("#login-page").slideDown()
                    $("#landing-page").css('filter', 'blur(3px)')
                })
                $("#xlogin").on('click', (e) => {  
                    $("#landing-page").css('filter', '')
                    $("#login-page").slideUp()
                })
            })
    })

    $('#form-register').on('submit', (e) => {
        e.preventDefault()
        const email = $('#signup-email').val()
        const password = $('#signup-password').val()
        const name = $('#signup-name').val()
        $.ajax({
            method: 'post',
            url:'http://localhost:3000/register',
            data: {
                email,
                password,
                name
            }
        })
            .done(register => {
                localStorage.setItem('token', register.token)
                localStorage.setItem('name', register.name)
                $('#name-home').empty()
                $('#name-home').append(`${localStorage.name}`)
                $('main').show()
                $('#rent').hide()
                $('#my-order').hide()
                $('#my-stuff').hide()
                $("#login-page").hide()
                $('.navbar1').show()
                $('#landing-page').hide()
                $("#dashboard-home-page").show()
            })
            .fail(err => {
                $("#login-page").hide()
                $('.navbar1').hide()
                $('main').hide()
                $('#rent').hide()
                $('#my-order').hide()
                $("#login-btn-signup").on('click', (e) => {
                    e.preventDefault()
                    $("#login-page").slideDown()
                    $("#landing-page").css('filter', 'blur(3px)')
                })
                $("#xlogin").on('click', (e) => {  
                    $("#landing-page").css('filter', '')
                    $("#login-page").slideUp()
                })
            })
    })
})



function homeFashionNews(){
    let settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list?categories=ladies&sortBy=stock&country=us&lang=en&currentpage=0&pagesize=8",
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "apidojo-hm-hennes-mauritz-v1.p.rapidapi.com",
            "x-rapidapi-key": "9fcdc6e1fcmsh37e849b5cfc0c7ap1c02f4jsn1c3f4260cf85"
        }
    }
    $.ajax(settings).done(function (response) {
        for(let i = 0; i < response.results.length; i++){
            if(i == 1){
                $(".carousel-inner").append(`<div class="carousel-item active">
                <div style="display: flex; flex-direction: row;">
                <img class="d-block w-20 img-carousel" src="${response.results[i].articles[0].images[0].url}">
                <div class="carousel-news">
                <p class="hot-picks"> ${response.results[i].name} </p>
                <a href="${response.baseUrl}/${response.results[i].linkPdp}"><button type="button" class="btn btn-danger">Check Now!</button></a>
                </div>
                </div></div>`)
            }
            else  {
                $(".carousel-inner").append(`<div class="carousel-item">
                <div style="display: flex; flex-direction: row;">
                <img class="d-block w-20 img-carousel" src="${response.results[i].articles[0].images[0].url}">
                <div class="carousel-news">
                <p class="hot-picks"> ${response.results[i].name} </p>
                <a href="${response.baseUrl}/${response.results[i].linkPdp}"><button type="button" class="btn btn-danger">Check Now!</button></a>
                </div>
                </div></div>`)
            }
        }
    });
    
}

function fetchDress(){
    $.ajax({
        url: 'http://localhost:3000/',
        method:'GET',
        headers:{
            token: localStorage.getItem('token')
        }
    })
    .done(results => {
        $("#content-body-rent").append('<h2 id="rent-title"> View All</h2>')
        for(let i = 0; i < results.data.length/4; i++){
            $("#content-body-rent").append(`<div class="container container-clothe"><div id=row-dress-${i} class="row"></div></div>`)
            for(let j = i*4; j < (i+1)*4; j++){
                if(j >= results.data.length) {
                    $(`#row-dress-${i}`).append(`<div class="col-sm">
                        <div class="card" style="width: 12vw;">
                            </div>
                        </div>
                    </div>`)
                }else{
                    $(`#row-dress-${i}`).append(`<div class="col-sm">
                        <div class="card" style="width: 12vw;" id=card-${results.data[j].id}>
                            <img src="./img/dress-sample.jpg" class="card-img-top clothe-card" alt="clothe">
                            <div class="card-body">
                                <p class="card-text clothe-renter-card">${results.data[j].UserId} Adam Sementara</p>
                                <p class="card-text clothe-name-card">${results.data[j].name}</p>
                                <p class="card-text clothe-price-card">Rp. ${parsePrice(results.data[j].price)}</p>
                            </div>
                        </div>
                    </div>`)
                    $(`#card-${results.data[j].id}`).on('click', () => {
                        let today = new Date()
                        $.ajax({
                            url:`http://localhost:3000/rent/${results.data[j].id}`,
                            method: 'PUT',
                            headers: {
                                token: localStorage.getItem('token')
                            },
                            data: {
                                due_date: new Date(today.getTime() + 7*24*60*60*1000)
                            }
                        })
                        .done(result => {
                            resetDress()
                        })
                    })
                }
            }
        } 
    })
    
}

function resetDress() {
    $("#content-body-rent").empty()
    fetchDress()
}

function fetchMyStuff(){
    $.ajax({
        url: 'http://localhost:3000/mystuff',
        method:'GET',
        headers:{
            token: localStorage.getItem('token')
        }
    })
    .done(results => {
        $("#my-stuff").append('<h1 id="my-stuff-title">My Stuff</h1>')
        $("#my-stuff").append('<button type="button" id="create-btn" class="btn btn-light" style="margin-left: 1rem;">Add Stuff</button>')
        $("#create-btn").on('click', (e) => {
            e.preventDefault()
            $("#form-create-page").slideDown()
            $("#my-stuff").css('filter', 'blur(3px)')
        })
        $("#xcreate").on('click', (e) => {  
            $("#my-stuff").css('filter', '')
            $("#form-create-page").slideUp()
        })
                for(let i = 0; i < results.data.length/3; i++){
                $("#my-stuff").append(`<div class="container" style="margin: 0;"><div class="row" style="width:80vw" id="row-my-stuff-${i}"></div></div>`)
                    for(let j = i*3; j < (i+1)*3; j++){
                        if(j >= results.data.length) {
                            $(`#row-my-stuff-${i}`).append(`<div class="col-sm">
                                <div class="card" style="width: 480px;">
                                    </div>
                                </div>
                            </div>`)
                        }
                        else {
                            $(`#row-my-stuff-${i}`).append(`<div class="col-sm">
                            <div class="card mb-3" style="max-width: 480px;" >
                                <div class="row no-gutters">
                                <div class="col-md-2 displayflex">
                                    <img src="/img/list-dress-MyStuff.jpg" class="card-img card-img-my-stuff" alt="asd">
                                </div>
                                <div class="col-md-5">
                                    <div class="card-body my-stuff-desc">
                                        <div>
                                            <h5 class="card-title">${results.data[j].name}</h5>
                                            <p class="card-text">Rp. ${parsePrice(results.data[j].price)}</p>
                                        </div>
                                        <div class="my-stuff-config">
                                            <button type="button" class="btn btn-light btn-my-stuff" id=edit-mystuff-${results.data[j].id}>Edit</button>
                                            <button type="button" class="btn btn-light btn-my-stuff" id=delete-mystuff-${results.data[j].id}>Delete</button>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>`)
                        $(`#delete-mystuff-${results.data[j].id}`).on('click', () => {
                            deleteMyStuff(results.data[j].id)
                        })
                        $(`#edit-mystuff-${results.data[j].id}`).on('click', () => {
                            editMyStuff(results.data[j].id)
                        })
                        $("body").append(`<section id="form-edit-page-${results.data[j].id}" class="form-edit-page">
                        <div class="edit-form-div">
                            <p id="xedit-${results.data[j].id}" class="x">x</p>
                            <form id="form-edit-${results.data[j].id}" style="margin: 0 50px 40px 40px;">
                                <h1 class="edit-title">Edit your item</h1>
                                <div class="form-group">
                                        <label for="name">Name :</label>
                                        <input type="text" class="form-control" id="edit-name-${results.data[j].id}">
                                </div>
                                <div class="form-group">
                                    <label for="price">Price :</label>
                                    <input type="text" class="form-control" id="edit-price-${results.data[j].id}">
                                </div>
                                <button type="submit" class="btn btn-warning" style="background-color: silver; border-width: 0; cursor: pointer; margin-left: 0.5rem;">Edit</button>
                            </form>
                        </div>    
                        </section>`)
                        $(`#form-edit-page-${results.data[j].id}`).hide()
                        $(`#edit-mystuff-${results.data[j].id}`).on('click', (e) => {
                            e.preventDefault()
                            $(`#form-edit-page-${results.data[j].id}`).slideDown()
                            $("#my-stuff").css('filter', 'blur(3px)')
                        })
                        $(`#xedit-${results.data[j].id}`).on('click', (e) => {  
                            $("#my-stuff").css('filter', '')
                            $(`#form-edit-page-${results.data[j].id}`).slideUp()
                        })
                    }
                }
            }
        })
}

function editMyStuff(id){
    $.ajax({
        url: `http://localhost:3000/${id}`,
        method: 'GET',
        headers : {
            token: localStorage.getItem('token')
        }
    })
    .done(result => {
        $(`#edit-name-${id}`).val(result.data.name)
        $(`#edit-price-${id}`).val(result.data.price)
        $(`#form-edit-page-${id}`).on('submit', (e) => {
            e.preventDefault()
            const data = {
                name: $(`#edit-name-${id}`).val(),
                price: $(`#edit-price-${id}`).val()
            }
            $.ajax({
                url:`http://localhost:3000/${id}`,
                method: 'PUT',
                headers : {
                    token: localStorage.getItem('token')
                },
                data
            })
            .done(result => {
                fetchMyStuff()
                $("#my-stuff").empty()
                $("#my-stuff").css('filter', '')
                $(`#form-edit-page-${id}`).slideUp()
            })
        })
    })
}

function deleteMyStuff(id){
    $.ajax({
        url: `http://localhost:3000/${id}`,
        method: 'DELETE',
        headers : {
            token: localStorage.getItem('token')
        }
    })
    .done(result => {
        $("#my-stuff").empty()
        $("#my-stuff").css('filter', '')
        fetchMyStuff()
        $("#dashboard-home-page").hide()
        $("#form-create-page").hide()
        $('#rent').hide()
        $('#my-order').hide()
        $("#my-order").empty()
        $('#my-stuff').show()
        $('#rent').hide()
        $("#login-page").hide()
        $('.navbar1').show()
        $("#content-body-rent").empty()
        $('#landing-page').hide()
    })
}

function fetchMyOrder(){
    $.ajax({
        url: 'http://localhost:3000/myorder',
        method:'GET',
        headers:{
            token: localStorage.getItem('token')
        }
    })
    .done(results => {
        $("#my-order").append('<h1 id="my-order-title">My Order</h1>')
                for(let i = 0; i < results.data.length/3; i++){
                $("#my-order").append(`<div class="container" style="margin: 0;"><div class="row" style="width:80vw" id="row-my-order-${i}"></div></div>`)
                    for(let j = i*3; j < (i+1)*3; j++){
                        if(j >= results.data.length) {
                            $(`#row-my-order-${i}`).append(`<div class="col-sm">
                            <div class="card-deck">
                                <div class="card mb-3" style="max-width: 540px; margin-left: 0;">
                                </div>
                            </div>
                          </div>`)
                        }
                        else {
                            $(`#row-my-order-${i}`).append(`<div class="col-sm">
                            <div class="card-deck">
                                <div class="card mb-3" style="max-width: 540px; margin-left: 0;">
                                    <div class="row no-gutters">
                                      <div class="col-md-2">
                                        <img src="/img/list-dress-MyStuff.jpg" class="card-img" alt="...">
                                      </div>
                                      <div class="col-md-5">
                                        <div class="card-body">
                                            <h5 class="card-title">${results.data[j].name}</h5>
                                            <div style="display: flex;">
                                                <p class="card-text" style="width: 50%;">harga</p>
                                                <p class="card-text" style="width: 50%;">return</p>
                                            </div>
                                            <div style="display: flex;">
                                                <p class="card-text" style="width: 50%;">Rp. ${parsePrice(results.data[j].price)}</p>
                                                <p class="card-text" style="width: 50%;">${results.data[j].due_date}</p>
                                            </div>
                                            <button type="button" class="btn btn-dark">Return</button>
                                        </div>
                                      </div>
                                    </div>
                                </div>
                            </div>
                          </div>`)
                    }
                }
            }
        })
}

function parsePrice(priceInt){
    let priceArr = String(priceInt).split('')
    let priceReturn = ''
    for(let i = 0; i < priceArr.length; i++){
        if((priceArr.length - 1 - i)%3 == 0){
            priceReturn += priceArr[i] + '.'
        }else{
            priceReturn += priceArr[i]
        }
    }
    return priceReturn
}

function onSignIn(googleUser) {
    var id_token = googleUser.getAuthResponse().id_token;
    $.ajax({
        url: 'http://localhost:3000/loginGoogle',
        method: 'POST',
        data: {
            id_token
        }
    })
    .then(res => {
        localStorage.setItem('token', res.token)
        localStorage.setItem('name', res.name)
        $('#name-home').empty()
        $('#name-home').append(`${localStorage.name}`)
        $('main').show()
        $('#rent').hide()
        $('#my-order').hide()
        $('#my-stuff').hide()
        $("#login-page").hide()
        $('.navbar1').show()
        $('#landing-page').hide()
        $("#dashboard-home-page").show()
    })
  }

function signOut() {
var auth2 = gapi.auth2.getAuthInstance();
auth2.signOut().then(function () {
    console.log('User signed out.');
});
}

function resetLandingPage (){
    $("#signup-email").val('')
    $("#signup-name").val('')
    $("#signup-password").val('')
    $("#log-in-email").val('')
    $("#login-password").val('')
    $("#landing-page").css('filter', '')    
}
