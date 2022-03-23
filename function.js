



function focusregister(){
    


document.getElementById("focuslogin").style.backgroundColor="rgba(133, 127, 126, 0.247)";
document.getElementById("focusregister").style.backgroundColor="transparent";
document.getElementById("focusregister").style.borderBottom="2px solid black";
document.getElementById("focuslogin").style.borderBottom="2px solid transparent";
document.getElementById("focusregister").style.transition="0.4s ease";
document.getElementById("login-hide").style.display="none";
document.getElementById("register-hide").style.display="flex";



    }


    
function focuslogin(){

    document.getElementById("focusregister").style.backgroundColor="rgba(133, 127, 126, 0.247)";
    document.getElementById("focuslogin").style.backgroundColor="";
    document.getElementById("focuslogin").style.borderBottom="2px solid black";
    document.getElementById("focusregister").style.borderBottom="2px solid transparent";
    document.getElementById("focusregister").style.transition="0.4s ease";
    document.getElementById("login-hide").style.display="flex";
    document.getElementById("register-hide").style.display="none";
    
    

}


