import React from 'react';

const Footer = () => {
    return (
        
        <footer className="page-footer green lighten-2">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="white-text">O'Neill Web Solutions</h5>
                <p className="grey-text text-lighten-4">The most recognized name in online presence and marketing solutions.</p>
              </div>
              <div className="col l6 s12">
                <h5 className="white-text">Quick Links</h5>
                <ul>
                  <li><a className="grey-text text-lighten-3" href="#!">Portfolio</a></li>
                  <li><a className="grey-text text-lighten-3" href="#!">Contact</a></li>

                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
            © 2019 Copyright O'Neill Web Solutions
            
            </div>
          </div>
        </footer>


    )
}

export default Footer;