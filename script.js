const enterName = document.getElementById('name');
const age = document.getElementById('age');

const user = document.getElementById('user');



const button = document.getElementById('button');

button.addEventListener("click", () => {
    
    if (age.value !== ''){

        const p = document.createElement('p');

        if (age.value <= 12) {
            p.innerHTML = "Hello "+ enterName.value + ", Your Ticket Price is $5";
        }else if (age.value > 12 & age.value <= 18) {
            p.innerHTML = "Hello "+ enterName.value + ", Your Ticket Price is $10";
        }else if (age.value > 18 & age.value <= 60) {
            p.innerHTML = "Hello "+ enterName.value + ", Your Ticket Price is $20";
        }else if (age.value > 60) {
            p.innerHTML = "Hello "+ enterName.value + ", Your Ticket Price is $15";
        } 


    
        const parent = document.getElementById('parent');

        parent.appendChild(p);
        
    }
    
})