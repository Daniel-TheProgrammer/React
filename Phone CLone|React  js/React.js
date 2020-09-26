

//</script><script type="text/babel">
load.remove();
const {useState, useEffect,useRef} = React;
const {MemoryRouter:Router, Route, Link, Switch} = ReactRouterDOM;
const Time=({size})=>{
let date = new Date();
const [hr,setHr] =useState(date.getHours());
const [min,setMin] = useState(date.getMinutes());
 const [sec,setSec] = useState(date.getSeconds());    
  useEffect(() => {
    let cI= setInterval(() => {            
            date = new Date();
            setHr(date.getHours());
            setMin(date.getMinutes());
            setSec(date.getSeconds());
            
     }, 1000);
  return ()=>{
      clearInterval(cI);
  }      
  },[hr,min,sec]);
   return (
       <div 
       style={
           {
               display:"inline-block",
               margin:"0 10px"
           }
       }>
        <span 
        style={
            {
                fontSize:`${size}px`,
                fontWeight:"bolder"
            }
        }>        
{hr}:{min}{size>15&&`:${sec}`}{size>15&&((hr>12)?" PM":" AM")}    
        </span>
       </div>
   ) 
}
const Chrome=()=><iframe src="http://www.bing.com/"></iframe>
const Flipkart=()=><iframe src="https://www.flipkart.com/"></iframe>
const Glitch=()=><iframe src="https://glitch.com/"></iframe>
const Sololearn=()=> <iframe  src="https://sololearn.com"></iframe>  
const Calculator=()=>{
const [output,setOutput] = useState("");
const setText=(e)=>setOutput(output+e.target.innerHTML);
const giveOutput=()=>{
    try{   
    if(output){
       setOutput(eval(output))
    }else{                   
        alert("Cant calculate"); 
        setOutput("");
    }
    }catch(er){
        alert("Cant calculate");
        setOutput("");
    }
}
    return(
   <div className="calc_con">
      <input type="text" className="calc_result" value={output} disabled />
   <div className="btns">
       <div className="cols_1 col">
         <button  onClick={setText}>1</button>
         <button  onClick={setText}>2</button>
         <button  onClick={setText}>3</button>
       </div>
       <div className="cols_2 col">
        <button  onClick={setText}>4</button>
        <button  onClick={setText}>5</button>
         <button  onClick={setText}>6</button>
       </div>
       <div className="cols_3 col">       
        <button  onClick={setText}>7</button>
        <button  onClick={setText}>8</button>        
        <button  onClick={setText}>9</button>
        </div>
        <div className="cols_4 col">
        <button  onClick={setText}>0</button>
        <button  onClick={setText}>+</button>
        <button  onClick={setText}>-</button>
        
        </div>
        <div className="cols_5 col">
        <button  onClick={setText}>*</button>
        <button  onClick={setText}>/</button>
        <button onClick={()=>setOutput("")}>C</button>       
       </div>
      
       <div className="cols_6 col">
       <button  onClick={setText}>.</button>
       <button onClick={giveOutput}>=</button>
       </div>
       
     </div>        
        </div>
    )
}  
const Footer=()=>{
   return(
     <div className="footer">
     <span className="fa fa-square"></span>       
       <Link to="/" className="Link">         
    <span className="fa fa-circle"></span>      
      </Link>       
       <Link to="/" className="Link">               
  <span className="fa fa-angle-left"></span>       
       </Link>
       </div>
   ) 
}
const Header=()=>{
const [battery,setBattery]= useState(0);
useEffect(()=>{
  navigator.getBattery().then(res=>{
setBattery(Math.floor(res.level*100));    
})
});
    return(
      <div className="header">
     <span className="left-side">
     <Time 
     size={10}
     />
     <span className="fa fa-wifi"></span>
  <span className="net-speed">27.00 KB/S</span>
     </span>          
     <span className="battery">
      <span className="batteryLevel">{battery}</span>
   <span className="batteryLogo fa fa-battery"></span>
   </span>
      </div>  
    )
}

const AppsPage=()=>{
const swiper = useRef(null);
useEffect(()=>{
 swiper.current = new Swiper('.swiper-container', {
      pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
      },
    });    
},[])

    return(    
<div className="swiper-container">
    <div className="swiper-wrapper">  
   <div className="swiper-slide">
     <Link to="/chrome" className="Link">
    <img src="https://i.ibb.co/XJ8s0cX/kindpng-1163970.png" alt="Chorme" className="chrome" />
    </Link>
    </div>           
   <div className="swiper-slide">
     <Link to="/calculator" className="Link">
    <span className ="fa fa-calculator"></span>
    </Link>
    </div>            
    <div className="swiper-slide">         
    <Link to="/sololearn" className="Link">
    <img src="https://i.imgur.com/AwMh6e2.png" alt="Sololearn" className="sololearn"/>
    </Link>
    </div>    
     <div className="swiper-slide">
    <Link to="/flipkart" className="Link">
      <img src="https://i.ibb.co/6m6nKWN/72492446-40d6ba80-3843-11ea-8dde-8a83116c6bdc.png" alt="Flipkart" className="flipkart" />    
    </Link>       
    </div>
     <div className="swiper-slide">
     <Link to="/glitch" className="Link">
   <img src="https://i.ibb.co/MSWM4P1/IMG-20200922-141406.jpg" className="glitch" alt="Glitch" />              
    </Link>
    </div> 
    
    <div className="swiper-slide">
     <Link to="/setting" className="Link">
    <span className ="fa fa-cogs"></span>
    </Link>
    </div> 
      </div>    
    <div className="swiper-pagination"></div>
  </div>        
    )
}
const App = () => {    
    useRef(()=>{       
       //Implementing Swiper js here useRef is really Cool 
         swiper = new Swiper('.swiper-container', {
      pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
      },
    });     
        
    },[])
    return (
<Router>
    <div className="app">    
    <Switch>        
<Route path="/sololearn">
  <Header />  
  <div className ="swiper-container">
  <Sololearn />  
  </div>        
  <Footer />
</Route>
        
<Route path="/flipkart">   
  <Header />  
  <div className ="swiper-container">  
  <Flipkart />  
  </div>        
  <Footer />
</Route>
        
<Route path="/glitch">
  <Header />  
  <div className ="swiper-container">
  <Glitch />
  </div>        
  <Footer />
</Route>
        
<Route path="/chrome">
  <Header />  
  <div className ="swiper-container">
  <Chrome />
  </div>        
  <Footer />
</Route>    
   
<Route path="/calculator">
   <Header />  
  <div className ="swiper-container">    
  <Calculator />
  </div>        
  <Footer />
</Route>
  
<Route path="/setting">
   <Header /> 
  <div className ="swiper-container">  
   <Time 
   size={30}
   />   
  </div>        
  <Footer />
</Route>                
    
<Route path="/">    
  <Header />
  <AppsPage/>
  <Footer />
</Route>
    
   </Switch>
    
  </div>
</Router>
    )
}

ReactDOM.render(<App />,root);
//</script>