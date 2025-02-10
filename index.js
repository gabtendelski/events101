'use strict';
/**
 * Add your functions here...
 */

function targetTextToConsole(event){
    console.log(event.target.textContent);
}

function tttcAttacher(){
    const button0 = document.querySelector('#button0');
    button0.addEventListener('click', targetTextToConsole);
}

function lovelyParaAttacher(){
    const para = document.querySelector('#thisisalovelyparagraph');
    para.addEventListener('click', lovelyToggle);
}

function lovelyButtonAttacher(){
    const button1 = document.querySelector('#button1');
    button1.addEventListener('click', lovelyToggle);
}

function concatAttacher(){
    const in1 = document.querySelector('#in1');
    const in2 = document.querySelector('#in2');
    in1.addEventListener('change', concatenator3000);
    in2.addEventListener('change', concatenator3000);

}

function concatenator3000(){
    const in1 = document.querySelector('#in1');
    const in2 = document.querySelector('#in2');
    const out1 = document.querySelector('#out1');

    out1.textContent = in1.value+in2.value;
}

function snitchAttacher(){
    const snitch = document.querySelector('#mousewatcher');
    snitch.addEventListener('mouseover', snitchUpdater);
    snitch.addEventListener('mouseout', snitchUpdater);
}

function reportAttacher(){
    const report = document.querySelector('#mousereporter');
    report.addEventListener('mousemove', reportUpdater);
}

function reportUpdater(event){
    let y = event.screenY;
    let x = event.screenX;
    window.report.textContent = 'x: ' + x + ' y: ' + y;
}

function idValidationAttacher(){
    let newid = document.querySelector('#newid');
    newid.addEventListener('input', idValidationUpdater);
}

function idValidationUpdater(event){
    if(event.target.value.includes(' ')){
        event.target.classList.add('invalid');
    }
    else {
        event.target.classList.remove('invalid');
    }
}