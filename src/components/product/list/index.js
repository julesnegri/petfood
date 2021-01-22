import './styles.css';

const Product = () => {
  return (
    <div className="product-list col-12">
      <div className="row">
        <div className="col-3">
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRGs-S1S8UgKAbRjFuJeVs85YdZhmTWiXV5_SBebuh5BilTtw72dkuWsl86w&usqp=CAc" 
            className="img-fluid"
            alt="produtos"
          />
        </div>
        <div className="col-6">
          <h6>
            <label className="badge badge-primary">R$ 30,00</label>
          </h6>
          <small>
            <b>
              Ração Úmida Nestlé Purina Dog ChoW Extra Life Sachê Carne para
              Cães Filhotes - 100g
            </b>
          </small>
        </div>
        <div className="col-3">
          <button className="btn btn-secondary rounded-circle">-</button>
        </div>
      </div>
    </div>
  )
}

export default Product;