import React, { Component } from 'react';
import VisibilitySensor from 'react-visibility-sensor';

import Box from '../Box';

class Timeline extends Component {
  state = {
    displayPictureUrl:
      'https://www.babycenter.com/ims/2016/10/iStock_43693432_4x3.jpg.pagespeed.ce.DHn6qMrA6C.jpg',
    age: 0,
  };

  componentDidMount() {
    window.addEventListener('scroll', () => {
      console.log(window.scrollY);
    });
  }

  render() {
    const Picture = ({ url }) => (
      <div
        style={{
          width: '100%',
          height: '100%',
          backgroundImage: `url(${url})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: '50% 50%',
        }}
      />
    );

    const displayPictureMini = (
      <div
        style={{
          width: '100%',
          height: '100%',
          backgroundImage: `url(${this.state.displayPictureUrl})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: '50% 50%',
          borderRadius: 50,
        }}
      />
    );

    const logosURL =
      'https://static.xx.fbcdn.net/rsrc.php/v3/yi/r/wM6Aaq2QRfi.png';

    const educationLogo = (
      <div
        style={{
          backgroundImage: `url(${logosURL})`,
          backgroundSize: 'auto',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: '-34px -218px',
          display: 'inline-block',
          height: 16,
          width: 16,
        }}
      />
    );

    const Post = ({ title, url }) => (
      <Box width={600} height={500} padding={20}>
        <div style={{ display: 'flex' }}>
          <div style={{ width: 50, height: 50 }}>{displayPictureMini}</div>{' '}
          <h3 style={{ padding: '10px 0 0 10px' }}>Sam Bautista {title}</h3>
        </div>
        <div style={{ width: 560, height: 375 }}>
          <Picture url={url} />
        </div>
      </Box>
    );

    return (
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            position: 'fixed',
          }}
        >
          <Box width={250} height={270}>
            <Box width={240} height={190} margin={0}>
              <Picture url={this.state.displayPictureUrl} />
            </Box>
            <div style={{ textAlign: 'center', marginTop: 10 }}>
              <h3 style={{ margin: 0 }}>Sam Bautista</h3>
              <h4 style={{ margin: 0 }}>Age: {this.state.age}</h4>
            </div>
          </Box>
        </div>

        <div
          style={{ display: 'flex', flexDirection: 'column', marginLeft: 270 }}
        >
          <Post
            title="was born!"
            url="http://www.mothering.com/articles/wp-content/uploads/2016/08/baby-crying.jpg"
          />
          <Post
            title="is going to his first day of school!"
            url="http://pdopreschool.com/wp-content/uploads/2014/08/PDO-preschool.png"
          />
        </div>
      </div>
    );
  }
}

export default Timeline;
