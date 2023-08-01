import React from 'react'

import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Select,
  Input,
  Button,
  useToast,
} from '@chakra-ui/react'

function AddEventForm() {
  const toast = useToast();

  const notifyTODO = () => {
    toast({
      title: 'Thanks for trying!',
      description: "No add event allowed since backend service is not available.",
      status: 'info',
      duration: 9000,
      isClosable: true,
    })
  }

  return (
    <>
      <form className='px-10'>
        <FormControl className='py-2'>
          <FormLabel>Event Name</FormLabel>
          <Input type='' />
          {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
        </FormControl>
        <FormControl className='py-2'>
          <FormLabel>Day in week</FormLabel>
          <Select>
            <option value="sunday">Sunday</option>
            <option value="monday">Monday</option>
            <option value="tuesday">Tuesday</option>
            <option value="wednesday">Wednesday</option>
            <option value="thursday">Thursday</option>
            <option value="friday">Friday</option>
            <option value="saturday">Saturday</option>
          </Select>
        </FormControl>
        <FormControl className='py-2'>
          <FormLabel>Start time</FormLabel>
          <Input type='time' />
        </FormControl>
        <FormControl>
          <FormLabel>End time</FormLabel>
          <Input type='time' />
        </FormControl>
        <FormControl className='py-2'>
          <FormLabel>Phone</FormLabel>
          <Input type='tel' />
        </FormControl>
        <FormControl className='py-2'>
          <FormLabel>Extra info</FormLabel>
          <Input type='text' />
        </FormControl>
        <FormControl className='py-2'>
          <FormLabel>Url</FormLabel>
          <Input type='url' />
        </FormControl>
        <Button colorScheme='whatsapp' className='my-5' onClick={notifyTODO}>Submit</Button>
      </form>
    </>
  )
}

export default AddEventForm