$("document").ready(() => {
    const token = localStorage.token
    if(token) {
        $("#login-page").hide()
        $('.navbar1').hide()
        $('main').hide()
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
        $("#dashboard-home-page").hide()
        $('#my-stuff').show()
        $("#login-page").hide()
        $('.navbar1').show()
        $('#landing-page').hide()
    }
})