var txtFile = new XMLHttpRequest();
    var allText = 'guten_address.txt';
    txtFile.onreadystatechange = function () {
        if (txtFile.readyState === XMLHttpRequest.DONE && txtFile.status == 200) {
            allText = txtFile.responseText;
            allText = allText.split("\n").join("<br>");
        }

        document.getElementById('text').innerHTML = allText;
    }
    txtFile.open("GET", 'guten_address.txt', true);
    txtFile.send(null);
