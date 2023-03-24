import * as yup from "yup"

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

export const SignUpFormSchema = yup.object().shape({
  email: yup.string().email("Please enter a valid email").required("Required"),
  password: yup
    .string()
    .matches(passwordRules, {message: "Password must be atleast 8 characters long with a number and an uppercase alphabet"})
    .required("Required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null, "Passwords must match"])
    .required("Required")
})
