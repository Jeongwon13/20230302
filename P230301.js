// 배열 선언
const arr = ['red','blue','green','yellow','pink'];



// 첫번째 칸 RED색상 입히기
    const text1 = document.getElementById("text1");
    const td1 = document.getElementById("td1");
document.getElementById("text1").addEventListener("change", function(){
   
        if(text1.value == arr[0]) {
            
            td1.style.backgroundColor = arr[0];
            td1.style.transitionDuration = "3s";
            text1.style.color = "red";
            
        }
})
 
// 두번째 칸 BLUE색상 입히기
    const text2 = document.getElementById("text2");
    const td2 = document.getElementById("td2");
document.getElementById("text2").addEventListener("change", function(){
    
        if(text2.value == arr[1]) {
         
            td2.style.backgroundColor = arr[1];
            td2.style.transitionDuration = "3s";
            text2.style.color = "blue";
          
        }
})
 
// 세번째 칸 GREEN색상 입히기
    const text3 = document.getElementById("text3");
    const td3 = document.getElementById("td3");
document.getElementById("text3").addEventListener("change", function(){

     
        
        if(text3.value == arr[2]) {
         
            td3.style.backgroundColor = arr[2];
            td3.style.transitionDuration = "3s";
            text3.style.color = "green";
          
        }
})
 
// 네번째 칸 YELLOW색상 입히기
    const text4 = document.getElementById("text4");
    const td4 = document.getElementById("td4");
document.getElementById("text4").addEventListener("change", function(){
    const text4 = document.getElementById("text4");
    const td4 = document.getElementById("td4");
     
        
        if(text4.value == arr[3]) {
         
            td4.style.backgroundColor = arr[3];
            td4.style.transitionDuration = "3s";
            text4.style.color = "yellow";
          
        }
})
 
// 다섯번째 칸 PINK색상 입히기
    const text5 = document.getElementById("text5");
    const td5 = document.getElementById("td5");
document.getElementById("text5").addEventListener("change", function(){
        
        if(text5.value == arr[4]) {
         
            td5.style.backgroundColor = arr[4];
            td5.style.transitionDuration = "3s";
            text5.style.color = "pink";
        }
})

 // [현재 transition-duration:] 입력한 시간으로 바꾸기
    const btn1 = document.getElementById("btn1");
    const span1 = document.getElementById("span1");
    const text6 = document.getElementById("text6");

    btn1.addEventListener("click", function() {
       span1.innerText = text6.value;
})

// 리셋 버튼 설정 잘 해주기
const btn2 = document.getElementById("btn2").addEventListener("click", function() {
    td1.style.backgroundColor = "transparent";
    td2.style.backgroundColor = "transparent";
    td3.style.backgroundColor = "transparent";
    td4.style.backgroundColor = "transparent";
    td5.style.backgroundColor = "transparent";
    
})
