// let res = document.getElementById("firstTitle")
// let res1 = document.getElementById("home")
// let res2 = document.getElementsByTagName("a")
// let res3 = document.getElementsByTagName("h3")
// let res = document.getElementsByClassName("click")

// let res = document.querySelectorAll("div.container")
// let res = document.querySelector("div.container")




// console.log(res1);
// console.log(res2);
// console.log(res3);


// let res = document.forms['contact-form']
// console.log(res[0].value);
// console.log(res[1].value);
// console.log(res[2].value);

function validateContactForm(){
let fullName = document.getElementById('name').value;

if(isNaN(fullName)){
   alert("success")
    return true
}else{
    alert("enter valid username")
    return false
}


}
// validateContactForm();
function changeTextColor(){
    document.getElementById('p1').style.color = 'red';
    document.getElementById('animateDiv').style.backgroundColor = '#ccc';
    document.getElementById('p1').style.paddingTop = '10px';
    document.getElementById('p1').style.paddingBottom = '10px';


}
function change(){
    document.getElementById('contact-form').style.backgroundColor = "#ccc";
}
function hide(){
    document.getElementById('p1').style.visibility = 'hidden';
}
function show(){
    document.getElementById('p1').style.visibility = 'visible';
}

let ele = document.getElementById('animateDiv');
let rotate = 0;
let mLeft = 0;
// let mTop=0;
let mBot=0;

function animateDiv(){

    rotate++;
    mLeft++;
    // mTop++;
    mBot++;
    ele.style.rotate = `${rotate}deg`;
    if(mLeft<500){
        // mLeft++;

    ele.style.marginLeft = `${mLeft}px`;}
    // ele.style.marginTop = `${mTop}px`;
    // ele.style.marginBottom = `${mBot}px`;

    requestAnimationFrame(animateDiv);
}

// animateDiv();

function getName(){

    let name = document.getElementById('name1').value;
    console.log(name);

}