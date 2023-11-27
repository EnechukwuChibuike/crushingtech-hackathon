const notification_dropdown = document.querySelector(".notification_dropdown");
const notification = document.querySelector(".notification");
const profileName = document.querySelector(".profileName");
const profileName_dropdown = document.querySelector(".profileName_dropdown");
const select_plan = document.querySelector(".select_plan");

function displayNotificationDropdown() {
  if (notification_dropdown.style.display === "flex") {
    notification_dropdown.style.display = "none";
    notification.style.background = "#303030";
  } else {
    notification_dropdown.style.display = "flex";
    notification.style.background = "#616161";
  }
}

function displayProfileDropdown() {
  if (profileName_dropdown.style.display === "block") {
    profileName_dropdown.style.display = "none";
    profileName.style.background = "#303030";
  } else {
    profileName_dropdown.style.display = "block";
    profileName.style.background = "#616161";
  }
}

function cancelSelectPlan() {
  select_plan.style.display = "none";
}
