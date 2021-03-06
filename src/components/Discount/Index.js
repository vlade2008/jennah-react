import React from 'react';

import {Button,Table,Row,Col,Grid,Panel,Form,FormGroup,ControlLabel,FormControl,Glyphicon} from 'react-bootstrap'


class Index extends React.Component {
  render() {
    return (
      <Grid className="jennahWrap">
        <Row>
          <Col md={12}>
            <Panel header="Branch">
              <Row>
                <Col md={4}>
                  <FormGroup>
                    <FormControl
                      type="text"
                      placeholder="Enter Description" />
                  </FormGroup>
                  <FormGroup>
                    <FormControl componentClass="select" placeholder="select">
                      <option value="select">select</option>
                      <option value="percentage">percentage</option>
                      <option value="number">number</option>
                    </FormControl>
                  </FormGroup>
                  <Button >Save</Button>
                </Col>
                <Col md={8}>
                  <Table striped bordered condensed hover>
                    <thead>
                      <tr>
                        <th>Description Name</th>
                        <th>Code</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Mark</td>
                        <td>1</td>
                        <td>
                          <Button bsStyle="success"><Glyphicon glyph="pencil" /></Button>
                          <Button bsStyle="danger"><Glyphicon glyph="remove" /></Button>
                        </td>
                      </tr>
                      <tr>
                        <td>Jacob</td>
                        <td>2</td>
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
