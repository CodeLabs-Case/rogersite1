$(document).ready(()=>{
    $('.testp').click(()=>{
        $('.testp').css('zIndex', 1)
        $('.testa').css('zIndex', 0)
    })

    $('.testa').click(()=>{
        $('.testp').css('zIndex', 0)
        $('.testa').css('zIndex', 1)
    })

})