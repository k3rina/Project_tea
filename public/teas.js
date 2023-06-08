const addTea = document.querySelector("#add-tea");
const deleteTea = document.querySelector(".teas");
if (addTea) {
  addTea.addEventListener("submit", async (e) => {
    e.preventDefault();
    const { name, image, location, description } = e.target;
    // console.log(e.target);
    const res = await fetch("/api/admin", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        name: name.value,
        image: image.value,
        location: location.value,
        description: description.value,
      }),
    });
    const data = await res.json();
    // console.log(data);
    if (data.message === "success") {
      document
        .querySelector(".teas")
        .insertAdjacentHTML("beforeend", data.html);
      e.target.reset();
    }
  });
}

if (deleteTea) {
  deleteTea.addEventListener("click", async (e) => {
    if (e.target.classList.contains("btn-delete")) {
      const card = e.target.closest(".card");
      const { id } = card.dataset;
      const res = await fetch(`/api/admin/${id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (data.message === "success") {
        card.remove();
      } else {
        console.log(data);
        alert(data.message);
      }
    }
  });
}
