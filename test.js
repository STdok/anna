let invoices = [{ "invoiceId": "38736", "companyId": "2229", "amount": 8.59 }, { "invoiceId": "38740", "companyId": "2229", "amount": 29.43 }, { "invoiceId": "39939", "companyId": "2229", "amount": 74.59 }, { "invoiceId": "45990", "companyId": "1379", "amount": 109.87 }, { "invoiceId": "45992", "companyId": "2229", "amount": 121.32 }, { "invoiceId": "47008", "companyId": "1379", "amount": 61.09 }

]
console.log(actionBulkInvoices(invoices, '1379').invoiceLines)

function actionBulkInvoices2(data, companyId) {
    if (data !== null) {
        let invoices = data.filter(id => id.companyId === companyId) //JSON.parse(data)
        var amount = 0
        console.log(invoices)
        let result = []
        invoices.forEach(item => {
            let obj = {
                "Amount": item.amount,
                "LinkedTxn": [{
                    "TxnId": item.invoiceId,
                    "TxnType": "Invoice"
                }]
            }
            amount = amount + item.amount * 100

            result.push(obj)


        })

        return { invoiceLines: result, amount: amount / 100, customerId: companyId }

    } else return { "null": "null" }
}