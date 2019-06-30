'use strict';

function Footer(footerContainer) {
  this.footerContainer = footerContainer;
  this.footerEelements = null;
};

Footer.prototype.generateFooter = function() {
  this.footerEelements = document.createElement('div');
  this.footerEelements.innerHTML = `

      <p>Proyecto 2 de modulo 1 - ironhack - with love</p>

  `
};

Footer.prototype.render = function() {
  this.footerContainer.appendChild(this.footerEelements);
};