function butonClick() {
    var continut = document.getElementById("casuta").value;
    $("#lista").append($("<li>").html(continut));
    document.getElementById("casuta").value = "";
}

function inchidereTodo(){
    document.getElementById("lista").innerHTML = "";
}