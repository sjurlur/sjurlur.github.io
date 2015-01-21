$("a[href^=#]").on("click", function(e) {
  e.preventDefault();
  // Basically the same as doing nothing except we bypass a history entry.
  location.replace( '#' + this.href.substr( this.href.lastIndexOf( '#' ) + 1 ) );
});