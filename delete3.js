let invoicesText = '[{"invoiceId":"38736","companyId":"2229","amount":7.59}, {"invoiceId":"38740","companyId":"2229","amount":26.43}, {"invoiceId":"39939","companyId":"2229","amount":72.59}, {"invoiceId":"45992","companyId":"2229","amount":119.32}, {"invoiceId":"45990","companyId":"1379","amount":106.87}, {"invoiceId":"47008","companyId":"1379","amount":60.09}]'


let invoices = JSON.parse(invoicesText)



let filtered = invoices.filter(item=>item.companyId==='2229')
invoices=filtered
let amount = 0

invoices.forEach(item=>{
    amount=amount+item.amount*100
})


console.log(amount)
amount/100