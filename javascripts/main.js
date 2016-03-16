
function addAdvice() {
    var adviceContent = document.getElementById('adviceArea').value;
    var adviceDiv = document.getElementById('adviceDiv');
    if (adviceContent) {
        var p = document.createElement('p');
        var str = document.createTextNode(adviceContent);
        p.appendChild(str);
        adviceDiv.appendChild(p);
        var hr = document.createElement('hr');
        adviceDiv.appendChild(hr);
        document.getElementById('adviceArea').value = null;
    }
}