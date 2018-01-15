import * as React from 'react';

class Login extends React.Component<{}, {email: string, password: string}> {
    constructor(props: {}) {
        super(props);
        this.state = {
            email: '',
            password: '',
        };
    }

    login = async () => {
      const { email, password } = this.state;
      fetch('http://0.0.0.0:8080/login', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      }).then( v => console.log(v) );
    }

    render() {
        return (
            <div>
                <h2>Login</h2>
                <input
                    id="email"
                    type="text"
                    value={this.state.email}
                    placeholder="Email"
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
                <button onClick={() => this.login()}>Login</button>
            </div>
        );
    }
}

export default Login;