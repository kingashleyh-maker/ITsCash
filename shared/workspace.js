// Open the workspace associated with the current entry page.
window.addEventListener('DOMContentLoaded', () => {
  const workspace = document.body.dataset.workspace;
  if (workspace === 'cashier') CashierSystem.open();
  if (workspace === 'proware') Proware.open();
  const actions = document.querySelector('.uniform-shop-actions');
  if (actions) {
    const nav = document.createElement('nav');
    nav.className = 'workspace-links';
    nav.setAttribute('aria-label', 'Project workspaces');
    nav.innerHTML = '<a href="../dashboard/index.html">Dashboard</a><a href="../cashier/index.html">Cashier</a><a href="../proware/index.html">Proware</a>';
    actions.prepend(nav);
  }
});
