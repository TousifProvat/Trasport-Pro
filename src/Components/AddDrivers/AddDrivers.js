import React, { useState } from "react";
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import "./addDrivers.css";
import DayPickerInput from "react-day-picker/DayPickerInput";
import "react-day-picker/lib/style.css";



const AddDrivers = () => {
  const [allValues, setAllValues] = useState({});

  const changeHandler = (e) => {
    setAllValues({
      ...allValues,
      [e.target.name]: e.target.value,
    });
  };

  //  const [status, setStatus] = useState({});
  //  const [firstName, setFirstName] = useState({});
  //  const [middleName, setMiddleName] = useState({});
  //  const [lastName, setLastName] = useState({});
  //  const [companyDriver, setCompanyDriver] = useState({});
  //  const [addressName1, setAddressName1] = useState({});
  //  const [zip1, setZip1] = useState({});
  //  const [city1, setCity1] = useState({});
  //  const [state1, setState1] = useState({});
  //  const [hireDate, setHireDate] = useState({});
  //  const [driverGroup, setDriverGroup] = useState({});
  //  const [reviewDate, setReviewDate] = useState({});
  //  const [terminal, setTerminal] = useState({});
  //  const [phoneNumber, setPhoneNumber] = useState({});
  //  const [cellNumber, setCellNumber] = useState({});
  //  const [salutation, setSalutation] = useState({});
  //  const [email, setEmail] = useState({});
  //  const [dispatchGroup, setDispatchGroup] = useState({});
  //  const [nextReviewDate, setNextReviewDate] = useState({});
  //  const [dispatcher, setDispatcher] = useState({});
  //  const [mvrDate, setMvrDate] = useState({});
  //  const [recruiter, setrRecruiter] = useState({});
  //  const [physicalDueDate, setPhysicalDueDate] = useState({});
  //  const [recruitSource, setRecruitSource] = useState({});
  //  const [physicalSubmissionDate, setPhysicalSubmissionDate] = useState({});
  //  const [hiringEligibility, setHiringEligibility] = useState({});
  //  const [cdlMatches, setCdlMatches] = useState({});
  //  const [hardCopy, setHardCopy] = useState({});
  //  const [birthDate, setBirthDate] = useState({});
  //  const [cdlNumber, setCdlNumber] = useState({});
  //  const [ssn, setSsn] = useState({});
  //  const [cdlState, setCdlState] = useState({});
  //  const [sex, setSex] = useState({});
  //  const [cdlExpDate, setCdlExpDate] = useState({});
  //  const [pagerPhoneNumber, setPagerPhoneNumber] = useState({});
  //  const [trailerQualification, setTrailerQualification] = useState({});
  //  const [powerOnly, setPowerOnly] = useState({});
  //  const [stepDeck, setStepDeck] = useState({});
  //  const [dropCheck, setDropCheck] = useState({});
  //  const [reefer, setReefer] = useState({});
  //  const [tanker, setTanker] = useState({});
  //  const [flatBed, setFlatBed] = useState({});
  //  const [rgn, setRgn] = useState({});
  //  const [van, setVan] = useState({});
  //  const [residentExpDate, setResidentExpDate] = useState({});
  //  const [cbHandle, setCbHandle] = useState({});
  //  const [twicExpDate, setTwicExpDate] = useState({});
  //  const [passport, setPassport] = useState({});
  //  const [eobrType, setEobrType] = useState({});
  //  const [passportExpDate, setPassportExpDate] = useState({});
  //  const [eobrId, setEobrId] = useState({});
  //  const [accInsuranceCarrier, setAccInsuranceCarrier] = useState({});
  //  const [accInsuranceStartDate, setAccInsuranceStartDate] = useState({});
  //  const [accInsuranceExpDate, setAccInsuranceExpDate] = useState({});
  //  const [correctiveLenses, setCorrectiveLenses] = useState({});
  //  const [hearingAid, setHearingAid] = useState({});
  //  const [sleepApena, setSleepApena] = useState({});
  //  const [diabetes, setDiabetes] = useState({});
  //  const [highBp, setHighBp] = useState({});
  //  const [yearlyPhysical, setYearlyPhysical] = useState({});
  //  const basicInfo = {
  //    status: status,
  //    firstName: firstName,
  //    middleName: middleName,
  //    lastName: lastName,
  //    companyDriver: companyDriver,
  //    addressName1: addressName1,
  //    zip1: zip1,
  //    city1: city1,
  //    state1: state1,
  //    hireDate: hireDate,
  //    driverGroup: driverGroup,
  //    reviewDate: reviewDate,
  //    terminal: terminal,
  //    phoneNumber: phoneNumber,
  //    secondaryPhoneNumber: cellNumber,
  //    salutation: salutation,
  //    email: email,
  //    dispatchGroup: dispatchGroup,
  //    nextReviewDate: nextReviewDate,
  //    dispatcher: dispatcher,
  //    mvrDate: mvrDate,
  //    recruiter: recruiter,
  //    physicalDueDate: physicalDueDate,
  //    recruitSource: recruitSource,
  //    physicalSubmissionDate: physicalSubmissionDate,
  //    hiringEligibility: hiringEligibility,
  //    cdlMatches: cdlMatches,
  //    hardCopy: hardCopy,
  //    birthDate: birthDate,
  //    cdlNumber: cdlNumber,
  //    ssn: ssn,
  //    cdlState: cdlState,
  //    sex: sex,
  //    cdlExpDate: cdlExpDate,
  //    pagerPhoneNumber: pagerPhoneNumber,
  //    trailerQualification: trailerQualification,
  //    powerOnly: powerOnly,
  //    stepDeck: stepDeck,
  //    dropCheck: dropCheck,
  //    reefer: reefer,
  //    tanker: tanker,
  //    flatBed: flatBed,
  //    rgn: rgn,
  //    van: van,
  //    residentExpDate: residentExpDate,
  //    cbHandle: cbHandle,
  //    twicExpDate: twicExpDate,
  //    passport: passport,
  //    eobrType: eobrType,
  //    passportExpDate: passportExpDate,
  //    eobrId: eobrId,
  //    accInsuranceCarrier: accInsuranceCarrier,
  //    accInsuranceStartDate: accInsuranceStartDate,
  //    accInsuranceExpDate: accInsuranceExpDate,
  //    correctiveLenses: correctiveLenses,
  //    hearingAid: hearingAid,
  //    sleepApena: sleepApena,
  //    diabetes: diabetes,
  //    highBp: highBp,
  //    yearlyPhysical: yearlyPhysical,
  //  };

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
    console.log(allValues);
  };

  // all functionality button here

  // const handleSaveButton = (e) => {
  //   e.preventDefault();
  //   const status = e.target.value;
  //   setStatus(status);
  // };

  // const handleFirstName = (e) => {
  //   e.preventDefault();
  //   const status = e.target.value;
  //   setFirstName(status);
  // };

  // const handleMiddleName = (e) => {
  //   e.preventDefault();
  //   const status = e.target.value;
  //   setMiddleName(status);
  // };

  // const handleLastName = (e) => {
  //   e.preventDefault();
  //   const status = e.target.value;
  //   setLastName(status);
  // };

  // const handleCompanyDriver = (e) => {
  //   e.preventDefault();
  //   const status = e.target.value;
  //   setCompanyDriver(status);
  // };
  // const handleAddressName1 = (e) => {
  //   e.preventDefault();
  //   const status = e.target.value;
  //   setAddressName1(status);
  // };
  // const handleZipName1 = (e) => {
  //   e.preventDefault();
  //   const status = e.target.value;
  //   setZip1(status);
  // };
  // const handleCity1 = (e) => {
  //   e.preventDefault();
  //   const status = e.target.value;
  //   setCity1(status);
  // };
  // const handleState1 = (e) => {
  //   e.preventDefault();
  //   const status = e.target.value;
  //   setState1(status);
  // };
  // const handleHireDate = (e) => {
  //   e.preventDefault();
  //   const status = e.target.value;
  //   setHireDate(status);
  // };
  // const handleDriverGroup = (e) => {
  //   e.preventDefault();
  //   const status = e.target.value;
  //   setDriverGroup(status);
  // };
  // const handleReviewDate = (e) => {
  //   e.preventDefault();
  //   const status = e.target.checked;
  //   setReviewDate(status);
  // };
  // const handleTerminal = (e) => {
  //   e.preventDefault();
  //   const status = e.target.value;
  //   setTerminal(status);
  // };
  // const handlePhoneNumber = (e) => {
  //   e.preventDefault();
  //   const status = e.target.value;
  //   setPhoneNumber(status);
  // };
  // const handleCellNumber = (e) => {
  //   e.preventDefault();
  //   const status = e.target.value;
  //   setCellNumber(status);
  // };
  // const handleSalutation = (e) => {
  //   e.preventDefault();
  //   const status = e.target.value;
  //   setSalutation(status);
  // };
  // const handleEmail = (e) => {
  //   e.preventDefault();
  //   const status = e.target.value;
  //   setEmail(status);
  // };
  // const handleDispatchGroup = (e) => {
  //   e.preventDefault();
  //   const status = e.target.value;
  //   setDispatchGroup(status);
  // };
  // const handleNextReviewDate = (e) => {
  //   e.preventDefault();
  //   const status = e.target.value;
  //   setNextReviewDate(status);
  // };
  // const handleDispatcher = (e) => {
  //   e.preventDefault();
  //   const status = e.target.value;
  //   setDispatcher(status);
  // };
  // const handleMvrDate = (e) => {
  //   e.preventDefault();
  //   const status = e.target.value;
  //   setMvrDate(status);
  // };
  // const handleRecruiter = (e) => {
  //   e.preventDefault();
  //   const status = e.target.value;
  //   setrRecruiter(status);
  // };
  // // const handleState2 = (e) => {
  // //   e.preventDefault();
  // //   const status = e.target.value;
  // //   setState2(status);
  // // };
  // const handleRecruiteSource = (e) => {
  //   e.preventDefault();
  //   const status = e.target.value;
  //   setRecruitSource(status);
  // };
  // const handlePhysicalSubmissionDate = (e) => {
  //   e.preventDefault();
  //   const status = e.target.value;
  //   setPhysicalSubmissionDate(status);
  // };
  // const handleHiringEligibility = (e) => {
  //   e.preventDefault();
  //   const status = e.target.value;
  //   setHiringEligibility(status);
  // };
  // const handleCdlMatches = (e) => {
  //   e.preventDefault();
  //   const status = e.target.value;
  //   setCdlMatches(status);
  // };
  // const handleHardCopy = (e) => {
  //   e.preventDefault();
  //   const status = e.target.checked;
  //   setHardCopy(status);
  // };
  // const handleEmailCopy = (e) => {
  //   e.preventDefault();
  //   const status = e.target.checked;
  //   setBirthDate(status);
  // };
  // const handleCdlNumber = (e) => {
  //   e.preventDefault();
  //   const status = e.target.value;
  //   setCdlNumber(status);
  // };
  // const handleSsn = (e) => {
  //   e.preventDefault();
  //   const status = e.target.value;
  //   setSsn(status);
  // };
  // const handleCdlState = (e) => {
  //   e.preventDefault();
  //   const status = e.target.value;
  //   setCdlState(status);
  // };
  // const handleSex = (e) => {
  //   e.preventDefault();
  //   const status = e.target.value;
  //   setSex(status);
  // };
  // const handleCdlExpDate = (e) => {
  //   e.preventDefault();
  //   const status = e.target.value;
  //   setCdlExpDate(status);
  // };
  // const handlePagerPhoneNumber = (e) => {
  //   e.preventDefault();
  //   const status = e.target.value;
  //   setPagerPhoneNumber(status);
  // };
  // const handleTrailerQualification = (e) => {
  //   e.preventDefault();
  //   const status = e.target.checked;
  //   setTrailerQualification(status);
  // };
  // const handlePowerOnly = (e) => {
  //   e.preventDefault();
  //   const status = e.target.checked;
  //   setPowerOnly(status);
  // };
  // const handleStepDeck = (e) => {
  //   e.preventDefault();
  //   const status = e.target.checked;
  //   setStepDeck(status);
  // };
  // const handleDropCheck = (e) => {
  //   e.preventDefault();
  //   const status = e.target.checked;
  //   setDropCheck(status);
  // };
  // const handleReefer = (e) => {
  //   e.preventDefault();
  //   const status = e.target.checked;
  //   setReefer(status);
  // };
  // const handleTanker = (e) => {
  //   e.preventDefault();
  //   const status = e.target.checked;
  //   setTanker(status);
  // };
  // const handleFlatBed = (e) => {
  //   e.preventDefault();
  //   const status = e.target.checked;
  //   setFlatBed(status);
  // };
  // const handleRgn = (e) => {
  //   e.preventDefault();
  //   const status = e.target.checked;
  //   setRgn(status);
  // };
  // const handleVan = (e) => {
  //   e.preventDefault();
  //   const status = e.target.checked;
  //   setVan(status);
  // };
  // const handleResidentExpDate = (e) => {
  //   e.preventDefault();
  //   const status = e.target.value;
  //   setResidentExpDate(status);
  // };
  // const handleCbHandle = (e) => {
  //   e.preventDefault();
  //   const status = e.target.value;
  //   setCbHandle(status);
  // };
  // const handleTwicExpDate = (e) => {
  //   e.preventDefault();
  //   const status = e.target.value;
  //   setTwicExpDate(status);
  // };
  // const handlePassport = (e) => {
  //   e.preventDefault();
  //   const status = e.target.value;
  //   setPassport(status);
  // };
  // const handleEobrType = (e) => {
  //   e.preventDefault();
  //   const status = e.target.value;
  //   setEobrType(status);
  // };
  // const handleEobrId = (e) => {
  //   e.preventDefault();
  //   const status = e.target.value;
  //   setEobrId(status);
  // };
  // const handleAccIncsuranceCarrier = (e) => {
  //   e.preventDefault();
  //   const status = e.target.value;
  //   setAccInsuranceCarrier(status);
  // };
  // const handleCorrectiveLenses = (e) => {
  //   e.preventDefault();
  //   const status = e.target.checked;
  //   setCorrectiveLenses(status);
  // };
  // const handleHearingAid = (e) => {
  //   e.preventDefault();
  //   const status = e.target.checked;
  //   setHearingAid(status);
  // };
  // const handleSleepApena = (e) => {
  //   e.preventDefault();
  //   const status = e.target.checked;
  //   setSleepApena(status);
  // };
  // const handleDiabetes = (e) => {
  //   e.preventDefault();
  //   const status = e.target.checked;
  //   setDiabetes(status);
  // };
  // const handleHighBp = (e) => {
  //   e.preventDefault();
  //   const status = e.target.checked;
  //   setHighBp(status);
  // };
  // const handleYearlyPhysical = (e) => {
  //   e.preventDefault();
  //   const status = e.target.checked;
  //   setYearlyPhysical(status);
  // };

  return (
    <div>
      <Container>
        <h3 className="mt-5 mb-3">Driver Information</h3>
        <hr></hr>

        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label>Status</Form.Label>
              <Form.Select aria-label="" onChange={changeHandler} name="status">
                <option>Select Status</option>
                <option value="Pending Hire">Pending Hire</option>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
                <option value="Declined">Declined</option>
                <option value="Terminated">Terminated</option>
              </Form.Select>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom02">
              <Form.Label>Home Terminal</Form.Label>

              <Form.Select
                aria-label=""
                onChange={changeHandler}
                name="homeTerminal"
              >
                <option>Select Home Terminal</option>
                <option value="EG, Egales">EG, Egales</option>
              </Form.Select>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustomUsername">
              <p>Hire Date</p>
              {/* <DayPickerInput
                onDayChange={(day) => setHireDate(day)}
                className="datePicker"
              /> */}
              <Form.Control
                type="date"
                placeholder="Hire Date"
                aria-describedby="inputGroupPrepend"
                onChange={changeHandler}
                name="hireDate"
              />
              <Form.Control.Feedback type="invalid">
                Please choose a username.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>Company Driver</Form.Label>
              <Form.Select
                aria-label=""
                onChange={changeHandler}
                name="companyDriver"
              >
                <option>Select Company Driver</option>
                <option value="yes">Yes</option>
                <option value="No">No</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>Driver Group</Form.Label>
              <Form.Select
                aria-label=""
                onChange={changeHandler}
                name="driverGroup"
              >
                <option>Select Driver Group</option>
                <option value="Group A">Group A</option>
                <option value="Group B">Group B</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <p>Review Date</p>
              <Form.Control
                type="date"
                placeholder="Hire Date"
                aria-describedby="inputGroupPrepend"
                onChange={changeHandler}
                name="reviewDate"
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>Salutation</Form.Label>
              <Form.Select
                aria-label=""
                onChange={changeHandler}
                name="salutation"
              >
                <option>Select Salutation</option>
                <option value="Dr">Dr</option>
                <option value="Mr">Mr</option>
                <option value="Mrs">Mrs</option>
                <option value="Ms">Ms</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>Dispatch Group</Form.Label>
              <Form.Select
                aria-label=""
                onChange={changeHandler}
                name="dispatchGroup"
              >
                <option>Select Dispatch Group</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <p>Next Review Date</p>
              <Form.Control
                type="date"
                placeholder="Hire Date"
                aria-describedby="inputGroupPrepend"
                onChange={changeHandler}
                name="nextReviewDate"
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="First Name"
                aria-describedby="inputGroupPrepend"
                onChange={changeHandler}
                name="firstName"
              />

              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>Middle Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Middle Name"
                aria-describedby="inputGroupPrepend"
                onChange={changeHandler}
                name="middleName"
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Last Name"
                aria-describedby="inputGroupPrepend"
                onChange={changeHandler}
                name="lastName"
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>Dispatcher</Form.Label>
              <Form.Control
                type="text"
                placeholder="Dispatcher Name"
                aria-describedby="inputGroupPrepend"
                onChange={changeHandler}
                name="dispatcher"
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <p>MVR Date</p>
              <Form.Control
                type="date"
                placeholder="MVR Date"
                aria-describedby="inputGroupPrepend"
                onChange={changeHandler}
                name="mvrDate"
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Address Name"
                aria-describedby="inputGroupPrepend"
                onChange={changeHandler}
                name="address"
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>Recruiter</Form.Label>
              <Form.Control
                type="text"
                placeholder="Recruiter Name"
                aria-describedby="inputGroupPrepend"
                onChange={changeHandler}
                name="recruiter"
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <p>Physical Due Date</p>
              <Form.Control
                type="date"
                placeholder="Recruiter Name"
                aria-describedby="inputGroupPrepend"
                onChange={changeHandler}
                name="physicalDueDate"
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>Zip</Form.Label>
              <Form.Control
                type="text"
                placeholder="Zip address"
                aria-describedby="inputGroupPrepend"
                onChange={changeHandler}
                name="zip"
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>Recruiting Source</Form.Label>
              <Form.Select
                aria-label=""
                onChange={changeHandler}
                name="recruitingSource"
              >
                <option>Select Recruiting</option>
                <option value="Direct Call">Direct Call</option>
                <option value="Driver Referal">Driver Referal</option>
                <option value="Employee Referal">Employee Referal</option>
                <option value="Facebook">Facebook</option>
                <option value="Indeed">Indeed</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <p>Physical Submitted Date</p>
              <Form.Control
                type="date"
                placeholder="Physical Submitted Date"
                aria-describedby="inputGroupPrepend"
                onChange={changeHandler}
                name="physicalSubmittedDate"
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                placeholder="City Name"
                aria-describedby="inputGroupPrepend"
                onChange={changeHandler}
                name="city"
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>Hiring Eligibility</Form.Label>
              <Form.Select
                aria-label=""
                onChange={changeHandler}
                name="hiringEligibility"
              >
                <option>Select Hiring Eligibility</option>
                <option value="Decrased">Decrased</option>
                <option value="Do Not Rehire">Do Not Rehire</option>
                <option value="Eiligible For Rehire">
                  Eiligible For Rehire
                </option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <p>CDL Matches Physical</p>
              <Form.Check
                label="Agree to terms and conditions"
                feedback="You must agree before submitting."
                feedbackType="invalid"
                onChange={changeHandler}
                name="cdlMatchesPhysical"
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>State</Form.Label>
              <Form.Select aria-label="" onChange={changeHandler} name="state">
                <option>Select State</option>
                <option value="Alabama">Alabama</option>
                <option value="Alaska">Alaska</option>
                <option value="Arizona">Arizona</option>
                <option value="California">California</option>
                <option value="Canada">Canada</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <p>Birth Date</p>
              <Form.Control
                type="date"
                placeholder="City Name"
                aria-describedby="inputGroupPrepend"
                onChange={changeHandler}
                name="birthDate"
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <p>CDL Number</p>
              <Form.Control
                type="text"
                placeholder="CDL Number"
                aria-describedby="inputGroupPrepend"
                onChange={changeHandler}
                name="cdlNumber"
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>Home Phone Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Home Phone Number"
                aria-describedby="inputGroupPrepend"
                onChange={changeHandler}
                name="homePhoneNumber"
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <p>SSN</p>
              <Form.Control
                type="text"
                placeholder="SSN Number"
                aria-describedby="inputGroupPrepend"
                onChange={changeHandler}
                name="ssn"
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <p>CDL State</p>
              <Form.Select
                aria-label=""
                onChange={changeHandler}
                name="cdlState"
              >
                <option>Select State</option>
                <option value="Alabama">Alabama</option>
                <option value="Alaska">Alaska</option>
                <option value="Arizona">Arizona</option>
                <option value="California">California</option>
                <option value="Canada">Canada</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>Cell Phone Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Cell Phone Number"
                aria-describedby="inputGroupPrepend"
                onChange={changeHandler}
                name="cellPhoneNumber"
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <p>Sex</p>
              <Form.Select aria-label="" onChange={changeHandler} name="sex">
                <option>Select Sex</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <p>CDL Expire Date</p>
              <Form.Control
                type="date"
                placeholder="Cell Phone Number"
                aria-describedby="inputGroupPrepend"
                onChange={changeHandler}
                name="cdlExpireDate"
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>Pager Phone Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Pager Phone Number"
                aria-describedby="inputGroupPrepend"
                onChange={changeHandler}
                name="pagerPhoneNumber"
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <p>Trailer Qualification</p>
              <Row>
                <Col sm={4}>
                  <Form.Check
                    label="Conestoga"
                    feedback="You must agree before submitting."
                    feedbackType="invalid"
                    onChange={changeHandler}
                    name="trailerQualification"
                  />
                  <Form.Check
                    label="Power Only"
                    feedback="You must"
                    feedbackType="invalid"
                    onChange={changeHandler}
                    name="powerOnly"
                  />
                  <Form.Check
                    onChange={changeHandler}
                    name="stepDeck"
                    label="Step Deck"
                    feedback="You must agree before submitting."
                    feedbackType="invalid"
                  />
                </Col>
                <Col sm={4}>
                  <Form.Check
                    label="Drop Check"
                    feedback="You must agree before submitting."
                    feedbackType="invalid"
                    onChange={changeHandler}
                    name="dropCheck"
                  />
                  <Form.Check
                    label="Reefer"
                    feedback="You"
                    feedbackType="invalid"
                    onChange={changeHandler}
                    name="reefer"
                  />
                  <Form.Check
                    label="Tanker"
                    feedback="You"
                    feedbackType="invalid"
                    onChange={changeHandler}
                    name="tanker"
                  />
                </Col>
                <Col sm={4}>
                  <Form.Check
                    label="Flat Bed"
                    feedback="You must agree before submitting."
                    feedbackType="invalid"
                    onChange={changeHandler}
                    name="flatBed"
                  />
                  <Form.Check
                    label="RGN"
                    feedback="You must agree before submitting."
                    feedbackType="invalid"
                    onChange={changeHandler}
                    name="rgn"
                  />
                  <Form.Check
                    label="Van"
                    feedback="You must agree before submitting."
                    feedbackType="invalid"
                    onChange={changeHandler}
                    name="van"
                  />
                </Col>
              </Row>
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <p>Resident Expiration Date</p>
              <Form.Control
                type="date"
                placeholder="Resident Expiration Date"
                aria-describedby="inputGroupPrepend"
                onChange={changeHandler}
                name="residentExpirationDate"
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>CB Handle</Form.Label>
              <Form.Control
                type="text"
                placeholder="Pager Phone Number"
                aria-describedby="inputGroupPrepend"
                onChange={changeHandler}
                name="cdHandle"
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <p>TWIC Expiration Date</p>
              <Form.Control
                type="date"
                placeholder="Pager Phone Number"
                aria-describedby="inputGroupPrepend"
                onChange={changeHandler}
                name="twicExpirationDate"
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <p>Email</p>
              <Form.Control
                type="email"
                placeholder="Email Address"
                aria-describedby="inputGroupPrepend"
                onChange={changeHandler}
                name="email"
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>Passport</Form.Label>
              <Form.Control
                type="text"
                placeholder="Passport Number"
                aria-describedby="inputGroupPrepend"
                onChange={changeHandler}
                name="passport"
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <p>EOBR Type</p>
              <Form.Select
                aria-label=""
                onChange={changeHandler}
                name="eobrType"
              >
                <option>Select EOBR Type</option>
                <option value="Geotab">Geotab</option>
                <option value="Keep Truncking">Keep Truncking</option>
                <option value="M2M In Motion">M2M In Motion</option>
                <option value="People Net">People Net</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <p>Passport Expire Date</p>
              <Form.Control
                type="date"
                placeholder="Passport Number"
                aria-describedby="inputGroupPrepend"
                onChange={changeHandler}
                name="passportExpireDate"
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>EOBR ID</Form.Label>
              <Form.Control
                type="text"
                placeholder="EOBR ID"
                aria-describedby="inputGroupPrepend"
                onChange={changeHandler}
                name="eobrID"
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <p>Occ Acc Insurance Carrier</p>
              <Form.Control
                type="text"
                placeholder="Occ Acc"
                aria-describedby="inputGroupPrepend"
                onChange={changeHandler}
                name="occAccInsuranceCarrier"
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <p>Occ Acc Insurance Start Date</p>
              <Form.Control
                type="date"
                placeholder="Occ Acc"
                aria-describedby="inputGroupPrepend"
                onChange={changeHandler}
                name="occAccInsuranceStartDate"
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <p>Occ Acc Insurance Exp Date</p>
              <Form.Control
                type="date"
                placeholder="Occ Acc"
                aria-describedby="inputGroupPrepend"
                onChange={changeHandler}
                name="occAccInsuranceExpDate"
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <p>Medical</p>
              <Row>
                <Col sm={6}>
                  <Form.Check
                    label="Corrective Lenses"
                    feedback="You"
                    feedbackType="invalid"
                    onChange={changeHandler}
                    name="correctiveLenses"
                  />
                  <Form.Check
                    label="Hearing Aid"
                    feedback="You"
                    feedbackType="invalid"
                    onChange={changeHandler}
                    name="hearingAid"
                  />
                  <Form.Check
                    label="Sleep Apnea"
                    feedback="You"
                    feedbackType="invalid"
                    onChange={changeHandler}
                    name="sleepApnea"
                  />
                </Col>
                <Col sm={6}>
                  <Form.Check
                    label="Diabetes"
                    feedback="You"
                    feedbackType="invalid"
                    onChange={changeHandler}
                    name="diabetes"
                  />
                  <Form.Check
                    label="High Blood Pressure"
                    feedback="You"
                    feedbackType="invalid"
                    onChange={changeHandler}
                    name="highBloodPressure"
                  />
                  <Form.Check
                    label="Yearly Physical"
                    feedback="You"
                    feedbackType="invalid"
                    onChange={changeHandler}
                    name="yearlyPhysical"
                  />
                </Col>
              </Row>
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Form.Group className="mb-3">
            <Form.Check
              
              label="Agree to terms and conditions"
              feedback="You must agree before submitting."
              feedbackType="invalid"
            />
          </Form.Group>
          <Button type="submit" variant="outline-primary" className="mb-5">
            Save Record
          </Button>
          <Button type="submit" variant="outline-primary" className="ms-3 mb-5">
            Save and Add New
          </Button>
          <Button variant="outline-danger" className="ms-3 mb-5">
            Cancel
          </Button>{" "}
        </Form>
      </Container>
    </div>
  );
};

export default AddDrivers;
