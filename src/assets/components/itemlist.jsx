import product from "../json/place.json";
import Item from "./item";
import { Row,Col } from "antd";

export default function itemlist() {
    
    return (
        <Row gutter={[24,24]} >
        {product.map(products => (
            <Col
                key={products.id}
                sm={{ span: 12 }}
                lg={{ span: 6 }}
                
            >    
                <Item
                    products={products}
                />
                
            </Col>
        ))}            
        </Row>
        
    );
}