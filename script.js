function htmlEncode (value){
  return $('<div/>').text(value).html();
}

$(function() {
  $("#Mensaje").hide();
  $("#generate").click(function() {
    $("#Mensaje").hide();
    valorQR = $("#content").val() == "" ? false : true;
    if(!valorQR){
      $("#Mensaje").fadeIn();
      return false;
    }
    $(".qr-code").attr("src", "https://chart.googleapis.com/chart?cht=qr&chl=" + htmlEncode($("#content").val()) + "&chs=160x160&chld=L|0");
  });
});