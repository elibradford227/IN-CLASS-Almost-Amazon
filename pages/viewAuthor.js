import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const viewAuthor = (array) => {
  clearDom();
  console.warn(array);
  let domString = '';
  domString += `
  <div id=authdetails>
    <p style="color: white;">${array.first_name} ${array.last_name}</p>
    <p style="color: white; display: block;">${array.email}</p>
    <p class='card-text bold'>${array.favorite ? '<span class=\'badge badge-info sale-badge\'><i class=\'fa fa-check\' aria-hidden=\'true\'></i> Favorite</span>' : ''}</p>
  </div>`;
  array.booksObj.forEach((item) => {
    domString += `
    <div class="card" style="width: 18rem;">
    <img class="card-img-top" src=${item.image} alt=${item.title} style="height: 400px;">
      <div class="card-body">
        <h5 class="card-title">${item.title}</h5>
        <hr>
        <p class="card-text bold">${item.sale ? `<span class="badge badge-info sale-badge"><i class="fa fa-bell" aria-hidden="true"></i> Sale</span> $${item.price}` : `$${item.price}`}</p>
        <i class="btn btn-success fas fa-eye" id="view-author-btn--${item.firebaseKey}"></i>
        <i class="fas fa-edit btn btn-info" id="update-author--${item.firebaseKey}"></i>
        <i class="btn btn-danger fas fa-trash-alt" id="delete-author-btn--${item.firebaseKey}"></i>
        <hr>
        <p class='card-text bold'>${item.favorite ? '<span class=\'badge badge-info sale-badge\'><i class=\'fa fa-check\' aria-hidden=\'true\'></i> Favorite</span>' : ''}</p>
      </div>
    </div>
    `;
  });
  renderToDOM('#store', domString);
};

export default viewAuthor;
