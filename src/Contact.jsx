import React from 'react'
import styled from 'styled-components';
const Contact = () => {
  return (
    <Wrapper>
      <h2 className='common-heading'>Contact Page</h2>
      <iframe src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d60932.34709937329!2d78.4598446595704!3d17.350654593555845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e3!4m5!1s0x3bcb99d3dbdb85bf%3A0x5edb9265d6457d1e!2sKoti%2C%20Hyderabad%2C%20Telangana!3m2!1d17.3858323!2d78.47942739999999!4m5!1s0x3bcba2604355921f%3A0x9c19d83803a5ac8e!2sRouter%2C%20Bheeshma%20Nagar%2C%20Badangpet%2C%20Telangana%20500058!3m2!1d17.3154731!2d78.5227649!5e0!3m2!1sen!2sin!4v1720798455410!5m2!1sen!2sin"
       width="100%"
      height="400"
      style={{border:0}} 
      allowFullScreen="" 
      loading="lazy" 
      referrerPolicy="no-referrer-when-downgrade"></iframe>
    
      <div className="container">
        <div className="contact-form">
          <form  action="https://formspree.io/f/mwpepopg" method='POST' className='contact-inputs'>
            <input  type="text" placeholder='username' name='username' required autoComplete='off'/>
            <input  type='email' placeholder='email' name='email' required autoComplete='off'/>
            <textarea  name='Message' cols="30" rows="10" required autoComplete='off' placeholder='Enter your message'/>
            <input type="submit" value="send" />
          </form>
        </div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`

    
    .container{
      margin-top:6rem;

      .contact-form{
        max-width:50rem;
        margin:auto;

        .contact-inputs{
          display:flex;
          flex-direction:column;
          gap:3rem;

          input[type="submit"]{
          cursor:pointer;
          transition:all 0.2s;

          &:hover{
            background-color:${({ theme }) => theme.colors.white};
            border:1px solid ${({ theme }) => theme.colors.btn};
            color:${({ theme }) => theme.colors.btn};
            transform:scale(0.9);
          }
          }
        }
      }
    }
`;

export default Contact
