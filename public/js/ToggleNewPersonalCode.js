// JavaScript Document
function toggleSelection(tableNameId, lstUsernameId) {

    var lstUsername = document.getElementById(lstUsernameId);

    for (var i = 0; i <= lstUsername.length - 1; i++) {

        var selectRow = document.getElementById(tableNameId + i.toString());
        if (i == lstUsername.selectedIndex) {
            selectRow.style.display = "block";
        } else {
            selectRow.style.display = "none";
        }
    }
}

function toggleCompleteDescription(ProductDescriptionId, MoreDescriptionIcon) {

    var ProductDescription = document.getElementById(ProductDescriptionId);
    var MoreDescriptionIcon = document.getElementById(MoreDescriptionIcon);

    if (ProductDescription.style.display == "block") {

        ProductDescription.style.display = "none";
        MoreDescriptionIcon.src = "Images/Product/Plus.png";
        MoreDescriptionIcon.title = ShowMoreDescriptionResource;
    }
    else {

        ProductDescription.style.display = "block";
        MoreDescriptionIcon.src = "Images/Product/Minus.png";
        MoreDescriptionIcon.title = ShowLessDescriptionResource;
    }
}

function toggleNewPersonalCode(lnkPersonalId, position, productPersonal, productPersonalHeaderId) {
    var i, j = 0;
    var h = 0;
    var elementName = "toggleNewPersonalCode";
    var divs = document.getElementsByTagName("div");
    var spans = document.getElementsByTagName("span");
    var div;

    var productPersonalHeader = document.getElementById(productPersonalHeaderId);

    productPersonalHeader.value = productPersonal;

    for (i = 0; i < divs.length; i++) {
        if (divs[i].id == elementName) {

            div = divs[i];
            if (j == position) {
                if (div.style.display != "block") {
                    div.style.display = "block";
                    productPersonalHeader.focus();
                    productPersonalHeader.select();

                    var lnkPersonal = document.getElementById(lnkPersonalId.concat(j));
                    lnkPersonal.disabled = true;
                }
            } else {
                    var lnkPersonalDisabled = document.getElementById(lnkPersonalId.concat(j));
                    lnkPersonalDisabled.disabled = false;
                    div.style.display = "none";
            }                
            j = j + 1;
        }
    }
}

function hide(position, hiddenDiv) {

    var i, j = 0, k = 0;
    var divs = document.getElementsByTagName("div");
    var div;

    for (i = 0; i < divs.length; i++) {

        if (divs[i].id == hiddenDiv) {

            div = divs[i];
            if (k == position) {
                if (div.style.display == "block") {
                    div.style.display = "none";
                    break;
                }
            }
            k = k + 1;
        }

    }

}

function toggleNewPersonalCode2(position, visibleDiv, hiddenDiv, onlyOneRow) {

    var i, j = 0, k = 0, l = 0;
    var divs = document.getElementsByTagName("div");
    var div;

    for (i = 0; i < divs.length; i++) {

        if (divs[i].id == hiddenDiv) {

            div = divs[i];
            if (k == position) {
                if (div.style.display == "block") {
                    div.style.display = "none";
                    if (onlyOneRow == 1) {
                        break;
                    }
                }
            } else {
                if (onlyOneRow == 0) {
                    div.style.display = "block";
                }
            }
            k = k + 1;
        }
    }

    if (onlyOneRow == 0) {

        for (i = 0; i < divs.length; i++) {

            if (l != position) {
                if (divs[i].id == "divNewPriceList" || divs[i].id == "divAddPriceList") {
                    div = divs[i];
                    div.style.display = "none";
                } else if (divs[i].id == "divNewOrAddPriceListGlobal") {
                    div = divs[i];
                    div.style.display = "none";
                } else if (divs[i].id == "divNewOrAddPriceList") {
                    div = divs[i];
                    div.style.display = "block";
                }
            }
            l = l + 1;
        }
    }

    for (i = 0; i < divs.length; i++) {

        if (divs[i].id == visibleDiv) {

            div = divs[i];
            if (j == position) {
                if (div.style.display == "block") {
                    div.style.display = "none";
                }
                else {
                    div.style.display = "block";
                }
            } else {
                div.style.display = "none";
            }
            j = j + 1;
        }
    }

}