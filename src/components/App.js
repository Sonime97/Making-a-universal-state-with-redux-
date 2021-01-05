import React, {Component} from "react";
import { Navbar, Nav, NavDropdown,Table} from 'react-bootstrap';
import Select from 'react-select';
import { fetchInfo } from '../actions/actions_info.js'; 
 class App extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      selectedOption: ' '}
  }
  componentDidMount() {
    this.props.dispatch(fetchInfo());
  } 
  handleChange(selectedOption)  {
    this.setState(
      { selectedOption: selectedOption ? selectedOption : '' }
    );
  };
  render() {     
    console.log(this.props.info)
    const options = this.props.info.map(items => {
      return {value: items.name,  label: items.name}
    }) 
    
      
    return (
       
       <div>
         <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home">SONIME'S</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#features">HOME</Nav.Link>
      <Nav.Link href="#pricing">CONTACTS</Nav.Link>
      <Nav.Link href="#pricing">ABOUT</Nav.Link>
      <NavDropdown title="MENU" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
</Navbar>
  <div className="container">
      <div className="row">
        <div className="col-md-6">
          <Select
           value={this.state.selectedOption.value}
            onChange={this.handleChange.bind(this)}
           options={options}
          />
          </div>
          </div>
   </div>
   <br/>
   <br/>
   <br/>



<Table striped bordered hover>
  <thead>
    <tr>
      <th>NAME</th>
      <th>ADDRESS</th>
      <th>AGE</th>
      <th>COMPANY</th>
    </tr>
  </thead>
  <tbody>
  { this.props.info.map((items) => {
  
          if(this.state.selectedOption === "" || items.name === this.state.selectedOption.value) {
          return (<tr key={"item" + items.name}>
            <td>{items.name}</td>
            <td>{items.address}</td>
            <td>{items.age}</td>
            <td>{items.company}</td>
         </tr>)
         }
   
    
})}  
  
  </tbody>
</Table>
  
       </div>
       )
   }
 }

export default App