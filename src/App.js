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

    const backLink = `<li class="nav-item">
	<a class="nav-link nav-back-link" href="javascript:;">
		Back
	</a>
</li>`

    const navExpand = [].slice.call(document.querySelectorAll('.nav-expand'))
    //console.log(navExpand);

    navExpand.forEach(item => {  
      if(item.querySelector('.nav-expand-content') != null) 
      {
        item.querySelector('.nav-expand-content').insertAdjacentHTML('afterbegin', backLink)
      }

      item.querySelector('.nav-link').addEventListener('click', () => item.classList.add('active'))
      
      if(item.querySelector('.nav-back-link') != null) 
      {
        item.querySelector('.nav-back-link').addEventListener('click', () => item.classList.remove('active'));
      }
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
          <ul class="nav-items nav-level-1">
          <li className="nav-item nav-expand">
              <a className="nav-link nav-expand-link" href="#">
                Menu
              </a>
              <ul className="nav-items nav-expand-content">
                
                <li class="nav-item nav-expand">
                  <a class="nav-link nav-expand-link" href="#">
                    Influencers
                  </a>
                  <ul class="nav-items nav-expand-content">
                    <li class="nav-item">
                      <a class="nav-link" href="#">
                        Finder
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">
                        Map View
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">
                        List View
                      </a>
                    </li>
                    <li class="nav-item nav-expand">
                      <a class="nav-link nav-expand-link" href="#">
                        Favorites
                      </a>
                      <ul class="nav-items nav-expand-content">
                        <li class="nav-item">
                          <a class="nav-link" href="#">
                            Favirutes Influencers
                          </a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="#">
                            Saved Searches
                          </a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="#">
                            Autofind for a campain
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li class="nav-item nav-expand">
                  <a class="nav-link nav-expand-link" href="#">
                    Commissioners
                  </a>
                  <ul class="nav-items nav-expand-content">
                    <li class="nav-item">
                      <a class="nav-link" href="#">
                        Search Hotels
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">
                        View Campains
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">
                        Apply for a Voucher
                      </a>
                    </li>
                  </ul>
                </li>
                <li class="nav-item nav-expand">
                  <a class="nav-link nav-expand-link" href="#">
                    Campain Management
                  </a>
                  <ul class="nav-items nav-expand-content">
                    <li class="nav-item">
                      <a class="nav-link" href="#">
                        Vouchers
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">
                        Campain
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">
                        Generate Voucher
                      </a>
                    </li>
                  </ul>
                </li>
                <li class="nav-item nav-expand">
                  <a class="nav-link nav-expand-link" href="#">
                    Scheduler
                  </a>
                  <ul class="nav-items nav-expand-content">
                    <li class="nav-item">
                      <a class="nav-link" href="#">
                        Calender View
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">
                        Book
                      </a>
                    </li>
                  </ul>
                </li>
                <li class="nav-item nav-expand">
                  <a class="nav-link nav-expand-link" href="#">
                    Awards
                  </a>
                  <ul class="nav-items nav-expand-content">
                    <li class="nav-item">
                      <a class="nav-link" href="#">
                        About
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">
                        Where am I?
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">
                        Reports
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">
                        Manage
                      </a>
                    </li>
                  </ul>
                </li>
                <li class="nav-item nav-expand">
                  <a class="nav-link nav-expand-link" href="#">
                    Community
                  </a>
                  <ul class="nav-items nav-expand-content">
                    <li class="nav-item">
                      <a class="nav-link" href="#">
                        Blogs
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">
                        Social Calender
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">
                        Chats
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li class="nav-item nav-expand">
              <a class="nav-link nav-expand-link" href="#">
                My Profile
              </a>
              <ul class="nav-items nav-expand-content">
                    <li class="nav-item">
                      <a class="nav-link" href="#">
                        View
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">
                        Promote me
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">
                        Reports
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">
                        My Vouchers
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">
                        My Awards
                      </a>
                    </li>
                  </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                About Us
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
export default App;