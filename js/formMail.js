
// при клике на кнопку - обработчик событий
$("#sendMail").click(function () {
    // .trim() - функция убирает лишние пробелы
    var email = $("#email").val().trim();
    var name = $("#name").val().trim();
    var phone = $("#phone").val().trim();
    var message = $("#message").val().trim();

    // если данные пустые
    if (email === "") {
        $("#errorMess").text("Введите email");
        return false;
    } else if (name === "") {
        $("#errorMess").text("Введите имя");
        return false;
    } else if (phone === "") {
        $("#errorMess").text("Введите телефон");
        return false;
    } else if (message === 5) {
        $("#errorMess").text("Введите сообщение не менее 5 символов");
        return false;
    }

    $.ajax({
        url: 'ajax/mail.php',
        type: 'POST',
        cache: false,
        data:{ 'name': name, 'email': email, 'phone': phone, 'message': message },
        dataType: 'html',
        beforeSend: function () {
            $("#sendMail").prop("disable", true); // пока загружаются данные кнопка "send" не активна
        },
        success: function (data) {
            // alert(data);
            if (!data) {
                alert("Были ошибки, сообщение не отправлено!")
            } else {
                $("#mailForm").trigger("reset");
            }

            $("#sendMail").prop("disable", false); // кнопка активируется
        }

    })

    $("#errorMess").text("");
})