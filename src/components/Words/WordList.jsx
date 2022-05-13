import React, { Component } from 'react';

class WordList extends Component {
    constructor() {
        super();
       
    }
    render() {
       
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
                        {this.props.words.map((wrd) => {
                            return (<tr key={wrd.id}>
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

export default WordList;