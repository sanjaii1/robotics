import React from 'react';
import { Modal, Form, Input, Select, Checkbox, Button } from 'antd';

const { Option } = Select;
const { TextArea } = Input;

const ContactModal = ({ isOpen, onClose }) => {
  const [form] = Form.useForm();

  const handleSubmit = (values) => {
    console.log('Form submitted:', values);
    // You can add API call here
    form.resetFields();
    onClose();
  };

  const handleCancel = () => {
    form.resetFields();
    onClose();
  };

  return (
    <Modal
      title={
        <div style={{ textAlign: 'center' }}>
          <div style={{ color: '#3b82f6', fontSize: '14px', marginBottom: '8px' }}>
            Contact us
          </div>
          <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#111827' }}>
            Get in touch
          </div>
          <div style={{ fontSize: '16px', color: '#6b7280', marginTop: '8px' }}>
            We'd love to hear from you. Please fill out this form.
          </div>
        </div>
      }
      open={isOpen}
      onCancel={handleCancel}
      footer={null}
      width={600}
      centered
      destroyOnClose
    >
      <Form
        form={form}
        layout="vertical"
        onFinish={handleSubmit}
        style={{ marginTop: '24px' }}
      >
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
          <Form.Item
            name="firstName"
            label="First name"
            rules={[{ required: true, message: 'Please enter your first name' }]}
          >
            <Input placeholder="First name" size="large" />
          </Form.Item>
          
          <Form.Item
            name="lastName"
            label="Last name"
            rules={[{ required: true, message: 'Please enter your last name' }]}
          >
            <Input placeholder="Last name" size="large" />
          </Form.Item>
        </div>

        <Form.Item
          name="email"
          label="Email"
          rules={[
            { required: true, message: 'Please enter your email' },
            { type: 'email', message: 'Please enter a valid email' }
          ]}
        >
          <Input placeholder="you@company.com" size="large" />
        </Form.Item>

        <Form.Item
          name="phone"
          label="Phone number"
          rules={[{ required: true, message: 'Please enter your phone number' }]}
        >
          <Input.Group compact>
            <Form.Item
              name="countryCode"
              noStyle
              initialValue="US"
            >
              <Select style={{ width: '80px' }} size="large">
                <Option value="US">US</Option>
                <Option value="CA">CA</Option>
                <Option value="UK">UK</Option>
                <Option value="AU">AU</Option>
              </Select>
            </Form.Item>
            <Form.Item
              name="phoneNumber"
              noStyle
              rules={[{ required: true, message: 'Please enter your phone number' }]}
            >
              <Input 
                placeholder="+1 (555) 000-0000" 
                style={{ width: 'calc(100% - 80px)' }} 
                size="large"
              />
            </Form.Item>
          </Input.Group>
        </Form.Item>

        <Form.Item
          name="message"
          label="Message"
          rules={[{ required: true, message: 'Please enter your message' }]}
        >
          <TextArea 
            placeholder="Your message here..." 
            rows={4} 
            size="large"
          />
        </Form.Item>

        <Form.Item
          name="agreeToPolicy"
          valuePropName="checked"
          rules={[
            {
              validator: (_, value) =>
                value ? Promise.resolve() : Promise.reject(new Error('You must agree to the privacy policy')),
            },
          ]}
        >
          <Checkbox>
            You agree to our friendly{' '}
            <a href="#" style={{ color: '#3b82f6' }}>privacy policy.</a>
          </Checkbox>
        </Form.Item>

        <Form.Item style={{ marginBottom: 0, marginTop: '24px' }}>
          <Button 
            type="primary" 
            htmlType="submit" 
            size="large"
            style={{ 
              width: '100%', 
              height: '48px',
              fontSize: '16px',
              fontWeight: '600'
            }}
          >
            Send message
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default ContactModal;
