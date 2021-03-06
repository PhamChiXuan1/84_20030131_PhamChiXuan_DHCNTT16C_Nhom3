$(document).ready(function() {
    var i = 1;
    $("#btnDK").click(function() {
        $("#myModal").modal();
    });

    function kiemTraMSSV() {
        var mauKT = /^[0-9]{10}$/;
        if ($("#txtMaSV").val() == "") {
            $("#tbMaSV").html("Không để trống");
            return false;
        }
        if (!mauKT.test($("#txtMaSV").val())) {
            $("#tbMaSV").html("MSSV gồm 10 chữ số");
            return false;
        }
        $("#tbMaSV").html("*");
        return true;
    }
    $("#txtMaSV").blur(kiemTraMSSV);


    function kiemTraTen() {
        var i = 1;
        let mauKT = /^([A-Z]{1}[a-z]+)((\s{1}[A-Z]{1}[a-z]+){1,})$/;
        if ($("#txtHT").val() == "") {
            $("#tbHT").html("Không để trống");
            return false;
        }
        if (!mauKT.test($("#txtHT").val())) {
            $("#tbHT").html("Mỗi ký tự đầu viết hoa không sử dụng số");
            return true;
        }
        $("#tbHT").html("*");
        return true;
    }
    $("#txtHT").blur(kiemTraTen);

    function KTMail() {
        var mail = /^\w+([\.-]?\w+)*@iuh.edu.vn$/;
        if ($("#txtEmail").val() == "") {
            $("#tbEmail").html("* Bắt buộc nhập !");
            return false;
        }
        if (!mail.test($("#txtEmail").val())) {
            $("#tbEmail").html("* Nhập đúng định dạng mail xxxxxx@iuh.edu.vn");
            return false;
        }
        $("#tbEmail").html("*");
        return true;
    }
    $("#txtEmail").blur(KTMail);

    function KTSDT() {
        var kt = /^[0-9]{10}$/;
        if ($("#txtSDT").val() == "") {
            $("#tbSDT").html("Không được để trống");
            return false;
        }
        if (!kt.test($("#txtSDT").val())) {
            $("#tbSDT").html("Số điện thoại gồm 10 số");
            return false;
        }
        $("#tbSDT").html("*");
        return true;
    }
    $("#txtSDT").blur(KTSDT);

    $("#btnLuu").click(function() {
        if (
            kiemTraMSSV() == true &&
            kiemTraTen() == true &&
            KTMail() == true
        ) {
            row = "<tr>";
            row += "<th>" + i++ + "</th>";
            row += "<th>" + $("#txtMaSV").val() + "</th>";
            row += "<th>" + $("#txtHT").val() + "</th>";
            row += "<th>" + $("#txtEmail").val() + "</th>";
            row += "<th>" + $("#txtSDT").val() + "</th>";
            $("#danhsach").append(row);
            $("#myModal").modal("hide");

        }
    });
    $("#btnLuu").click(function() {
        $("#txtMaSV").val("");
        $("#txtTen").val("");
        $("#txtEmail").val("");
        $("#txtSDT").val("");
    })

});