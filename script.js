$("document").ready(() => {
    $("#login-page").hide()
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