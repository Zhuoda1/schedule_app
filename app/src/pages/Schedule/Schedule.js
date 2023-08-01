import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import ScheduleTable from '../../components/ScheduleTable/ScheduleTable'

const dayInWeek = [
  {
    label: "Monday",
  },
  {
    label: "Tuesday",
  },
  {
    label: "Wednesday",
  },
  {
    label: "Thursday",
  },
  {
    label: "Friday",
  },
  {
    label: "Saturday",
  },
  {
    label: "Sunday",
  },
]

function Schedule() {
  return (
    <>
        <Tabs isFitted colorScheme='purple' className='px-10'>
          <TabList>
            {dayInWeek.map((item, i) => {
              return (
                <Tab key={i}>
                  {item.label}
                </Tab>)
            })}
          </TabList>
          <TabPanels>
            {dayInWeek.map((item, i) => {
              return (
                <TabPanel key={i}>
                  <ScheduleTable day={item.label.toLowerCase()}/>
                </TabPanel>
              )
            })}
          </TabPanels>
        </Tabs>
    </>

  )
}

export default Schedule