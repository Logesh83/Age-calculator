import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Col, Row, Card, CardHeader } from 'react-bootstrap';
import imgbg from '../image/imgbg.jpg';

function Age() {
  const [dob, setDob] = useState("");
  const [age, setAge] = useState({ years: 0, months: 0, days: 0 });

  const handleInputChange = (e) => {
    setDob(e.target.value);
  };

  const calculateAge = () => {
    const birthday = new Date(dob);
    const today = new Date();

    let years = today.getFullYear() - birthday.getFullYear();
    let months = today.getMonth() - birthday.getMonth();
    let days = today.getDate() - birthday.getDate();

    if (days < 0) {
      months -= 1;
      days += 31;
    }
    if (months < 0) {
      years -= 1;
      months += 12;
    }
    setAge({ years, months, days });
  };

  return (
    <div>
      <img className='bp' src={imgbg} />

      <Row>
        <Col xs={12} md={4}></Col>
        <Col xs={12} md={4}>
        <div className='txt'> 
        <Row>  
        <Col md={4}></Col>
        <Col md={4}>
        <Card className='cardedit'>
              <CardHeader className='card1'><h1 style={{ fontFamily: "-moz-initial", fontWeight: "bolder", textAlign:"center"}}>Age Calculator</h1></CardHeader>
              <Card.Body>
                <Card.Title style={{ fontFamily: "cursive", fontSize: "20px" }}>You can find your age</Card.Title><br />
                <Card.Text style={{ fontFamily: "cursive", fontSize: "14px" }}>
                  Enter your Date Of Birth
                  <input type='date' onChange={handleInputChange} value={dob} style={{ marginLeft: "4%",textAlign:"center", fontFamily:"-moz-initial" }}></input>
                </Card.Text>
                <Button onClick={calculateAge} className='but1' style={{ fontFamily: "cursive" }} variant="dark">Find Age</Button>
                <div style={{ marginTop: "5%", fontFamily: "cursive", fontSize:"20px" }}><p>Age: {age.years} Years, {age.months} Months, {age.days} Days</p></div>
              </Card.Body>
            </Card>          
          </Col> 
        <Col md={4}></Col>       
            
          </Row> 
          </div>
        </Col>
        <Col xs={12} md={4}></Col>
      
      </Row>
  
    </div>
  );
}

export default Age;
