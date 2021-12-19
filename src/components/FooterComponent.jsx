import React, { Component } from 'react';

class FooterComponent extends Component {
    constructor(props){
        super(props);

        this.state = {
            
        }
    }

    render() {
        return (
            <div>
                <footer className="footer">
                    <div>
                        <span className="text-muted">All rights are reserved 2021 @Abdulla</span>
                    </div>
                </footer>
            </div>
        );
    }
}

export default FooterComponent;