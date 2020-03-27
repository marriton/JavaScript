function enableTextArea(){
    //document.getElementsByClassName("textArea").designMode = "On";
    richTextField.designMode = "On";
}

function execCmd(comando){
    richTextField.document.execCommand(comando, false, null);
}

document.getElementById("rodape").innerHTML = Date.toString();