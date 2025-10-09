import React, { useEffect } from 'react'
import './Register.css'
import { useNavigate } from 'react-router-dom';

const Register = () => {
     
    const [flag, setFlag] = React.useState(0);
    const [governmentId, setGovernmentId] = React.useState({ type: "", id: "" });
    const [fullName, setFullName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [mobileNo, setMobileNo] = React.useState("");
    const [companyName, setCompanyName] = React.useState("");
    const [selectedOption, setSelectedOption] = React.useState("");
    const [profession, setProfession] = React.useState({ type: "", BarCouncil: "" });
    const [selectedProfession, setSelectedProfession] = React.useState("");
    const [register, setRegister] = React.useState("");
    
     const navigate=useNavigate();
     
    // Handle change event for the select dropdown
    const handleChange = (e) => {
        setSelectedOption(e.target.value);
    };
   async function handleSubmit(e) {
   
   
        e.preventDefault();
        // Handle form submission logic here
        console.log({
            fullName,
            email,
            password,
            mobileNo,
            companyName,
            selectedOption,
            governmentId,
            profession,
            register
        });

        if (register === 'client') {
            const formdata={
                fullName,
                email,
                password,   
                mobileNo,
                companyName,
                governmentId,

            }
                //🔗 connection to backend client route
                const endpoint="http://localhost:5000/Register-client";
                const resp=await fetch(endpoint,{
                    method:"POST",
                    headers:{
                        "Content-Type":"application/json"
                    },
                    body:JSON.stringify(formdata),
                    credentials: "include"
                })
            const data=await resp.json();
            console.log(data);
            navigate('/');
            
        } else if (register === 'arbitrator') {
            // Handle arbitrator registration logic
            const formdata={
                fullName,
                email,
                password,
                mobileNo,
                companyName,
                governmentId,
                profession,
            }
            // 🔗 connection to backend arbitrator route
            const endpoint="http://localhost:5000/Register-arbitrator";
            const resp=await fetch(endpoint,{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(formdata),
                credentials: "include"
            })
            const data=await resp.json();
            console.log(data);
            navigate('/');
        }

        // Reset form fields
        setFullName("");
        setEmail("");
        setPassword("");
        setMobileNo("");
        setCompanyName("");
        setSelectedOption("");
        setGovernmentId({ type: "", id: "" });
        setProfession({ type: "", BarCouncil: "" });
        setRegister("");
        navigate('/');
    }
    
    return (
        <>
            <div className="backContainer">
                <button className="backBtn" onClick={() => navigate('/')}>
                    ← Back
                </button>
            </div>
            <div className="heading">
                <h2>Register as  </h2>
            </div>
            <div className="btnContainer">
                <button
                    className={`btn ${flag === 0 ? "active" : ""}`}
                    onClick={() => setFlag(0)}
                >
                    Client
                </button>
                <button
                    className={`btn ${flag === 1 ? "active" : ""}`}
                    onClick={() => setFlag(1)}
                >
                    Arbitrator
                </button>
            </div>
            {/* Conditional Rendering --------------------------------------------------------- */}

            {
                flag === 0 ? (
                    <div className="form-container">

                        <form className="register-form" onSubmit={handleSubmit}>
                            <div><h4>Register as Client</h4></div>
                            <div className="form-group">
                                <label>Full Name</label>
                                <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} />
                            </div>

                            <div className="form-group">
                                <label>Email</label>
                                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>

                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                            </div>

                            <div className="form-group">
                                <label>Mobile No.</label>
                                <input type="number" value={mobileNo} onChange={(e) => setMobileNo(e.target.value)} />
                            </div>

                            <div className="form-group">
                                <label>Company Name</label>
                                <input type="text" value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
                            </div>

                            <div className="form-group">
                                <label>Government Id</label>
                                <select value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)}>
                                    <option value="">-- Choose an option --</option>
                                    <option value="aadhaar">Aadhaar</option>
                                    <option value="pan">PAN</option>
                                    <option value="passport">Passport</option>
                                </select>
                            </div>


                            {/* Conditional Rendering for goverment id: */}
                            {selectedOption && (
                                <div className="conditional-input">
                                    <label className="conditional-input-label">
                                        {selectedOption === "aadhaar"
                                            ? "Enter Aadhaar Number"
                                            : selectedOption === "pan"
                                                ? "Enter PAN Number"
                                                : "Enter Passport ID"}
                                    </label>
                                    <input
                                        type="text"
                                        className="conditional-input-field"
                                        placeholder={`Enter ${selectedOption} Number`}
                                        value={governmentId.id || ""}
                                        onChange={(e) =>
                                            setGovernmentId({ type: selectedOption, id: e.target.value })
                                        }
                                    />
                                </div>
                            )}


                            {/*✅ SUBMIT BUTTON */}
                            <button type="submit" value='client' className="submit-btn" onClick={(e) => setRegister(e.target.value)}>Register</button>
                        </form>

                    </div>
                ) : (
                    <div className="form-container">

                        <form className="register-form" onSubmit={handleSubmit}>
                            <div><h4>Register as Arbitrator</h4></div>
                            <div className="form-group">
                                <label>Full Name</label>
                                <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} />
                            </div>

                            <div className="form-group">
                                <label>Email</label>
                                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>

                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                            </div>

                            <div className="form-group">
                                <label>Mobile No.</label>
                                <input type="number" value={mobileNo} onChange={(e) => setMobileNo(e.target.value)} />
                            </div>

                            <div className="form-group">
                                <label>Company Name</label>
                                <input type="text" value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
                            </div>

                            <div className="form-group">
                                <label>Government Id</label>
                                <select value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)}>
                                    <option value="">-- Choose an option --</option>
                                    <option value="aadhaar">Aadhaar</option>
                                    <option value="pan">PAN</option>
                                    <option value="passport">Passport</option>
                                </select>
                            </div>
                            {/* Conditional Rendering for goverment id: */}
                            {selectedOption && (
                                <div className="conditional-input">
                                    <label className="conditional-input-label">
                                        {selectedOption === "aadhaar"
                                            ? "Enter Aadhaar Number"
                                            : selectedOption === "pan"
                                                ? "Enter PAN Number"
                                                : "Enter Passport ID"}
                                    </label>
                                    <input
                                        type="text"
                                        className="conditional-input-field"
                                        placeholder={`Enter ${selectedOption} Number`}
                                        value={governmentId.id || ""}
                                        onChange={(e) =>
                                            setGovernmentId({ type: selectedOption, id: e.target.value })
                                        }
                                    />
                                </div>
                            )}
                            {/*  */}

                            <div className="form-group">
                                <label>Proffesion</label>
                                <select value={selectedProfession} onChange={(e) => {
                                    setSelectedProfession(e.target.value)
                                    setProfession({ type: e.target.value, BarCouncil: "" });
                                }}>
                                    <option value="">-- Your Profession --</option>
                                    <option value="lawyer">Lawyer</option>
                                    <option value="retired-judge">Retired Judge</option>
                                    <option value="field-expert">Field Expert</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            {
                                (selectedProfession === "lawyer" || selectedProfession === "retired-judge") && (
                                    <div className="conditional-input">
                                        <label className="conditional-input-label">
                                            Enter Bar Council ID
                                        </label>
                                        <input
                                            type="text"
                                            className="conditional-input-field"
                                            placeholder={`Enter BarCouncil Number`}
                                            value={profession.BarCouncil || ""}
                                            onChange={(e) =>
                                                setProfession({ type: selectedProfession, BarCouncil: e.target.value })
                                            }
                                        />
                                    </div>)

                            }
                            <div className='form-group'>
                            <label htmlFor="">Upload Passport Size Photo</label>

                            <input type="file" name="passport-photo" id="" />
                            </div>
                            {/* ✅ SUBMIT BUTTON OF ARBITRATOR */}
                            <button type="submit" value='arbitrator' className="submit-btn" onClick={(e) => setRegister(e.target.value)}>Register</button>
                        </form>
                    </div>

                )
            }


        </>
    )
}

export default Register
