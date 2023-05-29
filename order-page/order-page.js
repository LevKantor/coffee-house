const clientSurname = document.querySelector('.client__surname')
const clientName = document.querySelector('.client__name')

const productsElements = document.querySelectorAll('.checkbox')
const amountElements = document.querySelectorAll('.amount')

const radio1 = document.querySelectorAll('.radio1')
const radio2 = document.querySelectorAll('.radio2')
const radio3 = document.querySelectorAll('.radio3')
const radio4 = document.querySelectorAll('.radio4')

const radio = document.querySelectorAll('.radio')
const autoRadio = [radio[0], radio[3], radio[6], radio[9]]

const btn = document.querySelector('.btn')
const resultElem = document.querySelector('.result')

let totalCost = 0

const espresso = {
  amount: 0,
  price: 90,
  cost: 0,
}

const latte = {
  amount: 0,
  price: 100,
  cost: 0,
}

const cappuccino = {
  amount: 0,
  price: 110,
  cost: 0,
}

const americano = {
  amount: 0,
  price: 90,
  cost: 0,
}

const choco__cupcake = {
  amount: 0,
  price: 80,
  cost: 0,
}

const blueberry__cupcake = {
  amount: 0,
  price: 90,
  cost: 0,
}

const apple__tart = {
  amount: 0,
  price: 100,
  cost: 0,
}

const cheesecake = {
  amount: 0,
  price: 100,
  cost: 0,
}

const amountProducts = [
  espresso,
  latte,
  cappuccino,
  americano,
  choco__cupcake,
  blueberry__cupcake,
  apple__tart,
  cheesecake,
]

productsElements.forEach((elem, i) => {
  elem.addEventListener('change', function () {
    if (elem.checked) {
      try {
        autoRadio[i].checked = true
      } catch (err) {
        elem.checked = true
      }
      amountProducts[i].amount = 1
      amountElements[i].value = 1
      amountProducts[i].cost +=
        amountProducts[i].amount * amountProducts[i].price
    } else { 
      try {
        autoRadio[i].checked = false
        amountProducts[i].price = autoRadio[i].value
      } catch (err) {
        elem.checked = false
      }

      amountProducts[i].amount = 0
      amountElements[i].value = 0
      amountProducts[i].cost =
        amountProducts[i].amount * amountProducts[i].price
    }

    radio1.forEach((radioElem) => {
      radioElem.addEventListener('change', function () {
        if (radioElem.checked) {
          amountProducts[0].price = radioElem.value
          amountProducts[0].cost =
            amountProducts[0].amount * amountProducts[0].price
          totalCost = parseInt(
            amountProducts[0].cost +
              amountProducts[1].cost +
              amountProducts[2].cost +
              amountProducts[3].cost +
              amountProducts[4].cost +
              amountProducts[5].cost +
              amountProducts[6].cost +
              amountProducts[7].cost
          )
          resultElem.textContent = totalCost
        } else {
          amountProducts[0].cost = 0
        }
      })
    })

    radio2.forEach((radioElem) => {
      radioElem.addEventListener('change', function () {
        if (radioElem.checked) {
          amountProducts[1].price = radioElem.value
          amountProducts[1].cost =
            amountProducts[1].amount * amountProducts[1].price
          totalCost = parseInt(
            amountProducts[0].cost +
              amountProducts[1].cost +
              amountProducts[2].cost +
              amountProducts[3].cost +
              amountProducts[4].cost +
              amountProducts[5].cost +
              amountProducts[6].cost +
              amountProducts[7].cost
          )
          resultElem.textContent = totalCost
        } else {
          amountProducts[1].cost = 0
        }
      })
    })

    radio3.forEach((radioElem) => {
      radioElem.addEventListener('change', function () {
        if (radioElem.checked) {
          amountProducts[2].price = radioElem.value
          amountProducts[2].cost =
            amountProducts[2].amount * amountProducts[2].price
          totalCost = parseInt(
            amountProducts[0].cost +
              amountProducts[1].cost +
              amountProducts[2].cost +
              amountProducts[3].cost +
              amountProducts[4].cost +
              amountProducts[5].cost +
              amountProducts[6].cost +
              amountProducts[7].cost
          )
          resultElem.textContent = totalCost
        } else {
          amountProducts[2].cost = 0
        }
      })
    })

    radio4.forEach((radioElem) => {
      radioElem.addEventListener('change', function () {
        if (radioElem.checked) {
          amountProducts[3].price = radioElem.value
          amountProducts[3].cost =
            amountProducts[3].amount * amountProducts[3].price
          totalCost = parseInt(
            amountProducts[0].cost +
              amountProducts[1].cost +
              amountProducts[2].cost +
              amountProducts[3].cost +
              amountProducts[4].cost +
              amountProducts[5].cost +
              amountProducts[6].cost +
              amountProducts[7].cost
          )
          resultElem.textContent = totalCost
        } else {
          amountProducts[3].cost = 0
        }
      })
    })

    totalCost = parseInt(
      amountProducts[0].cost +
        amountProducts[1].cost +
        amountProducts[2].cost +
        amountProducts[3].cost +
        amountProducts[4].cost +
        amountProducts[5].cost +
        amountProducts[6].cost +
        amountProducts[7].cost
    )
    resultElem.textContent = totalCost
  })
})

