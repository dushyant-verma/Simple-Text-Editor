function execCmd(command, value = null){

    document.execCommand(command, false, value);
}


//  Add function to enable/disable buttons based on the current selection

document.getElementById('editor').addEventListener('input', function() {
    
})