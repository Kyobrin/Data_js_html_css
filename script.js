    var corpo = document.getElementById('corpo')
    var hora = new Date()
    var horaexata = hora.getHours()
    var img = document.getElementById('imagem')
    var temp = document.getElementById ('tempo')
    if (horaexata < 12){
        corpo.style.background = 'rgb(113, 113, 222)'
        var indica = document.getElementById('horario')
        indica.innerHTML = `Agora são exatamente ${horaexata} horas.`
    }else if (horaexata >= 18) {
        temp.innerHTML = 'Hora da Noite'
        corpo.style.background = 'rgba(65, 65, 65, 0.868)'
        img.setAttribute ('src', 'https://imgs.search.brave.com/zmWqW0tUBSheud0e8ql9_975hpqIVGgVzDFYEXccOmc/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly8xLmJw/LmJsb2dzcG90LmNv/bS8tcTlKek5QQnVC/N2cvWGIyTWZTU01p/R0kvQUFBQUFBQUFl/RzQvQVdKY3duZ1pH/aEFFNFlhUWVUdGsw/LThVSVRZN3JKbkln/Q0xjQkdBc1lIUS9z/MjU2MC9taWxreS13/YXktbmlnaHQtc2t5/LXN0YXJzLXdnLTI1/NjB4MTYwMC5qcGc')
        var indica = document.getElementById('horario')
        indica.innerHTML = `Agora são exatamente ${horaexata} horas.`

    }else{
        temp.innerHTML = 'Hora da Tarde'
        img.setAttribute ('src', 'https://imgs.search.brave.com/7BcDhIasHDAawCyhjFEX10CjP2WYLk87E0N9F3Hr7to/rs:fit:780:438:1/g:ce/aHR0cDovL3d3dy5t/ZW1vcmlhcm9uZG9u/ZW5zZS5jb20uYnIv/cHVibGljL3RodW1i/bmFpbC5waHA_dz03/ODAmc3JjPWh0dHA6/Ly93d3cubWVtb3Jp/YXJvbmRvbmVuc2Uu/Y29tLmJyL3B1Ymxp/Yy91cGxvYWQvZ2Fs/ZXJpYS1pbWFnZW0v/NmMyMTFhYjZlODY4/ZmI1YWM4NzY1NDg0/OGRkOGEzN2MuanBn')
        corpo.style.background = 'rgb(241, 104, 54)'
        var indica = document.getElementById('horario')
        indica.innerHTML = `Agora são exatamente ${horaexata} horas.`
    }