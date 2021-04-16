import { useState } from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormikControl from '../FormikControl/FormikControl'
import OnSubmitMsg from '../OnSubmitMsg/OnSubmitMsg'
import 'styles/main.scss'
import { useAuth } from 'AppFiles/Contexts/AuthContext'
import { useHistory } from 'react-router-dom'


export default function ForgotPassword() {
  const history = useHistory()
  const { resetPassword } = useAuth()
  const [submitStatus, setSubmitStatus] = useState('')


  const initialValues = {
    email: '',
  }

  // remember to comment out validation that is not used because form will not submit
  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email format').required('Required'),
  })
  
  const onSubmit = async(values, onSubmitProps) => {
    console.log('Form values:', values)
    try {
      const res = await resetPassword(values.email)
      console.log('resetPassword response', res)
      setSubmitStatus('Login-Success')
    } catch (err){
      console.log(err)
      setSubmitStatus('error')
    }

    onSubmitProps.setSubmitting(false)  //enables button
  }


return (
  <div className='Login'>
    <h2>Password Reset</h2>
    <Formik 
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      enableReinitialize
    >
    {
    formik => {
      // console.log(formik)
      return (
        <div className='FormContainer'>
          <Form className="form">

            <FormikControl 
              control='input' 
              type='email'
              name='email'
              label='email' />

            <button 
              className="btn btn-success btn-green"
              type='submit'
              disabled={!formik.isValid || formik.isSubmitting}
              >Reset Password
            </button>

            <OnSubmitMsg submitStatus={submitStatus} />

          </Form>
        </div>
        )}
      }
    </Formik>
      <button 
        className='btn btn-link forgot w-100 mb-1'
        onClick={() => history.push('/login')}>
          Login?
      </button>
    <div className='border-top pt-3'>
      <button 
        className='btn btn-dark w-100'
        onClick={() => history.push('/register')}>
          Need an account? Register
      </button>
    </div>
  </div>
)
}