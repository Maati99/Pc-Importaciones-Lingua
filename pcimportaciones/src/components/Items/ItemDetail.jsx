/* eslint-disable jsx-a11y/alt-text */
import ItemCount from './itemCount';



function ItemDetail({ ProdDetail }) {
    const onAdd = (count) =>{
        alert(`Usted agrego ${count} componentes`)
    }
    return (
        <div className="col-50">
            <div className="card card-block mt-3">
                <img src={ProdDetail.urlPicture} className="card-img-top" height="300" width="500"/>
                    <div className="card-body">                 
                        <h1 className="text-danger card-title">{ProdDetail.title}</h1>
                        <h6 className="text-dark card-text">{ProdDetail.detail}</h6>
                        <p className="card-text text-danger">{ProdDetail.price}</p>
                        <ItemCount onAdd={onAdd} initial={1} stock={10}/>
                    </div>
            </div>
        </div>
    )
}

export default ItemDetail


