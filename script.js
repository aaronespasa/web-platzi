function runDemo{
  var ut = updateTransition();
  ut.addEventListener("transitionend", updateTransition, true);
}
