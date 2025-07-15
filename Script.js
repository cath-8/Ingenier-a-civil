document.querySelectorAll("li[id]").forEach(ramo => {
  ramo.addEventListener("click", () => {
    document.querySelectorAll("li").forEach(li => li.classList.remove("dependiente"));
    const id = ramo.id;
    document.querySelectorAll(`.dep-${id}`).forEach(dep => {
      dep.classList.add("dependiente");
    });
  });
});
