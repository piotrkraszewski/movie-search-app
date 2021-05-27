import { useState } from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import useFormTransition from "./FormsHooks/useFormTransition"
import FormikControl from './FormikControl/FormikControl'
import OnSubmitMsg from './OnSubmitMsg/OnSubmitMsg'
import s from './FormStyles.module.scss'
import { useAuth } from 'AppFiles/Contexts/AuthContext'
import { useHistory } from 'react-router-dom'
import { LOGIN_PAGE, PAGE_TRANSITION_TIME, REGISTER_PAGE } from 'Utils/Consts'


export default function ForgotPassword() {
  const history = useHistory()
  const { resetPassword } = useAuth()
  const [submitMsg, setSubmitMsg] = useState()


  const initialValues = {
    email: '',
  }

  // remember to comment out validation that is not used because form will not submit
  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email format').required('Required'),
  })

  const onSubmit = async(values, onSubmitProps) => {
    setSubmitMsg({})
    console.log('Form values:', values)
    try {
      await resetPassword(values.email)
      setSubmitMsg({
        submitStatus: 'success',
        message: 'Instructon for reseting your password were send to your email'
      })
    } catch (err){
      setSubmitMsg({
        submitStatus: 'error',
        message: err.message
      })
    }

    onSubmitProps.setSubmitting(false)  //enables button
  }


return (<>
  {useFormTransition(<>
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
        <Form className={s.formFields}>

          <FormikControl
            control='input'
            type='email'
            name='email'
            label='email' />

          <button
            className={`btn btn-success ${s.btnGreen}`}
            type='submit'
            disabled={!formik.isValid || formik.isSubmitting}
            >Reset Password
          </button>

          <OnSubmitMsg {...submitMsg} />

        </Form>
        )}
      }
    </Formik>

    <button
      className={`btn btn-link ${s.forgotBtn} w-100 mb-2`}
      onClick={() => history.push(LOGIN_PAGE)}>
        Login?
    </button>

    <div className='border-top pt-3'>
      <button
        className='btn btn-dark w-100'
        onClick={() => history.push(REGISTER_PAGE)}>
          Need an account? Register
      </button>
    </div>

    </>)}
</>)
}