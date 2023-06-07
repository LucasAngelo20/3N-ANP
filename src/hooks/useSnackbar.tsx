import { Snackbar } from "@mui/material"
import { useState } from "react"

export default function useSnackbar(){
  const [open, setOpen] = useState(false)
  const showSnackbar = (title: string) => {
  setOpen(true)
 }
 return{
  showSnackbar
 }
}