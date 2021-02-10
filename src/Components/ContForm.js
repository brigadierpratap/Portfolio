import React from "react";

export default class ContForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      status: "",
      emailVal: "true",
      formData: {
        firstName: "",
        lastName: "",
        email: "",
        message: "",
      },
    };
    this.submitForm = this.submitForm.bind(this);
  }
  handleChange = (e) => {
    if (e.target.name === "email") {
      var reg = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
      if (reg.test(e.target.value)) {
        this.setState({ emailVal: true });
      } else {
        this.setState({ emailVal: false });
      }
    }
    this.setState((prevState) => ({
      formData: { ...prevState.formData, [e.target.name]: e.target.value },
    }));
  };
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
            <input
              type="text"
              class="form-control"
              placeholder="First name"
              name="firstName"
              onChange={this.handleChange}
              required
            />
          </div>
          <div class="col">
            <input
              type="text"
              class="form-control"
              placeholder="Last name"
              name="lastName"
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div class="form-row w-75 mx-auto my-2">
          <div class="col">
            <input
              type="text"
              class={`form-control ${
                this.state.emailVal ? "" : "border-danger"
              }`}
              placeholder="Your Email"
              name="email"
              onChange={this.handleChange}
              required
            />
          </div>
        </div>
        <div class="form-row w-75 mx-auto my-2">
          <div class="col">
            <textarea
              class="form-control"
              rows="3"
              placeholder="Type Your Message here.."
              name="message"
              onChange={this.handleChange}
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
    const data = this.state.formData;
    console.log(data);
    fetch(form.action, {
      method: form.method,
      body: JSON.stringify({
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        message: data.message,
      }),
      headers: {
        "Content-type": "application/json",
        Accept: "*/*",
      },
    })
      .then((res) => console.log(res))
      .catch((err) => this.setState({ status: "ERROR" }));
  }
}
