import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

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
      <Tabs isFitted colorScheme='purple'>
        <TabList mb='1em'>
          {dayInWeek.map((item, i) => {
            <Tab>
              {item.label}
            </Tab>
          })}
          <Tab>One</Tab>
        </TabList>
        <TabPanels>
          {/* {dayInWeek.map((item, i) => {
            <TabPanel key={i}>
              {item.label}
            </TabPanel>
          })} */}
        </TabPanels>
      </Tabs>
    </>

  )
}

export default Schedule