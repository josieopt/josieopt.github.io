function filterPosts() {
  var input = document.getElementById("searchInput");
  var filter = input.value.toLowerCase();
  var ul = document.getElementById("postList");
  var li = ul.getElementsByTagName("li");
  for (var i = 0; i < li.length; i++) {
    var text = li[i].innerText;
    li[i].style.display = text.toLowerCase().includes(filter) ? "" : "none";
  }
}
