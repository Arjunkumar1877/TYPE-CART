import StoreItem from '../components/StoreItem'
import storeItems from '../data/items.json'
import { Col, Row } from 'react-bootstrap'

const Store = () => {
  return (
   <>
   <h1>Store</h1>
   <Row md={2} xs={1} lg={3} className='g-3'>
    <Col>
    {
      storeItems.map(item => (
        <StoreItem {...item} />
      ))
    }
    </Col>
   </Row>
   </>
  )
}

export default Store
