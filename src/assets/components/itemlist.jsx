import product from "../json/place.json";
import Item from "./item";

export default function itemlist() {
    
    return (
        <div className="row">
            {product.map(products => (
                <Item key={products.id} products={products}   />
                
            ))}
            
        </div>
        
    );
}