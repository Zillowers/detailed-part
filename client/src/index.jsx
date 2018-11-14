/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import DetailHead from './components/DetailHead.jsx';
import FollowingContents from './components/FollowingContents.jsx';
import Aside from './components/Aside.jsx';
import '../dist/style.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    	data: null,
      isCal: false,
      overlay: false,
      opacityBool: false,
      opacity: 0,
      tooltip: false,
      shrinkBody: true,
      shrinkSection: true,
    };

    this.showCal = this.showCal.bind(this);
    this.bodyShrinker = this.bodyShrinker.bind(this);
    this.sectionShrinker = this.sectionShrinker.bind(this);
  }
  
  componentDidMount(){
    // let idx = Math.floor(Math.random() * (101 - 1)) + 1;
    // this.getOne(idx);
    this.getOne(window.location.pathname);
  }

  getOne(path){
    // path = '/listings/homes/:index/'
    fetch(`${path}detail-information`)
      .then(res => res.json())
      .then(json => {
        this.setState({
          data: json
        });
      });
  }

  showCal(){
    this.setState({
      isCal : !this.state.isCal,
      overlay: !this.state.overlay,
      opacityBool: !this.state.opacityBool
    }, () => this.opacity())
  }

  opacity(){
    if(this.state.opacityBool){
      this.setState({
        opacity: 0.1
      })
    } else {
      this.setState({
        opacity: 0
      })
    }
  }

  bodyShrinker(){
    this.setState({
      shrinkBody: !this.state.shrinkBody
    })
  }

  sectionShrinker(){
    this.setState({
      shrinkSection: !this.state.shrinkSection
    })
  }

  render(){
    let style = {
      opacity: this.state.opacity
    }
		return(
			<div>
          {
           this.state.isCal ? <div className="overlay" onClick={this.showCal} style={style}></div> : ''
          }
          <main className="zlw-layout-lg zlw-layout-center">
              {
                !this.state.data ? <div>loading...</div> :
                  <div>
                    <section className= "main-col zlw-lg-2-3 zlw-sm-2-2">
                      <div className= {this.state.shrinkSection ? 'section-shrink': ''}>
                        <DetailHead 
                          data = {this.state.data} 
                          handleClick = {this.showCal}
                          isCal = {this.state.isCal}/>
                        <div className="main-contents">
                          <div className={"detail body zlw-lg-2-3 zlw-sm-2-2 " + (this.state.shrinkBody ? 'body-shrink': '')} >
                              {this.state.data.body}
                          </div>
                          {
                            this.state.shrinkBody ? 
                            <div className="more-less" onClick={this.bodyShrinker}>More <i className="fas fa-angle-down"></i></div> : 
                            <div className="more-less" onClick={this.bodyShrinker}>Less <i className="fas fa-angle-up"></i></div>
                          }
                        </div>
                        <FollowingContents data = {this.state.data}/>
                      </div>
                      {
                        this.state.shrinkSection ? 
                        <div>
                          <div className="section-shrink-hider"></div>
                          <div className="more-less" onClick={this.sectionShrinker}>See More Facts and Features <i className="fas fa-angle-down"></i></div> 
                        </div>: 
                        <div className="more-less" onClick={this.sectionShrinker}>See Fewer Facts and Features <i className="fas fa-angle-up"></i></div>
                      }
                    </section>
                    <section className="side-bar zlw-sm-0-2 zlw-lg-1-3">
                      <Aside data = {this.state.data}/>
                    </section>
                  </div>
              }
          </main>
      </div>
		)
	}
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);