$("document").ready(() => {
    const token = localStorage.token
    if(!token) {
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
    } else {
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
        $('#rent').hide()
        $('#my-order').hide()
        $('#my-stuff').hide()
        $("#login-page").hide()
        $('.navbar1').show()
        $('#landing-page').hide()
    })

    $('#btn-navbar-rent').on('click', () => {
        $("#dashboard-home-page").hide()
        $('#rent').show()
        $('#my-order').hide()
        $('#my-stuff').hide()
        $("#login-page").hide()
        $('.navbar1').show()
        $('#landing-page').hide()
    })

    $('#btn-navbar-myStuff').on('click', () => {
        $("#dashboard-home-page").hide()
        $('#rent').hide()
        $('#my-order').hide()
        $('#my-stuff').show()
        $("#login-page").hide()
        $('.navbar1').show()
        $('#landing-page').hide()
    })
    $('#btn-navbar-myOrder').on('click', () => {
        $("#dashboard-home-page").hide()
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