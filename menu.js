// 2372010 Marco A
$.getJSON("data.json", function (data) {
  let menu = data.menu;

  function displayMenuByCategory(kategori) {
    let content = "";
    $.each(menu, function (i, data) {
      if (kategori === "All" || data.kategori === kategori) {
        content +=
          '<div class="col-md-3"><div class="card" style="width: 30rem; background-color: black; margin-left: 2rem;"><img src="images/menus/' +
          data.gambar +
          '.jpeg" class="card-img-top" style="width: 25rem;height:38rem"/>< class="card-body"><h5 class="card-title" style="color: #b6895b; font-weight: 800; font-size: 3rem;">' +
          data.nama +
          '</h5><p class="card-text" style="font-size: 1.4rem;height:10rem;">' +
          data.deskripsi +
          "</p></div></div></div>";
      }
    });
    $("#daftar-menu").html(content);
  }

  $("#kategori").change(function () {
    let selectedCategory = $(this).val();
    displayMenuByCategory(selectedCategory);
  });

  displayMenuByCategory("All");
});
