import { useState, useEffect } from "react";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';

import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from "@/theme/theme";

import axios from "axios";

import { Formik, useFormik } from "formik";
import { SignInFormSchema } from "../schemas/SignInFormSchema";

import { useRouter } from 'next/router'
import { useMutation } from "react-query";
import { loginAuth } from "../api/login"

export default function Login() {

  const {mutate: loginMutation, data:loginData, isSuccess:loginSuccess} = useMutation(loginAuth)
  console.log("🚀 ~ file: Login.jsx:28 ~ Login ~ loginData:", loginData)

  
  
  // const baseURL = "https://reqres.in";

  const router = useRouter()

  useEffect(()=>{
    
    if(loginData?.status === 200) {
      router.push("/")
    }
  }, [loginData?.status, router])

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: SignInFormSchema,
    onSubmit: (values) => {
      console.log("🚀 ~ file: Login.jsx:51 ~ Login ~ values:", values)
      // console.log("entered password", values.password)
      // try {
      //   axios
      //   .post(`${baseURL}/api/login`, values)
      //   .then((response) => {
      //     localStorage.setItem('token', JSON.stringify(response.data))
      //     console.log("🚀 ~ file: Login.jsx:52 ~ .then ~ response:", response)
      // });
      // }
      // catch(err) {
      //   actions.resetForm()
      //   console.log("🚀 ~ file: Login.jsx:48 ~ onSubmit: ~ err:", err)
      // }
      loginMutation(values)
    }
  })


    return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form"  onSubmit={handleSubmit} sx={{ mt: 1 }}>  
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="off" 
              autoFocus
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.email && !values.email}
              helperText={
                (errors.email && touched.email) && errors.email
              }
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.password && !values.password}
              helperText={
                (errors.password && touched.password) && errors.password
              }
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  )
}