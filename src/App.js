
function App() {
  return (
    <div className="wrapper clear">
      <header className="d-flex justify-between	alight-center p-40">
        <div className="d-flex align-center">
        <img width={40} height={40}  src="/img/logo.png"alt="logo" />
        <div> 
          <h3 className="text-uppercase">React Sneakers</h3>
          
          <p className="opacity-5">Магазин найкращих кросівок</p></div>
         
        </div>

        <div>
          <ul className="d-flex">
            <li className="mr-30">
            <img wight={18} height={18} src="/img/cart.svg" alt="cart" />
              <span>1205 грн.</span>
            </li>
            <li>
            <img wight={20} height={20} src="/img/user.svg" alt="user"/>
            
            </li>
          </ul>
        </div>
      </header>
      <div className="content p-40"> 
      <h1 className="mb-40">Всі кросівки</h1>
      
 

<div className="d-flex">

       
<div className="card">
  <img wight={133} height={112} src="/img/sneakers/1.jpg" alt="Sneakers" ></img>
  <h5>Чоловічі кросівки Nike Air Max 270</h5>
  <div className="d-flex justify-between align-center">
    <div className="d-flex flex-column ">
      <span> Ціна: </span>
      <b>1299 грн.</b>
    </div>
    <button className="button">
      <img  wight={11} height={11} src="/img/plus.svg" alt="Plus"></img>
    </button>
  </div>
</div>



<div className="card">
  <img wight={133} height={112} src="/img/sneakers/2.jpg" alt="Sneakers" ></img>
  <h5>Чоловічі кросівки Nike Air Max 270</h5>
  <div className="d-flex justify-between align-center">
    <div className="d-flex flex-column ">
      <span> Ціна: </span>
      <b>1299 грн.</b>
    </div>
    <button className="button">
      <img  wight={11} height={11} src="/img/plus.svg" alt="Plus"></img>
    </button>
  </div>
</div>

<div className="card">
  <img wight={133} height={112} src="/img/sneakers/3.jpg" alt="Sneakers" ></img>
  <h5>Чоловічі кросівки Nike Air Max 270</h5>
  <div className="d-flex justify-between align-center">
    <div className="d-flex flex-column ">
      <span> Ціна: </span>
      <b>1299 грн.</b>
    </div>
    <button className="button">
      <img  wight={11} height={11} src="/img/plus.svg" alt="Plus"></img>
    </button>
  </div>
</div>

<div className="card">
  <img wight={133} height={112} src="/img/sneakers/4.jpg" alt="Sneakers" ></img>
  <h5>Чоловічі кросівки Nike Air Max 270</h5>
  <div className="d-flex justify-between align-center">
    <div className="d-flex flex-column ">
      <span> Ціна: </span>
      <b>1299 грн.</b>
    </div>
    <button className="button">
      <img  wight={11} height={11} src="/img/plus.svg" alt="Plus"></img>
    </button>
  </div>
</div>
</div>

      </div>
    </div>
  );
}



export default App;
