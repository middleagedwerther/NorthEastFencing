import React from 'react';
import styled from 'styled-components';
import { useGlobals } from "../../Globals.js";
import FooterWithColumns from './FooterWithColumns.js';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
    background-color: #f0f0f0; 
`;

const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #f0f0f0; /* Use a light background color */
  z-index: -1;
`;

const ContentContainer = styled.div`
  max-width: 800px;
  padding: 20px;
  margin-top: 100px;
  margin-bottom:40px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Heading = styled.h1`
  font-family: ${(props) => props.globalFont};
  color: #333;
  font-size: 36px;
  margin-bottom: 20px;
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-family: ${(props) => props.globalFont};
  color: #333;
  font-size: 24px;
  margin-top: 30px;
  margin-bottom:10px;
`;

const Paragraph = styled.p`
  font-family: ${(props) => props.globalFont};
  color: #666;
  font-size: 16px;
  line-height: 1.6;
`;

const Privacy = () => {
  const { GlobalFont } = useGlobals();

  return (
    <>
    <Container>
      <BackgroundImage />
      <ContentContainer>
        <Heading globalFont={GlobalFont}>Privacy Policy</Heading>
        
        <Paragraph globalFont={GlobalFont}>
          Updated: 29/06/2022
        </Paragraph>

        <Paragraph globalFont={GlobalFont}>
          North East Fencing ("we", "our", or "us") operates the North East Fencing website (the "Service"). This Privacy Policy outlines our practices regarding the collection, use, and disclosure of your Personal Information when you use our Service. We will not use or share your information with anyone except as described in this Privacy Policy. Your Personal Information is used to provide and improve the Service. By using the Service, you consent to the collection and use of information in accordance with this policy.
        </Paragraph>
        
        <SectionTitle globalFont={GlobalFont}>Information Collection and Use</SectionTitle>
        <Paragraph globalFont={GlobalFont}>
          While using our Service, we may request certain personally identifiable information that can be used to contact or identify you, such as your name, email address, and telephone number.
        </Paragraph>

        <SectionTitle globalFont={GlobalFont}>Log Data</SectionTitle>
        <Paragraph globalFont={GlobalFont}>
          We collect information that your browser sends whenever you visit our Service ("Log Data"). This Log Data may include details such as your computer's IP address, browser type and version, the pages you visit on our Service, the time and date of your visit, the time spent on those pages, and other statistics.
        </Paragraph>

        <SectionTitle globalFont={GlobalFont}>Cookies</SectionTitle>
        <Paragraph globalFont={GlobalFont}>
          Cookies are files with a small amount of data, which may include an anonymous unique identifier. They are sent to your browser from a website and stored on your computer's hard drive. We use cookies to collect information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, some parts of our Service may not function properly if you do not accept cookies.
        </Paragraph>

        <SectionTitle globalFont={GlobalFont}>Service Providers</SectionTitle>
        <Paragraph globalFont={GlobalFont}>
          We may employ third-party companies and individuals to facilitate our Service, provide the Service on our behalf, perform Service-related tasks, or assist us in analyzing how our Service is used. These third parties have access to your Personal Information only to perform these tasks and are obligated not to disclose or use it for any other purpose.
        </Paragraph>

        <SectionTitle globalFont={GlobalFont}>Security</SectionTitle>
        <Paragraph globalFont={GlobalFont}>
          The security of your Personal Information is important to us, but no method of transmission over the Internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Information, we cannot guarantee its absolute security.
        </Paragraph>

        <SectionTitle globalFont={GlobalFont}>Links to Other Sites</SectionTitle>
        <Paragraph globalFont={GlobalFont}>
          Our Service may contain links to other sites not operated by us. If you click on a third-party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.
        </Paragraph>

        <SectionTitle globalFont={GlobalFont}>Children's Privacy</SectionTitle>
        <Paragraph globalFont={GlobalFont}>
          Our Service does not address anyone under the age of 18. We do not knowingly collect personally identifiable information from children under 18. If you are a parent or guardian and you are aware that your child has provided us with Personal Information, please contact us. If we discover that a child under 18 has provided us with Personal Information, we will delete such information from our servers immediately.
        </Paragraph>

        <SectionTitle globalFont={GlobalFont}>Compliance with Laws</SectionTitle>
        <Paragraph globalFont={GlobalFont}>
          We will disclose your Personal Information where required to do so by law or subpoena.
        </Paragraph>

        <SectionTitle globalFont={GlobalFont}>Changes to This Privacy Policy</SectionTitle>
        <Paragraph globalFont={GlobalFont}>
          We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when posted on this page.
        </Paragraph>
      </ContentContainer>
      </Container>

      <FooterWithColumns />
      </>
  );
}

export default Privacy;
