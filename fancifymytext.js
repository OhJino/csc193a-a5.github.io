
document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("Bigger");
    const inputText = document.getElementById("inputText");
    if (inputText) {
        button.addEventListener("click", function () {
            inputText.style.fontSize = (parseFloat(window.getComputedStyle(inputText).fontSize) + 10) + "px";
        });
    }
    button.addEventListener("click", function () {
            alert("Hello, world!");
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const radButton = document.getElementById("FancyShmancy");
    var textArea = document.getElementById("inputText");
    if (textArea) {
        radButton.addEventListener("click", function () {
            textArea.style.fontWeight = "bold";
            textArea.style.color = "blue";
            textArea.style.textDecoration = "underline";
        });
    }
    radButton.addEventListener("click", function () {
            alert("Hello, world!");
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const radButton = document.getElementById("BoringBetty");
    var textArea = document.getElementById("inputText");
    if (textArea) {
        radButton.addEventListener("click", function () {
            textArea.style.fontWeight = "normal";
            textArea.style.color = "black";
            textArea.style.textDecoration = "none";
        });
    }
    radButton.addEventListener("click", function () {
            alert("Hello, world!");
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const radButton = document.getElementById("Moo");
    var textArea = document.getElementById("inputText");
    
    radButton.addEventListener("click", function () {
        sentences = textArea.value.split(".");
        for (var i = 0; i < sentences.length; i++) {
            parts = sentences[i].split(" ");
            joined_str = parts.join("_");
            joined_str = joined_str.toUpperCase();
            joined_str = joined_str.replaceAll("_", " ");
            sentences[i] = joined_str + "-Moo";
        }
        textArea.value = sentences.join(".");
    });
});