import React from "react";
import logobg from "./assets/loginbg.png";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import SettingsIcon from "@mui/icons-material/Settings";
import CancelIcon from "@mui/icons-material/Cancel";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
export default function UserTable() {
    const userName = JSON.parse(localStorage.getItem("userInfor"))
  return (
    <>
      <CssBaseline />
      {/* <Container maxWidth="sm"> */}
      <Box
        sx={{ bgcolor: "#cfe8fc", height: "20vh" }}
        style={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <div>
          <h2>Welcome {userName.username}</h2>
          {/* <Button variant="contained" onClick={backtoHome}>
            Back to home
          </Button> */}
        </div>
      </Box>
      <div class="table-responsive">
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Date Created</th>
            <th scope="col">Role</th>
            <th scope="col">Status</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
           
              
            <td colSpan="1">
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <img src={logobg} alt="" style={{ height: "50px" }} />
                <h6>Michael Holz</h6>
              </div>
           </td>
            <td>04/10/2013</td>
            <td>Admin</td>
            <td colSpan="1">
              <div style={{ display: "flex", alignItems: "center", gap: "10px", justifyContent:"center" }}>
              <FiberManualRecordIcon
                  sx={{ color: "#5cb85c", height:"15px" }}
                />{" "}
                <h6>Active</h6>
              </div>
           </td>
           
            <td>
              <div>
                <SettingsIcon sx={{ color: "#1976d2", mr: 1, my: 0.5 }} />{" "}
                <CancelIcon sx={{ color: "#ed4337", mr: 1, my: 0.5 }} />{" "}
              </div>
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td colSpan="1">
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <img src={logobg} alt="" style={{ height: "50px" }} />
                <h6>Paula Wilson</h6>
              </div>
           </td>
            
            <td>05/08/2014</td>
            <td>Publisher</td>
            <td colSpan="1">
              <div style={{ display: "flex", alignItems: "center", gap: "10px", justifyContent:"center" }}>
              <FiberManualRecordIcon
                  sx={{ color: "#5cb85c", height:"15px" }}
                />{" "}
                <h6>Active</h6>
              </div>
           </td>
            
            <td>
              <div>
                <SettingsIcon sx={{ color: "#1976d2", mr: 1, my: 0.5 }} />{" "}
                <CancelIcon sx={{ color: "#ed4337", mr: 1, my: 0.5 }} />{" "}
              </div>
            </td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td colSpan="1">
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <img src={logobg} alt="" style={{ height: "50px" }} />
                <h6>Antonio Moreno</h6>

              </div>
           </td>
           
            <td>11/05/2015</td>
            <td>Publisher</td>
            <td colSpan="1">
              <div style={{ display: "flex", alignItems: "center", gap: "10px", justifyContent:"center" }}>
              <FiberManualRecordIcon
                  sx={{ color: "#E9D502" , height:"15px" }}
                />{" "}
                <h6>Suspended</h6>
              </div>
           </td>
            
           
            <td>
              <div>
                <SettingsIcon sx={{ color: "#1976d2", mr: 1, my: 0.5 }} />{" "}
                <CancelIcon sx={{ color: "#ed4337", mr: 1, my: 0.5 }} />{" "}
              </div>
            </td>
          </tr>

          <tr>
            <th scope="row">4</th>
            <td colSpan="1">
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <img src={logobg} alt="" style={{ height: "50px" }} />
                <h6>Mary Saveley</h6>


              </div>
           </td>
           
           
            <td>06/09/2016</td>
            <td>Reviewer</td>
            <td>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                }}
              >
                <FiberManualRecordIcon
                  sx={{ color: "#5cb85c" , height:"15px"}}
                />{" "}
                <h6>Active</h6>
              </div>
            </td>
            <td>
              <div>
                <SettingsIcon sx={{ color: "#1976d2", mr: 1, my: 0.5 }} />{" "}
                <CancelIcon sx={{ color: "#ed4337", mr: 1, my: 0.5 }} />{" "}
              </div>
            </td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td colSpan="1">
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <img src={logobg} alt="" style={{ height: "50px" }} />

                <h6>Martin Sommer </h6>

              </div>
           </td>
            
            <td>12/08/2017</td>
            <td>Moderator</td>
            <td>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                }}
              >
                <FiberManualRecordIcon
                  sx={{  color: "#E9D502", height:"15px" }}
                />{" "}
                <h6>Inactive</h6>
              </div>
            </td>
            <td>
              <div>
                <SettingsIcon sx={{ color: "#1976d2", mr: 1, my: 0.5 }} />{" "}
                <CancelIcon sx={{ color: "#ed4337", mr: 1, my: 0.5 }} />{" "}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      </div>
    </>
  );
}
