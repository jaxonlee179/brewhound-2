import React from 'react';

import SearchResults from '../components/SearchResults';
import {Container, Row, Col, Form, Button} from 'react-bootstrap';

const Search= () =>{
    return(
        <>
        <section id="hero">
        <Container>
        <Form>
            <Row>
        <Col></Col>
          <Col>
            
              <Form.Control type="city" placeholder="City" className="form-control border-0 bg-light rounded rounded-pill"/>
              </Col>
              <Col>
              <Form.Control as="select" type="State" className="form-control border-0 bg-light rounded rounded-pill">
                    <option value="" disabled selected>Select a State</option>
                    <option value="Alabama">Alabama</option>
                    <option value="Alaska">Alaska</option>
                    <option value="Arizona">Arizona</option>
                    <option value="Arkansas">Arkansas</option>
                    <option value="California">California</option>
                    <option value="Colorado">Colorado</option>
                    <option value="Connecticut">Connecticut</option>
                    <option value="Delaware">Delaware</option>
                    <option value="District_of_Columbia">District Of Columbia</option>
                    <option value="Florida">Florida</option>
                    <option value="Georgia">Georgia</option>
                    <option value="Hawaii">Hawaii</option>
                    <option value="Idaho">Idaho</option>
                    <option value="Illinois">Illinois</option>
                    <option value="Indiana">Indiana</option>
                    <option value="Iowa">Iowa</option>
                    <option value="Kansas">Kansas</option>
                    <option value="Kentucky">Kentucky</option>
                    <option value="Louisiana">Louisiana</option>
                    <option value="Maine">Maine</option>
                    <option value="Maryland">Maryland</option>
                    <option value="Massachusetts">Massachusetts</option>
                    <option value="Michigan">Michigan</option>
                    <option value="Minnesota">Minnesota</option>
                    <option value="Mississippi">Mississippi</option>
                    <option value="Missouri">Missouri</option>
                    <option value="Montana">Montana</option>
                    <option value="Nebraska">Nebraska</option>
                    <option value="Nevada">Nevada</option>
                    <option value="New_Hampshire">New Hampshire</option>
                    <option value="New_Jersey">New Jersey</option>
                    <option value="New_Mexico">New Mexico</option>
                    <option value="New_York">New York</option>
                    <option value="North_Carolina">North Carolina</option>
                    <option value="North_Dakota">North Dakota</option>
                    <option value="Ohio">Ohio</option>
                    <option value="Oklahoma">Oklahoma</option>
                    <option value="Oregon">Oregon</option>
                    <option value="Pennsylvania">Pennsylvania</option>
                    <option value="Rhode_Island">Rhode Island</option>
                    <option value="South_Carolina">South Carolina</option>
                    <option value="South_Dakota">South Dakota</option>
                    <option value="Tennessee">Tennessee</option>
                    <option value="Texas">Texas</option>
                    <option value="Utah">Utah</option>
                    <option value="Vermont">Vermont</option>
                    <option value="Virginia">Virginia</option>
                    <option value="Washington">Washington</option>
                    <option value="West_virginia">West Virginia</option>
                    <option value="Wisconsin">Wisconsin</option>
                    <option value="Wyoming">Wyoming</option>
              </Form.Control>

             
          </Col>
          <Col>
          <div className="input-group-append">
                <Button id="button-addon1" type="submit" variant="outline-warning"><i className="fa fa-search"></i></Button>
              </div>
              </Col>
          </Row>
          </Form>
  

          
        <SearchResults></SearchResults>

        </Container>

        </section>



        </>
    )


};

export default Search;
