<?php 

//     require_once "koneksi.php";

//     $data = stripslashes(file_get_contents("php://input"));
//     $idpelanggan = json_decode($data, true);

//     $idpelanggan = $idpelanggan['idpelanggan'];

//     if (!empty($idpelanggan)) {
    
//     $sql = "DELETE FROM tblpelanggan WHERE idpelanggan = $idpelanggan";    
//     if ($result = mysqli_query($con, $sql)) {
//         echo "Data Anda Telah Dihapus";
//     } else {
//         echo "Data Anda Gagal Dihapus";
//     }
// }else {
//     echo "Silahkan Pilih Data Anda!";
// }

    require_once "koneksi.php";

    $data = stripslashes(file_get_contents("php://input"));

    $idpelanggan = json_decode($data,true);

    $idpelanggan = $idpelanggan['idpelanggan'];

    if (!empty($idpelanggan)) {
        $sql = "DELETE FROM tblpelanggan WHERE idpelanggan = $idpelanggan";
        if ($result = mysqli_query($conn,$sql)) {
            echo "Data Anda Telah Dihapus";
        } else {
            echo "Data Anda Gagal Dihapus";
        }
    }else {
        echo "Data Kosong!";
    }


?>