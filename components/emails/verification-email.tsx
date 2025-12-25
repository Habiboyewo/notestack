import * as React from 'react';
import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Text,
  Button,
  Hr,
  Tailwind,
} from '@react-email/components';

interface VerificationEmailProps {
    userName: string;
    verificationUrl: string;
}

const VerificationEmail = ({userName,
    verificationUrl}:VerificationEmailProps ) => {

  return (
    <Html lang="en" dir="ltr">
      <Tailwind>
        <Head />
        <Body className="bg-gray-100 font-sans py-10">
          <Container className="mx-auto bg-white rounded-xl shadow-sm max-w-[600px] px-10 py-8">
            {/* Header */}
            <Section className="text-center mb-8">
              <Text className="text-[24px] font-bold text-gray-900 m-0 mb-2">
                Verify Your Email Address
              </Text>
              <Text className="text-[16px] text-gray-600 m-0">
                Welcome to our platform! Please confirm your email to get started.
              </Text>
            </Section>

            {/* Main Content */}
            <Section className="mb-8">
              <Text className="text-[16px] text-gray-700 mb-4">
                Hi {userName},
              </Text>
              <Text className="text-[16px] text-gray-700 mb-4 leading-6">
                Thank you for signing up! To complete your registration and secure your account, 
                please verify your email address by clicking the button below.
              </Text>
              <Text className="text-[16px] text-gray-700 mb-6 leading-6">
                This verification link will expire in 24 hours for your security.
              </Text>
            </Section>

            {/* Verification Button */}
            <Section className="text-center mb-8">
              <Button
                href={verificationUrl}
                className="bg-blue-600 text-white px-8 py-4 rounded-xl text-[16px] font-semibold no-underline box-border inline-block"
              >
                Verify Email Address
              </Button>
            </Section>

            {/* Alternative Link */}
            <Section className="mb-8">
              <Text className="text-[14px] text-gray-600 mb-2">
                If the button doesn&apos;t work, copy and paste this link into your browser:
              </Text>
              <Text className="text-[14px] text-blue-600 break-all">
                {verificationUrl}
              </Text>
            </Section>

            <Hr className="border-gray-200 my-6" />

            {/* Security Notice */}
            <Section className="mb-6">
              <Text className="text-[14px] text-gray-600 mb-3 font-semibold">
                Security Notice:
              </Text>
              <Text className="text-[14px] text-gray-600 leading-5">
                If you didn&apos;t create an account with us, please ignore this email. 
                Your email address will not be added to our system without verification.
              </Text>
            </Section>

            {/* Footer */}
            <Hr className="border-gray-200 my-6" />
            <Section>
              <Text className="text-[12px] text-gray-500 text-center m-0 mb-2">
                This email was sent by Notestack
              </Text>
              <Text className="text-[12px] text-gray-500 text-center m-0 mb-2">
                123 Business Street, Lagos, Nigeria
              </Text>
              <Text className="text-[12px] text-gray-500 text-center m-0">
                © {new Date().getFullYear()} Notestack. All rights reserved.
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};


export default VerificationEmail; 