import React, { Component } from 'react';

class WordAdd extends Component {
    
    render() {
        let wordToAdd={id: '0', word: '', meaning: '', lngid: 2};
        const setWordVals=(event)=>{
            wordToAdd[event.target.name]=event.target.value;
            console.log(wordToAdd);
            
        }
        const saveWord=()=>{
            this.props.refreshWords(wordToAdd);
            alert('başarıyla kaydedildi');
            this.props.returnList();
        }

        return (
            <div>
                <button onClick={this.props.returnList}>Return Back</button>
                <div className='row'>
                    <div className='col-md-12'>
                        <div className='form-group'>
                            id:<input onChange={setWordVals} name='id' className='form-control' readOnly type='text' />
                        </div>
                        <div className='form-group'>
                            word:<input onChange={setWordVals} name='word' className='form-control' type='text' />
                        </div>
                        <div className='form-group'>
                            meaning:<input onChange={setWordVals} name='meaning' className='form-control' type='text' />
                        </div>
                        <div className='form-group'>
                        lngid:
                        <select className='form-control' name='lngid' onChange={setWordVals}>
                            {
                                this.props.langs.map((lng)=>{
                                    return <option title={lng.name} value={lng.id}>{lng.code}</option>
                                })
                            }
                            
                          
                        </select>
                        </div>
                        <div className='form-group'>
                            <button onClick={saveWord}>Kaydet</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default WordAdd;