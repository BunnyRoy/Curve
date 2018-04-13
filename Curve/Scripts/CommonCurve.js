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
        var txtNameValue = document.getElementById("txtName").value;
        if (txtNameValue.length == 0)
            document.getElementById("txtName").style.borderBottomColor = "red";
        else
            document.getElementById("txtName").style.borderBottomColor = "";
    }
    ,
    ClearAll: function () {
        debugger;
        var arrelements = document.forms["FormMain"];
        for (var i = 0; i < arrelements.length; i++) {
            if (arrelements[i].type == "text") {
                arrelements[i].value = "";
            }

        }

    }






};