import React, { useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import TextareaAutosize from "@mui/material/TextareaAutosize";

const Contact = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });

  let name, value;
  const getUserData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUser({ ...user, [name]: value });
  };

  const postData = async (e) => {
    e.preventDefault();

    const { name, email, phone, address, message } = user;

    if (name && email && phone && address && message) {
      const res = await fetch(
        "https://react-contact-form-e9c5a-default-rtdb.firebaseio.com/reactContactForm.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            phone,
            address,
            message,
          }),
        }
      );

      if (res) {
        setUser({
          name: "",
          email: "",
          phone: "",
          address: "",
          message: "",
        });
        alert("Data stored successfully");
      }
    } else {
      alert("Please fill the data properly");
    }
  };

  return (
    <>
      Contact
      <div>
        <form method="POST">
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField
                  name="name"
                  id="filled-basic"
                  label="Your Name"
                  variant="filled"
                  value={user.name}
                  onChange={getUserData}
                  required
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  name="email"
                  id="filled-basic"
                  label="Email"
                  variant="filled"
                  value={user.email}
                  onChange={getUserData}
                  required
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  name="phone"
                  id="filled-basic"
                  label="Mobile Number"
                  variant="filled"
                  value={user.phone}
                  onChange={getUserData}
                  required
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  name="address"
                  id="filled-basic"
                  label="Address"
                  variant="filled"
                  value={user.address}
                  onChange={getUserData}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <p>Message</p>
                <TextareaAutosize
                  name="message"
                  aria-label="minimum height"
                  minRows={7}
                  placeholder="Minimum 3 rows"
                  style={{ width: 400 }}
                  value={user.message}
                  onChange={getUserData}
                  required
                />
              </Grid>
            </Grid>
          </Box>
          <Button variant="contained" onClick={postData}>
            Submit
          </Button>
        </form>
      </div>
    </>
  );
};

export default Contact;
