





let book1=document.getElementById("myb1")
let summary1=document.getElementById("sum1")
let show1=document.getElementById("myshow1")
let hide1=document.getElementById("myhide1")


let book2=document.getElementById("myb2")
let summary2=document.getElementById("sum2")
let show2=document.getElementById("myshow2")
let hide2=document.getElementById("myhide2")

let book3=document.getElementById("myb3")
let summary3=document.getElementById("sum3")
let show3=document.getElementById("myshow3")
let hide3=document.getElementById("myhide3")

let book4=document.getElementById("myb4")
let summary4=document.getElementById("sum4")
let show4=document.getElementById("myshow4")
let hide4=document.getElementById("myhide4")

show1.onclick=function(){
    book1.style.display="none"
    book2.style.display="none"
    book3.style.display="none"
    book4.style.display="none"
    show1.style.display="none"
    show2.style.display="none"
    show3.style.display="none"
    show4.style.display="none" 
    hide2.style.display="none"
    hide3.style.display="none"
    hide4.style.display="none"
    hide1.style.display="block"
    summary1.style.display="block"
}

hide1.onclick=function(){
    book1.style.display="block"
    book2.style.display="block"
    book3.style.display="block"
    book4.style.display="block"
    show1.style.display="block"
    show2.style.display="block"
    show3.style.display="block"
    show4.style.display="block" 
    hide1.style.display="none"
    summary1.style.display="none"
}

show2.onclick=function(){
    book1.style.display="none"
    book2.style.display="none"
    book3.style.display="none"
    book4.style.display="none"
    summary1.style.display="none"
    summary3.style.display="none"
    summary4.style.display="none"
    show1.style.display="none"
    show2.style.display="none"
    show3.style.display="none"
    show4.style.display="none" 
    hide1.style.display="none"
    hide3.style.display="none"
    hide4.style.display="none"
    hide2.style.display="block"
    summary2.style.display="block"
}

hide2.onclick=function(){
    book1.style.display="block"
    book2.style.display="block"
    book3.style.display="block"
    book4.style.display="block"
    show1.style.display="block"
    show2.style.display="block"
    show3.style.display="block"
    show4.style.display="block" 
    hide2.style.display="none"
    summary2.style.display="none"
}

show3.onclick=function(){
    book1.style.display="none"
    book2.style.display="none"
    book3.style.display="none"
    book4.style.display="none"
    summary1.style.display="none"
    summary2.style.display="none"
    summary4.style.display="none"
    show1.style.display="none"
    show2.style.display="none"
    show3.style.display="none"
    show4.style.display="none" 
    hide1.style.display="none"
    hide2.style.display="none"
    hide4.style.display="none"
    hide3.style.display="block"
    summary3.style.display="block"
}
hide3.onclick=function(){
    book1.style.display="block"
    book2.style.display="block"
    book3.style.display="block"
    book4.style.display="block"
    show1.style.display="block"
    show2.style.display="block"
    show3.style.display="block"
    show4.style.display="block" 
    hide3.style.display="none"
    summary3.style.display="none"
}

show4.onclick=function(){
    book1.style.display="none"
    book2.style.display="none"
    book3.style.display="none"
    book4.style.display="none"
    summary1.style.display="none"
    summary2.style.display="none"
    summary3.style.display="none"
    show1.style.display="none"
    show2.style.display="none"
    show3.style.display="none"
    show4.style.display="none" 
    hide1.style.display="none"
    hide2.style.display="none"
    hide3.style.display="none"
    hide4.style.display="block"
    summary4.style.display="block"
}
hide4.onclick=function(){
    book1.style.display="block"
    book2.style.display="block"
    book3.style.display="block"
    book4.style.display="block"
    show1.style.display="block"
    show2.style.display="block"
    show3.style.display="block"
    show4.style.display="block" 
    hide4.style.display="none"
    summary4.style.display="none"
}