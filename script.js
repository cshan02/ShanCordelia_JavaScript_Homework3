function generate() {
    let complexity = document.getElementById("slider").value;
    var x= "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz/0123456789!@#$%^&*()";
    var password = "";
    for (let i = 0; i <= complexity; i++) {
        var c = Math.floor((Math.random() * Math.floor(x.length - 1)));
        password+= x.charAt(c);
    }
    console.log(password);
    /*add password to textbox/disply area*/
    document.getElementById("passworddisply").value = password
}

/* function to copy password*/
function copyPassword(){
    document.getElementById("passworddisply").select();
    
    document.execCommand("Copy");
    
    alert("Password copied to clipboard!");

    console.log(copyPassword);
}

/* function to show the length display of 25*/
document.getElementById("length").innerHTML = "Length: 25";

