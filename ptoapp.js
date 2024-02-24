let profilepic = document.getElementById("pro");
let inputFile = document.getElementById("input-file");
inputFile.onchange = function() {
    profilepic.src = URL.createObjectURL(inputFile.files[0])
}