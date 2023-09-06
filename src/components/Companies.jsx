/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { PaystackButton } from 'react-paystack';
import Modal from 'react-bootstrap/Modal';
import { Col, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';


const Companies = ({ insuranceType ,duration, insuranceAmount}) => {


    const publicKey = "pk_test_d423971de624b1b46e7372bebfcb33b19e41e9fa"
  const amount = insuranceAmount;
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  

  const calculateAmount = (insuranceType, duration) => {
    if (insuranceType === 'Comprehensive Insurance') {
      if (duration === '3 months') {
        return 600;
      } else if (duration === '6 months') {
        return 1000;
      } else if (duration === '1 year') {
        return 2000;
      }
    } else if (insuranceType === 'Third-Party Insurance') {
    
      if (duration === '3 months') {
        return 500;
      } else if (duration === '6 months') {
        return 600;
      } else if (duration === '1 year') {
        return 1500;
      }
    } else if (insuranceType === 'Third-Party Fire and Theft Insurance') {
  
      if (duration === '3 months') {
        return 400;
      } else if (duration === '6 months') {
        return 800;
      } else if (duration === '1 year') {
        return 1300;
      }
    }

    return 0; // Default to 0 if insurance type or duration is not recognized
  };
 
 

  const resetForm = (e) => {
    e.preventDefault();

    if (!name || !email || !phone) {
      console.log('All fields are mandatory');
      return;
    }

    const paymentData = {
      name,
      email,
      phone,
    };

    console.log('Payment data:', paymentData);

    setName('');
    setEmail('');
    setPhone('');
  };

  const componentProps = {
    email,
    amount: amount * 100,
    currency: 'GHS',
    metadata: {
      name,
      phone,
    },
    publicKey,
    text: 'Pay Now',
    onSuccess: ({ reference }) => {
      alert(
        `Your purchase was successful! Transaction reference: ${reference}`
      );
      resetForm();
    },
    onClose: () => alert("Wait! don't go!!!!"),
  };
  const [selectedOption, setSelectedOption] = useState('');

  const handleCheckboxChange = (event) => {
    setSelectedOption(event.target.value);
  };
  

const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <div>
          <div>
        <Modal show={show} onHide={() => setShow(false)} size = "lg" className='my-modal'>
        <Modal.Header closeButton className='px-5'>
          <Modal.Title>INSURANCE COMPANIES</Modal.Title>
        </Modal.Header>
        <Modal.Body className='px-5'>
            <h4 className='text-success'>Choose One Insurance Company</h4>
            <form className=''>
              <Row>
                <Col xs={6} className="d-flex align-items-center">
                  <input className='me-3' type='radio' name='insurance' value='Phoenix Insurance' onChange={handleCheckboxChange} />
                  <label>Phoenix Insurance</label>
                </Col>
                <Col xs={6} className="d-flex align-items-center">
                  <input className='me-3' type='radio' name='insurance' value= "Serene Insurance" onChange={handleCheckboxChange} />
                  <label>Serene Insurance</label>
                </Col>
              </Row>
              <Row>
                <Col xs={6} className="d-flex align-items-center">
                  <input className='me-3' type='radio' name='insurance' value="Priority Insurance" onChange={handleCheckboxChange} />
                  <label >Priority Insurance</label>
                </Col>
                <Col xs={6} className="d-flex align-items-center">
                  <input className='me-3' type='radio' name='insurance' value="Prudential Insurance" onChange={handleCheckboxChange} />
                  <label>Prudential Insurance</label>
                </Col>
              </Row>
              <Row>
                <Col xs={6} className="d-flex align-items-center">
                  <input className='me-3' type='radio' name='insurance' value="Enterprise Insurance" onChange={handleCheckboxChange} />
                  <label>Enterprise Insurance</label>
                </Col>
                <Col xs={6} className="d-flex align-items-center">
                  <input className='me-3' type='radio' name='insurance' value="Star Insurance" onChange={handleCheckboxChange} />
                  <label>Star Insurance</label>
                </Col>
              </Row>
            </form>
        </Modal.Body>
        <div className='px-5'>
            {selectedOption && <h5 className='text-success mb-4'>You selected {selectedOption}</h5>}
         </div>
          <div className="checkout px-5">
            <div className="checkout-form">
              {selectedOption && (
                <div>
                <hr />
                <h5 className='mb-3'>Please fill the form below to make payment</h5>
                  <h1>Amount: Ghs {amount}</h1>
              <form onSubmit={resetForm} className=''>
                <div className="form-group d-flex align-items-center">
                  <label className="form-label mb-4 me-4" htmlFor="name">Name: </label>
                  <input
                    type="text"
                    id="name"
                    className="form-control mb-4"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    // style={{ width: '70%' }}
                  />
                </div>
                <div className="form-group d-flex align-items-center">
                      <label className="form-label mb-4 me-4" htmlFor="email">Email: </label>
                  <input
                    type="text"
                    id="email"
                    className="form-control mb-4"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    // style={{ width: '70%' }}
                  />
                </div>
                  <div className="form-group d-flex align-items-center" style={{ display: 'flex' }}>
                      <label className="form-label mb-4 me-3" htmlFor="phone">Phone: </label>
                  <input
                    type="text"
                    id="phone"
                    className="form-control mb-4 ms-1"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    // style={{ width: '70%' }}
                  />
                </div>
                <div className="form-group">
                  <PaystackButton className="btn btn-primary px-4 py-2 paystack-button" {...componentProps} />
                  <p className="mt-3 text-danger">(No refunds)</p>
                </div>
              </form>
                </div>
              )}  
            </div>
          </div>

      </Modal>
    </div>
    </div>
  )
}



export default Companies