$(document).ready(()=>{
    $('.testp').on("click", ()=>{
        alert("P Click")

        $('.testp').css('z-index', 1)
        $('.testa').css('z-index', 0)
    })

    $('.testa').on("click", ()=>{
        alert("A Click")

        $('.testp').css('z-index', 0)
        $('.testa').css('z-index', 1)
    })
})