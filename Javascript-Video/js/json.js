document.querySelector("#klik").addEventListener("click", tampil);

function tampil() {
    let url = "js/tblmenu.json";
    fetch(url)
    .then(function (res) {
        return res.json();
    })
    .then(function (data) {
        let output = "<h1>DATA MENU</h1> <table><th>Menu</th> <th>Harga</th> <th>Warna</th>";
        data.forEach(element => {
            output += `<tr>
                <td>${element.menu}</td>
                <td>${element.harga}</td>
                <td>${element.warna[0]}</td>
            </tr>`;
        });
        output += "</table>";
        document.querySelector("#isi").innerHTML = output;
    })

}


// let  tblmenu = [
//     {

//         "idmenu" : 6,
//         "idkategori" : 33,
//         "menu" : "Es Teh A",
//         "harga" : 5000,
//         "warna" : ["merah", "kuning", "hijau"],
//         "stok" : true,
//         "keterangan" : null

// },
//     {

//         "idmenu" : 7,
//         "idkategori" : 33,
//         "menu" : "Es Teh B",
//         "harga" : 5000,
//         "warna" : ["merah", "kuning", "hijau"],
//         "stok" : false,
//         "keterangan" : null

// }

// ]

// console.log(tblmenu[1].keterangan);