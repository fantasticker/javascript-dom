function getPilihanComputer(){
    const comp = Math.random();

    if( comp < 0.34 ) return 'gajah';
    if( comp >= 0.34 && comp < 0.67 ) return 'orang';
    return 'semut';
}

function getHasil(comp, player){
    if( player == comp ) return hasil = 'SERI!';
    if( player == 'gajah' ) return ( comp == 'orang' ) ? 'MENANG!' : 'KALAH!';
    if( player == 'orang' ) return ( comp == 'gajah' ) ? 'KALAH!' : 'MENANG!';
    if( player == 'semut' ) return hasil = ( comp == 'orang' ) ? 'KALAH' : 'MENANG!';
}

function putar(){
    const imgComputer = document.querySelector('.img-komputer')
    const gambar = ['gajah', 'orang', 'semut']
    let i  = 0
    const waktuMulai = new Date().getTime()
    setInterval(function(){

        if(new Date().getTime() - waktuMulai > 1000){
            clearInterval
            return
        }

        imgComputer.setAttribute('src','img/' + gambar[i++] + '.png')
        if(i == gambar.length) i = 0
    }, 100)
}


const pilihan = document.querySelectorAll('li img')
pilihan.forEach(function(pil){
    pil.addEventListener('click', function(){
        const pilihanComputer = getPilihanComputer()
        const pilihanPlayer = pil.className
        const hasil = getHasil(pilihanComputer, pilihanPlayer)

        putar()

        setTimeout(function(){
            const imgComputer = document.querySelector('.img-komputer')
            imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png')
            
            const info = document.querySelector('.info')
            info.innerHTML = hasil
        }, 1000)
    })
})




// const pGajah = document.querySelector('.gajah')
// const pOrang = document.querySelector('.orang')
// const pSemut = document.querySelector('.semut')

// pGajah.addEventListener('click', () => {

// })

// pOrang.addEventListener('click', () => {
//     const pilihanComputer = getPilihanComputer()
//     const pilihanPlayer = pOrang.className
//     const hasil = getHasil(pilihanComputer, pilihanPlayer)
    
//     const imgComputer = document.querySelector('.img-komputer')
//     imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png')
    
//     const info = document.querySelector('.info')
//     info.innerHTML = hasil
// })

// pSemut.addEventListener('click', () => {
//     const pilihanComputer = getPilihanComputer()
//     const pilihanPlayer = pSemut.className
//     const hasil = getHasil(pilihanComputer, pilihanPlayer)
    
//     const imgComputer = document.querySelector('.img-komputer')
//     imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png')
    
//     const info = document.querySelector('.info')
//     info.innerHTML = hasil
// })

