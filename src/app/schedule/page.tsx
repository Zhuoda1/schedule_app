import React from "react";
import $ from "jquery";
import './page.css';

function Page() {
  const formTable = (element: HTMLElement) => {
    // $('#days li a').removeClass("active");
    // $(element).addClass("active");
    // clearTable();
    // let day = $(element).text().toLowerCase();
    // fetch('./getSchedule?' + new URLSearchParams({ dayQuery: day }))
    //   .then(response => response.json())
    //   .then(data => fillIn(data))
  };

  // function fillIn(data: object) {
  //   let tbody = $('#scheduleTable tbody');
  // for (let i = 0; i < data.length; i++) {
  //   tbody.append(`<tr id="${data[i].event_id}">
  //       <td>${data[i].event_event}</td>
  //       <td>${data[i].event_start}-${data[i].event_end}</td>
  //       <td>${data[i].event_location}</td><td>${data[i].event_phone}</td>
  //       <td><a href="${data[i].event_url}">${data[i].event_info}</a>
  //         <div class="hiddendiv"><button class="btn btn-outline-danger btn-sm" type="button" onClick="deleteRow(${data[i].event_id})">Delete</div>
  //         <div class="hiddendiv"><button class="btn btn-outline-success btn-sm" type="button" onClick="editRow(${data[i].event_id})">Edit</div>
  //       </td>
  //       </tr>`);
  // }
  // }

  // function deleteRow(id: string){
  //   if(confirm("Do you really want to delete this event?")){
  //     fetch('./delEventEntry?' + new URLSearchParams({ eventId: id }), { method: 'DELETE' })
  //     .then(response => {
  //       if(response.status == 404) alert("Row" + id + "not deleted");
  //       else {
  //         // alert("Delete success");
  //         console.log("Successfully deleted row " + id);
  //         document.getElementById(`${id}`)?.remove();
  //       }
  //     });
  //   }
  // }
  // function editRow(id: string){
  //   window.location.href = '/editEvent?eventId=' + id;
  // }
  // function clearTable() {
  //   $('#scheduleTable tbody').empty();
  // }

  return (
    <>
        <ul id="days" className="flex justify-between mt-5 px-20 ">
          <li>
            <div className="dateItem">Sunday</div>
          </li>
          <li>
            <div className="dateItem">Monday</div>
          </li>
          <li>
            <div className="dateItem">Tuesday</div>
          </li>
          <li>
            <div className="dateItem">Wednesday</div>
          </li>
          <li>
            <div className="dateItem">Thursday</div>
          </li>
          <li>
            <div className="dateItem">Friday</div>
          </li>
          <li>
            <div className="dateItem">Saturday</div>
          </li>
        </ul>
        <br />
        <br />
          <table id="scheduleTable">
            <thead>
              <tr className="flex justify-between mt-5 px-20">
                <th scope="col">Name</th>
                <th scope="col">Time</th>
                <th scope="col">Location</th>
                <th scope="col">Phone</th>
                <th scope="col">Extra Information</th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
    </>
  );
}

export default Page;