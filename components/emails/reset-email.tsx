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

interface PasswordResetEmailProps {
    userName: string;
    resetUrl: string;
    requestTime: string;
}

const PasswordResetEmail = ({userName,resetUrl,
    requestTime}:PasswordResetEmailProps ) => {

  return (
    <Html lang="en" dir="ltr">
      <Tailwind>
        <Head />
        <Body className="bg-gray-100 font-sans py-10">
          <Container className="mx-auto bg-white rounded-xl shadow-sm max-w-[600px] px-10 py-8">
            {/* Header */}
            <Section className="text-center mb-8">
              <Text className="text-[24px] font-bold text-gray-900 m-0 mb-2">
                Reset Your Password
              </Text>
              <Text className="text-[16px] text-gray-600 m-0">
                We received a request to reset your password.
              </Text>
            </Section>

            {/* Main Content */}
            <Section className="mb-8">
              <Text className="text-[16px] text-gray-700 mb-4">
                Hi {userName},
              </Text>
              <Text className="text-[16px] text-gray-700 mb-4 leading-6">
                Someone {requestTime} requested a password reset for your account. If this was you, 
                click the button below to create a new password.
              </Text>
              <Text className="text-[16px] text-gray-700 mb-6 leading-6">
                This password reset link will expire in 1 hour for your security.
              </Text>
            </Section>

            {/* Reset Button */}
            <Section className="text-center mb-8">
              <Button
                href={resetUrl}
                className="bg-red-600 text-white px-8 py-4 rounded-xl text-[16px] font-semibold no-underline box-border inline-block"
              >
                Reset Password
              </Button>
            </Section>

            {/* Alternative Link */}
            <Section className="mb-8">
              <Text className="text-[14px] text-gray-600 mb-2">
                If the button doesn&apos;t work, copy and paste this link into your browser:
              </Text>
              <Text className="text-[14px] text-red-600 break-all">
                {resetUrl}
              </Text>
            </Section>

            <Hr className="border-gray-200 my-6" />

            {/* Security Notice */}
            <Section className="mb-6">
              <Text className="text-[14px] text-gray-600 mb-3 font-semibold">
                Security Notice:
              </Text>
              <Text className="text-[14px] text-gray-600 leading-5 mb-3">
                If you didn&apos;t request a password reset, please ignore this email. 
                Your password will remain unchanged and your account is secure.
              </Text>
              <Text className="text-[14px] text-gray-600 leading-5">
                If you&apos;re concerned about your account security, please contact our support team immediately.
              </Text>
            </Section>

            {/* Additional Security Tips */}
            <Section className="mb-6 bg-gray-50 p-4 rounded-xl">
              <Text className="text-[14px] text-gray-700 mb-2 font-semibold">
                Password Security Tips:
              </Text>
              <Text className="text-[14px] text-gray-600 leading-5">
                • Use a unique password that you don&apos;t use elsewhere<br/>
                • Include uppercase, lowercase, numbers, and special characters<br/>
                • Make it at least 12 characters long
              </Text>
            </Section>

            {/* Footer */}
            <Hr className="border-gray-200 my-6" />
            <Section>
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


export default PasswordResetEmail;