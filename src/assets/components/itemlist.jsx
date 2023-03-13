import product from "../json/place.json";
import Item from "./item";
import { Row,Col } from "antd";

export default function itemlist() {
    
    return (
        <Row gutter={[32,32]} >
        {product.map(products => (
            <Col
                key={products.id}
                sm={{ span: 12 }}
                lg={{ span: 8 }}
                xl={{ span: 6 }}
                xxl={{ span: 4 }}
            >    
                <Item
                    products={products}
                />
                
            </Col>
        ))}            
        </Row>
        
    );
}