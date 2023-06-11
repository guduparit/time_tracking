//Importing JSON Data

import data from './data.json' assert { type: 'json' }

// selecting clickable elements

const statFreq = document.querySelector('.user--stat--freq');

const current = document.querySelectorAll('.current--hours');
const last = document.querySelectorAll('.last-duration');

// let currentStat = 0;
// let lastStat = 0;
// const data = JSON.parse();

console.log(data);

const processFunc = function (e) {

    // for daily processing

    if (e.target.classList.contains('stat--daily')) {

        // console.log(e)
        current.forEach((el, i) => {
            el.textContent = `${data[i].timeframes.daily.current}hrs`
        });

        last.forEach((el, i) => {
            el.textContent = `Yesterday - ${data[i].timeframes.daily.previous}hrs`
        })
    }

    // for weekly processing 

    if (e.target.classList.contains('stat--weekly')) {
        current.forEach((el, i) => {
            el.textContent = `${data[i].timeframes.weekly.current}hrs`
        });

        last.forEach((el, i) => {
            el.textContent = `Last Week - ${data[i].timeframes.weekly.previous}hrs`
        })
    }

    // for montly processing

    if (e.target.classList.contains('stat--monthly')) {
        current.forEach((el, i) => {
            el.textContent = `${data[i].timeframes.monthly.current}hrs`
        });

        last.forEach((el, i) => {
            el.textContent = `Last Month - ${data[i].timeframes.monthly.previous}hrs`
        })
    }
    // console.log(e)
}

statFreq.addEventListener('click', processFunc);