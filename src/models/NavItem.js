class NavItem {
  /**
   * Constructor for NavItem.
   * @param {String} label text of the nav item.
   * @param {String} href href that nav item links to.
   */
  constructor({ label, href }) {
    this.label = label;
    this.href = href;
  }
}

export default NavItem;