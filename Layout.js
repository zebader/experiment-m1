function Layout(rootElement) {
  this.rootElement    = rootElement;
  this.layoutElements = null;
  this.header         = null;
  this.main           = null;
  this.footer         = null;
};

Layout.prototype.generateLayout = function() {
  this.layoutElements = document.createElement('div');
  this.layoutElements.innerHTML = `
    <header id="site-header"></header>
    <main id="site-main" class="container"></main>
    <footer id="site-footer"></footer>
  `;
};

Layout.prototype.getMainElements = function() {
  this.header = document.querySelector('#site-header');
  this.main   = document.querySelector('#site-main');
  this.footer = document.querySelector('#site-footer');
};

Layout.prototype.generateNavbar = function() {
  var navbar = new Navbar(this.header);
  navbar.generateNavbar();
  navbar.render();
};

Layout.prototype.generateFooter = function() {
  var footer = new Footer(this.footer);
  footer.generateFooter();
  footer.render();
};

Layout.prototype.render = function() {
  this.rootElement.appendChild(this.layoutElements);
};