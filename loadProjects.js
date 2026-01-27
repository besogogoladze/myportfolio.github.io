document.addEventListener("DOMContentLoaded", () => {
  const projects = document.querySelectorAll(".project-card");
  const loadMoreBtn = document.getElementById("loadMoreBtn");

  let visibleCount = 6;
  const step = 3;

  function showProjects() {
    projects.forEach((project, index) => {
      if (index < visibleCount) {
        project.classList.add("show");
      }
    });

    // Hide button if all projects are shown
    if (visibleCount >= projects.length) {
      loadMoreBtn.style.display = "none";
    }
  }

  // Initial load
  showProjects();

  loadMoreBtn.addEventListener("click", () => {
    visibleCount += step;
    showProjects();
  });
});
