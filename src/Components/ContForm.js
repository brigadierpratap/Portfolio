import React from "react";

export default class ContForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: "",
    };
  }

  render() {
    const { status } = this.state;
    return (
      <form
        onSubmit={this.submitForm}
        action="https://formspree.io/f/mwkwzzjl"
        method="POST"
      >
        <div class="form-row w-75 mx-auto my-2">
          <div class="col">
            <input type="text" class="form-control" placeholder="First name" />
          </div>
          <div class="col">
            <input type="text" class="form-control" placeholder="Last name" />
          </div>
        </div>
        <div class="form-row w-75 mx-auto my-2">
          <div class="col">
            <input type="text" class="form-control" placeholder="Your Email" />
          </div>
        </div>
        <div class="form-row w-75 mx-auto my-2">
          <div class="col">
            <textarea
              class="form-control"
              rows="3"
              placeholder="Type Your Message here.."
            ></textarea>
          </div>
        </div>

        {status === "SUCCESS" ? (
          <p>Thanks!</p>
        ) : (
          <button className="btn btn-danger" type="submit">
            Submit
          </button>
        )}
        {status === "ERROR" && <p>Ooops! There was an error.</p>}
      </form>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    console.log(data);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}
