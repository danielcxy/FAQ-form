// SELEÇÃO DE BOTÕES VIA DOM - DOCUMENT OBJECT MODEL
const btn1 = document.querySelector('.information1')
const btn2 = document.querySelector('.information2')
const btn3 = document.querySelector('.information3')
const btn4 = document.querySelector('.information4')
const btn5 = document.querySelector('.information5')
// SELEÇÃO DE DIV'S ESCONDIDAS VIA DOM - DOCUMENT OBJECT MODEL
const hidde1 = document.querySelector('.hiddeninformation1')
const hidde2 = document.querySelector('.hiddeninformation2')
const hidde3 = document.querySelector('.hiddeninformation3')
const hidde4 = document.querySelector('.hiddeninformation4')
const hidde5 = document.querySelector('.hiddeninformation5')
// SELEÇÃO DE IMAGENS DO ARCO (ARROW) VIA DOM - DOCUMENT OBJECT MODEL
const imagearrow = document.querySelector('.arrow')
const imagearrow2 = document.querySelector('.arrow2')
const imagearrow3 = document.querySelector('.arrow3')
const imagearrow4 = document.querySelector('.arrow4')
const imagearrow5 = document.querySelector('.arrow5')
// FUNÇÕES QUE VALIDAM O 'FAQ'
btn1.addEventListener('click', function() {
    if(hidde1.style.display != 'block') {
        btn1.style.color = "Orange";
        imagearrow.style.transform = "rotate(180deg)"
        hidde1.style.display = 'block';
        
    } else {
        hidde1.style.display = 'none';
        imagearrow.style.transform = "rotate(0deg)"
        btn1.style.color = "black";
    }    
});
btn2.addEventListener('click', function () {
    if(hidde2.style.display != 'block') {
        btn2.style.color = "Orange";
        imagearrow2.style.transform = "rotate(180deg)"
        hidde2.style.display = 'block';
    } else {
        hidde2.style.display = 'none';
        imagearrow2.style.transform = "rotate(0deg)"
        btn2.style.color = "black";
    }
})
btn3.addEventListener('click', function(){
    if(hidde3.style.display != 'block'){
        btn3.style.color = "Orange";
        imagearrow3.style.transform = "rotate(180deg)"
        hidde3.style.display = 'block';
    } else {
        hidde3.style.display = 'none';
        imagearrow3.style.transform = "rotate(0deg)"
        btn3.style.color = "black";
    }   
})
btn4.addEventListener('click', function() {
    if(hidde4.style.display != 'block') {
        btn4.style.color = "Orange";
        imagearrow4.style.transform = "rotate(180deg)"
        hidde4.style.display = 'block';
    } else {
        hidde4.style.display = 'none';
        imagearrow4.style.transform = "rotate(0deg)"
        btn4.style.color = "black";
    }    
});
btn5.addEventListener('click', function() {
    if(hidde5.style.display != 'block') {
        btn5.style.color = "Orange";
        imagearrow5.style.transform = "rotate(180deg)"
        hidde5.style.display = 'block';
    } else {
        hidde5.style.display = 'none';
        imagearrow5.style.transform = "rotate(0deg)"
        btn5.style.color = "black";
    }    
});