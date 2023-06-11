import manipulate ,{ estructureTask} from "./estructura.js"
const divGlobal = document.getElementById('container-global')
const buttonTask = document.getElementById('button-task')
buttonTask.addEventListener('click', taskInformation)

function taskInformation(){
 document.body.append(estructureTask())
}
manipulate.buttonSubmit.addEventListener('click', taskAd)

function taskAd(){
    /*switch(manipulate){
        case manipulate.inputDateTask.value === '':
            manipulate.inputDateTask.parentElement.append('*Date required*')
            break;
        case manipulate.inputNameTask.value === '':
            manipulate.inputNameTask.parentElement.append('*Name required*')
            break;
        default:
            console.log('bien')
    }*/
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
       estructureTask().classList.add('inactive')
    }
}