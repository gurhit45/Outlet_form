import React, { useEffect } from "react";
import { useState } from "react";
import FileUploader from "./FileUploader";
import CustomRadio from "./CustomRadio";
import "../assets/signup.css";

function Signup() {
  const [formErrors, setFormErrors] = useState({});
  const [docs, setDocs] = useState({
    aadhar: "",
    pan: "",
  });
  const [formData, setFormData] = useState({
    personName: "",
    empCode: "",
    outlet: "",
    outletCode: "",
    outletName: "",
    ownerName: "",
    mobile: "",
    address: "",
    area: "",
    pin: "",
    lon: 0,
    lat: 0,
    gst: "",
    channel: "",
    category: "",
    sga: "",
    sgaSelect: "",
    volume: "",
    route: "",
    w1: "",
    w2: "",
    w3: "",
    w4: "",
    w5: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleDocs = (file, fieldName) => {
    setDocs({
      ...docs,
      [fieldName]: file.name,
    });
  };
  const {
    personName,
    empCode,
    outlet,
    outletCode,
    outletName,
    ownerName,
    mobile,
    address,
    area,
    pin,
    lon,
    lat,
    gst,
    channel,
    category,
    sga,
    sgaSelect,
    volume,
    route,
    w1,
    w2,
    w3,
    w4,
    w5,
  } = formData;

  const { aadhar, pan } = docs;

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        setFormData({
          ...formData,
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
      });
    } else {
      console.log("Geolocation is not available.");
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const combinedObj = { ...formData, ...docs };
    setFormErrors(validateHandler(combinedObj));
    setIsSubmit(true);
  };

  const validateHandler = (values) => {
    const errors = {};
    if (!values.personName) {
      errors.personName = "Please provide person name.";
    }
    if (!values.empCode) {
      errors.empCode = "Please provide Employee code.";
    }
    if (!values.outlet) {
      errors.outlet = "Please select an outlet.";
    }
    if (!values.outletCode) {
      errors.outletCode = "Please provide Outlet code.";
    }
    if (!values.outletName) {
      errors.outletName = "Please provide Outlet name.";
    }
    if (!values.ownerName) {
      errors.ownerName = "Please provide Owner name.";
    }
    if (!values.mobile) {
      errors.mobile = "Please provide Mobile number.";
    }
    if (!values.address) {
      errors.address = "Please provide address.";
    }
    if (!values.area) {
      errors.area = "Please provide Area/City.";
    }
    if (!values.pin) {
      errors.pin = "Please provide Pincode.";
    }
    if (!values.aadhar) {
      errors.aadhar = "Please upload valid aadhar.";
    }
    if (!values.pan) {
      errors.pan = "Please upload valid PAN.";
    }
    if (!values.gst) {
      errors.gst = "Please Select a valid option.";
    }
    if (!values.channel) {
      errors.channel = "Please Select a valid option.";
    }
    if (!values.category) {
      errors.category = "Please Select a valid option.";
    }
    if (!values.sga) {
      errors.sga = "Please Select a valid option.";
    }
    if (!values.sgaSelect) {
      errors.sgaSelect = "Please Select a valid option.";
    }
    if (!values.volume) {
      errors.volume = "Please provide volume.";
    }
    if (!values.route) {
      errors.route = "Please provide route.";
    }
    if (!values.w1) {
      errors.w1 = "Please Select a valid option.";
    }
    return errors;
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="personName" className="customLabel">
            Sales Person Name
          </label>
          <input
            type="text"
            name="personName"
            id="personName"
            value={personName}
            onChange={handleChange}
          />
          {!formData.personName && (
            <p className="errorMsg">{formErrors.personName}</p>
          )}
        </div>
        <div className="form-control">
          <label htmlFor="empCode" className="customLabel">
            Employee Code
          </label>
          <input
            type="tel"
            name="empCode"
            id="empCode"
            value={empCode}
            onChange={handleChange}
          />
          {!formData.empCode && (
            <p className="errorMsg">{formErrors.empCode}</p>
          )}
        </div>
        <div className="form-control mb-24">
          <CustomRadio
            name="outlet"
            id="newOutlet"
            value="New"
            text="New Outlet"
            checked={outlet === "New"}
            onChange={handleChange}
          />
          <CustomRadio
            name="outlet"
            id="oldOutlet"
            value="Exiting"
            text="Exiting Outlet"
            checked={outlet === "Exiting"}
            onChange={handleChange}
          />
          {formData.outlet === "" && (
            <p className="errorMsg">{formErrors.outlet}</p>
          )}
        </div>
        <div className="form-control">
          <label htmlFor="outletCode" className="customLabel">
            OUTLET CODE
          </label>
          <input
            type="text"
            name="outletCode"
            id="outletCode"
            value={outletCode}
            onChange={handleChange}
          />
          {!formData.outletCode && (
            <p className="errorMsg">{formErrors.outletCode}</p>
          )}
        </div>
        <div className="form-control">
          <label htmlFor="outletName" className="customLabel">
            Outlet Name
          </label>
          <input
            type="text"
            name="outletName"
            id="outletName"
            value={outletName}
            onChange={handleChange}
          />
          {!formData.outletName && (
            <p className="errorMsg">{formErrors.outletName}</p>
          )}
        </div>
        <div className="form-control">
          <label htmlFor="ownerName" className="customLabel">
            Owner Name
          </label>
          <input
            type="text"
            name="ownerName"
            id="ownerName"
            value={ownerName}
            onChange={handleChange}
          />
          {!formData.ownerName && (
            <p className="errorMsg">{formErrors.ownerName}</p>
          )}
        </div>
        <div className="form-control">
          <label htmlFor="mobile" className="customLabel">
            Mobile Number
          </label>
          <input
            type="tel"
            name="mobile"
            id="mobile"
            value={mobile}
            onChange={handleChange}
            maxLength={10}
          />
          {!formData.mobile && <p className="errorMsg">{formErrors.mobile}</p>}
        </div>
        <div className="form-control">
          <label htmlFor="address" className="customLabel">
            Address
          </label>
          <textarea
            name="address"
            id="address"
            cols="30"
            rows="8"
            value={address}
            onChange={handleChange}
          ></textarea>
          {!formData.address && (
            <p className="errorMsg">{formErrors.address}</p>
          )}
        </div>
        <div className="form-control">
          <label htmlFor="area" className="customLabel">
            Area/City
          </label>
          <input
            type="text"
            name="area"
            id="area"
            value={area}
            onChange={handleChange}
          />
          {!formData.area && <p className="errorMsg">{formErrors.area}</p>}
        </div>
        <div className="form-control">
          <label htmlFor="pin" className="customLabel">
            Pin code
          </label>
          <input
            type="text"
            name="pin"
            id="pin"
            value={pin}
            onChange={handleChange}
          />
          {!formData.pin && <p className="errorMsg">{formErrors.pin}</p>}
        </div>
        <div className="form-control">
          <label htmlFor="lon" className="customLabel">
            Longitude
          </label>
          <input
            type="text"
            name="lon"
            id="lon"
            value={lon}
            onChange={handleChange}
          />
        </div>
        <div className="form-control">
          <label htmlFor="lat" className="customLabel">
            Latitude
          </label>
          <input
            type="text"
            name="lat"
            id="lat"
            value={lat}
            onChange={handleChange}
          />
        </div>
        <div className="form-control">
          <label htmlFor="aadhar">Aadhar Card</label>
          <FileUploader
            name="aadhar"
            id="aadhar"
            handleFile={(file) => handleDocs(file, "aadhar")}
          />
          {docs.aadhar === "" && (
            <p className="errorMsg">{formErrors.aadhar}</p>
          )}
          {aadhar ? (
            <p style={{ color: "#fff", margin: "12px 0" }}>
              Uploaded File: {aadhar}
            </p>
          ) : null}
        </div>
        <div className="form-control">
          <label htmlFor="pan">Pan Card</label>
          <FileUploader
            name="pan"
            id="pan"
            handleFile={(file) => handleDocs(file, "pan")}
          />
          {docs.pan === "" && <p className="errorMsg">{formErrors.pan}</p>}
          {pan ? (
            <p style={{ color: "#fff", margin: "12px 0" }}>
              Uploaded File: {pan}
            </p>
          ) : null}
        </div>
        <div className="form-control">
          <label htmlFor="gst" className="customLabel">
            GST Distributor
          </label>
          <select name="gst" id="gst" value={gst} onChange={handleChange}>
            <option value="">Select items</option>
            <option value="Option1">Option 1</option>
            <option value="Option2">Option 2</option>
            <option value="Option3">Option 3</option>
          </select>
          {!formData.gst && <p className="errorMsg">{formErrors.gst}</p>}
        </div>
        <div className="form-control">
          <label htmlFor="channel" className="customLabel">
            Channel
          </label>
          <select
            name="channel"
            id="channel"
            value={channel}
            onChange={handleChange}
          >
            <option value="">Select items</option>
            <option value="Option1">Option 1</option>
            <option value="Option2">Option 2</option>
            <option value="Option3">Option 3</option>
          </select>
          {!formData.channel && (
            <p className="errorMsg">{formErrors.channel}</p>
          )}
        </div>
        <div className="form-control">
          <label htmlFor="category" className="customLabel">
            Category
          </label>
          <select
            name="category"
            id="category"
            value={category}
            onChange={handleChange}
          >
            <option value="">Select items</option>
            <option value="Option1">Option 1</option>
            <option value="Option2">Option 2</option>
            <option value="Option3">Option 3</option>
          </select>
          {!formData.category && (
            <p className="errorMsg">{formErrors.category}</p>
          )}
        </div>
        <div className="form-control">
          <label htmlFor="sgaSelect" className="customLabel">
            SGA (Coca Cola)
          </label>
          <CustomRadio
            name="sga"
            id="yes"
            value="yes"
            text="Yes"
            checked={sga === "yes"}
            onChange={handleChange}
          />
          <CustomRadio
            name="sga"
            id="no"
            value="no"
            text="No"
            checked={sga === "no"}
            onChange={handleChange}
          />
          <select
            name="sgaSelect"
            id="sgaSelect"
            value={sgaSelect}
            onChange={handleChange}
          >
            <option value="">Select items</option>
            <option value="Option1">Option 1</option>
            <option value="Option2">Option 2</option>
            <option value="Option3">Option 3</option>
          </select>
          {(!formData.sga || !formData.sgaSelect) && (
            <p className="errorMsg">{formErrors.sga}</p>
          )}
        </div>
        <div className="form-control">
          <label htmlFor="volume" className="customLabel">
            Volume (Coca Cola)
          </label>
          <input
            type="text"
            name="volume"
            id="volume"
            value={volume}
            onChange={handleChange}
          />
          {!formData.volume && <p className="errorMsg">{formErrors.volume}</p>}
        </div>
        <div className="form-control">
          <label htmlFor="route" className="customLabel">
            Route NO
          </label>
          <input
            type="text"
            name="route"
            id="route"
            value={route}
            onChange={handleChange}
          />
          {!formData.route && <p className="errorMsg">{formErrors.route}</p>}
        </div>
        <table className="mb-24">
          <caption>Beat/PJP</caption>
          <tbody>
            <tr>
              <th>W1</th>
              <td>
                <CustomRadio
                  name="w1"
                  id="w1Mon"
                  value="Mon"
                  text="Mon"
                  checked={w1 === "Mon"}
                  onChange={handleChange}
                />
              </td>
              <td>
                <CustomRadio
                  name="w1"
                  id="w1Tue"
                  value="Tue"
                  text="Tue"
                  checked={w1 === "Tue"}
                  onChange={handleChange}
                />
              </td>
              <td>
                <CustomRadio
                  name="w1"
                  id="w1Wed"
                  value="Wed"
                  text="Wed"
                  checked={w1 === "Wed"}
                  onChange={handleChange}
                />
              </td>
              <td>
                <CustomRadio
                  name="w1"
                  id="w1Thu"
                  value="Thu"
                  text="Thu"
                  checked={w1 === "Thu"}
                  onChange={handleChange}
                />
              </td>
              <td>
                <CustomRadio
                  name="w1"
                  id="w1Fri"
                  value="Fri"
                  text="Fri"
                  checked={w1 === "Fri"}
                  onChange={handleChange}
                />
              </td>
              <td>
                <CustomRadio
                  name="w1"
                  id="w1Sat"
                  value="Sat"
                  text="Sat"
                  checked={w1 === "Sat"}
                  onChange={handleChange}
                />
              </td>
              <td>
                <CustomRadio
                  name="w1"
                  id="w1Sun"
                  value="Sun"
                  text="Sun"
                  checked={w1 === "Sun"}
                  onChange={handleChange}
                />
              </td>
            </tr>

            <tr>
              <th>W2</th>
              <td>
                <CustomRadio
                  name="w2"
                  id="w2Mon"
                  value="Mon"
                  text="Mon"
                  checked={w2 === "Mon"}
                  onChange={handleChange}
                />
              </td>
              <td>
                <CustomRadio
                  name="w2"
                  id="w2Tue"
                  value="Tue"
                  text="Tue"
                  checked={w2 === "Tue"}
                  onChange={handleChange}
                />
              </td>
              <td>
                <CustomRadio
                  name="w2"
                  id="w2Wed"
                  value="Wed"
                  text="Wed"
                  checked={w2 === "Wed"}
                  onChange={handleChange}
                />
              </td>
              <td>
                <CustomRadio
                  name="w2"
                  id="w2Thu"
                  value="Thu"
                  text="Thu"
                  checked={w2 === "Thu"}
                  onChange={handleChange}
                />
              </td>
              <td>
                <CustomRadio
                  name="w2"
                  id="w2Fri"
                  value="Fri"
                  text="Fri"
                  checked={w2 === "Fri"}
                  onChange={handleChange}
                />
              </td>
              <td>
                <CustomRadio
                  name="w2"
                  id="w2Sat"
                  value="Sat"
                  text="Sat"
                  checked={w2 === "Sat"}
                  onChange={handleChange}
                />
              </td>
              <td>
                <CustomRadio
                  name="w2"
                  id="w2Sun"
                  value="Sun"
                  text="Sun"
                  checked={w2 === "Sun"}
                  onChange={handleChange}
                />
              </td>
            </tr>

            <tr>
              <th>W3</th>
              <td>
                <CustomRadio
                  name="w3"
                  id="w3Mon"
                  value="Mon"
                  text="Mon"
                  checked={w3 === "Mon"}
                  onChange={handleChange}
                />
              </td>
              <td>
                <CustomRadio
                  name="w3"
                  id="w3Tue"
                  value="Tue"
                  text="Tue"
                  checked={w3 === "Tue"}
                  onChange={handleChange}
                />
              </td>
              <td>
                <CustomRadio
                  name="w3"
                  id="w3Wed"
                  value="Wed"
                  text="Wed"
                  checked={w3 === "Wed"}
                  onChange={handleChange}
                />
              </td>
              <td>
                <CustomRadio
                  name="w3"
                  id="w3Thu"
                  value="Thu"
                  text="Thu"
                  checked={w3 === "Thu"}
                  onChange={handleChange}
                />
              </td>
              <td>
                <CustomRadio
                  name="w3"
                  id="w3Fri"
                  value="Fri"
                  text="Fri"
                  checked={w3 === "Fri"}
                  onChange={handleChange}
                />
              </td>
              <td>
                <CustomRadio
                  name="w3"
                  id="w3Sat"
                  value="Sat"
                  text="Sat"
                  checked={w3 === "Sat"}
                  onChange={handleChange}
                />
              </td>
              <td>
                <CustomRadio
                  name="w3"
                  id="w3Sun"
                  value="Sun"
                  text="Sun"
                  checked={w3 === "Sun"}
                  onChange={handleChange}
                />
              </td>
            </tr>

            <tr>
              <th>W4</th>
              <td>
                <CustomRadio
                  name="w4"
                  id="w4Mon"
                  value="Mon"
                  text="Mon"
                  checked={w4 === "Mon"}
                  onChange={handleChange}
                />
              </td>
              <td>
                <CustomRadio
                  name="w4"
                  id="w4Tue"
                  value="Tue"
                  text="Tue"
                  checked={w4 === "Tue"}
                  onChange={handleChange}
                />
              </td>
              <td>
                <CustomRadio
                  name="w4"
                  id="w4Wed"
                  value="Wed"
                  text="Wed"
                  checked={w4 === "Wed"}
                  onChange={handleChange}
                />
              </td>
              <td>
                <CustomRadio
                  name="w4"
                  id="w4Thu"
                  value="Thu"
                  text="Thu"
                  checked={w4 === "Thu"}
                  onChange={handleChange}
                />
              </td>
              <td>
                <CustomRadio
                  name="w4"
                  id="w4Fri"
                  value="Fri"
                  text="Fri"
                  checked={w4 === "Fri"}
                  onChange={handleChange}
                />
              </td>
              <td>
                <CustomRadio
                  name="w4"
                  id="w4Sat"
                  value="Sat"
                  text="Sat"
                  checked={w4 === "Sat"}
                  onChange={handleChange}
                />
              </td>
              <td>
                <CustomRadio
                  name="w4"
                  id="w4Sun"
                  value="Sun"
                  text="Sun"
                  checked={w4 === "Sun"}
                  onChange={handleChange}
                />
              </td>
            </tr>

            <tr>
              <th>W5</th>
              <td>
                <CustomRadio
                  name="w5"
                  id="w5Mon"
                  value="Mon"
                  text="Mon"
                  checked={w5 === "Mon"}
                  onChange={handleChange}
                />
              </td>
              <td>
                <CustomRadio
                  name="w5"
                  id="w5Tue"
                  value="Tue"
                  text="Tue"
                  checked={w5 === "Tue"}
                  onChange={handleChange}
                />
              </td>
              <td>
                <CustomRadio
                  name="w5"
                  id="w5Wed"
                  value="Wed"
                  text="Wed"
                  checked={w5 === "Wed"}
                  onChange={handleChange}
                />
              </td>
              <td>
                <CustomRadio
                  name="w5"
                  id="w5Thu"
                  value="Thu"
                  text="Thu"
                  checked={w5 === "Thu"}
                  onChange={handleChange}
                />
              </td>
              <td>
                <CustomRadio
                  name="w5"
                  id="w5Fri"
                  value="Fri"
                  text="Fri"
                  checked={w5 === "Fri"}
                  onChange={handleChange}
                />
              </td>
              <td>
                <CustomRadio
                  name="w5"
                  id="w5Sat"
                  value="Sat"
                  text="Sat"
                  checked={w5 === "Sat"}
                  onChange={handleChange}
                />
              </td>
              <td>
                <CustomRadio
                  name="w5"
                  id="w5Sun"
                  value="Sun"
                  text="Sun"
                  checked={w5 === "Sun"}
                  onChange={handleChange}
                />
              </td>
            </tr>
          </tbody>
        </table>
        {(!formData.w1 ||
          !formData.w2 ||
          !formData.w3 ||
          !formData.w4 ||
          !formData.w5) && <p className="errorMsg">{formErrors.w1}</p>}
        <input type="submit" value="SUBMIT" />
      </form>
    </>
  );
}

export default Signup;
