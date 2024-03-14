import React, { useEffect, useState } from "react";
import axios from "axios";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
import AccountCircle from "@mui/icons-material/AccountCircle";
import PersonIcon from "@mui/icons-material/Person";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Button from "@mui/material/Button";
import Toaster from "./Toaster";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";

const UserForm = () => {
  const nav = useNavigate();
  const [name, setName] = useState("");
  const [dob, setDob] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [FormStatus, setFormStatus] = useState("");

  useEffect(() => {
    console.log("console hy ye hgfhfjhhjg");
  }, []);

  const handleSubmit = async (e) => {
    console.log("console hy ye ",process.env.REACT_APP_BACKEND)

    e.preventDefault();

    // Check if any field is empty
    if (!name || !dob || !email || !password) {
      // alert("Please fill in all fields");
      setFormStatus({ msg: "Please fill in all fields", key: Math.random() });

      return;
    }

    try {
      const response = await axios.post(`http://localhost:8080/user/register`, {
        name,
        dob,
        email,
        password,
      });

      const userDetails = localStorage.setItem(
        "userInfor",
        JSON.stringify(response.data.data)
      );
      setFormStatus({ msg: "Form submitted successfully", key: Math.random() });

      nav(`/table/${response.data.data._id}`);
      // Check the response status code

    } catch (error) {
      console.error("Error submitting form:", error);
      // if(error.response.status)
      const mssg = "Failed to submit form : " + error.response.data.error;

      // alert("Failed to submit form : " + error.response.data.error);
      setFormStatus({ msg: mssg, key: Math.random() });

    }
  };

  return (
    <>
      <CssBaseline />
      <Container maxWidth="sm">
        {/* <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} /> */}
        <Box
          sx={{ height: "100vh" }}
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              position: "relative",
              // border: "1px solid",
              top: "20px",
              borderRadius: "10px",
              width: "180px",
              backgroundColor: "#40E0D0",
zIndex:10,
              boxShadow: "rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset",
            }}
          >
            <h3 >Sign Up</h3>
          </div>
          <FormControl fullWidth>
            <div
              className="formcontainers"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "20px",
                justifyContent: "center",
                boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                height: "85vh",
                borderRadius: "10px",
                backgroundColor: "#000c1f",
                color: "white",
              }}
            >
              <form
                onSubmit={handleSubmit}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "20px",
                }}
              >
                <div>
                  {/* <label>Name:</label> */}
                  {/* <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  /> */}
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "flex-end",
                      padding: "10px",
                      paddingLeft: "15px",
                      paddingRight: "15px",
                      border: "1px solid #d3d3d3  ",
                      borderRadius: "10px",
                      backgroundColor: "#d3d3d3",
                    }}
                  >
                    <PersonIcon
                      sx={{ color: "action.active", mr: 1, my: 0.5 }}
                    />

                    <TextField
                      required
                      id="standard-basic"
                      variant="standard"
                      label="Name"
                      defaultValue={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </Box>
                </div>

                <div style={{ display: "flex", flexDirection: "column", backgroundColor: "#d3d3d3", padding:"5px",borderRadius:"10px" }} >
                  {/* <label>Date of Birth:</label> */}
                  <LocalizationProvider dateAdapter={AdapterDayjs} style={{ backgroundColor: "#d3d3d3 !important"}}>
                    <DemoContainer components={["DatePicker"]} style={{ backgroundColor: "#d3d3d3"}}>
                      <DatePicker
                        label="Date of Birth"
                        value={dob}
                        onChange={(date) => setDob(date)}
                        views={["year", "month", "day"]}
                        
                        //dateFormat="yyyy-MM-dd"
                        //  maxDate={new Date()}
                        required
                      />
                    </DemoContainer>
                  </LocalizationProvider>
                  {/* <DatePicker
                    selected={dob}
                    onChange={(date) => setDob(date)}
                    dateFormat="yyyy-MM-dd"
                    maxDate={new Date()}
                    required
                  /> */}
                </div>
                <div>
                  {/* <label>Email:</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  /> */}
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "flex-end",
                      padding: "10px",
                      paddingLeft: "15px",
                      paddingRight: "15px",
                      border: "1px solid #d3d3d3  ",
                      borderRadius: "10px",
                      backgroundColor: "#d3d3d3"
                    }}
                  >
                    <EmailIcon
                      sx={{ color: "action.active", mr: 1, my: 0.5 }}
                    />

                    <TextField
                      type="email"
                      required
                      id="standard-basic"
                      variant="standard"
                      label="Email"
                      defaultValue={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Box>
                </div>
                <div>
                  {/* <label>password:</label>
                  <input
                    type="tel"
                    value={password}
                    onChange={(e) => setpassword(e.target.value)}
                    required
                  /> */}
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "flex-end",
                      padding: "10px",
                      paddingLeft: "15px",
                      paddingRight: "15px",
                      border: "1px solid #d3d3d3  ",
                      borderRadius: "10px",
                      backgroundColor: "#d3d3d3"

                    }}
                  >
                    <LockIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />

                    <TextField
                      type="password"
                      required
                      id="standard-basic"
                      variant="standard"
                      label="password"
                      defaultValue={password}
                      onChange={(e) => setpassword(e.target.value)}
                    />
                  </Box>
                </div>
                
                <Button
                  variant="contained"
                  type="submit"
              style={{backgroundColor: "#40E0D0", color:"black"}}
                >
                  Sign Up
                </Button>
                {/* <button type="submit">Submit</button> */}
              </form>
              <div>
               
                <p style={{ marginTop: "5px" }}>
                  Already have an account? <a href="/">Log in</a>
                </p>
              </div>
            </div>
            {FormStatus ? (
            <Toaster key={FormStatus.key} message={FormStatus.msg} />
          ) : null}
          </FormControl>
        </Box>
      </Container>
    </>
  );
};

export default UserForm;
