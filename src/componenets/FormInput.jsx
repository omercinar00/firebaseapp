import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
const FormInput = ({ handlesubmit, values, setValues }) => {
  const changeHandler = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  return (
    <div className="w-25 ml-5  p-5">
      <div>
        <h2>
          <span>
            <a href="https://www.linkedin.com/in/omercinarr00/">
              <code>{"<Anka/>"}</code>
            </a>
          </span>{" "}
          Design
        </h2>
      </div>
      <h3>ADD CONTACT</h3>
      <Form onSubmit={handlesubmit}>
        <Form.Group className="mb-3">
          <Form.Control
            onChange={changeHandler}
            id="disabledTextInput"
            placeholder="Name"
            name="username"
            value={values.username}
            required
            type="text"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            onChange={changeHandler}
            id="disabledTextInput"
            placeholder="Phone"
            name="phone"
            value={values.phone}
            required
            type="tel"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Select
            onChange={changeHandler}
            name="gender"
            value={values.gender}
            id="disabledSelect"
          >
            <option value="Gender">Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </Form.Select>
        </Form.Group>

        <Button type="submit">Add</Button>
      </Form>
    </div>
  );
};

export default FormInput;
