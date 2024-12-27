// Task 1

const timeHour = () => {
    const secondsEl = document.querySelector(".seconds");
    const minutesEl = document.querySelector(".minutes");
    const hoursEl = document.querySelector(".hours");
    const messageEl = document.querySelector(".message");

    let timer = 3600;

    const interval = setInterval(() => {
        timer--;

        if (timer === 0) {
            clearInterval(interval);
            messageEl.textContent = "Таймер завершено!";
            messageEl.classList.add("show");
            
            setTimeout(() => {
                messageEl.classList.remove("show");
            }, 6000);
        }

        const hours = Math.floor(timer / 3600);
        const minutes = Math.floor((timer % 3600) / 60);
        const seconds = timer % 60;

        if (timer === 1800) {
            messageEl.textContent = "Залишилось менше половини часу!";
            messageEl.classList.add("show");
        
            setTimeout(() => {
                messageEl.classList.remove("show");
            }, 3000);
        }

        hoursEl.textContent = hours.toString().padStart(2, '0');
        minutesEl.textContent = minutes.toString().padStart(2, '0');
        secondsEl.textContent = seconds.toString().padStart(2, '0');
    }, 1000);
};

timeHour();

// Task 2

const timeSeconds = () => {
    const timerEl = document.querySelector("#time");
    const hoursEl = document.querySelector("#hours");
    const minutesEl = document.querySelector("#minutes");
    const secondsEl = document.querySelector("#seconds");
    const millisecondsEl = document.querySelector("#milliseconds");
    const messageEl = document.querySelector("#message");

    let timer = 30000;

    const interval = setInterval(() => {
        timer -= 10; 

        if (timer === 0) {
            clearInterval(interval);
            timerEl.classList.remove("warning"); 
            messageEl.textContent = "Таймер завершено!";
            messageEl.classList.add("show");

            millisecondsEl.textContent = "000";

            setTimeout(() => {
                messageEl.classList.remove("show");
            }, 6000);

            return;
        }

        const hours = Math.floor(timer / (1000 * 60 * 60));
        const minutes = Math.floor((timer % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timer % (1000 * 60)) / 1000);
        const milliseconds = timer % 1000;

        if (timer <= 10000) {
            timerEl.classList.add("warning");
        } else {
            timerEl.classList.remove("warning");
        }

        hoursEl.textContent = hours.toString().padStart(2, '0');
        minutesEl.textContent = minutes.toString().padStart(2, '0');
        secondsEl.textContent = seconds.toString().padStart(2, '0');
        millisecondsEl.textContent = milliseconds.toString().padStart(3, '0');
    }, 10); 
};

timeSeconds();