$(document).ready(()=>{
    $('.testp').on("click", ()=>{
        $('.testp').css('z-index', 1)
        $('.testa').css('z-index', 0)
    })

    $('.testa').on("click", ()=>{
        $('.testp').css('z-index', 0)
        $('.testa').css('z-index', 1)
    })
})