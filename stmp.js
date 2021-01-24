let object, sender, content, sendbutton, sent='true', turner = document.createElement('div'), rotation=20;
turner.style = 'width:10px;height:10px;background:blue;display:inline-block;float:right;position:relative;top:2px;'

let maketurn = async function(){
    sendbutton.appendChild(turner)
    await new Promise(resolve=>setTimeout(resolve,30))
    turner.style.transform = `rotate(${rotation}deg)`
    rotation += 5
    if(sent == false){maketurn()}else{turner.remove()}
}


window.addEventListener('load', ()=>{
    object = document.getElementById('cotitle')
    sender = document.getElementById('coemail')
    content=document.getElementById('cocontent')
    sendbutton = document.getElementById('cosendnow')

sendbutton.addEventListener('click', async ()=>{
    sent = false
    maketurn()
    Email.send({
        Host : "smtp.gmail.com",
        Username : "sendfromdacapo@gmail.com",
        Password : "123caca123",
        To : 'sendfromdacapo@gmail.com',
        From : sender.value,
        Subject : object.value,
        Body : content.value
        
    }).then(
      (message) => {alert(message);
      sent = true}
    );
})
})