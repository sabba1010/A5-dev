

let completedTasks = 0;
const totalTasks = 6;

const completeButtons = document.querySelectorAll('.task-btn');


completeButtons.forEach(button => {
    button.addEventListener('click', function() {
        
        const taskDescription = this.closest('.task-div').querySelector('.task-description');
        if (taskDescription) {
            taskDescription.style.display = 'none';
        }

    
        this.textContent = 'Completed';
        this.style.backgroundColor = '#6c757d'; 
        this.disabled = true; 

     
        completedTasks++;

        if (completedTasks === totalTasks) {
            alert('congrats!!! you have completed all the current task');
        }
    });
});

// 


