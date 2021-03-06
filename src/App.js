import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      color : 'Merah',
      img: 'Merah.jpg',
    };
  }

  //Untuk memperbarui state sesuai dengan menu yang dipilih
  clicked(menu){
    this.setState({
      color: menu.color,
      img: menu.img,
      name: menu.name,
    });
  }
  calculator(name){
    if (name=='kalkulator'){
      //display calculator
      return(
        <div>
            <input type='numbar' placeholder="angka 1"/>+
            <input type='numbar' placeholder="angka 2"/>=
            <span>...</span><br/><br/>
            <button>hitung</button>
        </div>
              );
    }else{
      //
      return (
      <div>
        ini adalah <span className={"selected "+this.state.color}>
            {this.state.name}</span><br/><br/>
            <img src={this.state.img} width="200"></img>
      </div>
      );
  }
  }

  

  render() {
    return (
      <div id="ap">
        {/*
          map akan loop sebanyak menu yang didefinisikan
        */}
        {/*
          kemudian mengembalikan elemen <a/>
        */}
          <nav className="nav">
            {
              this.props.items.map(
                (menu, index)=>{
                  var style = 'menu';

                  if(this.state.color === menu.color){
                    style = `${style} is-active`;
                  }

                  return (
                    <a className={style+" "+menu.color}
                      onClick={
                        this.clicked.bind(this,menu) 
                      }
                      key={
                        index
                      }
                    >
                    {menu.name}
                    </a>
                  );
                }
              )
            }
        </nav>

         <div className="info">
            {this.calculator(this.state.name)} 
        </div>


          </div> 
    );
  }
}

export default App;