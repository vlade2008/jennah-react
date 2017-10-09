import React from 'react';

import {Button,Table,Row,Col,Grid,Panel,Form,FormGroup,ControlLabel,FormControl,Glyphicon} from 'react-bootstrap'


class Index extends React.Component {
  render() {
    return (
      <Grid className="jennahWrap">
        <Row>
          <Col md={12}>
            <Panel header="Inventory">
              <Row>
                <Col md={4}>
                  <FormGroup>
                    <FormControl
                      type="text"
                      placeholder="Enter Name" />
                  </FormGroup>
                  <FormGroup>
                    <FormControl
                      type="text"
                      placeholder="Enter description" />
                  </FormGroup>
                  <FormGroup>
                    <FormControl
                      type="text"
                      placeholder="Enter Unit Price" />
                  </FormGroup>
                  <Button >Save</Button>
                </Col>
                <Col md={8}>
                  <Table striped bordered condensed hover>
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Unit Price</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Mark</td>
                        <td>Lorem ipsum dolor sit amet</td>
                        <td>12.00</td>
                        <td>
                          <Button bsStyle="success"><Glyphicon glyph="pencil" /></Button>
                          <Button bsStyle="danger"><Glyphicon glyph="remove" /></Button>
                        </td>
                      </tr>
                      <tr>
                        <td>Jacob</td>
                        <td>Lorem ipsum dolor sit amet</td>
                        <td>12.00</td>
                        <td>
                          <Button bsStyle="success"><Glyphicon glyph="pencil" /></Button>
                          <Button bsStyle="danger"><Glyphicon glyph="remove" /></Button>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </Col>
              </Row>
            </Panel>
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default Index;
