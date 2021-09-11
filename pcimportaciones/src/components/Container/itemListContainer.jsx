import ProductosDom from '../Items/itemList'

function ItemListContainer () {
return(
    <section>
        <h1 className="text-warning mt-3">COMPONENTES</h1>
        <div  className="container-fluid mt-2">
            <div  className="row">  
                <ProductosDom/>
            </div>
        </div>
    </section>    
    );
}

export default ItemListContainer