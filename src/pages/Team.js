import React from 'react'
import {Link} from 'react-router-dom'
function Team() {
    return (
        <div className='team'>
           <h1>Our Team</h1>

           <div className='us'>
               <div className='sareh'> Sareh Jalalizad <span className='kiana'/>
               <span >Kiana Khorsandi</span></div>            
               <br/><br/>
               <Link className='em' to="">sarehj@kth.se <span className='ke'/>
               <span/> kianak@kth.se</Link>
             
           </div>

           <div className='git'>Our Github </div>
           <a className='all' href={"https://gits-15.sys.kth.se/sarehj/Project"}>Project</a>
           

        </div>
    );
}

export default Team