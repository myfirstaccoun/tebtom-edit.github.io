function submitForm(action) {
    let spreadsheet = document.getElementById("spreadsheetSelect").value;
    let name = document.getElementById("nameInput").value;
    
    if (name.trim() === "") {
        alert("الرجاء إدخال اسم.");
        return;
    }

    let url = "https://script.google.com/macros/s/AKfycbwqvE4OxBfyq-1bwafM94XdK_NUqAjpzqWWMThoU9uiD6LDowlp4AT1Bo9RRwLllxJl/exec?spreadsheet=" + encodeURIComponent(spreadsheet) + "&name=" + encodeURIComponent(name) + "&action=" + encodeURIComponent(action);

    fetch(url)
        .then(response => response.text())
        .then(data => {
            alert(data); // عرض الرسالة من السيرفر
        })
        .catch(error => {
            alert("حدث خطأ: " + error);
        });
}