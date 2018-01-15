import * as React from 'react';

class Signup extends React.Component<{}, {email: string, password: string}> {
    constructor(props: {}) {
        super(props);
        this.state = {
            email: '',
            password: '',
        };
    }

    signup = async () => {
        // TODO: Signup code here.
    }

    render() {
        return (
            <div>
                <h2>Join Shortly</h2>
                <input
                    id="email"
                    type="text"
                    value={this.state.email}
                    placeholder="Email address"
                    onChange={e => this.setState({ email: e.target.value })}
                />
                <br />
                <input
                    id="password"
                    type="password"
                    value={this.state.password}
                    placeholder="Password"
                    onChange={e => this.setState({ password: e.target.value })}
                />
                <br />
                <button onClick={() => this.signup()}>Signup</button>
            </div>
        );
    }
}

export default Signup;