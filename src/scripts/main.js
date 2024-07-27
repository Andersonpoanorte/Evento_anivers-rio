const dataDoEvento = new Date("AUG 27, 2024 19:00:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval(function(){ const agora = new Date();
const timeStampAtual = agora.getTime();
const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;


const diaEmMs = 1000 * 60 * 60 * 24;
const horasEmMs = 1000 * 60 * 60;
const minutosEmMS = 1000 * 60;

const diasAteOEvento = Math.floor(distanciaAteOEvento / diaEmMs);
const horasAteOEvento = Math.floor((distanciaAteOEvento % diaEmMs) / horasEmMs);
const minutosAteOEvento = Math.floor((distanciaAteOEvento % horasEmMs) / minutosEmMS);
const segundosAteOEvento = Math.floor((distanciaAteOEvento % minutosEmMS) / 1000);

const spanDays = document.querySelector('#days');
const spanHours = document.querySelector('#hours');
const spanMinutes = document.querySelector('#minutes');
const spanSeconds = document.querySelector('#seconds');

spanDays.innerHTML = `${diasAteOEvento}`;
spanHours.innerHTML = `${horasAteOEvento}`;
spanMinutes.innerHTML = `${minutosAteOEvento}`;
spanSeconds.innerHTML = `${segundosAteOEvento}`;
}, 1000)


$(document).ready(function(){
    let count = 0

    $('.add').click(function () {
        let inputVal = $('.form__control').val()
        if (inputVal.trim() !== '') {
            count++
            $('.to-do-list').append(
                '<li><div class="left-cont"><input type="checkbox" id="check-' + count + '"><label for="check-' + count + '"></label><span>' + inputVal + '</span></div><span class="remove"><i class="material-icons">delete</i></span></li>'
            )
        }
        $('.form__control').val('');
    })

    $(document).on('change', 'input[type="checkbox"]', function () {
        if ($(this).is(':checked')) {
            $(this).closest("li").children(".remove").addClass("active")
        }else {
            $(this).closest("li").children('.remove').removeClass("active")
        }
    })


    $(document).on('click', '.remove', function() {
        $(this).parent().remove()
    })
})
