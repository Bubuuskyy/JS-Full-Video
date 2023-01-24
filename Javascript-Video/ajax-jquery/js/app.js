$(document).ready(function () {

    let id = "";
    let pelanggan = "";
    let alamat = "";
    let telp = "";

    $("#submit").click(function (e) { 
        e.preventDefault();
        id = $("#id").val();
        pelanggan = $("#pelanggan").val();
        alamat = $("#alamat").val();
        telp = $("#telpon").val();

        if (id == "") {
            insertData();
        } else {
            updateData();
        }

        $("#id").val("");
        $("#pelanggan").val("");
        $("#alamat").val("");
        $("#telpon").val("");

    });

    $("tbody").on("click", ".btn-del", function () {
        let id = $(this).attr("data-id");
        deleteData(id);
    });

    $("tbody").on("click", ".btn-ubah", function () {
        let id = $(this).attr("data-id");
        selectUpdate(id);
    });

    function selectUpdate(id) {
        alert("dari function" + id);
    }

    function selectData() {
        $.ajax({
            type: "get",
            url: "php/select.php",
            dataType: "json",
            success: function (response) {
                let out = "";
                let no = 1;
                $.each(response, function (key, val) { 
                    out += `<tr>
                    <td>${no++}</td>
                    <td>${val.pelanggan}</td>
                    <td>${val.alamat}</td>
                    <td>${val.telp}</td>
                    <td><button type="button" class="btn btn-danger btn-del" data-id=${val.idpelanggan}>Delete</button></td>
                    <td><button type="button" class="btn btn-warning btn-ubah" data-id=${val.idpelanggan}>Edit</button></td>
                    </tr>`;
                });

                $("#isidata").html(out);
            }
        });
    }

    function insertData() {
        let dataPelanggan = {
            pelanggan : pelanggan,
            alamat : alamat,
            telp : telp
        }

        $.ajax({
            type: "pos",
            url: "php/insert.php",
            cache:false,
            data: JSON.stringify(dataPelanggan),
            // dataType: "dataType",
            success: function (response) {
                let out = `<p>${response}</p>`
                $("#msg").html(out);
            }
        });

        selectData();

    }

    function deleteData(id) {
            let idpelanggan = {
                idpelanggan : id
            }
    
            $.ajax({
                type: "pos",
                url: "php/delete.php",
                cache:false,
                data: JSON.stringify(idpelanggan),
                // dataType: "dataType",
                success: function (response) {
                    let out = `<p>${response}</p>`
                    $("#msg").html(out);
                }
            });
    
        selectData();
    }

    function updateData() {
        alert("update");
    }

    selectData();
});