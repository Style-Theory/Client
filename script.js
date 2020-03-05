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
    
    homeFashionNews()

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