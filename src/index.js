import manipulate ,{ estructureTask} from "./estructuraAdd.js"
import { structureDone } from "./estruturaDone.js";
const divGlobal = document.getElementById('container-global')
const buttonTask = document.getElementById('button-task')
const divTaskDone = document.createElement('div')
divTaskDone.id = 'task-done'
document.body.appendChild(divTaskDone)
let nameTask;
let dateTask;
let descriptionTask;
buttonTask.addEventListener('click', taskInformation)
function taskInformation(){
 document.body.append(estructureTask())
 buttonTask.disabled = true
}
manipulate.buttonSubmit.addEventListener('click', taskAd)

function taskAd(){
    buttonTask.disabled = false
    if(manipulate.inputNameTask.value === '' && manipulate.inputDateTask.value === ''){
       manipulate.inputNameTask.parentElement.append('*Name required*')
       manipulate.inputDateTask.parentElement.append('*Date required*')
    }
    else if(manipulate.inputNameTask.value === '' ){
        manipulate.inputNameTask.parentElement.append('*Name required*')
    }
    else if(manipulate.inputDateTask.value === ''){
        manipulate.inputDateTask.parentElement.append('*Date required*')
    }
    else{
        nameTask = manipulate.inputNameTask.value
        dateTask = manipulate.inputDateTask.value
        descriptionTask = manipulate.description.value
        estructureTask().classList.add('inactive')
        divTaskDone.append(structureDone(nameTask, dateTask, descriptionTask))
    }
}
