import React, { Component } from 'react';
import { Container } from 'reactstrap';
import NavMenu from './NavMenu';
import '../custom.css';

export class Layout extends Component {
  static displayName = Layout.name;

  render() {
    return (
        <div>
            <NavMenu />
            
            <Container >
                <div id="space"><div className="stars"></div>
                    <div className="stars"></div>
                    <div className="stars"></div>
                    <div className="stars"></div>
                    <div className="stars"></div>
                    <div className="stars"></div>
                    <div className="stars"></div>
                    <div className="stars"></div>
                    <div className="stars"></div>
                    {this.props.children}
                </div>
                </Container>
            
      </div>
    );
  }
}
