$(document).ready(()=>{
    $('.testp').on('click', ()=>{
        $('.testp').css('zIndex', 1)
        $('.testa').css('zIndex', 0)
    })

    $('.testa').on('click', ()=>{
        $('.testp').css('zIndex', 0)
        $('.testa').css('zIndex', 1)
    })

})