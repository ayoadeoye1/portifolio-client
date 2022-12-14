import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import fb from '../assets/fb.png'
import twi from '../assets/twi.png'
import wa from '../assets/wa.png'

const Footer = () => {
  return (
    <div className='bg-gray-700 text-yellow-50 w-full items-center'>
        <div className='flex flex-row w-full  '>
            <img className='h-60 w-3/5 rounded-full' src='' alt='me' />
            <div className='m-4 w-2/5 flex flex-col '>
                <h2>contacts</h2>
                <a className='m-4 flex flex-row' href='tel:+2348063399734'>
                    <FontAwesomeIcon 
                        icon={faPhone}
                        size='2x'
                    />
                    <p className='px-2 py-2'>call</p>
                </a>
                <a className='m-4 flex flex-row' href='mailto:isadeoye02@gmail.com'>
                    <FontAwesomeIcon 
                        icon={faEnvelope}
                        size='2x'
                    />
                    <p className='px-2 py-2'>mail</p>
                </a>
                <a className='m-4 flex flex-row' href='https://twitter.com/ayoadeoye01?s=09'>
                    <img className='h-10 w-10 rounded-md' src={twi} alt='twi' />
                    <p className='px-2 py-2'>twitter</p>
                </a>
                <a className='m-4 flex flex-row' href='https://facebook.com/ayobamiisaac.diadem'>
                    <img className='h-10 w-10 rounded-md' src={fb} alt='fb' />
                    <p className='px-2 py-2'>facebook</p>
                </a>
                <a className='m-4 flex flex-row' href='https://wa.me/2348063399734'>
                    <img className='h-10 w-10 rounded-md' src={wa} alt='wa' />
                    <p className='px-2 py-2'>whatsapp</p>
                </a>
            </div>
        </div>
        <div className=''>
            <p className='p-6 text-center'>copyright&nbsp;
            <FontAwesomeIcon 
                icon={faCopyright}
            />&nbsp;
            {
              new Date().getFullYear()
            }&nbsp; 
            ayoadeoye
            </p>
        </div>
    </div>
  )
}

export default Footer