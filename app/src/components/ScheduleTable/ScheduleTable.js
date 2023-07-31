import React from 'react'

import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react'

function ScheduleTable() {
  return (
    <TableContainer>
    <Table variant='simple'
    colorScheme='linkedin'
    >
      <Thead>
        <Tr>
          <Th>Name</Th>
          <Th>Time</Th>
          <Th>Location</Th>
          <Th>Phone</Th>
          <Th>Extra Information</Th>
        </Tr>
      </Thead>
      <Tbody>
      </Tbody>
    </Table>
  </TableContainer>
  )
}

export default ScheduleTable