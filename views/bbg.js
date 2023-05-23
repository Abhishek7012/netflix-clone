<div className="login-body">
<div className="login-body__form">
  <h1>Sign In</h1>
  <div className="login-body__input mb-16">
    <input
      type="text"
      placeholder="Email or phone number"
      onChange={(e) => setEmail(e.target.value)} value={email} />
    
  </div>
  <div className="login-body__input">
    <input
      type="password"
      placeholder="Enter Password"
      onChange={(e) => setPassword(e.target.value)} value={password} />
  </div>
  <button className="login-body__submit-btn" onClick={handleLogin}>
    Sign In
  </button>
  <div className="login-body__options">
    <span>Remember me</span>
    <span className="login-body__need-help"><Link to="/forgotPassword">Forget Password</Link></span>
  </div>
  <div className="login-body__footer">
    <div className="login-body__fb">
      <img
        src="https://assets.nflxext.com/ffe/siteui/login/images/FB-f-Logo__blue_57.png"
        alt="fb"
      />
      <span>Login with Facebook</span>
    </div>
    <div className="login-body__new-to-nl">
      <span>New to Netflix ?</span>
      <span className='login-body__sign-up'><Link to="/signup">Sign up now</Link></span>
      {/* <span className="login-body__sign-up" >Sign up now.</span> */}
    </div>
    <div className="login-body__google_captcha">
      This page is protected by Google reCAPTCHA to ensure you're not a
      bot.
      <span className="login-body__learn-more">Learn more.</span>
    </div>
  </div>
</div>
</div>
);
}



export default LoginForm;