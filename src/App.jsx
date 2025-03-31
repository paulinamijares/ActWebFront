import './App.css';

function App() {
  return (
    <div className="App">
      <h2>Login</h2>
      <form className="login-form">
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            placeholder="Enter username"
            value="user123"  // Static value
            readOnly
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            placeholder="Enter password"
            value="password123"  // Static value
            readOnly
          />
        </div>
        <div>
          <button type="submit" className="login-button">Login</button>
        </div>
      </form>
    </div>
  );
}

export default App;
