import React, { Component } from "react";
import { connect } from "react-redux";

export class SignUp extends Component {
	constructor(props) {
		super(props);

		this.state = {
			email: "",
			name: "",
			password: "",
			password2: ""
		};
	}

	handleChanges = (ev, type) => {
		switch (type) {
			case "email":
				this.setState({ email: ev.target.value });
				break;
			case "pass1":
				this.setState({ password: ev.target.value });
				break;
			case "pass2":
				this.setState({ password2: ev.target.value });
				break;
			case "name":
				this.setState({ name: ev.target.value });
				break;
			default:
				break;
		}
	};

	render() {
		const { email, name, password, password2 } = this.props;
		return (
			<div>
				<form>
					<input type="Email" value={email} placeholder="pleas insert email" 
					onChange={(ev) => this.handleChanges(ev,'email')}/>
					<input type="Name" value={name} placeholder="pleas insert name" 
					onChange={(ev) => this.handleChanges(ev,'name')}/>
					<input
						type="password"
						value={password}
						placeholder="pleas insert password"
						onChange={(ev) => this.handleChanges(ev,'pass1')}
					/>
					<input
						type="password"
						value={password2}
						placeholder="repeat your password"
						onChange={(ev) => this.handleChanges(ev,'pass2')}
					/>
					<button onSubmit={() => {}}> </button>
				</form>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	email: state.userData.Email,
	name: state.userData.name,
	password: state.userData.password,
	password2: state.userData.password2
});

const mapDispatchToProps = {};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SignUp);
