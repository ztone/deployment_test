import React, { useState, Component } from 'react';
import "./App.css"

//const [isActive, setActive] = useState("false");

class App extends Component {

 constructor(props) {
    super(props);
    this.state = {
      posts: [],
      isActive: false
    }
}

  componentDidMount() {
    const ham = document.getElementById('ham');
     var self = this;
     ham.addEventListener('click', function(e) {
      console.log("click");
      self.setState({ isActive: !self.state.isActive });
    });

    const navExpand = [].slice.call(document.querySelectorAll('.nav-expand'))
    console.log(navExpand);

    navExpand.forEach(item => {
      //item.querySelector('.nav-expand-content').insertAdjacentHTML('afterbegin', backLink)
      item.querySelector('.nav-link').addEventListener('click', () => item.classList.add('active'))
      //item.querySelector('.nav-back-link').addEventListener('click', () => item.classList.remove('active'))
    })
  }
  
  render() {

    const isActive = !this.state.isActive;
    const { posts } = this.state;

    let menu = this.state.isActive ? "nav-is-toggled" : ""

    return (
      <div className={menu}>
        <header className='nav-top'>Voice of Influence
          <span className="hamburger material-icons" id="ham">menu</span>
          <span>Stone Gislason</span>
        </header>
        <nav className="nav-drill">
          <ul className="nav-items nav-level-1">
            <li className="nav-item nav-expand">
              <a className="nav-link nav-expand-link" href="#">
                Menu
              </a>
              <ul className="nav-items nav-expand-content">
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
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
export default App;