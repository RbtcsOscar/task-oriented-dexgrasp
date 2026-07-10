// Copy BibTeX to clipboard
(function () {
  var btn = document.getElementById("copyBtn");
  var pre = document.getElementById("bibtex");
  if (!btn || !pre) return;

  btn.addEventListener("click", function () {
    var text = pre.innerText;
    var done = function () {
      btn.textContent = "Copied";
      btn.classList.add("done");
      setTimeout(function () {
        btn.textContent = "Copy";
        btn.classList.remove("done");
      }, 1600);
    };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(done).catch(fallback);
    } else {
      fallback();
    }
    function fallback() {
      var r = document.createRange();
      r.selectNode(pre);
      var sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(r);
      try { document.execCommand("copy"); done(); } catch (e) {}
      sel.removeAllRanges();
    }
  });

  // Prevent disabled buttons from jumping
  document.querySelectorAll('[data-disabled="true"]').forEach(function (a) {
    a.addEventListener("click", function (e) { e.preventDefault(); });
  });
})();
