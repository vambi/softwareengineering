var i = 0;
//Fürs zeitschema adden in zeitschema.html
var d=2;
var selectedbutton;




function linkIndex()
{
    window.location.href = "../index.html";
}

function linkZBeleuchtung() {
    window.location.href = "./z_beleuchtung.html";
}

function linkBeleuchtung() {
    window.location.href = "./beleuchtung.html";
}

function linkMBeleuchtung() {
    window.location.href = "./beleuchtung_manuell.html";
}


function linkVorlageSchema(){
    window.location.href = "./vorlageschema.html";
    
}
function linkZeitschema(){
    window.location.href = "./zeitschema.html";
    
}





// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {

        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}


function changeDropBtnTime(zeitschema, selectedbutton) {
    var el = document.getElementById("zeitBtn" + selectedbutton);
    el.firstChild.data = zeitschema;
}

function changeDropBtnLeucht(leucht, id) {
    var el = document.getElementById("leuchtBtn" + selectedbutton);
    el.firstChild.data = leucht;
}

function changeDropBtnStatus(status, id) {
    var el = document.getElementById("statusBtn" + selectedbutton);
    el.firstChild.data = status;
}

function changeDropBtnStunden(stunden, id) {
    var el = document.getElementById("stundenBtn" + selectedbutton);
    el.firstChild.data = stunden;
}

function changeDropBtnMin(min, id) {
    var el = document.getElementById("minBtn" + selectedbutton);
    el.firstChild.data = min;
}

function dropdownmenuLeucht(id) {
    document.getElementById("dropdownLeucht" + id).classList.toggle("show");
    selectedbutton = id;
}

function dropdownmenuStatus(id) {
    document.getElementById("dropdownStatus" + id).classList.toggle("show");
    selectedbutton = id;
}

function dropdownmenuZeit(id) {
    document.getElementById("dropdownZeit").classList.toggle("show");
    selectedbutton = id;
}

function dropdownmenuStunden(id) {
    document.getElementById("dropdownStunden"+id).classList.toggle("show");
    selectedbutton = id;
}

function dropdownmenuMin(id) {
    document.getElementById("dropdownMin"+id).classList.toggle("show");
    selectedbutton = id;
}


function changeLightOne() {
    var el = document.getElementById("leuchtBtn");
    el.firstChild.data = "Leuchtkörper 1";
    
    
    var el = document.getElementById("statusBtn");
    el.firstChild.data = "Eingeschaltet";
    
}
function changeLightTwo() {
    var el = document.getElementById("leuchtBtn");
    el.firstChild.data = "Leuchtkörper 2";
    
    var el = document.getElementById("statusBtn");
    el.firstChild.data = "Ausgeschaltet";
}






function changeMO() {
    resetSelectedWeekClass();
    var day = document.getElementById('MO');
    day.classList.add("selectedli");

}

function changeDI() {
    resetSelectedWeekClass();
    var day = document.getElementById('DI');
    day.classList.add("selectedli");

}

function changeMI() {
    resetSelectedWeekClass();
    var day = document.getElementById('MI');
    day.classList.add("selectedli");

}

function changeDO() {
    resetSelectedWeekClass();
    var day = document.getElementById('DO');
    day.classList.add("selectedli");

}

function changeFR() {
    resetSelectedWeekClass();
    var day = document.getElementById('FR');
    day.classList.add("selectedli");

}

function changeSA() {
    resetSelectedWeekClass();
    var day = document.getElementById('SA');
    day.classList.add("selectedli");

}

function changeSO() {
    resetSelectedWeekClass();
    var day = document.getElementById('SO');
    day.classList.add("selectedli");

}

function resetSelectedWeekClass() {
    var list = document.getElementById('weekdays').children[0];
    for (var i = 0; i < list.children.length; i++) {
        var cur = list.children[i];
        if (cur.classList.contains("selectedli")) {
            cur.classList.remove("selectedli");
        }
    }

}


