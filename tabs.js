const tabs = document.querySelector(".tabs");
const tabButtons = tabs.querySelectorAll('[role="tab"]');
const tabPanels = tabs.querySelectorAll('[role="tabpanel"]');

function handleClick(event) {
  if (!event.target.matches('[role="tab"]')) return;

  // hide all tab panels
  tabPanels.forEach(item => (item.hidden = true));

  // mark all tabs as unselected
  tabButtons.forEach(item => {
    item.setAttribute("aria-selected", false);
  });

  // mark clicked tab as selected
  event.target.setAttribute("aria-selected", true);

  // find associated tabPanel and show it
  tabs.querySelector(`[aria-labelledby="${event.target.id}"]`).hidden = false;
}

document.addEventListener("click", handleClick);
