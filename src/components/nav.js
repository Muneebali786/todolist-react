import React from "react";

class Nav extends React.Component {
    render() {
        return(
             Nav = (props) => {
                return (
                    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                        <div className = "container">
                    <a className="navbar-brand" href="#">Book List</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                    </button>
                  
                    <div className="collapse navbar-collapse" id="navbarColor01">
                      <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                          <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        
                      </ul>
                    </div>
                    </div>
                  </nav>
                )
            }

        )
    }
}

export default Nav;