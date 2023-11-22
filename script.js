function desplegarMenu() {
    document.getElementById('menu').classList.add('visible');
    document.getElementById('desplegar').style.display = 'none';
}
function subirArchivo() {
    document.getElementById('fileInput').click();
}
function handleFileUpload() {
    var file = document.getElementById('fileInput').files[0];
    var reader = new FileReader();
    reader.onload = function(e) {
        var contents = e.target.result;
        var firstField = contents.split(',')[0]; // Esto asume que los campos están separados por comas
        document.getElementById('output').innerText = 'El primer campo del archivo es: ' + firstField;
    };
    reader.readAsText(file);
}
function cancelar() {
    document.getElementById('menu').classList.remove('visible');
    document.getElementById('desplegar').style.display = 'block';
}
