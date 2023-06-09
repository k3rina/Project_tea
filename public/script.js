const form = document.querySelector('#add-comment');

if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const { comment, action } = e.target;
    const res = await fetch(action, {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/json',
      },
      body: JSON.stringify({
        comment: comment.value,
      }),
    });
    const data = await res.json();
    // console.log(data.html);
    if (data.message === 'ok') {
      document
        .querySelector('.new-comment')
        .insertAdjacentHTML('beforeend', data.html );
      e.target.reset();
    }
  });
}

const butt = document.querySelector('#add-comment');

if (butt) {
  butt.addEventListener('click', async (e) => {
    if (e.target.classList.contains('delete')) {
      const card = e.target.closest('.card');
      const { id } = e.target.dataset;
      // console.log(id);
      const res = await fetch(`/api/card/${id}`, {
        method: 'DELETE',
      });
      const data = await res.json();
      if (data.message === 'success') {
        card.remove();
      } else {
        alert(data.message);
      }
    }
  });
}
