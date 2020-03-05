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
            $("#landing-page").css('filter', '')
            $("#login-page").slideUp()
        })
    } else {
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
})