import { Col, Container, Row } from 'react-bootstrap';
import './App.css';
import Navbar from './components/Navbar';
import Todoform from './components/Todoform';
import Todotable from './components/Todotable';

function App() {
  return (
    <>
      <Container>
        <Navbar />
        <Row className='justify-content-md-center'>
          <Col lg='6'>
            <Todoform />
            <Todotable/>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
