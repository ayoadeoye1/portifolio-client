import React from 'react'
import Profile from './profile';
import Skills from './skills';
import Certification from './certification';
import Resume from './resume';
import Awards from './awards';
import Refrences from './refrences';
import Worksample from './worksample';
import Footer from './footer';

const CompRender = () => {
  return (
    <div className='w-[98%]'>
        <div>
          <div className="text-center sm:text-xl">
              <h3>Get Authenticated to access complete information on <b><i>Aady Portfolio</i></b>, and other features of the app(quiz), signin above</h3>
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

export default CompRender