(function() {

// the last reported vertical scroll position
var lastClientY = -1;

// add a listener for scroll events that occur at the top level in the bubble
// phase (i.e. are unhandled inside the HTML widget)
window.addEventListener("mousewheel", function(evt) {

   // if not in a iframe, do nothing
   if (!window.frameElement)
      return;

   // if the scroll action didn't change the client Y,
   // assume we've scrolled to the bounds of the iframe
   // and propagate event to parent element
   if (evt.clientY === lastClientY) {
      window.frameElement.parentElement.dispatchEvent(
         new evt.constructor(evt.type, evt));
   }

   // otherwise, don't propagate the scroll event and just
   // update the last scroll position
   lastClientY = evt.clientY;
});

})();

