function checkSelect(buttonTopId, buttonBottomId, chkboxId, hiddentValueCount) {

    var btnAddToCartTop = document.getElementById(buttonTopId);
    var btnAddToCartBottom = document.getElementById(buttonBottomId);
    var chkSelect = document.getElementById(chkboxId);
    var hidSelectedProducts = document.getElementById(hiddentValueCount);
    
    if (chkSelect.checked) {
        hidSelectedProducts.value = Number(hidSelectedProducts.value) + 1;
    } else {
        hidSelectedProducts.value = Number(hidSelectedProducts.value) - 1;
    }

    if (Number(hidSelectedProducts.value) == 0) {
        btnAddToCartTop.disabled = true;
        btnAddToCartBottom.disabled = true;
    } else {
        btnAddToCartTop.disabled = false;
        btnAddToCartBottom.disabled = false;
    }
}

/*var test;
window.attachEvent("onload", function () {
var detector = document.getElementById("detector");
detector.attachEvent("onmousemove", function (e) {
detector.innerHTML = e.screenX + ", " + e.screenY;
test = test + "-" + e.screenX + "," + e.screenY;
});
setInterval(function () {
detector.fireEvent("onmousemove");
}, 100);
});

function submitform() {
if (document.myform.onsubmit()) {//this check triggers the validations
window.alert(test);
document.myform.submit();
}
}*/
