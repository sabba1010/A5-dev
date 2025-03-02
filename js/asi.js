const colors = ["red", "blue", "green", "yellow", "purple", "orange"];
let i = 0;

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('btn-lst').addEventListener('click', function() {
        document.body.style.backgroundColor = colors[i];
        i = (i + 1) % colors.length;
    });
});


// 

document.querySelectorAll('.task-btn').forEach(button => {
    button.addEventListener('click', () => {
        
        const taskDiv = button.closest('.bg-blue-100'); 
        taskDiv.classList.add('opacity-50');
        
        
        const taskDescription = taskDiv.querySelector('h1').innerText; 
        const activityLog = document.querySelector('.mx-auto .bg-orange-50'); 
        const newLog = document.createElement('div');
        newLog.classList.add('p-4', 'bg-gray-100', 'rounded-lg', 'mb-4');
        newLog.innerHTML = `<p>${taskDescription}</p>`; 
        activityLog.appendChild(newLog); 
    });
});