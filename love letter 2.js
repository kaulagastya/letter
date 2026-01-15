$(document).ready(function () {
  const envelope = $("#envelope");

  envelope.on("click", function () {
    if (envelope.hasClass("close")) {
      envelope.removeClass("close").addClass("open");
    } else {
      envelope.removeClass("open").addClass("close");
    }
  });

  // Optional: disable buttons if they exist
  $("#open").off("click");
  $("#reset").off("click");
});
