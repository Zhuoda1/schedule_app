import React from 'react'

import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Link,
} from '@chakra-ui/react'
import { scheduleData } from '../../schedule'

function ScheduleTable(prop) {
  return (
    <TableContainer>
      <Table variant='simple'
        colorScheme='purple'
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
          {scheduleData[prop.day].map((item, i) => {
            return (
              <Tr>
                <Td>{item.name}</Td>
                <Td>{item.start} - {item.end}</Td>
                <Td>{item.phone}</Td>
                <Td>{item.location}</Td>
                <Td>
                  <Link href={item.url} isExternal>
                    {item.info}
                  </Link>
                </Td>
              </Tr>
            )
          })}
        </Tbody>
      </Table>
    </TableContainer>
  )
}

export default ScheduleTable