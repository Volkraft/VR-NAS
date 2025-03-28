const accordList = document.querySelector("#faqList");

const motionAccord = (event) => {
  const isListItem = event.target.closest("[data-item]");
  if (isListItem) {
    isListItem.classList.toggle("active");
  }
};

accordList.addEventListener("click", motionAccord);
