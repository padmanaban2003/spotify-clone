
let input=document.querySelector("input")

let validation=()=>{
    console.log(input.type);
    if(input.value.length==""){
        alert("This email is invalid. Make sure it's written like example@email.com")
    }
    else{
        alert("login sucessfully")
    }
}