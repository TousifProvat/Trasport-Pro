import React, { useEffect, useState } from "react";
import {
  Button,
  Col,
  Container,
  FloatingLabel,
  Form,
  Modal,
  Row,
  Table,
} from "react-bootstrap";
import "./searchDriver.css";
import DayPickerInput from "react-day-picker/DayPickerInput";
import "react-day-picker/lib/style.css";
import useContext from "../Hooks/useContext";
const SearchDrivers = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [validated, setValidated] = useState(false);
  const { driverDate } = useContext();
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    console.log(basicInfo);
    setValidated(true);
    
    // console.log(allValues);
  };


  const [status, setStatus] = useState({});
  const [firstName, setFirstName] = useState({});
  const [id, setId] = useState({});
  const [lastName, setLastName] = useState({});
  const [companyDriver, setCompanyDriver] = useState({});
  const [addressName1, setAddressName1] = useState({});
  const [zip1, setZip1] = useState({});
  const [city1, setCity1] = useState({});
  const [state1, setState1] = useState({});
  const [hireDate, setHireDate] = useState({});
  const [driverGroup, setDriverGroup] = useState({});
  const [reviewDate, setReviewDate] = useState({});
  const [terminal, setTerminal] = useState({});
  const [phoneNumber, setPhoneNumber] = useState({});
  const [cellNumber, setCellNumber] = useState({});
  const [state, setState] = useState({});
  const [email, setEmail] = useState({});
  const [dispatchGroup, setDispatchGroup] = useState({});
  const [nextReviewDate, setNextReviewDate] = useState({});
  const [dispatcher, setDispatcher] = useState({});
  const [mvrDate, setMvrDate] = useState({});
  const [recruiter, setrRecruiter] = useState({});
  const [physicalDueDate, setPhysicalDueDate] = useState({});
  const [recruitSource, setRecruitSource] = useState({});
  const [physicalSubmissionDate, setPhysicalSubmissionDate] = useState({});
  const [hiringEligibility, setHiringEligibility] = useState({});
  const [cdlMatches, setCdlMatches] = useState({});
  const [loadId, setLoadId] = useState({});
  const [birthDate, setBirthDate] = useState({});
  const [cdlNumber, setCdlNumber] = useState({});
  const [ssn, setSsn] = useState({});
  const [cdlState, setCdlState] = useState({});
  const [sex, setSex] = useState({});
  const [cdlExpDate, setCdlExpDate] = useState({});
  const [pagerPhoneNumber, setPagerPhoneNumber] = useState({});
  const [trailerQualification, setTrailerQualification] = useState({});
  const [powerOnly, setPowerOnly] = useState({});
  const [missingImg, setMissingImg] = useState({});
  const [dropCheck, setDropCheck] = useState({});
  const [cdlMatchesPhysical, setCdlMatchesPhysical] = useState({});
  const [hasActive, setHasActive] = useState({});
  const [flatBed, setFlatBed] = useState({});
  const [lastMvrDate, setLastMvrDate] = useState({});
  const [eobr, setEobr] = useState({});
  const [residentExpDate, setResidentExpDate] = useState({});
  const [cbHandle, setCbHandle] = useState({});
  const [hasImg, setHasImg] = useState({});
  const [driverPosting, setDriverPosting] = useState({});
  const [eobrType, setEobrType] = useState({});
  const [passportExpDate, setPassportExpDate] = useState({});
  const [eobrId, setEobrId] = useState({});
  const [trailerId, setTrailerId] = useState({});
  const [numberLoadLast, setNumberLoadLast] = useState({});
  const [accInsuranceExpDate, setAccInsuranceExpDate] = useState({});
  const [tractorId, setTractorId] = useState({});
  const [retentionRate, setRetentionRate] = useState({});
  const [termReason, setTermReason] = useState({});
  const [medicalCondition, setMedicalCondition] = useState({});
  const [workComp, setWorkComp] = useState({});
  const [termDate, setTermDate] = useState({});


  

  
  // const [allValues, setAllValues] = useState({
  //   cdlMatchesPhysical: "",
  //       hasActiveTwic: "",
  // });

  // const handleAllValue = (event) => {
  //   setAllValues({
  //     cdlMatchesPhysical: event.target.value,
  //     hasActiveTwic: event.target.checked,
      
  //   });
  // }

  // useEffect(() => {
  //   // At this point, input variable (with both props text and caret) is updated
  // }, [allValues]);

  // const onChange = (e) => {
  //   setState((prevState) => ({
  //     ...prevState,
  //     [e.target.name]: e.target.value,
  //   }));
  // };
  const basicInfo = {
    status: status,
    firstName: firstName,
    id: id,
    lastName: lastName,
    companyDriver: companyDriver,
    addressName1: addressName1,
    zip1: zip1,
    city1: city1,
    state1: state1,
    hireDate: hireDate,
    driverGroup: driverGroup,
    reviewDate: reviewDate,
    terminal: terminal,
    phoneNumber: phoneNumber,
    secondaryPhoneNumber: cellNumber,
    state: state,
    email: email,
    dispatchGroup: dispatchGroup,
    nextReviewDate: nextReviewDate,
    dispatcher: dispatcher,
    mvrDate: mvrDate,
    recruiter: recruiter,
    physicalDueDate: physicalDueDate,
    recruitSource: recruitSource,
    physicalSubmissionDate: physicalSubmissionDate,
    hiringEligibility: hiringEligibility,
    cdlMatches: cdlMatches,
    loadId: loadId,
    birthDate: birthDate,
    cdlNumber: cdlNumber,
    ssn: ssn,
    cdlState: cdlState,
    sex: sex,
    cdlExpDate: cdlExpDate,
    pagerPhoneNumber: pagerPhoneNumber,
    trailerQualification: trailerQualification,
    powerOnly: powerOnly,
    missingImg: missingImg,
    dropCheck: dropCheck,
    cdlMatchesPhysical: cdlMatchesPhysical,
    hasActive: hasActive,
    flatBed: flatBed,
    lastMvrDate: lastMvrDate,
    eobr: eobr,
    residentExpDate: residentExpDate,
    cbHandle: cbHandle,
    hasImg: hasImg,
    driverPosting: driverPosting,
    eobrType: eobrType,
    passportExpDate: passportExpDate,
    eobrId: eobrId,
    trailerId: trailerId,
    numberLoadLast: numberLoadLast,
    accInsuranceExpDate: accInsuranceExpDate,
    tractorId: tractorId,
    retentionRate: retentionRate,
    termReason: termReason,
    medicalCondition: medicalCondition,
    workComp: workComp,
    termDate: termDate,
  };


  // const handleAllData = (e) => {
  //   setAllValues({
  //     cdlMatchesPhysical: e.target.value,
  //     hasActiveTwic: e.target.checked,
  //     cdlExpDate: e.target.day,
  //   });
  // };

  console.log(driverDate);

  const handleSaveButton = (e) => {
    e.preventDefault();
    const status = e.target.value;
    setStatus(status);
  };

  const handleFirstName = (e) => {
    e.preventDefault();
    const status = e.target.value;
    setFirstName(status);
  };

  const handleId = (e) => {
    e.preventDefault();
    const status = e.target.value;
    setId(status);
  };

  const handleLastName = (e) => {
    e.preventDefault();
    const status = e.target.value;
    setLastName(status);
  };

  const handleCompanyDriver = (e) => {
    e.preventDefault();
    const status = e.target.value;
    setCompanyDriver(status);
  };
  const handleAddressName1 = (e) => {
    e.preventDefault();
    const status = e.target.value;
    setAddressName1(status);
  };
  const handleZipName1 = (e) => {
    e.preventDefault();
    const status = e.target.value;
    setZip1(status);
  };
  const handleCity1 = (e) => {
    e.preventDefault();
    const status = e.target.value;
    setCity1(status);
  };
  const handleState1 = (e) => {
    e.preventDefault();
    const status = e.target.value;
    setState1(status);
  };
  
  const handleDriverGroup = (e) => {
    e.preventDefault();
    const status = e.target.value;
    setDriverGroup(status);
  };
  const handleReviewDate = (e) => {
    e.preventDefault();
    const status = e.target.checked;
    setReviewDate(status);
  };
  const handleTerminal = (e) => {
    e.preventDefault();
    const status = e.target.value;
    setTerminal(status);
  };
  const handlePhoneNumber = (e) => {
    e.preventDefault();
    const status = e.target.value;
    setPhoneNumber(status);
  };
  const handleCellNumber = (e) => {
    e.preventDefault();
    const status = e.target.value;
    setCellNumber(status);
  };
  const handleState = (e) => {
    e.preventDefault();
    const status = e.target.value;
    setState(status);
  };
  const handleEmail = (e) => {
    e.preventDefault();
    const status = e.target.value;
    setEmail(status);
  };
  const handleDispatchGroup = (e) => {
    e.preventDefault();
    const status = e.target.value;
    setDispatchGroup(status);
  };
  const handleNextReviewDate = (e) => {
    e.preventDefault();
    const status = e.target.value;
    setNextReviewDate(status);
  };
  const handleDispatcher = (e) => {
    e.preventDefault();
    const status = e.target.value;
    setDispatcher(status);
  };
  const handleMvrDate = (e) => {
    e.preventDefault();
    const status = e.target.value;
    setMvrDate(status);
  };
  const handleRecruiter = (e) => {
    e.preventDefault();
    const status = e.target.value;
    setrRecruiter(status);
  };
  const handleRecruiteSource = (e) => {
    e.preventDefault();
    const status = e.target.value;
    setRecruitSource(status);
  };
  const handlePhysicalSubmissionDate = (e) => {
    e.preventDefault();
    const status = e.target.value;
    setPhysicalSubmissionDate(status);
  };
  const handleHiringEligibility = (e) => {
    e.preventDefault();
    const status = e.target.value;
    setHiringEligibility(status);
  };
  const handleCdlMatches = (e) => {
    e.preventDefault();
    const status = e.target.value;
    setCdlMatches(status);
  };
  const handleLoadId = (e) => {
    e.preventDefault();
    const status = e.target.value;
    setLoadId(status);
  };
  const handleEmailCopy = (e) => {
    e.preventDefault();
    const status = e.target.checked;
    setBirthDate(status);
  };
  const handleCdlNumber = (e) => {
    e.preventDefault();
    const status = e.target.value;
    setCdlNumber(status);
  };
  const handleSsn = (e) => {
    e.preventDefault();
    const status = e.target.value;
    setSsn(status);
  };
  const handleCdlState = (e) => {
    e.preventDefault();
    const status = e.target.value;
    setCdlState(status);
  };
  const handleSex = (e) => {
    e.preventDefault();
    const status = e.target.value;
    setSex(status);
  };
  const handleCdlExpDate = (e) => {
    e.preventDefault();
    const status = e.target.value;
    setCdlExpDate(status);
  };
  const handlePagerPhoneNumber = (e) => {
    e.preventDefault();
    const status = e.target.value;
    setPagerPhoneNumber(status);
  };
  const handleTrailerQualification = (e) => {
    e.preventDefault();
    const status = e.target.checked;
    setTrailerQualification(status);
  };
  const handlePowerOnly = (e) => {
    e.preventDefault();
    const status = e.target.checked;
    setPowerOnly(status);
  };
  const handleMissingImg = (e) => {
    e.preventDefault();
    const status = e.target.value;
    setMissingImg(status);
  };
  const handleDropCheck = (e) => {
    e.preventDefault();
    const status = e.target.checked;
    setDropCheck(status);
  };
  const handleCdlMatchesPhysical = (e) => {
    e.preventDefault();
    const status = e.target.Value;
    setCdlMatchesPhysical(status);
  };
  const handleHasActive = (e) => {
    e.preventDefault();
    const status = e.target.checked;
    setHasActive(status);
  };
  const handleNumberLoadLast = (e) => {
    e.preventDefault();
    const status = e.target.checked;
    setNumberLoadLast(status);
  };
  const handleEobr = (e) => {
    e.preventDefault();
    const status = e.target.value;
    setEobr(status);
  };
  const handleResidentExpDate = (e) => {
    e.preventDefault();
    const status = e.target.value;
    setResidentExpDate(status);
  };
  const handleCbHandle = (e) => {
    e.preventDefault();
    const status = e.target.value;
    setCbHandle(status);
  };
  const handleHasImg = (e) => {
    e.preventDefault();
    const status = e.target.value;
    setHasImg(status);
  };
  const handleDriverPosting = (e) => {
    e.preventDefault();
    const status = e.target.value;
    setDriverPosting(status);
  };
  const handleEobrType = (e) => {
    e.preventDefault();
    const status = e.target.value;
    setEobrType(status);
  };

  const handleTrailerId = (e) => {
    e.preventDefault();
    const status = e.target.value;
    setTrailerId(status);
  };
  const handleTractorId = (e) => {
    e.preventDefault();
    const status = e.target.checked;
    setTractorId(status);
  };
  const handleRetentionRate = (e) => {
    e.preventDefault();
    const status = e.target.value;
    setRetentionRate(status);
  };
  const handleTermReason = (e) => {
    e.preventDefault();
    const status = e.target.value;
    setTermReason(status);
  };
  const handleMedicalCondition = (e) => {
    e.preventDefault();
    const status = e.target.value;
    setMedicalCondition(status);
  };
  const handleWorkComp = (e) => {
    e.preventDefault();
    const status = e.target.checked;
    setWorkComp(status);
  };
  

  // console.log(driverDate);
  return (
    <div>
      <Container>
        <h3 className="mt-5 mb-3">Search Drivers</h3>
        <hr></hr>

        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label>ID</Form.Label>
              <Form.Control
                type="number"
                placeholder="ID Number"
                onBlur={handleId}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom02">
              <Form.Label>Terminal</Form.Label>
              <Form.Select
                aria-label="Default select example"
                onBlur={handleTerminal}
              >
                <option>Select Terminal</option>
                <option value="EG Egales">EG Egales</option>
              </Form.Select>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustomUsername">
              <Form.Label>Status</Form.Label>
              <Form.Select
                aria-label="Default select example"
                onBlur={handleSaveButton}
              >
                <option>Select Status</option>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
                <option value="Pending Hire">Pending Hire</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Please choose a username.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>Retention Rate</Form.Label>
              <Form.Select
                aria-label="Default select example"
                onBlur={handleRetentionRate}
              >
                <option>Select Retention Rate</option>
                <option value="0-90">0-90</option>
                <option value="91-180">91-180</option>
                <option value="181-270">181-270</option>
                <option value="270+">270+</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>Company Driver</Form.Label>
              <Form.Select
                aria-label="Default select example"
                onBlur={handleCompanyDriver}
              >
                <option>Select Company Driver</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>Term Reason </Form.Label>
              <Form.Select
                aria-label="Default select example"
                onBlur={handleTermReason}
              >
                <option>Select Term Reason</option>
                <option value="Don't Get Enough Loads">
                  Don't Get Enough Loads
                </option>
                <option value="Don't Get Home Enough">
                  Don't Get Home Enough
                </option>
                <option value="Get Quite Lease Other">
                  Get Quite Lease Other
                </option>
              </Form.Select>
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
                onBlur={handleFirstName}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Last Name"
                onBlur={handleLastName}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>Medical Condition</Form.Label>
              <Form.Select
                aria-label="Default select example"
                onBlur={handleMedicalCondition}
              >
                <option>Select Medical Condition</option>
                <option value="Crrective Lenses">Crrective Lenses</option>
                <option value="Dieabetes">Dieabetes</option>
                <option value="Hearing Aid">Hearing Aid</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>Subject to Work Comp </Form.Label>
              <Form.Select
                aria-label="Default select example"
                onBlur={handleWorkComp}
              >
                <option>Select Subject to Work Comp</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="number"
                placeholder="Phone Number"
                onBlur={handlePhoneNumber}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>CDL # </Form.Label>
              <Form.Control
                type="text"
                placeholder="CDL Number"
                onBlur={handleCdlNumber}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>State </Form.Label>
              <Form.Select
                aria-label="Default select example"
                onBlur={handleState}
              >
                <option>Select State</option>
                <option value="Alabama">Alabama</option>
                <option value="Alaska">Alaska</option>
                <option value="Arizona">Arizona</option>
                <option value="California">California</option>
                <option value="Canada">Canada</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>CDL State </Form.Label>
              <Form.Select
                aria-label="Default select example"
                onBlur={handleCdlState}
              >
                <option>Select CDL State</option>
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
              <Form.Label>Load ID</Form.Label>
              <Form.Control
                type="number"
                placeholder="Load ID Number"
                onBlur={handleLoadId}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>CDL Matches Physical</Form.Label>
              <Form.Select
                aria-label="Default select example"
                onBlur={handleCdlMatchesPhysical}
              >
                <option>Select CDL Matches Physical State</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>Has Active TWIC?</Form.Label>
              <Form.Check
                required
                label="Yes"
                feedback="You must agree before submitting."
                feedbackType="invalid"
                onBlur={handleHasActive}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <p>CDL Exp Date</p>
              <DayPickerInput
                onDayChange={(e) => setCdlExpDate(e)}
                className="datePicker"
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
                placeholder="Dispatcher"
                onBlur={handleDispatcher}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <p>Last MVR Date</p>
              <DayPickerInput
                onDayChange={(day) => setLastMvrDate(day)}
                className="datePicker"
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <p>Dispatch Group</p>
              <Form.Select
                aria-label="Default select example"
                onBlur={handleDispatchGroup}
              >
                <option>Select Dispatcher Group</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <p>Next Review Date</p>
              <DayPickerInput
                onDayChange={(day) => setNextReviewDate(day)}
                className="datePicker"
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <p>Recruiter</p>
              <Form.Control
                type="text"
                placeholder="Recruiter Name"
                onBlur={handleRecruiter}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <p>Physical Due Date</p>
              <DayPickerInput
                onDayChange={(day) => setPhysicalDueDate(day)}
                className="datePicker"
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <p>Recruiting Source</p>
              <Form.Select
                aria-label="Default select example"
                onBlur={handleRecruiteSource}
              >
                <option>Select Recruiting Source</option>
                <option value="Direct Call">Direact Call</option>
                <option value="Driver Refereal">Driver Refereal</option>
                <option value="Employee Referal">Employee Referal</option>
                <option value="Facebook">Facebook</option>
                <option value="Indeed">Indeed</option>
                <option value="Other">Other</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <p>Physical Submitted Date</p>
              <DayPickerInput
                onDayChange={(day) => setPhysicalSubmissionDate(day)}
                className="datePicker"
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <p>Hirirng Eligibility</p>
              <Form.Select
                aria-label="Default select example"
                onBlur={handleHiringEligibility}
              >
                <option>Select Hiring Eligibility</option>
                <option value="Eligible For Rehire">Eligible For Rehire</option>
                <option value="Do Not Rehire">Do Not Rehire</option>
                <option value="Deceased">Deceased</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <p>Hire Date</p>
              <DayPickerInput
                onDayChange={(day) => setHireDate(day)}
                className="datePicker"
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <p>Tractor ID</p>
              <Form.Control
                type="number"
                placeholder="Tractor ID"
                onBlur={handleTractorId}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <p>Term Date </p>
              <DayPickerInput
                onDayChange={(day) => setTermDate(day)}
                className="datePicker"
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <p>Trailer ID</p>
              <Form.Control
                type="number"
                placeholder="Trailer ID"
                onBlur={handleTrailerId}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <p>Resident Exp Date </p>
              <DayPickerInput
                onDayChange={(day) => setResidentExpDate(day)}
                className="datePicker"
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <p>SSN(Last 4 Digits) </p>
              <Form.Control
                type="number"
                placeholder="SSN ID"
                onBlur={handleSsn}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <p>No Loads in Last </p>
              <Form.Select
                aria-label="Default select example"
                onBlur={handleNumberLoadLast}
              >
                <option>Select No Loads in Last</option>
                <option value="5 days">5 days</option>
                <option value="10 Days">10 Days</option>
                <option value="15 Days">15 Days</option>
                <option value="30 Days">30 Days</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <p>EOBR</p>
              <Form.Select
                aria-label="Default select example"
                onBlur={handleEobr}
              >
                <option>Select EOBR</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <p>EOBR Type</p>
              <Form.Select
                aria-label="Default select example"
                onBlur={handleEobrType}
              >
                <option>Select EOBR Type</option>
                <option value="Geotab">Geotab</option>
                <option value="M2M in Motion">M2M in Motion</option>
                <option value="People Net">People Net</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <p>Driver Posting </p>
              <Form.Select
                aria-label="Default select example"
                onBlur={handleDriverPosting}
              >
                <option>Select Driver Posting</option>
                <option value="Auto Update">Auto Update</option>
                <option value="Expiration Date">Expiration Date</option>
                <option value="None">None</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <p>Has Image</p>
              <Form.Control
                type="text"
                placeholder="Has Image"
                onBlur={handleHasImg}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <p>Missing Image</p>
              <Form.Control
                type="text"
                placeholder="Missing Image"
                onBlur={handleMissingImg}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Form.Group className="mb-3">
            <Form.Check
              required
              label="Agree to terms and conditions"
              feedback="You must agree before submitting."
              feedbackType="invalid"
            />
          </Form.Group>
          <Button variant="outline-primary" type="submit" className="mb-5 me-3">
            Search
          </Button>
          <Button variant="outline-danger" className="mb-5 me-3">
            Clear
          </Button>
          <Button variant="outline-primary" className="mb-5 me-3">
            Save Search
          </Button>{" "}
        </Form>
      </Container>

      <Container fluid>
        <h3>Search Results (1)</h3>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Driver Status</th>
              <th>Driver</th>
              <th>City</th>
              <th>State</th>
              <th>Terminal</th>
              <th>Dispatcher</th>
              <th>Home Phone Number</th>
              <th>Cell Phone Number</th>
              <th>Email</th>
              <th>CB Handle</th>
              <th>CDL State</th>
              <th>CDL Exp.</th>
              <th>Physical Exp.</th>
              <th>Resident Exp.</th>
              <th>Annual Review</th>
              <th>Next Annual Review</th>
              <th>Hire Date</th>
              <th>Term</th>
              <th>Driver Posting</th>
            </tr>
          </thead>

          {driverDate.map((i) => (
            <tbody>
              <tr>
                <td>{i.id}</td>
                <td>{i.status}</td>
                <td>{i.driverName}</td>
                <td>{i.city}</td>
                <td>{i.state}</td>
                <td>{i.terminal}</td>
                <td>{i.dispatcher}</td>
                <td>{i.HomePhone}</td>
                <td>{i.cellPhone}</td>
                <td>{i.email}</td>
                <td>{i.cbHandle}</td>
                <td>{i.cdlState}</td>
                <td>{i.cdlExpDate}</td>
                <td>{i.physicalDueDate}</td>
                <td>{i.residentExpDate}</td>
                <td>{i.annualReview}</td>
                <td>{i.NxtAnnualReview}</td>
                <td>{i.hireDate}</td>
                <td>{i.termDate}</td>
                <Button
                  variant="outline-success"
                  className="mt-3 mb-3 ms-3"
                  onClick={handleShow}
                >
                  Post
                </Button>{" "}
                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Driver Posting</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Row>
                      <Col>
                        <p>
                          Driver:{" "}
                          <strong>
                            {i.id} --- {i.driverName}
                          </strong>
                        </p>
                      </Col>
                      <Col>
                        <Form.Select aria-label="Default select example">
                          <option>Select Posting Type</option>
                          <option value="Auto Update">Auto Update</option>
                          <option value="Expiration Date">
                            Expiration Date
                          </option>
                          <option value="None">None</option>
                        </Form.Select>
                      </Col>
                    </Row>

                    <FloatingLabel
                      controlId="floatingTextarea2"
                      label="Posting Note"
                    >
                      <Form.Control
                        as="textarea"
                        placeholder="Leave a comment here"
                        style={{ height: "100px", marginTop: "20px" }}
                      />
                    </FloatingLabel>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                      Save Record
                    </Button>
                    <Button variant="danger" onClick={handleClose}>
                      Clear
                    </Button>
                  </Modal.Footer>
                </Modal>
              </tr>
            </tbody>
          ))}
        </Table>
      </Container>
    </div>
  );
};

export default SearchDrivers;
