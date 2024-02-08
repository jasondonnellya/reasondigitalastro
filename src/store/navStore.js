import NavItem from '../models/NavItem';

export default {
  state: {
    navItems: [new NavItem({ label: "", href: "" })]
  },
  getters: {
    NavItems: (state) => state.navItems,
  },
  actions: {
    setNavItems(navItems) {
      this.navItems = navItems.map(navItem => new NavItem(navItem));
    },
  }
}