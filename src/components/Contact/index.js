import React, {useState} from "react";
import {
  Form,
  FormBtn,
  FormHeading,
  FormInput,
  FormLabel,
  FormWrapper,
  InfoHeading,
  ImgWrap,
  Img,
  InfoWrapper,
  Content,
  ContactContainer,
  Label,
  Text,
  FormBtnWrapper
} from "./ContactElements";
import img from "../../images/kate-macate-RNkWBV4mMLI-unsplash.jpg";
import emailjs from 'emailjs-com';

const Contact = () => {

  const [mailStatus, setMailStatus] = useState('Send');
  const [isClicked, setClicked] = useState(false);

  const sendMail = async e => {
    e.preventDefault(); 
    setClicked(true);
    setMailStatus('Sending');
    await emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, e.target, process.env.REACT_APP_USER_ID)
      .then(() => {
        setMailStatus('Sent');
        e.target.reset();
      }, (res) => {
        console.log(res);
        setMailStatus('Not sent');
      });
    setClicked(false);
    
  }
  return (
    <ContactContainer id='contact'>
      <FormWrapper data-aos="fade-left"  data-aos-offset="500">
        <FormHeading>Get in touch</FormHeading>
        <Form onSubmit={e => sendMail(e)}>
          <FormLabel>Name</FormLabel>
          <FormInput type="text"  name="from_name" required/>
          <FormLabel>Email</FormLabel>
          <FormInput type="email" name="from_email" required/>
          <FormLabel>Subject</FormLabel>
          <FormInput type="text" name="subject" required/>
          <FormLabel>Message</FormLabel>
          <FormInput type="text" name="message" required/>
          <FormBtnWrapper>
            <FormBtn type="submit" disabled={isClicked}>{mailStatus}</FormBtn>
          </FormBtnWrapper>
        </Form>
      </FormWrapper>
      <InfoWrapper data-aos="fade-right" data-aos-offset="500" data-aos-delay="200">
        <InfoHeading>Personal Info</InfoHeading>
        <ImgWrap>
        <Img src={img} />
        <Content>
        <Label>Name</Label>
        <Text>Durai Shanmugavel</Text>
        <Label>Location</Label>
        <Text>Coimbatore, TamilNadu, India</Text>
        <Label>passion</Label>
        <Text>Successfull Designer</Text>
        </Content>
        </ImgWrap>
      </InfoWrapper>
    </ContactContainer>
  );
};

export default Contact;
