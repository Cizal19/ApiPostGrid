import React, { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import Button from '@mui/material/Button';
import { useRouter } from "next/router"

export default function Home() {

  const router = useRouter()

  // useEffect(()=>{
  //   const token=localStorage.getItem("token")
  //   if(!token) {
  //     router.push("/login")
  //   }
  // },[router])

 

  const handleClick = () => {
    localStorage.removeItem("token")
    router.push("/login")
  }
  return (
    <>
      <Typography variant="h1">
        Welcome to the Home Page
      </Typography>
      <Button
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
        onClick={handleClick}
      >
        Logout
      </Button>
    </>
  )
}