function addTimeStamp() {
    var div = document.createElement("div");
    var doubledot = document.createElement("button");
    var time = document.createElement("div");
    var leuchtbtn = cloneLeuchtBtn();
    var dropdown = clonedropdownLeucht();
    var statusbtn = cloneStatusBtn();
    var dropdownstatus = clonedropdownStatus();
    var minbtn = cloneMinBtn();
    var dropdownmin = clonedropdownMin();
    var stundenbtn = cloneStundenBtn();
    var dropdownstunden = clonedropdownStunden();
    var uhrzeittext =document.createElement("button");


    leuchtbtn.value = i;
    statusbtn.value = i;
    stundenbtn.value=i;
    minbtn.value=i;
    div.id = "timestamp" + i;
    
    dropdown.classList.add("dropdown-content");
    leuchtbtn.classList.add("dropbtn");
    leuchtbtn.classList.add("menu-list-item");
    leuchtbtn.classList.add("beleuchtung");
    
    dropdownstatus.classList.add("dropdown-content");
    statusbtn.classList.add("dropbtn");
    statusbtn.classList.add("menu-list-item");
    
    
    dropdownmin.classList.add("dropdown-content");
    minbtn.classList.add("dropbtn");
    minbtn.classList.add("menu-list-item");
    minbtn.classList.add("time");
    
    dropdownstunden.classList.add("dropdown-content");
    stundenbtn.classList.add("dropbtn");
    stundenbtn.classList.add("menu-list-item");
    stundenbtn.classList.add("time");
    
   
    doubledot.classList.add("menu-list-item-small");
    doubledot.classList.add("disabledtext");
    doubledot.textContent=":";
    doubledot.setAttribute("disabled","true");
    uhrzeittext.classList.add("menu-list-item-small");
    uhrzeittext.classList.add("disabledtext");
    uhrzeittext.innerHTML="Uhrzeit:";
    uhrzeittext.classList.add("uhrzeit");
    uhrzeittext.setAttribute("disabled","true");
    
    
    div.classList.add("menu-list");
    div.classList.add("nohover");
    div.classList.add("white");
    div.classList.add("white");
    

    i++;
    var element = document.getElementById("timestamps");

    div.appendChild(uhrzeittext);
    div.appendChild(stundenbtn);
    div.appendChild(dropdownstunden);
    div.appendChild(doubledot);
    div.appendChild(minbtn);
    div.appendChild(dropdownmin);
    div.appendChild(leuchtbtn);
    div.appendChild(dropdown);
    div.appendChild(statusbtn);
    div.appendChild(dropdownstatus);
    element.appendChild(div);
}


function addTime()
{
    var div = document.createElement("div");
    var doubledot = document.createElement("button");
    var time = document.createElement("div");
    var minbtn = cloneMinBtn();
    var dropdownmin = clonedropdownMin();
    var stundenbtn = cloneStundenBtn();
    var dropdownstunden = clonedropdownStunden();
    var uhrzeittext =document.createElement("button");
    
    stundenbtn.value=i;
    minbtn.value=i;
    div.id = "timestamp" + i;
    
    dropdownmin.classList.add("dropdown-content");
    minbtn.classList.add("dropbtn");
    minbtn.classList.add("menu-list-item");
    minbtn.classList.add("time");
    
    dropdownstunden.classList.add("dropdown-content");
    stundenbtn.classList.add("dropbtn");
    stundenbtn.classList.add("menu-list-item");
    stundenbtn.classList.add("time");
    
    if(i==0)
        {
            stundenbtn.firstChild.data="20";
            minbtn.firstChild.data="15";
        }
    else{
        
            stundenbtn.firstChild.data="10";
            minbtn.firstChild.data="30";
    }
   
    doubledot.classList.add("menu-list-item-small");
    doubledot.classList.add("disabledtext");
    doubledot.textContent=":";
    doubledot.setAttribute("disabled","true");
    uhrzeittext.classList.add("menu-list-item-small");
    uhrzeittext.classList.add("disabledtext");
    uhrzeittext.innerHTML="Uhrzeit:";
    uhrzeittext.classList.add("uhrzeit");
    uhrzeittext.setAttribute("disabled","true");
    
    
    div.classList.add("menu-list");
    div.classList.add("nohover");
    div.classList.add("white");
    div.classList.add("white");
    

    i++;
    var element = document.getElementById("timestamps");

    div.appendChild(uhrzeittext);
    div.appendChild(stundenbtn);
    div.appendChild(dropdownstunden);
    div.appendChild(doubledot);
    div.appendChild(minbtn);
    div.appendChild(dropdownmin);
    element.appendChild(div);
}

