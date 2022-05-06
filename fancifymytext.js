function Bigger(){
    document.getElementById("inputText").style.fontSize = "24pt";
}

function Smaller(){
    document.getElementById("inputText").style.fontSize = "6pt";
}

function Medium(){
    document.getElementById("inputText").style.fontSize = "10pt";
}

function FancyShmancy(){
    document.getElementById("inputText").style.fontWeight = "bold";
    document.getElementById("inputText").style.color = "blue";
    document.getElementById("inputText").style.textDecoration = "underline";
}

function Boring(){
    document.getElementById("inputText").style.fontWeight = "normal";
    document.getElementById("inputText").style.color = "black";
    document.getElementById("inputText").style.textDecoration = "none";
}

function Moo(){
    const text = document.getElementById("inputText");
    text.value = text.value.toUpperCase();

    var str = text.value;
    var parts = str.split(".");  // ["How", "are", "you?"]
    str = parts.join("-Moo");       // "How_are_you?"
    
    text.value = str;
}

function alertTest(){
    alert("Hello, World!");
}
