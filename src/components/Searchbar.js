import React, { useState } from 'react'
import axios from 'axios'

function Searchbar(props){


    const[term, setterm]=useState('')    

    function handleSubmit(event){
        event.preventDefault();
        props.handleFormSubmit(term)  
        
        
    }

    

    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
      }

        return (
            <>
            <div className="ui centered grid "  style={{borderRadius:'20px'}}>
                <div className="four wide column">
                    <h2  onClick={() => openInNewTab('https://youtu.be/qDA34A5JRYY?t=134')}  style={{textAlign:"center", color:"white", fontSize:'400%', background:'#7e7e88', borderRadius:'20px', fontFamily:'sans-serif', borderColor:'red'}}>U-thoob</h2>

                </div>
            </div>
            <div className='ui fluid category search segment'>
                <form onSubmit= {handleSubmit} className='ui form'>
                    <div className='ui fluid icon input'>
                        {/* <label htmlFor="video-search">Video Search</label> */}
                        <input onChange={(e)=>{setterm(e.target.value)}} name='video-search' type="text" placeholder="Search.."/>
                        <i className='inverted circular search link icon'></i>
                        {/* <button type='submit' className='ui inverted red button' style={{padding:'10px', marginTop:'10px'}}>Search </button> */}
                    </div>
                </form>
            </div>
            </>
        )
    }
export default Searchbar