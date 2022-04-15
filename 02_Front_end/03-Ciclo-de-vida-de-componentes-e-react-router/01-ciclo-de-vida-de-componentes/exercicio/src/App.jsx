import React from "react";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      user: null,
      idade: 0,
    };
  }

  componentDidMount() {
    this.setState(async () => {
      const url = "https://api.randomuser.me/ ";
      const response = await fetch(url);
      const dataJson = await response.json();
      // console.log(this)
      this.setState({
        user: dataJson.results[0],
        loading: false,
        idade: dataJson.results[0].dob.age,
      });
    });
  }

  shouldComponentUpdate(prevProps, prevState) {
    if (prevState.idade > 50) {
      console.log('é maior que 50')
      return false;
    }
    return true;
  }

  render() {
    const { loading, user } = this.state;
    // console.log(loading)
    return loading ? (
      <div>loading...</div>
    ) : (
      <div>
        <img src={user.picture.large} alt={user.name.first}></img>
        <p>{user.name.first}</p>
        <p>{user.email}</p>
        <p>{user.dob.age}</p>
      </div>
    );
  }
}

export default App;
