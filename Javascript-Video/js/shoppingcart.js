let tblmenu = [
    {idmenu:6, idkategori:33, menu:"Es Teh A", gambar:"tehtawar.jpg", harga:5000},
    {idmenu:7, idkategori:33, menu:"Es Teh B", gambar:"tehtawar.jpg", harga:5000},
    {idmenu:8, idkategori:33, menu:"Es Teh C", gambar:"tehtawar.jpg", harga:5000},
    {idmenu:9, idkategori:36, menu:"Batagor A", gambar:"batagorkomp.jpg", harga:4000},
    {idmenu:10, idkategori:36, menu:"Batagor B", gambar:"batagorkomp.jpg", harga:4000},
];

let tampil = tblmenu.map(function (kolom) {
    return '<div class="produk-content"> <div class="img"> <img src="hotwheels/${kolom.gambar}" alt=""> </div> <div class="namaproduk"> <h2>${kolom.menu}</h2> </div> <div class="harga"> <h2>Rp. ${kolom.harga}</h2> </div></div> <div class="btn-beli"> <button data-idmenu=${kolom.idmenu}>Beli</button> </div>';});

let isi = document.querySelector(".produk");
isi.innerHTML = tampil;

let btnbeli = document.querySelectorAll(".btn-beli > button");

let cart = [];

for (let index = 0; index < btnbeli.length; index++) {
    btnbeli[index].onclick = function () {
        // console.log(btnbeli[index].dataset["idmenu"]);
        // cart.push(btnbeli[index].dataset["idmenu"]);
        
        tblmenu.filter(function (a) {
            if (a.idmenu==btnbeli[index].dataset["idmenu"]) {
                cart.push(a);
                console.log(cart);
            }
        })
    };    
}

// console.log(cart);