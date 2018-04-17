var MainCureve = {

    OpenPopUp: function (element) {
        debugger
        $.ajax(
            {
                type: "GET",
                url: "/Main/RedirectToContent",
                contentType: "application/json; charset=utf-8",
                cache: false,
                data: {},
                success: function (html) {
                    debugger;
                    $("#ModalContent").append(html);
                    $('#myModal').modal('show');
                },
                error: function () {
                    debugger;
                    alert("Dynamic content load failed.");
                }
            });
    },

    OnLeave: function (element) {
        debugger;
        
        //var txtNameValue = document.getElementById("txtName").value;
        var elementValue = document.getElementById(element.id.toString()).value;
        if (elementValue.length == 0)
            document.getElementById(element.id.toString()).style.borderBottomColor = "red";
        else
            document.getElementById(element.id.toString()).style.borderBottomColor = "";


        //var elements = document.querySelectorAll('input[type=text]');
        //for (var i = 0; i < elements.length; i++) {
        //    if (elements[i].type == "text") {

        //        if (elements[i].value.length == 0) {
        //            elements[i].style.borderBottomColor = "red";
        //        } else {
        //            elements[i].style.borderBottomColor = "";
        //        }
        //    }
        //}
        ////if (txtNameValue.length == 0)
        ////    document.getElementById("txtName").style.borderBottomColor = "red";
        ////else
        ////    document.getElementById("txtName").style.borderBottomColor = "";

        ////var txtAddress = document.getElementById("txtAddress").value;
        ////if (txtAddress.length == 0)
        ////    document.getElementById("txtAddress").style.borderBottomColor = "red";
        ////else
        ////    document.getElementById("txtAddress").style.borderBottomColor = "";

    }
    ,
    ClearAll: function () {
        debugger;
        var arrelements = document.forms["FormMain"];
        for (var i = 0; i < arrelements.length; i++) {
            if (arrelements[i].type == "text") {
                arrelements[i].value = "";
                arrelements[i].style.borderBottomColor = "";
            }

        }

    }






};