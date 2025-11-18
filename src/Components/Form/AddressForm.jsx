import React, { useEffect } from "react";
import "./AddressForm.css";

const AddressForm=()=> {
    useEffect(() => {
        console.log("User is shipping address form section.")
    }, []);
    return (
        <div className="page-wrap">
            <div className="formCard">
                <div className="card-header">
                    <h1 className="title">Shipping Address</h1>
                    <p className="subtitle">Enter your shipping details below to proceed.</p>
                </div>

                <form className="form">
                    <label className="label">Country/Region</label>
                    <div className="select-wrapper">
                        <select className="input select">
                            <option>India</option>
                            <option>Germany</option>
                            <option>United Kingdom</option>
                        </select>
                    </div>

                    <label className="label">Full Name</label>
                    <input className="input" placeholder="Enter your full name" />

                    <label className="label">Address Line 1</label>
                    <input
                        className="input"
                        placeholder="Street address, P.O. box, company name, c/o"
                    />

                    {/* <div className="label-row">
            <label className="label">Address Line 2</label>
            <span className="optional">Optional</span>
          </div>
          <input
            className="input"
            placeholder="Apartment, suite, unit, building, floor, etc."
          /> */}

                    <div className="row two-cols">
                        <div className="col">
                            <label className="label">City</label>
                            <input className="input" placeholder="e.g. Pune" />
                        </div>

                        <div className="col">
                            <label className="label">State / Province</label>
                            <input className="input" placeholder="e.g. MH" />
                        </div>
                    </div>

                    <label className="label">Postal / ZIP Code</label>
                    <input className="input" placeholder="e.g. 10001" />

                    <div className="checkbox-row">
                        <label className="checkbox-label">
                            <input type="checkbox" defaultChecked style={{ marginRight: "8px" }} />
                            {/* <span className="check-custom" /> */}
                            <span className="checkbox-text">Use this as my billing address</span>
                        </label>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default AddressForm