import React, { Component } from 'react';
import WordList from './WordList';

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
                { id: '7', word: 'kara', meaning: 'black', lngid: 1 },
            ],
            searchKeyword:'',
            searchKeywordMe:''
        }
    }

    render() {

        const setFilterVal=(event)=>{
            this.setState({searchKeyword:event.target.value});
        }

        const setFilterValMe=(event)=>{
            this.setState({searchKeywordMe:event.target.value});
        }

        let filterd=this.state.words.filter(c=>c.lngid==this.props.selectedlang || this.props.selectedlang===0);
        
        
        if(this.state.searchKeyword)
        {
            filterd=filterd.filter(c=>c.word.startsWith(this.state.searchKeyword));
        }
        if(this.state.searchKeywordMe){
            filterd=filterd.filter(c=>c.meaning.startsWith(this.state.searchKeywordMe));
        }
        return (
            <div>
                 <div className='row'>
                <div className='col-md-4'><input placeholder='word' className='form-control' onChange={setFilterVal} type='text'/></div>
                <div className='col-md-4'><input placeholder='meaning' className='form-control' onChange={setFilterValMe} type='text'/></div>
                </div>
                <div className='row'>
                <div className='col-md-8'><WordList words={filterd}/></div>
                </div>
            </div>
        );
    }
}

export default Words;