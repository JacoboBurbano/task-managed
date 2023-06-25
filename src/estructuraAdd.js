const divInputName = document.createElement('div')
const divInputDate = document.createElement('div')
const divInputDescription = document.createElement('div')
divInputDescription.className = 'description-options'
const divTask = document.createElement('div')
const buttonSubmit = document.createElement('button')
const inputNameTask = document.createElement('input')
const inputDateTask = document.createElement('input')
const description = document.createElement('input')
export function estructureTask() {
    divTask.className = 'divTask'
    inputNameTask.className = 'input-name'
    divInputName.append('Task name:', inputNameTask)
    inputDateTask.className = 'input-date'
    divInputDate.append('Task Date:', inputDateTask)
    description.className = 'input-description'
    divInputDescription.append('Description (opcional): ', description)
    buttonSubmit.textContent = 'Submit'
    divTask.append(divInputName, divInputDate, divInputDescription, buttonSubmit)
    return divTask
}
export default {
    divTask,
    buttonSubmit,
    inputNameTask,
    inputDateTask,
    description
}