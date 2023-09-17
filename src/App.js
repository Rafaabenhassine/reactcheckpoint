import { Button, Card, Col, Form, InputGroup, ListGroup,  Navbar, Row, Tab, Tabs } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <div>
        <Navbar className="bg-body-tertiary justify-content-between">
          <Form inline>
            <InputGroup>
            <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
          <Form.Control
            placeholder="Username"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
            </InputGroup>
          </Form>
          
          <div className='rafpet'><img src=""/></div>
          
          <Form inline>
            <Row>
            <Col xs="auto">
              <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
            />
            </Col>
          <Col xs="auto">
            <Button type="submit">Submit</Button>
          </Col>
        </Row>
          </Form>
        </Navbar>
      
      
      <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
        >
          <Tab eventKey="home" title="Home">   </Tab>
        
          <Tab eventKey="profile" title="Profile">   </Tab>
        
          <Tab eventKey="contact" title="Contact">   </Tab>
          
      </Tabs>
          
          
      <div className='haroun'>
        <div>
          <>
            <Button variant="light">HOME |</Button>{' '}
            <Button variant="primary">CHIENS</Button>{' '}
            <Button variant="secondary">CHATS</Button>{' '}
            <Button variant="success">RONGEURS</Button>{' '}
            <Button variant="warning">POISSONS</Button>{' '}
            <Button variant="danger">OISEAUX</Button>{' '}
            <Button variant="info">NOS MAGASINS</Button>{' '}
            <Button variant="light">BONS PLANS</Button>{' '}
            <Button variant="link">Link</Button>
          </>
      
      
      
      <h1 className='class'>Produits Pour Animaux</h1>
      <div className='rafpets'><img src=" https://scontent.ftun10-1.fna.fbcdn.net/v/t39.30808-6/301382704_550217363570783_7804836825405236399_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=01Tv_iYuL_sAX8HeKZd&_nc_ht=scontent.ftun10-1.fna&oh=00_AfAWus8Z3aGgO_oB_yAlnY-jwBiv3GDTTdcHYC-FSe--Lw&oe=650D58EA"/></div>
      
      <div className='carte'>
        <Card style={{ width: '22rem' }}>
          <Card.Img variant="top" src="https://all-for-pets.tn/site/images/CHIENS/Selleries/Harnais/reste-04-Personnalis.png" />
          <Card.Body>
            <Card.Title>Julius k9 Harnais IDC-POWER Camouflage</Card.Title>
            <Card.Text className="   ">price :</Card.Text>
              <p>120</p>
              <div className='counter'>
                <i className="plus">+</i>
                <p className="qte">0</p>
                <i className="minus">-</i>
              
              </div>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>Design innovant</ListGroup.Item>
            <ListGroup.Item>Réflaichissant dans l'obscurité</ListGroup.Item>
            <ListGroup.Item>Tissu extérieur hydrofuge</ListGroup.Item>
            <ListGroup.Item>Rembourrage intérieur confortable </ListGroup.Item>
          </ListGroup>
          <Card.Body>
            
          </Card.Body>
        </Card> 
        
        <Card style={{ width: '22rem' }}>
          <Card.Img variant="top" src="https://all-for-pets.tn/site/images/CHIENS/Selleries/Laisses/vvv-01.png" />
          <Card.Body>
            <Card.Title>Felican Cuir Laisse d'exposition</Card.Title>
            <Card.Text className="   ">price :</Card.Text>
            <p>70</p>
            <div className='counter'>
              <i className="plus">+</i>
              <p className="qte">0</p>
              <i className="minus">-</i>
              
            </div>
          </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>laisse d'exposition 100% cuir</ListGroup.Item>
              <ListGroup.Item>Fabrication très soignée</ListGroup.Item>
              <ListGroup.Item>Taille disponible : 200 cm </ListGroup.Item>
              <ListGroup.Item>couleurs disponibles noir et beige</ListGroup.Item>
            </ListGroup>
          <Card.Body>
          
          </Card.Body>
        </Card>
        
        <Card style={{ width: '22rem' }}>
          <Card.Img variant="top" src="https://all-for-pets.tn/site/images/CHIENS/Selleries/Colliers/ffffff-11.png" />
          <Card.Body>
            <Card.Title>Felican Muselière cuir noir</Card.Title>
            <Card.Text className="   ">price :</Card.Text>
              <p>55</p>
              <div className='counter'>
                <i className="plus">+</i>
                <p className="qte">0</p>
                <i className="minus">-</i>
              
                </div>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>Design innovant 100% <br/>cuir</ListGroup.Item>
            <ListGroup.Item>fabrication très soignée</ListGroup.Item>
            <ListGroup.Item>Taille disponible : L </ListGroup.Item>
            <ListGroup.Item>Couleur disponible noir et beige</ListGroup.Item>
          </ListGroup>
          <Card.Body>
            
          </Card.Body>
        </Card>
        </div> 
      </div> 
        </div>
      </div> 
    </div>
  );
}

export default App;
