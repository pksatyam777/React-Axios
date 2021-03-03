import React from "react";
import "./styles.css";
import sercureaxios from "./Axios.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: [],
      userinput: ""
    };
  }
  handlecal = () => {
    this.setState({
      username: [{ name: this.state.userinput }, ...this.state.username],
      userinput: ""
    });
  };
  componentDidMount() {
    sercureaxios
      .get("/users")
      .then((res) => res.data)
      .then((data) => {
        this.setState({ username: data });
      });
    sercureaxios({
      method: "post",
      url: "/users",
      data: { userinput: this.state.userinput }
    })
      .then((res) => {
        console.log("data has been posted sucessfully");
      })
      .catch((err) => {
        console.log("errorred");
      });
  }

  render() {
    return (
      <div className="hold">
        <input
          className="hold-txt"
          type="text"
          value={this.state.userinput}
          onChange={(evt) => {
            this.setState({ userinput: evt.target.value });
          }}
        />
        <input
          className="btn"
          type="submit"
          value="Add Name"
          onClick={() => {
            this.handlecal();
          }}
        />
        <div className="out1">
          <ul>
            {this.state.username.map((item) => (
              <li>{item.name} </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
export default App;
