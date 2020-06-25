$(document).on('submit', '#example_form', function(e) {
  e.preventDefault(); // запретим стандартное поведения отправки данных
  var data = $(this).serializeArray(); // получаем данные с формы

  $.ajax({
    url: 'http://marathone-of-change.com/example_script', // адрес скрипта который примeт данные
    type: 'POST', // метод передачи
    dataType: 'JSON', // !если требуется! получить ответ как массив данных используем формат JSON
    data: data // передаем массив данных
  }).done(function(res) {
    alert('Данные успешно переданы!');
    console.log(res);
    $('#example_form').trigger('reset'); // сбрасываем данные формы
  }).fail(function(err) {
    alert('Ошибка передачи запроса.');
    console.log(err);
  });
});