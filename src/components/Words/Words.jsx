import React, { Component } from 'react';

class Words extends Component {
    constructor() {
        super();
        this.state = {
            words: [
                { id: '1', word: 'white', meaning: 'beyaz', lngid: 2 },
                { id: '2', word: 'black', meaning: 'siyah', lngid: 2 },
                { id: '3', word: 'age', meaning: 'yaş', lngid: 2 },
                { id: '4', word: 'save', meaning: 'kaydetmek', lngid: 2 },
                { id: '5', word: 'yaş', meaning: 'age', lngid: 1 },
                { id: '6', word: 'kırmızı', meaning: 'red', lngid: 1 },
            ]
        }
    }
    render() {
        let filterd=this.state.words.filter(c=>c.lngid==this.props.selectedlang);
        return (
            <div>
                <table className='wordsTable'>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Word</th>
                            <th>Meaning</th>
                            <th>lng</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filterd.map((wrd) => {
                            return (<tr>
                                <td>{wrd.id}</td>
                                <td>{wrd.word}</td>
                                <td>{wrd.meaning}</td>
                                <td>{wrd.lngid}</td>
                            </tr>)
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Words;