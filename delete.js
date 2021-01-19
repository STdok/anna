let msg = {}
let order = {
    'merchantAccount': 'test_merch_n1',
    merchantTransactionSecureType: 'AUTO',
    'merchantSignature': 'd30f9744076235b5a2696651ecc794e3',
    'merchantDomainName': 'www.market.ua',
    'orderReference': Date.now(),
    'orderDate': '1415379863',
    'currency': 'UAH',
    'productName': ['test1', 'test2'],
    'productPrice': ['1', '1'],
    'productCount': ['1', '1'],
    deliveryList: 'nova;ukrpost ;justin;other;meest',
    merchantAuthType: 'SimpleSignature',
    'amount': '2',
    language: 'UA',
    paymentSystems: 'delay;bankCash;card;privat24;visaCheckout;googlePay;lpTerminal;qrCode',
    orderNo: 'number',
    clientFirstName: 'First',
    clientLastName: 'Last',
    clientCity: '',
    clientState: '',
    clientZipCode: '',
    clientCountry: '',
    clientEmail: '',
    clientPhone: '+380997572798',
    deliveryFirstName: 'First',
    deliveryLastName: 'Last',
    deliveryAddress: 'Uzhgorod',
    deliveryCity: 'Uzhgorod',
    deliveryState: 'Zakarpatska',
    deliveryCountry: 'Ukraine',
    deliveryPhone: '+380997572798'
}


msg.order = order

let array = [order.merchantAccount, order.merchantDomainName, order.orderReference, order.orderDate, order.amount, order.currency, order.productName.join(';'), order.productPrice.join(';'), order.productCount.join(';')]
msg.orderSignArray = array.join(';')
msg.payload = msg.orderSignArray

var str = [];
for (var key in order) {
    if (order.hasOwnProperty(key)) {
        console.log(Array.isArray(order[key]))

        if (Array.isArray(order[key])) {

            order[key].forEach(item => {
                str.push(encodeURIComponent(key) + "[]=" + encodeURIComponent(item))
            })
            console.log('yes')

        } else {

            str.push(encodeURIComponent(key) + "=" + encodeURIComponent(order[key]))

        }

    }
}



msg.orderUrl = str.join("&")
return msg;