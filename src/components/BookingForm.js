import React from 'react'
import {
  Form,
  Input,
  Button,
  Select,
  DatePicker,
  Checkbox,
} from 'antd';


function BookingForm(){
	const { RangePicker } = DatePicker;
	const tailFormItemLayout = {
	  wrapperCol: {
	    xs: {
	      span: 24,
	      offset: 0,
	    },
	    sm: {
	      span: 16,
	      offset: 8,
	    },
	  },
	};
	const rangeConfig = {
	  rules: [
	    {
	      type: 'array',
	      required: true,
	      message: 'Please select time!',
	    },
	  ],
	};

	return(
		<Form
	      labelCol={{
	        span: 4,
	      }}
	      wrapperCol={{
	        span: 14,
	      }}
	      layout="horizontal"
	      
	    >
	  <Form.Item label="Name" required='true'>
        <Input type='text'/>
      </Form.Item>
      <Form.Item label="Email" required='true'>
        <Input type='email'/>
      </Form.Item>
      <Form.Item label="Phone Number" required='true'>
        <Input type='number'/>
      </Form.Item>
      <Form.Item label="Identification" required='true'>
        <Input type='number'/>
      </Form.Item>
      <Form.Item label="Reg.No" required='true'>
        <Input type='text'/>
      </Form.Item>
      <Form.Item label="Current Residence" required='true'>
        <Input type='text'/>
      </Form.Item>
      <Form.Item label="info/Specific request" >
        <Input type='text' placeholder='i.e name of house, price range , what you are looking for '/>
      </Form.Item>
      <Form.Item label="Gender" required='true'>
        <Select>
          <Select.Option value="Male">Male</Select.Option>
          <Select.Option value="Female">Female</Select.Option>
          <Select.Option value="Rather not say">Rather not say</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item name="range-picker" label="Preferred time to get apartment" {...rangeConfig}>
        <RangePicker />
      </Form.Item>
      <Form.Item
        name="agreement"
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
          },
        ]}
        {...tailFormItemLayout}
      >
        <Checkbox>
          I have read the agreement
        </Checkbox>
      </Form.Item>
      <Form.Item >
        <Button>Submit</Button>
      </Form.Item>
    </Form>
	)
}

export default BookingForm;