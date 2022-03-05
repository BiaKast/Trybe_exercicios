const order = {
  name: "Rafael Andrade",
  phoneNumber: "11-98763-1416",
  address: {
    street: "Rua das Flores",
    number: "389",
    apartment: "701",
  },
  banana: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      },
    },
    drinks: {
      coke: {
        type: "Coca-Cola Zero",
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: "Ana Silveira",
      price: 5,
    },
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  const chaves1 = order.banana.delivery;
  const pessoa = Object.values(chaves1.deliveryPerson);
  const entrega = Object.values(order.name);
  const telefone = order.phoneNumber;
  const street = order.address.street;
  const number = order.address.number;
  const apartment = order.address.apartment;
  let nome = '';
  let nome2 = '';
  pessoa.forEach(element => {
   nome += element;
  });
  entrega.forEach(element => {
    nome2 += element;
  });
  return `Olá ${nome}, entrega para: ${nome2}, Telefone: ${telefone}, ${street}, N°: ${number}, AP: ${apartment}`;
};
console.log(customerInfo(order));

const orderModifier = (order) => {
  const newPessoa = order.banana.delivery.deliveryPerson = 'Luiz Silva';
  const pizza1 = Object.keys(order.banana.pizza);
  const coke = order.banana.drinks.coke.type;
  const soma = order.banana.drinks.coke.price + order.banana.pizza.marguerita.price + order.banana.pizza.pepperoni.price;
  const total = order.payment.total = soma;
  let saborPizza1 = '';
  let saborPizza2 = '';
  pizza1.forEach(element => {
    element === 'marguerita' ? saborPizza1 = element : saborPizza2 = element;
  });
  return `Olá ${newPessoa}, o total do seu pedido de ${saborPizza1}, ${saborPizza2} e ${coke} é R$ ${total},00.`
};
console.log(orderModifier(order));
