//this is the C compile page therefore give C info
function compile() {
    var cFileName = Document.getElementById("leftName").value;
    var cMakeFileName = Document.getElementById("rightName").value
    var cCode = Document.getElementById("leftEditor").value;
    var cMakeCode = Document.getElementById("rightEditor").value;
    
    const data = {
        requestType: "C",
        cFileName: cFileName,
        cMakeFileName: cMakeFileName,
        cCode: cCode,
        cMakeCode: cMakeCode
    }

    const options = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }
    
    fetch('/api', options).then()
}