function addZeitschema()
{
    var element = document.getElementById("zeitliste");
    var zeit=cloneZeitschema();
    zeit.value=d;
    zeit.lastChild.value=d;
    zeit.childNodes[1].value=d;
    
    zeit.childNodes[0].value=d;
    zeit.childNodes[2].value=d;
    zeit.childNodes[3].value=d;
    d++;
    element.appendChild(zeit);
}

function cloneZeitschema() {
    var original = document.getElementById('zeitdelete');
    var clone = original.cloneNode(true); // "deep" clone
    clone.id = "zeitdelete" + d;

    return clone;
}


function deleteZeitschema(d)
{
    document.getElementById('zeitdelete'+d).remove();
}





function clonedropdownLeucht() {
    var original = document.getElementById('dropdownLeucht');
    var clone = original.cloneNode(true); // "deep" clone
    clone.id = "dropdownLeucht" + i;
    return clone;
}

function cloneLeuchtBtn() {
    var original = document.getElementById('leuchtBtn');
    var clone = original.cloneNode(true); // "deep" clone
    clone.id = "leuchtBtn" + i;

    return clone;
}


function clonedropdownStunden() {
    var original = document.getElementById('dropdownStunden');
    var clone = original.cloneNode(true); // "deep" clone
    clone.id = "dropdownStunden" + i;
    return clone;
}

function cloneStundenBtn() {
    var original = document.getElementById('stundenBtn');
    var clone = original.cloneNode(true); // "deep" clone
    clone.id = "stundenBtn" + i;

    return clone;
}

function clonedropdownMin() {
    var original = document.getElementById('dropdownMin');
    var clone = original.cloneNode(true); // "deep" clone
    clone.id = "dropdownMin" + i;
    return clone;
}

function cloneMinBtn() {
    var original = document.getElementById('minBtn');
    var clone = original.cloneNode(true); // "deep" clone
    clone.id = "minBtn" + i;

    return clone;
}





function clonedropdownStatus() {
    var original = document.getElementById('dropdownStatus');
    var clone = original.cloneNode(true); // "deep" clone
    clone.id = "dropdownStatus" + i;
    return clone;
}

function cloneStatusBtn() {
    var original = document.getElementById('statusBtn');
    var clone = original.cloneNode(true); // "deep" clone
    clone.id = "statusBtn" + i;

    return clone;
}


function fillSchema()
{
    generate();
    i=1;
    addTime();
    i=0;
    addTime();
    i=2;
}






function generate()
{
    generateHours();
    generateMin();
}

function generateHours() {
    var element=document.getElementById("dropdownStunden");
    var time;
    for (i = 0; i < 24; i++) {
        var div = document.createElement("div");
        if (i < 10) {
            time="0"+i;
            div.innerHTML = "0" + i;
            div.setAttribute("onclick", "changeDropBtnStunden('" + time + "')");
        } else {
            div.innerHTML = i;
            div.setAttribute("onclick", "changeDropBtnStunden('" + i + "')");

        }
        element.appendChild(div);
    }
}

function generateMin() {
    var element=document.getElementById("dropdownMin");
    var time;
    for (i = 0; i < 60; i++) {
        var div = document.createElement("div");
        if (i < 10) {
            time="0"+i;
            div.innerHTML = "0" + i;
            div.setAttribute("onclick", "changeDropBtnMin('" + time + "')");
        } else {
            div.innerHTML = i;
            div.setAttribute("onclick", "changeDropBtnMin('" + i + "')");

        }
        element.appendChild(div);
    }
}
