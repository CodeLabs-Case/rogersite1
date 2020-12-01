$(document).ready(()=>{
    $('.p-podcasts').on("click", ()=>{
        $('.div-wrapper-p').css('z-index', "1")
        $('.div-wrapper-a').css('z-index', "0")

        $('.div-underline-move').animate({"margin-left": "0px"}, 500)
    })

    $('.p-articles').on("click", ()=>{
        $('.div-wrapper-p').css('z-index', "0")
        $('.div-wrapper-a').css('z-index', "1")
        
        $('.div-underline-move').animate({"margin-left": "140px"}, 500)
    })
})