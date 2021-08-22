import React, { Component } from 'react';

export class SignLanguage extends Component {
  static displayName = SignLanguage.name;

  constructor(props) {
    super(props);
    this.state = { signLanguage: [], loading: true };
  }

  componentDidMount() {
    this.populateWeatherData();
  }

  static renderForecastsTable(signLanguage) {
    return (
      <table className='table table-striped' aria-labelledby="tabelLabel">
        <thead>
          <tr>
            <th>Id</th>
            <th>Word)</th>
            <th>WordVideoUrl</th>
          </tr>
        </thead>
        <tbody>
          {signLanguage.map(forecast =>
            <tr key={forecast.Id}>
              <td>{forecast.Id}</td>
              <td>{forecast.Word}</td>
              <td>{forecast.WordVideoUrl}</td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }

  render() {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
      : SignLanguage.renderForecastsTable(this.state.signLanguage);

    return (
      <div>
        <h1 id="tabelLabel" >Sign Language template</h1>
        <p>This component demonstrates fetching data from the server.</p>
        {contents}
      </div>
    );
  }

  async populateWeatherData() {
    const response = await fetch('signlanguage');
    const data = await response.json();
    this.setState({ signLanguage: data, loading: false });
  }
}
