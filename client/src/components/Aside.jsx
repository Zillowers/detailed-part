import React from 'react';
import ReactDOM from 'react-dom';
import Modal from './Modal.jsx';
import axios from 'axios';


class Aside extends React.Component {
	constructor(props) {
    super(props);
		this.state = {
			nameBool: true,
			phoneBool: true,
			mailBool: true,
			name: '',
			phone: '',
			mail: '',
			starpercent: 10,
			starRate: 1,
			sendReqOk: false,
			sendReqOkData: ''
		}
		this.inputErrorChecker = this.inputErrorChecker.bind(this);
		this.inputRouter = this.inputRouter.bind(this);
		this.sendBuyerInfo = this.sendBuyerInfo.bind(this);
		this.closeHandler = this.closeHandler.bind(this);
	}

	componentDidMount(){
		let number = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
		let rate = Math.floor(number/20);
		this.setState({
			starpercent: number,
			starRate: rate
		})
	}

	inputRouter(e){
		let name = e.target.name;
		let val = e.target.value;
		if(name === 'name') this.setState({ name: val }, () => this.inputErrorChecker());
		if(name === 'phone') this.setState({ phone: val }, () => this.inputErrorChecker());
		if(name === 'mail') this.setState({ mail: val }, () => this.inputErrorChecker());
	}

	inputErrorChecker(){
		if(this.state.name.length < 3){
			this.setState({nameBool: false});
		} else {
			this.setState({nameBool: true});
		}
		if(this.state.phone.length < 10 || !!isNaN(Number(this.state.phone))){
			this.setState({phoneBool: false});
		} else {
			this.setState({phoneBool: true});
		}
		if(this.state.mail.length < 5 || !this.state.mail.includes('@') || !this.state.mail.includes('.')){
			this.setState({mailBool: false});
		} else {
			this.setState({mailBool: true});
		}
	}

	getNow(now){
	  let stack = [];
	  for(let i = 0; i < 5; i++){
	    stack.push(now.split(' ')[i]);
	  }
	  return stack.join(' ');
	}

	sendBuyerInfo(e){
		e.preventDefault();
		let data = {
			name: this.state.name,
			phone: this.state.phone,
			mail: this.state.mail,
			timeStamp: this.getNow(Date(Date.now()))
		}
		if(!this.state.nameBool || !this.state.phoneBool || !this.state.mailBool){
			alert('Wrong Format!')
		} else {
			axios.post('/listings/user-request', {data})
				.then(res => {
					this.sendReqOkData(res.data);
				})
		}
	}
	closeHandler(){
		this.setState({
			sendReqOk: false,
			sendReqOkData: ''
		})
	}
	sendReqOkData(data){
		this.setState({
			sendReqOk: true,
			sendReqOkData: data
		})
	}
	render(){
		const defaultText = `I am interested in ${this.props.data.address}.`
		const starWidth = {
			width: `${this.state.starpercent}%`
		}
		return(
			<aside>
		    <article>
		      <div className="head">
		        <div className="title">contact agent</div>
		        <div className="agent-wrapper">
			        <div className="agent-info">
			          <div className="photo-wrapper">
			          	<img src="https://picsum.photos/200" alt="agent-pic" />
			          </div>
			          <div className="text-wrapper">
			            <span className="name">Susan</span>
			            <span className="star">
			            	<span className="star-wrapper">
				            	<span className="star-pack-empty"></span>
				            	<span className="star-pack" style={starWidth}></span>
			            	</span>
			            	(
			            	<span className="star-number">{this.state.starRate}</span>
			              )
			            </span>
			            <span className="recent-sale">
			              <span className="tag">0</span> Recent sale
			            </span>
			            <div className="company-name">
			              chase international
			            </div>
			            <div className="phone">
			              (775) 588-6130
			            </div>
			          </div>
			        </div>
			        <div className="agent-tag">
			          <span>agent</span>
			        </div>
		        </div>
		      </div>
		      <div className="body">
		        <form onSubmit={this.sendBuyerInfo}>
		        	<div className="input-wrapper">
			          <input type="text" className={!this.state.nameBool ? 'error-style' : ''} onChange={this.inputRouter} name="name" placeholder="Your Name"/>
			          	<i className="fas fa-user"></i>
			          {
			          	!this.state.nameBool ? <div className="error-msg">Please enter your name.</div> : ''
			          }
							</div>
		          <div className="input-wrapper">
			          <input type="text" className={!this.state.phoneBool ? 'error-style' : ''} onChange={this.inputRouter} name="phone" placeholder="Phone"/>
			          	<i className="fas fa-phone"></i>
			          {
			          	!this.state.phoneBool ? <div className="error-msg">Please enter a valid phone number, beginning with + for international numbers.</div> : ''
			          }
		          </div>
		          <div className="input-wrapper">
			          <input type="text" className={!this.state.mailBool ? 'error-style' : ''} onChange={this.inputRouter} name="mail" placeholder="Email"/>
			          	<i className="fas fa-envelope"></i>
			          {
			          	!this.state.mailBool ? <div className="error-msg">Please enter a valid email address.</div> : ''
			          }
		          </div>
		          	<textarea cols="30" rows="10" defaultValue={!this.props ? 'loading...' : defaultText}></textarea>		          
		        <div className="btn-container">
		          <input type="submit" value="Contact-Agent" />
		        </div>
		        </form>
		      </div>
		      <div className="footer">
		        <p>
		          By pressing Contact Agent, you agree that Zillow Group and <span>real estate professionals</span> may call/text you about your inquiry, which may involve use of automated means and prerecorded/artificial voices. You don't need to consent as a condition of buying any property, goods or services. Message/data rates may apply. You also agree to our <a href="#">Terms of Use</a>. Zillow does not endorse any real estate professionals.
		        </p>
		        <p className="last">
		        	<a href="#">Learn how to appear as the agent above</a>
		        </p>
		      </div>
		    </article>
		    {
		    	this.state.sendReqOk ? <Modal closeHandler = {this.closeHandler} data = {this.state.sendReqOkData}/> : ''
		    }
		  </aside>
		)
	}
}

export default Aside;