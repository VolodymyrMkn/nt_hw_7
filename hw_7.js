const createList = (array, parent = document.body) =>{
    const list = document.createElement('ul')
    const listLi = array.map(item => `<li>${item}</li>`)
    listLi.forEach(listLi =>{
        list.insertAdjacentHTML('beforeend', listLi)
    })
    parent.append(list)
}

let testArr = ['hello', 'world', 'Kyiv', 'Kharkiv', 'Odessa', 'Lviv'];

createList(testArr)


