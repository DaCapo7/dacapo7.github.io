let timeline, page, text,maindiv2,superdiv2 

class project {
    constructor(title,description,date,lien) {
      this.title = title
      this.description = description
      this.date = date
      this.lien = lien
    }
  
    get htmldiv() {
      return this.calchtml();
    }
  
    calchtml() {
      if(this.lien != null){
          this.htmld = `<h2 style='text-align:center;font-size:40px;color:white;'>${this.title}</h2><br><p style='font-size:20px;color:white;'>${this.description}</p><hr><a target = '_blank' href='${this.lien}' style='font-size:20px;color:#77f;text-decoration:underline'>Here is the project</a><p style='font-size:20px;color:gray;'>First release on: ${this.date}</p>`
            
        }else{
            this.htmld = `<h2 style='text-align:center;font-size:30px;color:white;'>${this.title}</h2><br><p style='font-size:20px;color:white;'>${this.description}</p><hr><p style='font-size:20px;color:gray;'>First release on: ${this.date}</p>`
            
        }
    return this.htmld
  }
}

const projects = 
[
    new project('My first line of code', 'I began to learn programming with python thanks to openclassroom, a french organisation which teaches coding for free', 'September 1, 2020', null),
    new project('Image to ascii converter', "My very first project: a image to ascii converter working with opencv in python. I had this idea by watching a video of <a style='color:#77f'href='https://www.youtube.com/channel/UCYnvxJ-PKiGXo_tYXpWAC-w' target='_blank'>Micode</a>, a french youtuber. Then I made a video to ascii converter based on the same principle.",'October 17, 2020', 'https://github.com/DaCapo7/ImgorVideo-to-ascii'),
    new project('My first website',"My first website bore thanks to a hut my friends and I made. I learnt a lot of things thanks to it. I later added some javascript and some paralax on background.", 'November 15, 2020', 'https://dacapo7.github.io/cmgjb.github.io/'),
    new project('My first zsh script', "I began to code a few lines with zsh. This script create three file, the html one with the doctype, head, script and css link, body; the css one, the js one and it opens the three files in vscode and it opens the html file in chrome.", 'December 20, 2020', 'https://github.com/DaCapo7/CNW/commits/main'),
    new project('A website about morse', "I wanted to learn morse. Thus I had an idea: why not creating a website where I can learn morse ? By coding this website I learn a lot of thing like asynchronous programming, sounds, tabs system etc... (an easter egg is hidden in the website)", 'January 20, 2021', "https://dacapo7.github.io/learnmorseonline.github.io/")
];

let removepage = function(){
    console.log('bing')
    let thelist = document.getElementsByClassName(this.classList[0]+'page')
    thelist[0].remove()
}

let acoteclicked = function(){
     text = projects[parseInt(this.classList[0])]
     page = document.createElement('div')
    page.innerHTML = text.htmldiv
    page.classList = (this.classList[0]+'page')
    page.style = `
    width: 50%;
    height:auto;
    position:fixed;
    background:rgb(24, 24, 24);
    border: 1px solid black;
    border-radius: 5px;
    left: 20%;
    top: 50px;
    padding:40px;`
    maindiv2.appendChild(page)

    croix = document.createElement('div')
    croix.style = `
    position:absolute;
    top:0px;
    right:0px;
    float:right;
    width:8%;
    height:8%;
    z-index:99;
    margin:10px;
    `
    croix.style.background = 'url(imgs/croix.jpg)'
    croix.style.backgroundRepeat = 'no-repeat'
    croix.style.backgroundSize = 'contain'
    page.appendChild(croix)
    croix.classList = this.classList[0];
    croix.addEventListener('click', removepage)
}





window.addEventListener('load',()=>{
    timeline = document.getElementById('protimeline')

    for (i=0; i<projects.length; i++){
        let point = document.createElement('div')
        point.style = "height:20px;width:20px;position:relative;background:rgb(80, 255, 246);transform:translateX(-7.5px);border-radius:100%;"
        point.style.top = timeline.offsetHeight/projects.length*i + 'px';
        point.setAttribute('id','point'+i)
        timeline.appendChild(point)


        let acote = document.createElement('div')
        acote.innerHTML = `<h2>${projects[i].title}</h2>`

        if (i%2==0){acote.style = "background:rgb(30, 30, 30);width: 100px;height: 50px;position:relative;left:40px;z-index:100;top:-25px;font-size:10px;text-align:center;color:rgb(164, 221, 221);padding:3px 2px;overflow-y:auto; border: 1px solid white; border-radius:3px;"}
        else{acote.style = "background:rgb(30, 30, 30);width: 100px;height: 50px;position:relative;left:-125px;z-index:100;top:-25px;font-size:10px;text-align:center;color:rgb(164, 221, 221);padding:3px 2px;overflow-y:auto;border: 1px solid white; border-radius:3px;"}
        acote.classList.add(i);
        acote.addEventListener('click', acoteclicked)
        point.appendChild(acote)
    }
    

    let point = document.createElement('div')
    point.style = "position:absolute;border-left: 10px solid transparent;border-right: 10px solid transparent;border-top: 20px solid rgb(80, 255, 246);transform:translateX(-7.5px);z-index:-99;"

    
    point.style.top = timeline.offsetHeight + 'px';

    point.setAttribute('id','point'+(i+1))
    timeline.appendChild(point)




    
    maindiv2 = document.getElementById('maindiv')
    superdiv2 = document.getElementById('superdiv2')

})