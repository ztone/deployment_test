import React, { useState, Component } from 'react';
import "./App.css"

//const [isActive, setActive] = useState("false");

class App extends Component {

 constructor(props) {
    super(props);
    //this.state = { isActive: false };
    this.state = {
      posts: [],
      isActive: false
    }

     
  //   document.body.classList.add('nav-is-toggled');  
  //   if (document.body.classList.contains('nav-is-toggled')){
  //     // Do something if class exists
  //     console.log("exist");
  //     document.body.classList.add('nav-is-toggled');
  //   } else {
  //     console.log("doesn't exists");
  //     // Do something if class does not exist
  //     document.body.body.classList.remove('nav-is-toggled');
  //   }
  // }
}

  componentDidMount() {
    
    const ham = document.getElementById('ham');
     console.log("ham")
     console.log(ham);
     var self = this;
     ham.addEventListener('click', function(e) {
      console.log("click");
      self.setState({ isActive: !self.state.isActive });
      //document.body.classList.add('nav-is-toggled')
;     })

    //console.log("this.state.isActive");
    //this.setState({ isActive: !this.state.isActive });
    //console.log(this.state.isActive);

    //this.btnClick = !this.btnClick;
  
    

//console.log(e.target.ownerDocument.body.classList.toggle('nav-is-toggled'));
  //const root = document.getElementById('container')
  //if(!this.active){
    //this.setState({ isActive: !this.state.isActive });
  //document.body.classList.toggle('nav-is-toggled', this.btnClick)
  //}else
//{document.body.classList.remove('nav-is-toggled');
//}
//this.active = !this.active;
  //document.body.classList.toggle('nav-is-toggled')
  //console.log(node)


// const navExpand = [].slice.call(document.querySelectorAll('.nav-expand'));
// console.log(navExpand);
// navExpand.forEach(item => {
//   console.log(item);
//   item.querySelector('.nav-link').addEventListener('click', () => item.classList.add('active'))
}

    // const url = "https://jsonplaceholder.typicode.com/albums/1/photos";
    // fetch(url)
    // .then(response => response.json())
    // .then(json => this.setState({ posts: json }))
 // }
  render() {

    const isActive = !this.state.isActive;
    const { posts } = this.state;

    //this.setState({ isActive: isActive });

    let menu;
    if(this.state.isActive)
    {
      menu = "nav-is-toggled";
    }
    else
    {
      menu = "nav-is-toggled-nnnnnoooootttt";
      
    }
    console.log(menu);
    return (
      <div className={menu}>
        <header className='nav-top'>Voice of Influence
          <span className="hamburger material-icons" id="ham">menu</span>
          <span>Stone Gislason</span>
        </header>
        <nav className="nav-drill">

        <ul className="nav-items">
			    <li className="nav-item nav-expand">
            <a className="nav-link nav-expand-link" href="#">
              Influencers
            </a>
          </li>
          <li className="nav-item nav-expand">
            <a className="nav-link nav-expand-link" href="#">
              Commissioner
            </a>
          </li>
        </ul>
        </nav>
      </div>
    );
  }
}
export default App;