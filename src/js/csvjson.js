const displayJsonData = (data) => {
    const entries = Object.entries(data);
    entries.forEach((entry) => {
        document.getElementById('jsonresult').innerHTML += '<span style="color: #C71717;">' + entry[0] + '</span>'
        if (Array.isArray(entry[1])) {
            document.getElementById('jsonresult').innerHTML += " : [ <br>"
            entry[1].forEach((element, index) => {
                const comaOrBr = index === entry[1].length - 1 ? "<br>" : typeof element === 'object' ? ", <br>" : ", "
                if (typeof element === 'object') {
                    document.getElementById('jsonresult').innerHTML += " { <br> "
                    displayJsonData(element)
                    document.getElementById('jsonresult').innerHTML += " } " + comaOrBr;
                } else {
                    document.getElementById('jsonresult').innerHTML += element + comaOrBr;
                }
            })
            document.getElementById('jsonresult').innerHTML += " ] <br> "
        } else if(typeof(entry[1]) === "object") {
            document.getElementById('jsonresult').innerHTML += " : { <br>"
            displayJsonData(entry[1]);
            document.getElementById('jsonresult').innerHTML += " } <br>"
        } else {
            document.getElementById('jsonresult').innerHTML += " : " + entry[1] + "<br>";
        }
    });
}

const displayCsvData = (data) => {
    let word = "";
    let line = 0;
    let result = "<table><tr>";
    for (let i = 0; i < data.length; i++) {
        if (/\n/.exec(data.charAt(i))){
            result += "<td>" + (line === 0 ? '<span style="color: #C71717;">' + word + "</span>" :  word ) +  "</td>"
            result += "</tr><tr>"
            word = ""
            line ++;
        } else {
            if (data.charAt(i) === ",") {
                result += "<td>" + (line === 0 ? '<span style="color: #C71717;">' + word + "</span>" :  word ) +  "</td>"
                word = "";
            } else {
                word += data.charAt(i);
            }
        }
    }
    console.log(word);
    if (word.length) result += "<td>" + (line === 0 ? '<span style="color: #C71717;">' + word + "</span>" :  word ) +  "</td>"
    result += "</tr></table>";
    document.getElementById('result').innerHTML += result;
}

document.getElementById('fileupload').addEventListener('change', (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
        const result = reader.result;
        if (file.name.includes('json')) {
            document.getElementById('result').innerHTML = "<p id='jsonresult'>"
            displayJsonData(JSON.parse(result));
        } else if (file.name.includes('csv')) {
            document.getElementById('result').innerHTML = "<div id='csvresult>"
            displayCsvData(result);
        } else {
            document.getElementById('result').innerHTML = "<p>Mauvais type de fichier</p>";
        }
    }
    reader.readAsText(file)
})