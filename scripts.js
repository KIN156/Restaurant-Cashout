function calculateTotal() {
			var value1 = parseFloat(document.getElementById("value1").value);
			var value2 = parseFloat(document.getElementById("value2").value);
			var value3 = parseFloat(document.getElementById("value3").value);
			var value4 = parseFloat(document.getElementById("value4").value);
			var totalSales = parseFloat(document.getElementById("total-sales").value);
			var total = value1 + value2 + value3 + value4;
			var salesTotal = totalSales - total;
            var salesCommission = totalSales * 0.045;
            var payableAmount = salesTotal + salesCommission;
			document.getElementById("etc").innerHTML =  total.toFixed(2);
            document.getElementById("ts").innerHTML = totalSales.toFixed(2);
			document.getElementById("ltc").innerHTML = total.toFixed(2);
            document.getElementById("etca").innerHTML= salesTotal.toFixed(2);
            document.getElementById("housetip").innerHTML = salesCommission.toFixed(2);
            document.getElementById("lastamount").innerHTML = payableAmount.toFixed(2);
		}

