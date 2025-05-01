(function() {
    "use strict";
  
    const navigation = document.querySelector(".navigation");
    const navigationToggle = document.querySelector(".navigation-toggle");
    const htmlClassList = document.documentElement.classList;
    const hasNavClass = "has-nav";
    const isOpenClass = "is-open";
  
    if (navigation && navigationToggle && htmlClassList) {
      // Open navigation if its ID matches the hash in the URL on load
      if (location.hash === `#${navigation.id}`) {
        htmlClassList.add(hasNavClass);
      }
  
      // Toggle navigation visibility on toggle button click
      navigationToggle.addEventListener("click", event => {
        event.preventDefault();
        htmlClassList.toggle(hasNavClass);
  
        // Close any open submenus when the main navigation is closed
        if (!htmlClassList.contains(hasNavClass)) {
          navigation.querySelectorAll(`.${isOpenClass}`).forEach(submenu => {
            submenu.classList.remove(isOpenClass);
          });
        }
      });
  
      // Handle submenu toggling on link click
      navigation.querySelectorAll("a").forEach(link => {
        const submenu = link.parentNode && link.parentNode.querySelector("ul");
        if (submenu) {
          link.addEventListener("click", handleSubmenuToggle);
        }
      });
  
      function handleSubmenuToggle(event) {
        const parentListItem = event.currentTarget.parentNode;
        const submenu = parentListItem.querySelector("ul");
  
        if (submenu && getComputedStyle(submenu).display === "none") {
          event.preventDefault();
          parentListItem.classList.add(isOpenClass);
        }
      }
    }
  })();