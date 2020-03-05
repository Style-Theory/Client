$("document").ready(() => {
    const token = localStorage.token
    if(token) {
        $("#login-page").hide()
        $('.navbar').hide()
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
        $('main').show()
        $("#login-page").hide()
        $('.navbar').show()
        $('#landing-page').hide()
    }
})