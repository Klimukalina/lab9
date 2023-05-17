 
  function addOrder() {
    // Отримання значень з полів форми
    var name = document.getElementById('name').value;
    var address = document.getElementById('address').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    var coffeeType = document.getElementById('coffee-type').value;
    var quantity = document.getElementById('quantity').value;

    // Створення нового рядка таблиці з даними замовлення
    var table = document.getElementById('order-table');
    var tableBody = document.getElementById('order-table-body');
    var newRow = tableBody.insertRow();

    var cell1 = newRow.insertCell();
    var cell2 = newRow.insertCell();
    var cell3 = newRow.insertCell();
    var cell4 = newRow.insertCell();
    var cell5 = newRow.insertCell();
    var cell6 = newRow.insertCell();

    cell1.innerHTML = name;
    cell2.innerHTML = address;
    cell3.innerHTML = phone;
    cell4.innerHTML = email;
    cell5.innerHTML = coffeeType;
    cell6.innerHTML = quantity;

    // Очистка полів форми після додавання замовлення
    document.getElementById('name').value = '';
    document.getElementById('address').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('email').value = '';
    document.getElementById('coffee-type').value = '';
    document.getElementById('quantity').value = '';
  }