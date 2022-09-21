"use strict";


// selected funksiya
provencie.sort()
provencie.forEach((item) => {
    let option = createElement('option', '', item)
    $('.selected').appendChild(option)

})
$('.selected').addEventListener('change', (e) => {
    $('.values').innerHTML = e.target.value;
    switch (e.target.value.toLowerCase()) {
        case 'surxondaryo':
            nomozVaqti("termiz")
        case "farg'ona":
            nomozVaqti("qo'qon");
            break;
        case 'sirdaryo':
            nomozVaqti('guliston')
        case 'qashqadaryo':
            nomozVaqti('qarshi');
            break;
        case 'xorazm':
            nomozVaqti('urganch');
            break;
        case 'buxoro':
            nomozVaqti('buxoro');
            break;
        case 'toshkent':
            nomozVaqti('toshkent');
            break;
        case 'andijon':
            nomozVaqti('andijon');
            break;
        case 'namangan':
            nomozVaqti('namangan');
            break;
        case 'andijon':
            nomozVaqti('andijon');
            break;
        case 'navoiy':
            nomozVaqti('navoiy');
            break;
        case 'jizzax':
            nomozVaqti('jizzax');
            break;
        case 'samarqand':
            nomozVaqti('samarqand');
            break;

        default:
        case 'toshkent':
            nomozVaqti('toshkent');
            break;
    }

})

// time function

const clock = setInterval(function time() {
    let now = new Date()
    let dname = now.getDay(),
        mo = now.getMonth(),
        date = now.getDate(),
        year = now.getFullYear(),
        hous = now.getHours(),
        minut = now.getMinutes(),
        second = now.getSeconds(),
        milsecond = now.getMilliseconds()
        $('.date').innerHTML = date;
            $('.year').innerHTML = year;
            $('.hous').innerHTML = hous;
            $('.minut').innerHTML = minut;
            $('.second').innerHTML = second;

},1000)

//  function time(){
//     $('.date').innerHTML = date;
//     $('.year').innerHTML = year;
//     $('.hous').innerHTML = hous;
//     $('.minut').innerHTML = minut;
//     $('.second').innerHTML = second;

//  }
// console.log(setInterval(time, 100));

async function nomozVaqti(select = 'Toshkent') {
    const api = await fetch(`https://islomapi.uz/api/present/day?region=${select}`);
    let result = await api.json()
    renderData(result)
}

nomozVaqti()

function renderData(result) {
    const {
        times: {
            asr,
            hufton,
            peshin,
            quyosh,
            shom_iftor,
            tong_saharlik
        }
    } = result;
    $a('.vaqt')[0].textContent = tong_saharlik;
    $a('.vaqt')[1].textContent = quyosh;
    $a('.vaqt')[2].textContent = peshin;
    $a('.vaqt')[3].textContent = asr;
    $a('.vaqt')[4].textContent = shom_iftor;
    $a('.vaqt')[5].textContent = hufton;

}