amountElements.forEach((input, i) => {
  input.addEventListener('input', function () {
    amountProducts[i].amount = input.value

    if (amountProducts[i].amount > 0) {
      productsElements[i].checked = true
      amountProducts[i].cost =
        amountProducts[i].amount * amountProducts[i].price
    } else {
      productsElements[i].checked = false
      amountProducts[i].cost = 0
    }

    radio1.forEach((radioElem) => {
      radioElem.addEventListener('change', function () {
        if (radioElem.checked) {
          amountProducts[0].price = radioElem.value
          amountProducts[0].cost =
            amountProducts[0].amount * amountProducts[0].price
          totalCost = parseInt(
            amountProducts[0].cost +
              amountProducts[1].cost +
              amountProducts[2].cost +
              amountProducts[3].cost +
              amountProducts[4].cost +
              amountProducts[5].cost +
              amountProducts[6].cost +
              amountProducts[7].cost
          )
          resultElem.textContent = totalCost
        } else {
          amountProducts[0].cost = 0
        }
      })
    })

    radio2.forEach((radioElem) => {
      radioElem.addEventListener('change', function () {
        if (radioElem.checked) {
          amountProducts[1].price = radioElem.value
          amountProducts[1].cost =
            amountProducts[1].amount * amountProducts[1].price
          totalCost = parseInt(
            amountProducts[0].cost +
              amountProducts[1].cost +
              amountProducts[2].cost +
              amountProducts[3].cost +
              amountProducts[4].cost +
              amountProducts[5].cost +
              amountProducts[6].cost +
              amountProducts[7].cost
          )
          resultElem.textContent = totalCost
        } else {
          amountProducts[1].cost = 0
        }
      })
    })

    radio3.forEach((radioElem) => {
      radioElem.addEventListener('change', function () {
        if (radioElem.checked) {
          amountProducts[2].price = radioElem.value
          amountProducts[2].cost =
            amountProducts[2].amount * amountProducts[2].price
          totalCost = parseInt(
            amountProducts[0].cost +
              amountProducts[1].cost +
              amountProducts[2].cost +
              amountProducts[3].cost +
              amountProducts[4].cost +
              amountProducts[5].cost +
              amountProducts[6].cost +
              amountProducts[7].cost
          )
          resultElem.textContent = totalCost
        } else {
          amountProducts[2].cost = 0
        }
      })
    })

    radio4.forEach((radioElem) => {
      radioElem.addEventListener('change', function () {
        if (radioElem.checked) {
          amountProducts[3].price = radioElem.value
          amountProducts[3].cost =
            amountProducts[3].amount * amountProducts[3].price
          totalCost = parseInt(
            amountProducts[0].cost +
              amountProducts[1].cost +
              amountProducts[2].cost +
              amountProducts[3].cost +
              amountProducts[4].cost +
              amountProducts[5].cost +
              amountProducts[6].cost +
              amountProducts[7].cost
          )
          resultElem.textContent = totalCost
        } else {
          amountProducts[3].cost = 0
        }
      })
    })

    totalCost = parseInt(
      amountProducts[0].cost +
        amountProducts[1].cost +
        amountProducts[2].cost +
        amountProducts[3].cost +
        amountProducts[4].cost +
        amountProducts[5].cost +
        amountProducts[6].cost +
        amountProducts[7].cost
    )
    resultElem.textContent = totalCost
  })
})

btn.addEventListener('click', function () {
  if (totalCost > 0 && clientName.value != '' && clientSurname.value != '') {
    alert(`Покупатель: ${clientName.value} ${clientSurname.value}\nСумма заказа: ${totalCost} руб.\n
Спасибо за Ваш заказ!`)
  } else if (clientName.value == '' || clientSurname.value == '') {
    alert('Пожалуйста, введите имя и фамилию покупателя.')
  } else {
    alert('Ваша корзина пуста. Пожалуйста, сделайте заказ.')
  }
})
