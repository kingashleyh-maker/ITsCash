document.querySelectorAll(".learning-app [data-section]").forEach((button) =>
  button.addEventListener("click", () => {
    const app = document.querySelector(".learning-app");
    if (button.dataset.section === "uniforms") {
      app.classList.add("is-shopping");
      document.querySelector(".topbar-title").textContent = "STI Campus Store";
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    app.classList.remove("is-shopping");
    document.querySelector(".topbar-title").textContent = "STI Education System";
    const section = document.getElementById(button.dataset.section);
    if (section) section.scrollIntoView({ behavior: "smooth", block: "start" });
    document
      .querySelectorAll(".learning-nav [data-section]")
      .forEach((item) =>
        item.classList.toggle("is-active", item.dataset.section === button.dataset.section),
      );
  }),
);
document.getElementById("learningSearch").addEventListener("input", (event) => {
  const query = event.target.value.trim().toLowerCase();
  document
    .querySelectorAll("#learningCourses .course-card")
    .forEach((card) => (card.hidden = !card.dataset.course.toLowerCase().includes(query)));
});
