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
            $("#landing-page").css('filter', '')
            $("#login-page").slideUp()
        })
    } else {
        $("#landing-page").css('filter', '')
        $("#form-create-page").hide()
        $('#name-home').empty()
        $('#name-home').append(`${localStorage.name}`)
        $("#dashboard-home-page").show()
        $('#rent').hide()
        $('#my-order').hide()
        $('#my-stuff').hide()
        $("#login-page").hide()
        $('.navbar1').show()
        $('#landing-page').hide()
    }

    $('#btn-navbar-home').on('click', () => {
        $("#dashboard-home-page").show()
        $("#form-create-page").hide()
        $('#rent').hide()
        $('#my-order').hide()
        $('#my-stuff').hide()
        $("#login-page").hide()
        $('.navbar1').show()
        $('#landing-page').hide()
    })

    $('#btn-navbar-rent').on('click', () => {
        $("#dashboard-home-page").hide()
        $("#form-create-page").hide()
        $('#rent').show()
        $('#my-order').hide()
        $('#my-stuff').hide()
        $("#login-page").hide()
        $('.navbar1').show()
        $('#landing-page').hide()
    })

    $('#btn-navbar-myStuff').on('click', () => {
        $("#my-stuff").css('filter', '')
        $("#dashboard-home-page").hide()
        $("#form-create-page").hide()
        $('#rent').hide()
        $('#my-order').hide()
        $('#my-stuff').show()
        $('#rent').hide()
        $("#login-page").hide()
        $('.navbar1').show()
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
    
    homeFashionNews()

    $('#btn-navbar-myOrder').on('click', () => {
        $("#dashboard-home-page").hide()
        $("#form-create-page").hide()
        $('#rent').hide()
        $('#my-order').show()
        $('#my-stuff').hide()
        $("#login-page").hide()
        $('.navbar1').show()
        $('#landing-page').hide()
    })
    $('#btn-navbar-logout').on('click', () => {
        $("#landing-page").css('filter', '')
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