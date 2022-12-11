import React from 'react'
import Profile from './profile';
import Skills from './skills';
import Certification from './certification';
import Resume from './resume';
import Awards from './awards';
import Refrences from './refrences';
import Worksample from './worksample';
import Footer from './footer';

const CompDash = () => {
  return (
    <div className='w-[98%]'>
        <div>
            <div>
                <h2><b>#gmailuser</b></h2>
            </div>
          <br /><hr />
          <Profile />
          <br /><hr />
          <Skills />
          <br /><hr />
          <Certification />
          <br /><hr />
          <Resume />
          <br /><hr />
          <Awards />
          <br /><hr />
          <Refrences />
          <br /><hr />
          <Worksample />
          <br /><hr />
          <br /><hr />
          <Footer />
        </div>
    </div>
  )
}

export default CompDash