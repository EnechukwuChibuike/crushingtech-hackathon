const notification_dropdown = document.querySelector(".notification_dropdown");
const notification = document.querySelector(".notification");
const profileName = document.querySelector(".profileName");
const profileName_dropdown = document.querySelector(".profileName_dropdown");
const select_plan = document.querySelector(".select_plan");
const arrow = document.querySelector(".arrow");
const category = document.querySelector(".category");
const firstIcon = document.querySelector(".first_icon");
const secondIcon = document.querySelector(".second_icon");
const thirdIcon = document.querySelector(".third_icon");
const fourthIcon = document.querySelector(".fourth_icon");
const fifthIcon = document.querySelector(".fifth_icon");
const circle = document.querySelector(".circle");
const circle1 = document.querySelector(".circle1");
const circle2 = document.querySelector(".circle2");
const circle3 = document.querySelector(".circle3");
const circle4 = document.querySelector(".circle4");

let count = document.querySelector(".count");
const progress = document.querySelector(".progress");
let width = 0;

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

function rotate() {
  if (
    arrow.src === "https://crushingit.tech/hackathon-assets/icon-arrow-up.svg"
  ) {
    arrow.src = "https://crushingit.tech/hackathon-assets/icon-arrow-down.svg";
    category.style.height = "300px";
  } else {
    arrow.src = "https://crushingit.tech/hackathon-assets/icon-arrow-up.svg";
    category.style.height = "0px";
  }
}

function clickIcon(item) {
  if (item.getAttribute("name") === "tick") {
    item.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M22.0004 12C22.0004 13.9778 21.4139 15.9112 20.3151 17.5557C19.2162 19.2002 17.6545 20.4819 15.8272 21.2388C13.9999 21.9957 11.9893 22.1937 10.0495 21.8079C8.10965 21.422 6.32782 20.4696 4.9293 19.0711C3.53077 17.6725 2.57837 15.8907 2.19251 13.9509C1.80666 12.0111 2.00469 10.0004 2.76157 8.17317C3.51845 6.3459 4.80017 4.78412 6.44466 3.6853C8.08916 2.58649 10.0226 2 12.0004 2" stroke="#1C181D" stroke-width="2.08333" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`;

    setTimeout(() => {
      item.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M11.9996 2C13.9774 2 15.9108 2.58649 17.5553 3.6853C19.1998 4.78412 20.4816 6.3459 21.2384 8.17316C21.9953 10.0004 22.1933 12.0111 21.8075 13.9509C21.4216 15.8907 20.4692 17.6725 19.0707 19.0711C17.6722 20.4696 15.8903 21.422 13.9505 21.8079C12.0107 22.1937 10.0001 21.9957 8.1728 21.2388C6.34554 20.4819 4.78375 19.2002 3.68494 17.5557C2.58612 15.9112 1.99963 13.9778 1.99963 12" stroke="#1C181D" stroke-width="2.08333" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`;
    }, 100);
    setTimeout(() => {
      item.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" fill="#1C181D"></circle>
      <path
        d="M17.2738 8.52629C17.6643 8.91682 17.6643 9.54998 17.2738 9.94051L11.4405 15.7738C11.05 16.1644 10.4168 16.1644 10.0263 15.7738L7.3596 13.1072C6.96908 12.7166 6.96908 12.0835 7.3596 11.693C7.75013 11.3024 8.38329 11.3024 8.77382 11.693L10.7334 13.6525L15.8596 8.52629C16.2501 8.13577 16.8833 8.13577 17.2738 8.52629Z"
        fill="#fff"
      ></path>
    </svg>`;
    }, 200);
    item.setAttribute("name", "ticked");
    count.innerText++;
    width += 20;
  } else {
    item.innerHTML = `<svg
                    class="circle"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="#8A8A8A"
                      stroke-width="2.08333"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-dasharray="5 5"
                    />
                  </svg>`;
    item.setAttribute("name", "tick");
    count.innerText--;
    width -= 20;
  }
  progress.style.width = `${width}px`;

  if (width === 100) {
    progress.style.borderTopRightRadius = "28px";
    progress.style.borderBottomRightRadius = "28px";
  }
}

function hoverIcon(item) {
  item.innerHTML = `<circle cx="12" cy="12" r="10" stroke="#8A8A8A" stroke-width="2.08333" stroke-linecap="round" stroke-linejoin="round"/>`;
}

function hoverOutIcon(item) {
  item.innerHTML = `<circle
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="#8A8A8A"
                      stroke-width="2.08333"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-dasharray="5 5"
                    />
                  `;
}

let currentlyOpenDropdown = null;

function toggleDropdown(dropdownNumber) {
  let dropdown = document.getElementById(`dropdown${dropdownNumber}`);
  const id = dropdown.getAttribute("id");
  let cat = document.querySelectorAll(".first_cat");

  cat.forEach((item) => {
    if (item.getAttribute("id") !== id) {
      item.style.display = "none";
      item.parentNode.style.backgroundColor = "transparent";
      item.parentNode.style.cursor = "pointer";
    } else {
      item.style.display = "flex";
      item.parentNode.style.backgroundColor = "#f3f3f3";
      item.parentNode.style.cursor = "default";
    }
  });
}
