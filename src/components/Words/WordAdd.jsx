import React, { Component } from 'react';

class WordAdd extends Component {
    render() {
        return (
            <div>
                kelime ekleme sayfası
                <button onClick={this.props.returnList}>Return Back</button>
            </div>
        );
    }
}

export default WordAdd;