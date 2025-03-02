const colors = ["red", "blue", "green", "yellow", "purple", "orange"];
let i = 0;

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('btn-lst').addEventListener('click', function() {
        document.body.style.backgroundColor = colors[i];
        i = (i + 1) % colors.length;
    });
});