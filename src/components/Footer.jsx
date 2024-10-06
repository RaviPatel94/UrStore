import React from 'react'

export default function Footer() {
  return (
    <footer>
        <h1 className='contacttitle'>Contact Us</h1>
        <div className="contactcontainer">
        <div className='mailbox'>
            <div className='mailcontainer'>
            <h1>Mail Us</h1>
            <form action="https://api.web3forms.com/submit" method="POST">
            <input type="hidden" name="access_key" value="f452ef1d-ac63-4571-a65a-ba9e3eb41901"></input>
            <input type="text" placeholder='Name' name="name" className='inpbox' required />
            <input type="email" placeholder='Email' name="Email" className='inpbox' required />
            <input type="text" placeholder='Query/ Feedback' name="message" className='textbox' required/>
            <input type="submit" className='submit' />
            </form>
            </div>
        </div>
        <div className='team'>
            <div className='teamtitle'>
                Team
            </div>
            <div className='membercontainer'>
                <div className="memberbox">
                    <div className='memberimgbox'> <img src="src\images\pp-removebg-preview.png" alt="" className='memberimg'/></div>
                    <div className='memberdetails'>
                        <div className='membername'>Ravi Patel</div>
                        <div className='memberposition'>UI/UX, Frontend</div>
                    </div>
                </div>
                <div className="memberbox">
                <div className='memberimgbox'> <img src="src\images\pp-removebg-preview.png" alt="" className='memberimg'/></div>
                    <div className='memberdetails'>
                        <div className='membername'>Yatharth Singh</div>
                        <div className='memberposition'>Frontend, Backend</div>
                    </div>
                </div>
                <div className="memberbox">
                <div className='memberimgbox'> <img src="src\images\pp-removebg-preview.png" alt="" className='memberimg'/></div>
                    <div className='memberdetails'>
                        <div className='membername'>Anurag Pandey</div>
                        <div className='memberposition'>UI/UX, Frontend</div>
                    </div>
                </div>
                <div className="memberbox">
                <div className='memberimgbox'> <img src="src\images\pp-removebg-preview.png" alt="" className='memberimg'/></div>
                    <div className='memberdetails'>
                        <div className='membername'>Sneha Patel</div>
                        <div className='memberposition'>UI/UX, Frontend</div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </footer>
  )
}