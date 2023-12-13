
import './App.css';

function App() {
  return (
    <div className='log_main'>
      <img className='car_img' src="https://spn-sta.spinny.com/spinny-web/static-images/assets/images/pages/SellCar/components/HowItsWork/assets/hiw-2.png?w=500" alt="car.png"/>
      <h2 className='head'>Login Your Account</h2>
      <form>
        <input className='inpt1' type='text' placeholder='Email Id'></input>
        <p></p>
        <input className='inpt1' type='password' placeholder='Password'></input>
        <p></p>
        <a href='http://192.168.183.1:3000'><button className='btn1' type='button'>Login</button></a>
        <p></p>
        <a className='link' href="www.google.com">Forgot password?</a>
      </form>
    </div>
  );
}

export default App;
