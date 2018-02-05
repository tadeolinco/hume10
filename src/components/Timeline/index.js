import React, { Component } from 'react';
import VisibilitySensor from 'react-visibility-sensor';

import Box from '../Box';

class Timeline extends Component {
  state = {
    isVisible: {
      '0': false,
      '4': false,
      '7': false,
      '13': false,
      '16': false,
      '17': false,
      '19': false,
      '21': false,
      '22': false,
      '25': false,
      '27': false,
      '29': false,
      '31': false,
      '40': false,
      '50': false,
      '55': false,
      '70': false,
    },
  };

  render() {
    let age = Number.POSITIVE_INFINITY;
    for (let key in this.state.isVisible) {
      if (this.state.isVisible[key] && +key < age) {
        console.log(key);
        age = +key;
      }
    }

    const selectDisplayPicture = age => {
      switch (age) {
        case 0:
          return 'https://www.babycenter.com/ims/2016/10/iStock_43693432_4x3.jpg.pagespeed.ce.DHn6qMrA6C.jpg';
        case 4:
          return 'http://www.victoriaparkchildcarecentre.com/wp-content/uploads/2016/08/toddler-info-page-556x400.jpg';
        case 7:
          return 'https://talkupaps.files.wordpress.com/2012/09/screen-shot-2012-08-31-at-8-44-15-am4.png';
        case 13:
          return 'http://static2.businessinsider.com/image/51cb207469beddcb3d000005/the-25-most-impressive-kids-graduating-from-high-school-this-year.jpg';
        case 16:
          return 'https://pre00.deviantart.net/db76/th/pre/i/2013/045/e/7/steve_solo_pose_for_prom__blue_isolated_by_evld-d5uznmb.jpg';
        case 17:
          return 'https://bloximages.chicago2.vip.townnews.com/pressofatlanticcity.com/content/tncms/assets/v3/editorial/4/2f/42fca602-75cb-592a-9a51-e04a3f78967c/5764883e7d7aa.image.jpg?resize=1200%2C743';
        case 19:
          return 'https://static.independent.co.uk/s3fs-public/styles/article_small/public/thumbnails/image/2011/12/23/22/IA24-11-tidings-main.jpg';
        case 21:
          return 'https://www.griffith.ie/sites/default/files/storage/content_header_normal/110515-Mindfulness-study-tips-for-leaving-certificate-students_0.jpg?itok=cNJD0A5X';
        case 22:
          return 'https://cdn-images-1.medium.com/max/1600/1*OaTv5iPHsTDWEvAu7aBaIw.jpeg';
        case 25:
          return 'https://3c1703fe8d.site.internapcdn.net/newman/gfx/news/hires/2014/studydiffere.jpg';
        case 27:
          return 'http://media.beliefnet.com/~/media/photos-with-attribution/love-and-family/galleries/10-things-every-husband-wants-to-hear/husbandhear6.jpg';
        case 29:
          return 'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/articles/health_tools/life_after_baby_slideshow/getty_rf_photo_of_parents_kissing_infant.jpg';
        case 31:
          return 'http://ofthebox.org/wp-content/uploads/2018/01/the-14-craziest-things-elon-musk-believes-right-now.jpg';
        case 40:
          return 'https://pbs.twimg.com/profile_images/378800000661871759/78d081081904390ac720a8741724f17a.jpeg';
        case 50:
          return 'http://static1.businessinsider.com/image/589509cd6e09a8aa238b4ef5-480/early-retirement.jpg';
        case 55:
          return 'http://www.stockpholio.net/index/view/image/435347929_8.jpg';
        case 70:
          return 'https://media.npr.org/assets/img/2016/08/09/playing-dead_wide-c07e01dd38e9e71f838e63d1f812a1dc4589e250.jpg?s=1400';
        default:
          return '';
      }
    };

    const displayPictureUrl = selectDisplayPicture(age);

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

    const DisplayPictureMini = ({ age }) => (
      <div
        style={{
          width: '100%',
          height: '100%',
          backgroundImage: `url(${selectDisplayPicture(age)})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: '50% 50%',
          borderRadius: 50,
        }}
      />
    );

    const Post = ({ title, url, age }) => (
      <Box width={600} height={500} padding={20}>
        <div>
          <div style={{ width: 50, height: 50, float: 'left' }}>
            <DisplayPictureMini age={age} />
          </div>
          <h3 style={{ padding: '10px 0 0 70px' }}>Sam Bautista {title}</h3>
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
              <Picture url={displayPictureUrl} />
            </Box>
            <div style={{ textAlign: 'center', marginTop: 10 }}>
              <h3 style={{ margin: 0 }}>Sam Bautista</h3>
              <h4 style={{ margin: 0 }}>Age: {age}</h4>
            </div>
          </Box>
        </div>

        <div
          style={{ display: 'flex', flexDirection: 'column', marginLeft: 270 }}
        >
          {/* Age 0 */}
          <Post
            age={0}
            title="was born!"
            url="http://www.mothering.com/articles/wp-content/uploads/2016/08/baby-crying.jpg"
          />
          <div style={{ position: 'relative', top: -50 }}>
            <VisibilitySensor
              onChange={isVisible => {
                this.setState({
                  isVisible: { ...this.state.isVisible, '0': isVisible },
                });
              }}
            />
          </div>
          {/* Age 4 */}
          <Post
            age={4}
            title="is going to his first day of school!"
            url="http://pdopreschool.com/wp-content/uploads/2014/08/PDO-preschool.png"
          />
          <div style={{ position: 'relative', top: -50 }}>
            <VisibilitySensor
              onChange={isVisible => {
                this.setState({
                  isVisible: { ...this.state.isVisible, '4': isVisible },
                });
              }}
            />
          </div>
          <Post
            age={7}
            title="is going up to the 1st grade!"
            url="http://www.stevenscountytimes.com/sites/default/files/styles/16x9_620/public/fieldimages/19/0421/foundationballsweb.gif?itok=yFoJSrST11"
          />
          <div style={{ position: 'relative', top: -50 }}>
            <VisibilitySensor
              onChange={isVisible => {
                this.setState({
                  isVisible: { ...this.state.isVisible, '7': isVisible },
                });
              }}
            />
          </div>
          <Post
            age={13}
            title="now in highschool!"
            url="https://cdn1.goabroad.com/images/program_content/9-people-you-wont-meet-on-your-high-school-study-abroad-program-1-1471512020.png"
          />
          <div style={{ position: 'relative', top: -50 }}>
            <VisibilitySensor
              onChange={isVisible => {
                this.setState({
                  isVisible: { ...this.state.isVisible, '13': isVisible },
                });
              }}
            />
          </div>
          <Post
            age={16}
            title="went to prom!"
            url="http://www.trbimg.com/img-59186067/turbine/ph-ag-prom-c-milton-wright-20170514-pg"
          />
          <div style={{ position: 'relative', top: -50 }}>
            <VisibilitySensor
              onChange={isVisible => {
                this.setState({
                  isVisible: { ...this.state.isVisible, '16': isVisible },
                });
              }}
            />
          </div>
          <Post
            age={17}
            title="just graduated highschool!"
            url="https://az616578.vo.msecnd.net/files/2016/04/10/6359585098784406811765748865_37ttx4apptme0vsoftewyskc852rwlm.png"
          />
          <div style={{ position: 'relative', top: -50 }}>
            <VisibilitySensor
              onChange={isVisible => {
                this.setState({
                  isVisible: { ...this.state.isVisible, '17': isVisible },
                });
              }}
            />
          </div>
          <Post
            age={19}
            title="am sooooo druuuuinnk!"
            url="http://static1.businessinsider.com/image/56707b2f2340f8e0008b5d01-960/drunk-drinking.jpg"
          />
          <div style={{ position: 'relative', top: -50 }}>
            <VisibilitySensor
              onChange={isVisible => {
                this.setState({
                  isVisible: { ...this.state.isVisible, '19': isVisible },
                });
              }}
            />
          </div>
          <Post
            age={21}
            title="is finishing his thesis."
            url="https://i2.wp.com/s3-ap-southeast-1.amazonaws.com/magazine.job-like.com/magazine/wp-content/uploads/2017/03/01011859/Thesis-making.jpg?fit=700%2C420&ssl=1"
          />
          <div style={{ position: 'relative', top: -50 }}>
            <VisibilitySensor
              onChange={isVisible => {
                this.setState({
                  isVisible: { ...this.state.isVisible, '21': isVisible },
                });
              }}
            />
          </div>{' '}
          <Post
            age={22}
            title="just graduated college! Now what?"
            url="http://collectivelifestyle.com/wp-content/uploads/2014/03/Unemployed-College-Grads.jpg"
          />
          <div style={{ position: 'relative', top: -50 }}>
            <VisibilitySensor
              onChange={isVisible => {
                this.setState({
                  isVisible: { ...this.state.isVisible, '22': isVisible },
                });
              }}
            />
          </div>
          <Post
            age={25}
            title="is now working at UPLB ICS."
            url="https://www.tes.com/sites/default/files/computer%20class.jpg"
          />
          <div style={{ position: 'relative', top: -50 }}>
            <VisibilitySensor
              onChange={isVisible => {
                this.setState({
                  isVisible: { ...this.state.isVisible, '25': isVisible },
                });
              }}
            />
          </div>
          <Post
            age={27}
            title="just got married!"
            url="https://gossipweddings.com/wp-content/uploads/2017/07/wedding-vows-ceremony-436d776651f3bff249f4c715c70fcc63.jpg"
          />
          <div style={{ position: 'relative', top: -50 }}>
            <VisibilitySensor
              onChange={isVisible => {
                this.setState({
                  isVisible: { ...this.state.isVisible, '27': isVisible },
                });
              }}
            />
          </div>
          <Post
            age={29}
            title="is now a father!"
            url="https://resize.indiatvnews.com/en/resize/newbucket/715_-/2016/10/parents-with-baby-1477312740.jpg"
          />
          <div style={{ position: 'relative', top: -50 }}>
            <VisibilitySensor
              onChange={isVisible => {
                this.setState({
                  isVisible: { ...this.state.isVisible, '29': isVisible },
                });
              }}
            />
          </div>
          <Post
            age={31}
            title="started his own company. We're hiring!"
            url="https://d3o1wlpkmt4nt9.cloudfront.net/wp-content/uploads/2017/06/29112118/company-culture-min.jpg"
          />
          <div style={{ position: 'relative', top: -50 }}>
            <VisibilitySensor
              onChange={isVisible => {
                this.setState({
                  isVisible: { ...this.state.isVisible, '31': isVisible },
                });
              }}
            />
          </div>
          <Post
            age={40}
            title="is bringing home the bacon."
            url="http://wire.kapitall.com/wp-content/image-import/Cash-Advance-430x323.jpg"
          />
          <div style={{ position: 'relative', top: -50 }}>
            <VisibilitySensor
              onChange={isVisible => {
                this.setState({
                  isVisible: { ...this.state.isVisible, '40': isVisible },
                });
              }}
            />
          </div>
          <Post
            age={50}
            title="is retiring early."
            url="http://static1.businessinsider.com/image/589509cd6e09a8aa238b4ef5-480/early-retirement.jpg"
          />
          <div style={{ position: 'relative', top: -50 }}>
            <VisibilitySensor
              onChange={isVisible => {
                this.setState({
                  isVisible: { ...this.state.isVisible, '50': isVisible },
                });
              }}
            />
          </div>
          <Post
            age={55}
            title="is in Japan! Where to next?"
            url="http://japandailypress.com/wp-content/uploads/2013/07/Japan_tourism_rebounding_faster_than_expected-topImage.jpg"
          />
          <div style={{ position: 'relative', top: -50 }}>
            <VisibilitySensor
              onChange={isVisible => {
                this.setState({
                  isVisible: { ...this.state.isVisible, '55': isVisible },
                });
              }}
            />
          </div>
          <Post
            age={70}
            title="is dead."
            url="http://www.recallmurkowski.com/wp-content/uploads/2017/05/13-6.jpg"
          />
          <div style={{ position: 'relative', top: -50 }}>
            <VisibilitySensor
              onChange={isVisible => {
                this.setState({
                  isVisible: { ...this.state.isVisible, '70': isVisible },
                });
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Timeline;
