/* eslint-disable no-unused-vars */
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { PaystackButton } from 'react-paystack';
import Modal from 'react-bootstrap/Modal';
import { Col, Row } from 'react-bootstrap';


const Companies = () => {


    const publicKey = "pk_test_d423971de624b1b46e7372bebfcb33b19e41e9fa"
  const amount = 10000;
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const resetForm = () => {
    setEmail('');
    setName('');
    setPhone('');
  };

  const componentProps = {
    email,
    amount,
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

  return (
    <div>
          <div>
      <Button variant="primary" onClick={handleShow}>
        Choose Company
      </Button>

      <Modal show={show} onHide={handleClose} size = "lg" className='my-modal'>
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
              <form className=''>
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