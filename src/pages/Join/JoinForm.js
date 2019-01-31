/** @jsx jsx */
import {jsx} from '@emotion/core'
import Input from '../../shared/components/Input'
import {Formik, Form} from 'formik'
import {Button} from '../../shared/components/Button'
import InputContainer from '../../shared/components/InputContainer'
import * as yup from 'yup'
import TextInput from '../../shared/components/TextInput'
import {memoValidation} from '../../utils/memo'
import Row from '../../shared/components/Row'
import Select from '../../shared/components/Select'
import Countries from '../../api/container/Countries'
import Cities from '../../api/container/Cities'
import ActivityTypes from '../../api/container/ActivityTypes'
import MultiSelect from '../../shared/components/MultiSelect'
import * as globalValidations from '../../utils/globalValidations'
import {isCool} from '../../api/http/cool'
import Map from '../../shared/components/Map'
import {getAddress, getLocation} from '../../utils/geocoder'

// prettier-ignore
function JoinForm({lat, lng, address}) {
  return (
    <Formik
      initialValues={{
        title: '',
        contactName: '',
        email: '',
        notes: '',
        password: '',
        confirmPassword: '',
        country: '',
        city: '',
        activities: [],
        address,
        lat,
        lng,
      }}
      validationSchema={yup.object({
        address: yup.string().required(),
        email: yup.string().email('الايميل غلط').required(),
        contactName: yup.string().required(),
        country: yup.string().required(),
        city: yup.string().required(),
        activities: yup.array().min(1).required(),
        password: globalValidations.password,
        confirmPassword: globalValidations.confirmPassword,
      })}
      onSubmit={(values, {setSubmitting, resetForm}) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2))
          setSubmitting(false)
          resetForm()
        }, 1000)
      }}
    >
      {({values, isSubmitting, handleReset, setFieldError, setFieldValue}) => (
        <Form>
          <InputContainer>
            <Input
              name="title"
              validate={memoValidation(
                'join:title',
                yup.string()
                  .test('title', 'name is not cool', value => {
                    setFieldError('title', '...')
                    return isCool(value).then(v => v === 'cool')
                  }).required(),
              )}
            />
          </InputContainer>
          <InputContainer>
            <ActivityTypes>
              {({activityTypes, loading}) => (
                <MultiSelect key={loading} name="activities" options={activityTypes} isLoading={loading} />
              )}
            </ActivityTypes>
          </InputContainer>
          <br />
          <InputContainer>
            <Input
              name="address"
              onChange={value => {
                getLocation(value).then(({lat, lng}) => {
                  setFieldValue('lat', lat)
                  setFieldValue('lng', lng)
                })
              }}
            />
          </InputContainer>
          <InputContainer>
            <Map
              center={{lat: values.lat, lng: values.lng}}
              onClick={({latLng}) => {
                setFieldValue('lat', latLng.lat())
                setFieldValue('lng', latLng.lng())
                getAddress(latLng).then(address => setFieldValue('address', address))
              }}
            />
          </InputContainer>
          <br />
          <InputContainer>
            <Input name="contactName" />
          </InputContainer>
          <br />
          <InputContainer>
            <Row col={2} smcol={1}>
              <div>
                <Countries>
                  {({countries, loading}) => (
                    <Select key={loading} name="country" options={countries} isLoading={loading} />
                  )}
                </Countries>
              </div>
              <div>
                <Cities variables={{CountryID: values.country || 0}}>
                  {({cities, loading}) => (
                    <Select key={loading} name="city" options={cities} isLoading={loading} />
                  )}
                </Cities>
              </div>
            </Row>
          </InputContainer>
          <br />
          <InputContainer>
            <Input name="email" />
          </InputContainer>
          <InputContainer>
            <Input type="password" name="password" />
          </InputContainer>
          <InputContainer>
            <Input type="password" name="confirmPassword" />
          </InputContainer>
          <br />
          <InputContainer>
            <TextInput name="notes" rows={4} />
          </InputContainer>
          <InputContainer css={{display: 'flex', flexDirection: 'row-reverse'}}>
            <Button type="submit" disabled={isSubmitting}>
              Submit
            </Button>
            <Button outline type="button" css={{marginRight: 12}} onClick={handleReset} >
              Reset
            </Button>
          </InputContainer>
        </Form>
      )}
    </Formik>
  )
}

export default JoinForm
