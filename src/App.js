import React, { Component } from 'react';
import { PieChart } from 'react-easy-chart';

import Layout from './Layout';
import Timeline from './components/Timeline';

class App extends Component {
  state = {
    title: 'Facebook Timeline',
  };

  handleChangeTitle = title => {
    this.setState({ title });
  };

  render() {
    return (
      <Layout
        color="#4267b2"
        title={this.state.title}
        handleChangeTitle={this.handleChangeTitle}
      >
        {this.state.title === 'Facebook Timeline' ? (
          <Timeline />
        ) : (
          <div style={{ textAlign: 'center' }}>
            <h1>Weekday</h1>
            <PieChart
              size={960 / 1.5}
              labels
              data={[
                {
                  key: '12AM-7:30AM Sleeping',
                  value: 450,
                },
                {
                  key: '7:30AM-9AM Morning Prep',
                  value: 90,
                },
                {
                  key: '9AM-7PM School',
                  value: 600,
                },
                {
                  key: '7PM-9PM Org meetings',
                  value: 120,
                },
                {
                  key: '9PM-12AM Acads/Org matters',
                  value: 180,
                },
              ]}
            />
            <br />
            <h1>Weekend</h1>
            <PieChart
              size={960 / 1.5}
              labels
              data={[
                {
                  key: '12AM-12PM Sleeping',
                  value: 720,
                },
                {
                  key: '12PM-7PM Acads/Org Matters',
                  value: 420,
                },
                {
                  key: '7PM-12AM Play',
                  value: 300,
                },
              ]}
            />
          </div>
        )}
      </Layout>
    );
  }
}

export default App;
