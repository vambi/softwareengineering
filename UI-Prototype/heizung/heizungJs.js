const templateTimeStamp = `<div class="room-scheme-item"><input class="room-scheme-time" type="text" value="00:00"><input type="range" class="slider" id="%sid%" min="10" max="30" step="0.5" value="21.5"><div class="room-scheme-temp" id="%tid%">21,5°</div><button class="delete-btn" onclick="deleteTime(this)">-</button></div>`

let lastId = 0;
let curDay = 0;

function changeDay(newDay){
    const oldDay = window.document.getElementById(`day-${curDay}`);
    newDay = parseInt(newDay);
    const activeDay = window.document.getElementById(`day-${newDay}`);
    oldDay.classList.remove('btn-active');
    activeDay.classList.add('btn-active');
    curDay = newDay;
}

function add(roomnr){
    const room = window.document.getElementById(`room-${roomnr}`);
    if(room.childElementCount > 0){
        add_internal(roomnr);
    }else{
        const popup = window.document.getElementById('popup');
        const popupTitle = window.document.getElementById('popup-title');
        popupTitle.textContent = 'Raum ' + roomnr;
        popup.hidden = false;
    }
}

function add_internal(roomnr, time = '00:00'){
    let room = window.document.getElementById(`room-${roomnr}`);
    lastId++;
    let template = `<div class="room-scheme-item"><input class="room-scheme-time" type="text" value="${time}"><input type="range" class="slider" id="slider-${lastId}" min="10" max="30" step="0.5" value="21.5" oninput="sliderInput(this)"><div class="room-scheme-temp" id="temp-${lastId}">21,5°</div><button class="delete-btn" onclick="deleteTime(this)">-</button></div>`;
    room.insertAdjacentHTML('beforeEnd', template);
}

function deleteTime(node){
    let timestamp = node.parentNode;
    timestamp.remove();
}

function sliderInput(slider){
    const val = slider.value;
    let id = slider.id.split('-')
    id = id[1];
    const output = window.document.getElementById(`temp-${id}`);
    output.textContent = val + '°';
}

function chooseSchema(id){
    const popup = window.document.getElementById('popup');
    const popupTitle = window.document.getElementById('popup-title');
    let roomnr = popupTitle.textContent.split(' ');
    roomnr = roomnr[1];
    if(id == 0){
        add_internal(roomnr, '09:00');
        add_internal(roomnr, '15:00');
    }else if(id == 1){
        add_internal(roomnr, '09:00');
        add_internal(roomnr, '11:00');
        add_internal(roomnr, '18:00');
        add_internal(roomnr, '23:00');
    }
    popup.hidden = true;
}