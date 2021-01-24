let smepage, sprojetpage, scontactpage,flechegauche,flechedroite, whichvisible, smaindiv,
pagearray = ['mepage','projetspage', 'contact'], numberpage=0, scannerblock, scannerline;

scannerblock = document.createElement('div')
scannerblock.style.position ='absolute'
scannerblock.style.background ='#111'
scannerblock.style.height ='100vh'
scannerblock.style.width ='100vw'
scannerblock.style.left='-100vw'
scannerline = document.createElement('div')
scannerline.style.position='fixed'
scannerline.style.background='rgb(80, 255, 246)'
scannerline.style.boxShadow='0px 0px 30px rgb(80, 255, 246)'
scannerline.style.height ='100vh'
scannerline.style.width ='50px'
scannerline.style.left ='0px'




let godroite = async function(){
    console.log('droiiiite')
    numberpage += 1;
    numberpage = numberpage%3;
    whichvisible = pagearray[numberpage]
    console.log(numberpage, whichvisible)


    document.body.appendChild(scannerline)
    scannerline.appendChild(scannerblock)
    scannerblock.style.left='50px'
    scannerline.style.right ='0px'

        for (i=60;i>0;i--){
            scannerline.style.left = i*2+'vw'
            await new Promise(resolve=>setTimeout(resolve,1))
        }

    
    if (whichvisible == 'mepage'){
        
        sprojetpage.style.display= 'none'
        scontactpage.style.display= 'none'
        smepage.style.display = 'block'
        document.body.appendChild(scannerline)
        scannerline.appendChild(scannerblock)
        
    }else if(whichvisible == 'projetspage'){
        sprojetpage.style.display= 'block'
        scontactpage.style.display= 'none'
        smepage.style.display = 'none'
    }else{
        sprojetpage.style.display= 'none'
        scontactpage.style.display= 'block'
        smepage.style.display = 'none'
    }
    for (i=0;i<60;i++){
        scannerline.style.left = i*2+'vw'
        await new Promise(resolve=>setTimeout(resolve,1))
    }
    
}

let gogauche = async function(){

    console.log('gauchhhe')
    numberpage -= 1;
    if (numberpage == -1){numberpage = 2}

    


    whichvisible = pagearray[numberpage]
    console.log(numberpage, whichvisible)

    scannerblock.style.left='-100vw'
    scannerline.style.left ='0px'

    document.body.appendChild(scannerline)
        scannerline.appendChild(scannerblock)
        for (i=-10;i<50;i++){
            scannerline.style.left = i*2+'vw'
            await new Promise(resolve=>setTimeout(resolve,1))
        }




    if (whichvisible == 'mepage'){
        sprojetpage.style.display= 'none'
        scontactpage.style.display= 'none'
        smepage.style.display = 'block'
    }else if(whichvisible == 'projetspage'){
        sprojetpage.style.display= 'block'
        scontactpage.style.display= 'none'
        smepage.style.display = 'none'
    }else{
        sprojetpage.style.display= 'none'
        scontactpage.style.display= 'block'
        smepage.style.display = 'none'
    }
    for (i=50;i>-10;i--){
        scannerline.style.left = i*2+'vw'
        await new Promise(resolve=>setTimeout(resolve,1))
    }


    
}


window.addEventListener('load', ()=>{
    console.log('hay')
    smepage = document.getElementById('mepage')
    sprojetpage = document.getElementById('projetspage')
    scontactpage = document.getElementById('contact')
    sprojetpage.style.display= 'none'
    scontactpage.style.display= 'none'
    whichvisible = 'mepage'
    sflechedroite = document.getElementById('flechedroite')
    sflechegauche = document.getElementById('flechegauche')
    sflechedroite.addEventListener('click', godroite)
    sflechegauche.addEventListener('click', gogauche)
    smaindiv = document.getElementById('maindiv')
})