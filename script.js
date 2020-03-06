$("document").ready(() => {
    const token = localStorage.token
    if(token) {
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
            e.preventDefault()
            $("#landing-page").css('filter', '')
            $("#login-page").slideUp()
        })
    } else {
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
        fetchMyStuff()
        $("#dashboard-home-page").hide()
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
    

    $('#btn-navbar-myOrder').on('click', (e) => {
        e.preventDefault()
        $("#dashboard-home-page").hide()
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
        $("#my-stuff").empty()
        $("#content-body-rent").empty()
        $("#landing-page").css('filter', '')
        localStorage.clear()
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
        console.log(response)
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
                            <div class="card" style="width: 12vw;">
                                <img src="./img/dress-sample.jpg" class="card-img-top clothe-card" alt="clothe">
                                <div class="card-body">
                                    <p class="card-text clothe-renter-card">${results.data[j].UserId} Adam Sementara</p>
                                    <p class="card-text clothe-name-card">${results.data[j].name}</p>
                                    <p class="card-text clothe-price-card">Rp. ${parsePrice(results.data[j].price)}</p>
                                </div>
                            </div>
                        </div>`)
                    }
                }
            }
        })
}

function fetchMyStuff(){
    // $.ajax({
    //     url: 'http://localhost:3000/',
    //     method:'GET',
    // })
    // .done(results => {
        //SEMENTARA
        let results = {
            data : [1,2,3,4,5,6,7,8]
        }
        $("#my-stuff").append('<h1 id="my-stuff-title">My Stuff</h1>')
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
                            <div class="card mb-3" style="max-width: 480px;">
                                <div class="row no-gutters">
                                <div class="col-md-2 displayflex">
                                    <img src="/img/list-dress-MyStuff.jpg" class="card-img card-img-my-stuff" alt="asd">
                                </div>
                                <div class="col-md-5">
                                    <div class="card-body my-stuff-desc">
                                        <div>
                                            <h5 class="card-title">Dress</h5>
                                            <p class="card-text">harga</p>
                                        </div>
                                        <div class="my-stuff-config">
                                            <button type="button" class="btn btn-light btn-my-stuff">Edit</button>
                                            <button type="button" class="btn btn-light btn-my-stuff">Delete</button>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>`)
                    }
                }
            }
        // })
}

function fetchMyOrder(){
    // $.ajax({
    //     url: 'http://localhost:3000/',
    //     method:'GET',
    // })
    // .done(results => {
        //SEMENTARA
        let results = {
            data : [1,2,3,4,5,6,7,8]
        }
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
                                            <h5 class="card-title">Dress Name</h5>
                                            <div style="display: flex;">
                                                <p class="card-text" style="width: 50%;">harga</p>
                                                <p class="card-text" style="width: 50%;">return</p>
                                            </div>
                                            <div style="display: flex;">
                                                <p class="card-text" style="width: 50%;">100.000</p>
                                                <p class="card-text" style="width: 50%;">30 Maret</p>
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
        // })
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