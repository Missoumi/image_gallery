import React, { Component } from "react";
import FormMessageDiv from "../styled_component/FormMessageDiv";
import Button from "../styled_component/Button";
import Label from "../styled_component/Label";

class FormMessage extends Component {
  state = {};
  render() {
    return (
      <FormMessageDiv className="col-6 p-5">
        <h5>Get in touch</h5>
        <form>
          <div className="row">
            <div className="form-group col-6">
              <Label for="name">Name</Label>
              <input
                className="form-control input_border"
                type="text"
                placeholder="name"
                name="name"
              />
            </div>
            <div className="form-group col-6">
              <Label for="email">Email</Label>
              <input
                className="form-control input_border"
                type="email"
                placeholder="email"
                name="email"
              />
            </div>
            <div className="form-group col-12 mt-3">
              <Label for="message">Message</Label>
              <textarea
                className="form-control h-75 input_border"
                placeholder="message"
                name="message"
              >
              </textarea>
              <Button className='btn mt-4'>Send Message</Button>
            </div>
          </div>
        </form>
      </FormMessageDiv>
    );
  }
}

export default FormMessage;
