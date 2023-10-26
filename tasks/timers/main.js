document.addEventListener('DOMContentLoaded', function() {
    // timer constructer
    function CreateTimer() {

        let hours = 0;
        let minutes = 0;
        let seconds = 0;

        let timerTimeout;

        /*-------------timer functionality---------------*/

        const activateTimer = () => {
            [this.stopButton, this.line, this.dateTime].forEach(timerElement => {
                timerElement.classList.add('active');
            });
            this.startButton.style.display = 'none';
            this.pauseButton.style.display = 'block';
        };
        const deactivateTimer = () => {
            [this.stopButton, this.line, this.dateTime].forEach(timerElement => {
                timerElement.classList.remove('active');
            });
            this.startButton.style.display = 'block';
            this.pauseButton.style.display = 'none';
        };
        const startTimer = () => {
            updateTimer();
            timerTimeout = setTimeout(function continueTimer() {
                updateTimer();
                timerTimeout = setTimeout(continueTimer, .00001);
            }, .00001);
        };
        const resetTimer = () => {
            clearTimeout(timerTimeout);
            hours = 0;
            minutes = 0;
            seconds = 0;
            this.dateTime.innerHTML = '';
        };
        const updateTimer = () => {
            const updateHours = () => {
                hours++;
                if (hours === 24) {
                    resetTimer();
                }
            };
            const updateMinutes = () => {
                minutes++;
                if (minutes === 60) {
                    updateHours();
                    minutes = 0;
                }
            };

            seconds++;
            if (seconds === 60) {
                updateMinutes();
                seconds = 0;
            }
            const formatNumber = function(number) {
                return number < 10 ? String('0' + number) : number;
            };
            const dateTimeFormat = new Array();
            [seconds, minutes, hours].forEach((displayPart, displayPartIndex, displayPartArray) => {
                if (displayPart > 0 || displayPartArray[displayPartIndex + 1] > 0) {
                    dateTimeFormat.unshift(formatNumber(displayPart));
                }
            });
            this.dateTime.innerHTML = dateTimeFormat.join(':');
        };

        /*-------------------timer view------------------*/

        // creating elements
        [

            'timer',
            'dateTime',
            'line',
            'buttons',
            'startButton',
            'pauseButton',
            'stopButton'

        ].forEach(timerElement => {
            this[timerElement] = document.createElement('div');
        });
        
        const { timer, dateTime, line, buttons, startButton, pauseButton, stopButton } = this;

        // general container
        timer.classList.add(`timer`);

        // dateTime display
        dateTime.classList.add('timer__dateTime');

        // separating line
        line.classList.add('timer__line');

        // buttons container
        buttons.classList.add('timer__buttons');

        // buttons -> start
        startButton.classList.add('timer__buttons-start');
        const playImg = document.createElement('img');
        playImg.src = 'img/play.svg'
        startButton.onclick = () => {
            activateTimer();
            startTimer();
        };
        startButton.append(playImg);

        // buttons -> pause
        pauseButton.classList.add('timer__buttons-pause');
        pauseButton.style.display = 'none';
        pauseButton.onclick = () => {
            clearTimeout(timerTimeout);
            deactivateTimer();
        };

        // buttons -> stop
        stopButton.classList.add('timer__buttons-stop');
        stopButton.onclick = () => {
            resetTimer();
            deactivateTimer();
        };

        // collect timer
        buttons.append(this.startButton);
        buttons.append(this.pauseButton);
        buttons.append(this.stopButton);

        timer.append(this.dateTime);
        timer.append(this.line);
        timer.append(this.buttons);

    };
    
    const addTimerButton = document.querySelector('.add_timer');
    // add new timer
    addTimerButton.onclick = function() {
        addTimerButton.before(new CreateTimer().timer);
    };
});