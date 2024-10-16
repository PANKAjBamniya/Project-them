let elem = document.querySelectorAll('.elem')
// let image = document.querySelector('#img')

elem.forEach(function(value){


    value.addEventListener('mouseenter', function(){
        value.childNodes[3].style.opacity = 1
    })
    value.addEventListener('mouseleave', function(){
        value.childNodes[3].style.opacity = 0
    })

    value.addEventListener('mousemove', function(e){
        value.childNodes[3].style.left = e.x+"px"
        value.childNodes[3].style.top = e.y+"px"
    })


})

