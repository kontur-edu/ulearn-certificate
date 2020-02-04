new ClipboardJS(".link-to-copy");

var links = document.getElementsByClassName("link-to-copy");
for (var i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function(e) {
    tlite.show(e.target);
    setTimeout(function() {
      tlite.hide(e.target);
    }, 3000);
    e.preventDefault();
  });
}

var hiddenElements = toArray(document.getElementsByClassName("hidden"));
for (var i = 0; i < hiddenElements.length; i++) {
  var element = hiddenElements[i];
  var showWhenHasContent = !!element.getAttribute("data-show-when-has-content");
  var showWhenNoContent = element.getAttribute("data-show-when-no-content") === '';
  if (showWhenHasContent || showWhenNoContent) {
    element.classList.remove('hidden');
  }
}

function toArray(collection) {
  var result = [];
  for (var i = 0; i < collection.length; i++) {
    result.push(collection[i]);
  }
  return result;
}
