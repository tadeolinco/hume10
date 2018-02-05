import React, { Component } from 'react';

import Layout from './Layout';
import Timeline from './components/Timeline';

class App extends Component {
  render() {
    return (
      <Layout>
        <Timeline />
      </Layout>
    );
  }
}

export default App;
