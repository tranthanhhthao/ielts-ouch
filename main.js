import essays from './essays.js'

const essayBoxes = document.querySelectorAll('.essay');

const shuffleBttn = document.getElementById('shuffle');

console.log(essays.length)

function shuffle () {
    let order = [];

    function pushUniqueRandom(array) {
        const randomNum = Math.floor(Math.random() * essays.length)

        function isUnique(num, array) {
            for (let i = 0; i < array.length; i++) {
                if (num === array[i]) {
                    return false
                }
            } 
            return true
        }

        if (isUnique(randomNum, array)) {
            array.push(randomNum)
        } 
    }

    function getOrder(array) {
        pushUniqueRandom(array)
        if (array.length === 6) {
            return 'error'
        } else if (array.length < 6) {
            getOrder(array)
            return array
        }
    }

    order = getOrder(order)
    console.log(order)


    function addEssay (box, index) {

        box.innerHTML = ''

        box.href = essays[index].link;
        box.appendChild(document.createElement('h3')).innerHTML = essays[index].title;
        box.appendChild(document.createElement('p')).innerHTML = essays[index].prompt;
        box.appendChild(document.createElement('p')).innerHTML = essays[index].question;

    }

    // essayBoxes.forEach(box => addEssay(box));
    for (let i = 0; i < order.length; i++) {
        addEssay(essayBoxes[i], order[i])
    }
}

document.addEventListener('load', shuffle())
shuffleBttn.addEventListener('click', () => {
    shuffle();
    console.log('clicked')
})
