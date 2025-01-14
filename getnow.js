// 2372010 Marco A
$.getJSON("data.json", function (data) {
  let menu = data.menu;
  console.log(menu);
  $.each(menu, function (i, data) {
    $("#daftar-menu").append(
      '<div class="col-md-3"><div class="card" style="background-color: black;width:50rem; margin-left: 2rem;margin-top: 2rem"><img src="images/menus/' +
        data.gambar +
        '.jpeg" class="card-img-top" style="width: 25rem;height:38rem"/><h5 class="card-title" style="color: #b6895b; font-weight: 800; font-size: 3rem;">' +
        data.nama +
        '</h5><p class="card-text" style="font-size: 1.6rem;height:5rem">' +
        data.deskripsi +
        '</p><p class="card-text" style="font-size: 1.8rem;margin-top: 2rem">Rp.' +
        data.harga +
        '</p><a href="#" class="btn btn-primary" style="font-size: 2rem; background-color: #b6895b; border-color: #b6895b">Order Now</a></div></div></div>'
    );
  });
});
