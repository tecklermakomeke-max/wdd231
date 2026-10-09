// Date and Last Modified - Required for WDD231
export function setDates(){
    const yearSpan = document.querySelector('#currentyear');
    const modifiedP = document.querySelector('#lastModified');
    
    if(yearSpan){
        yearSpan.textContent = new Date().getFullYear();
    }
    if(modifiedP){
        modifiedP.textContent = `Last Modified: ${document.lastModified}`;
    }
}