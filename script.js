function addElementToCookies(ElementName,ElementPicturePath,PlacementPicturePath,PlacementCommentary,GeneralCommentary){
    document.cookie = ElementName + "=" + document.getElementById(ElementName).innerText + ";";
    document.cookie = ElementPicturePath + "=" + document.getElementById(ElementPicturePath).src + ";";
    document.cookie = PlacementPicturePath + "=" + document.getElementById(PlacementPicturePath).src + ";";
    document.cookie = PlacementCommentary + "=" + document.getElementById(PlacementCommentary).innerText + ";";
    document.cookie = GeneralCommentary + "=" + document.getElementById(GeneralCommentary).innerText + ";";
    alert ("Элемент добавлен в таблицу.");
}

function deleteAllCookies() {
    var cookies = document.cookie.split(";");
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
}

function showTheTable(){
    if(document.cookie){
        var allCookies = document.cookie.split(";");
        var lines = (allCookies.length/5);
        const body = document.body;
        tbl = document.createElement('table');
        for (let i = 0; i <= lines; i++) {
            const tr = tbl.insertRow();
            for (let j = 0; j < 7; j++) {
                const td = tr.insertCell();
                if(i==0){
                    switch (j){
                        case 0:
                            td.appendChild(document.createTextNode(`Удалить`));
                        break;
                        case 1:
                            td.appendChild(document.createTextNode(`№ п/п`));
                        break;
                        case 2:
                            td.appendChild(document.createTextNode(`Наименование и обозначение ЭРЭ`));
                        break;
                        case 3:
                            td.appendChild(document.createTextNode(`Внешний вид компонента`));
                        break;
                        case 4:
                            td.appendChild(document.createTextNode(`Эскиз варианта установки ЭРЭ`));
                        break;
                        case 5:
                            td.appendChild(document.createTextNode(`Характеристика варианта установки и способов фиксации компонентов`));
                        break;
                        case 6:
                            td.appendChild(document.createTextNode(`Примечания`));
                        break;
                    }
                }
                else{
                    switch (j){
                        case 0:
                            var actualButton = document.createElement("button");
                            actualButton.className = "delete";
                            actualButton.innerHTML = "Х";
                            var deleteName = "deleteElementFromCookies ("+(i-1)+")";
                            actualButton.setAttribute('onclick',deleteName);
                            td.appendChild(actualButton);
                        break;
                        case 1:
                            td.appendChild(document.createTextNode(`${i}`));
                        break;
                        case 2:
                            var inputToCell = allCookies[(j-2)+(i-1)*5].split("="); 
                            td.appendChild(document.createTextNode(`${inputToCell[1]}`));
                        break;
                        case 3:
                            var inputToCell = allCookies[(j-2)+(i-1)*5].split("=");
                            var actualImage = document.createElement("img");
                            actualImage.src = inputToCell[1];
                            td.appendChild(actualImage);
                        break;
                        case 4:
                            var inputToCell = allCookies[(j-2)+(i-1)*5].split("=");
                            var actualImage = document.createElement("img");
                            actualImage.src = inputToCell[1];
                            td.appendChild(actualImage);
                        break;
                        case 5:
                            var inputToCell = allCookies[(j-2)+(i-1)*5].split("="); 
                            td.appendChild(document.createTextNode(`${inputToCell[1]}`));
                        break;
                        case 6:
                            var inputToCell = allCookies[(j-2)+(i-1)*5].split("="); 
                            td.appendChild(document.createTextNode(`${inputToCell[1]}`));
                        break;
                    }
                }        
            }
        }
        body.appendChild(tbl);
    }
    else{
        alert ("Ваша таблица пуста!");
        window.location.replace("main.html");
    }
}

function deleteElementFromCookies (num){
    var allCookies = document.cookie.split(";");
    for (let i = num*5;i<5*num+5;i++){
        allCookies[i] = " ";
    }
    deleteAllCookies();
    for (let i=0;i<allCookies.length;i++){
        if(allCookies[i]!=" "){
            document.cookie = allCookies[i]+";";
        }
    }
    document.location.reload();
}