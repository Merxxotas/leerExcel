function desplegarMenu() {
    document.getElementById('menu').classList.add('visible');
    document.getElementById('desplegar').style.display = 'none';
}
function subirArchivo() {
    document.getElementById('fileInput').click();
}
/**
 * The function `handleFileUpload` checks the file extension of the uploaded file and parses it accordingly to extract the first field value, which is then displayed in the output element.
 */
function handleFileUpload() {
    var file = document.getElementById('fileInput').files[0];
    if (file.name.endsWith('.csv')) {
        Papa.parse(file, {
            complete: function(results) {
                var firstField = results.data[0][0];
                document.getElementById('output').innerText = 'El primer campo del archivo es: ' + firstField;
            }
        });
    } else if (file.name.endsWith('.xlsx')) {
        var reader = new FileReader();
        reader.onload = function(e) {
            var data = new Uint8Array(e.target.result);
            var workbook = XLSX.read(data, {type: 'array'});
            var worksheet = workbook.Sheets[workbook.SheetNames[0]];
            var jsonData = XLSX.utils.sheet_to_json(worksheet, {header: 1});
            var firstField = jsonData[0][0];
            document.getElementById('output').innerText = 'El primer campo del archivo es: ' + firstField;
        };
        reader.readAsArrayBuffer(file);
    }
}
function cancelar() {
    document.getElementById('menu').classList.remove('visible');
    document.getElementById('desplegar').style.display = 'block';
}
