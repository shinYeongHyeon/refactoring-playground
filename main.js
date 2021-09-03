var invociesJson = [
    {
        "customer": "BigCo",
        "performances": [
            {
                "playID": "hamlet",
                "audience": 55
            },
            {
                "playID": "as-like",
                "audience": 35
            },
            {
                "playID": "othello",
                "audience": 40
            }
        ]
    }
];
var playsJson = {
    "hamlet": { "name": "Hamlet", "type": "tragedy" },
    "as-like": { "name": "As You LIke It", "type": "comedy" },
    "othello": { "name": "Othello", "type": "tragedy" }
};
function statement(invoice, plays) {
    var totalAmount = 0;
    var volumeCredits = 0;
    var result = "\uCCAD\uAD6C \uB0B4\uC5ED (\uACE0\uAC1D\uBA85: " + invoice.customer + ")\n";
    var format = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 2 }).format;
    function amountFor(perf, play) {
        var thisAmount = 0;
        switch (play.type) {
            case "tragedy": // 비극
                thisAmount = 40000;
                if (perf.audience > 30) {
                    thisAmount += 1000 * (perf.audience - 30);
                }
                break;
            case "comedy": // 희극
                thisAmount = 30000;
                if (perf.audience > 20) {
                    thisAmount += 10000 + 500 * (perf.audience - 20);
                }
                thisAmount += 300 * perf.audience;
                break;
            default:
                throw new Error("\uC54C \uC218 \uC5C6\uB294 \uC7A5\uB974 : " + play.type);
        }
        return thisAmount;
    }
    for (var _i = 0, _a = invoice.performances; _i < _a.length; _i++) {
        var perf = _a[_i];
        var play = plays[perf.playID];
        var thisAmount = 0;
        thisAmount = amountFor(perf, play);
        // 포인트를 적립한다.
        volumeCredits += Math.max(perf.audience - 30, 0);
        // 희극 관객 5명마다 추가 포인트를 제공한다.
        if ("comedy" === play.type)
            volumeCredits += Math.floor(perf.audience / 5);
        // 청구 내역을 출력한다.
        result += " " + play.name + ": " + format(thisAmount / 100) + " (" + perf.audience + "\uC11D)\n";
        totalAmount += thisAmount;
    }
    result += "\uCD1D\uC561: " + format(totalAmount / 100) + "\n";
    result += "\uC801\uB9BD \uD3EC\uC778\uD2B8: " + volumeCredits + "\uC810\n";
    return result;
}
console.log(statement(invociesJson[0], playsJson));
