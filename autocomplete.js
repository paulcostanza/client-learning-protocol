let availableKeywords = ['babes', 'melinda', 'python', 'javascript', 'queen', 'logic', 'logical', 'spock', 'computers', 'java', 'excellent', 'titties', 'yes', 'underwear', 'igloo', 'oink', 'paul', 'ass', 'state capitols', 'dicks', 'fags', 'geeks', 'homos', 'jews', 'kit-kat bars', 'ladies', 'zebras', 'x-files', 'cocks', 'vehicals', 'boners', 'balls', 'babes', 'night', 'medicine']

const resultBox = document.querySelector('.result-box')
const inputBox = document.getElementById('input-box')

inputBox.onkeyup = function () {
    let result = []
    let input = inputBox.value

    if (input.length) {
        result = availableKeywords.filter((keyword) => {
            return keyword.toLowerCase().includes(input.toLowerCase())
        })

        console.log(result)
    }
    display(result)

    if (!result.length) {
        resultBox.innerHTML = ''
    }
}

function display(result) {
    const content = result.map((item) => {
        return "<li onclick=selectInput(this)>" + item + "</li>"
    })

    resultBox.innerHTML = `<ul>` + content.join('') + `</ul>`
}

function selectInput(list) {
    inputBox.value = list.innerHTML
    resultBox.innerHTML = ''
}
