 export function structureDone(name, date, description){
    const divDone = document.createElement('div');
    divDone.className = 'divDone'
    const nameTaskDone = document.createElement('h2')
    nameTaskDone.textContent = name
    const dateTaskDone = document.createElement('p')
    dateTaskDone.textContent = date
    const descriptionDone = document.createElement('p')
    descriptionDone.textContent = description
    divDone.append(nameTaskDone, dateTaskDone, descriptionDone)
    return divDone
}