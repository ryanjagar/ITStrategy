---
  title: gantt
---
/*Originally inspired by the following two examples:

- Github Example:
http://bl.ocks.org/dk8996/5538271

Copyright 2012 Dimitry Kudryavtsev

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.

- Codepen example:
Copyright (c) 2021 by Jess Peter (https://codepen.io/jey/pen/jmClJ)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/


var initiatives = [
  {
    name: "TSDM",
    description: "Milestones and issues for TSDM",
    milestones: [
      {
        name: "Target SDM - Agile fw - Produce Business Case",
        description: "Gaining approval is treated as a separate milestone.",
        url: "https://github.com/sara-sabr/ITStrategy/milestone/63",
        start_date: "",
        end_date: "",
        creation_date: "2020-12-30",
        issues: [
          {
            name: "",
            description: "",
            creation_date: "",
            closed_date: "",
            url: ""
          }
        ]
      },
      {
        name: "Target SDM - Agile fw - Do Research",
        description: "",
        url: "",
        start_date: "",
        end_date: "",
        creation_date: "2020-12-30",
        issues: [
          {
            name: "",
            description: "",
            creation_date: "",
            closed_date: "",
            url: ""
          }
        ]
      }
    ]
  },
  {
    name: "ABB",
    description: "Milestones and issues for ABB",
    milestones: [
      {
        name: "Adopt, buy or build - Enterprise Architecture",
        description: "Includes all issues for the ABB Strategy",
        url: "https://github.com/sara-sabr/ITStrategy/milestone/46",
        start_date: "2020-01-01",
        end_date: "2020-12-31",
        creation_date: "2020-01-01",
        issues: [
          {
            name: "fdfdssf",
            description: "",
            creation_date: "",
            closed_date: "",
            url: ""
          }, {
            name: "sssddfsf",
            description: "",
            creation_date: "",
            closed_date: "",
            url: ""
          },
          {
            name: "asdffdasdfasdf",
            description: "",
            creation_date: "",
            closed_date: "",
            url: ""
          },
          {
            name: "asdfasd",
            description: "",
            creation_date: "",
            closed_date: "",
            url: ""
          }
        ]
      }
    ]
  },
  {
    name: "Micro-Acquisition Pilot",
    description: "Milestones and issues for MAP",
    milestones: [
      {
        name: "Phase 1 - Approvals and planning.",
        description: "This milestone ends with approval from PPOC as part of the lite project process. Approval points in this process include (in this order): EA review and endorse, BRM review and endorse, Executive Sponsors review and endorse, PPOC approve. We are currently at EA review and endorse step (and have been since Dec. 4, 2020).",
        url: "https://github.com/sara-sabr/ITStrategy/milestone/49",
        start_date: "2020-11-01",
        end_date: "2021-01-07",
        creation_date: "2020-11-01",
        issues: [
          {
            name: "",
            description: "",
            creation_date: "",
            closed_date: "",
            url: ""
          }
        ]
      },
      {
        name: "Phase 2 - design and build",
        description: "This milestone ends with the launch of the micro-acquisition website.",
        url: "https://github.com/sara-sabr/ITStrategy/milestone/52",
        start_date: "2021-01-08",
        end_date: "2021-05-19",
        creation_date: "2020-11-01",
        issues: [
          {
            name: "",
            description: "",
            creation_date: "",
            closed_date: "",
            url: ""
          }
        ]
      },
      {
        name: "Phase 3 - Approvals and planning.",
        description: "This milestone includes all research, planning and actual communications activities related to: finding ESDC clients, engaging with suppliers and sharing the work and lessons learned for this pilot.",
        url: "https://github.com/sara-sabr/ITStrategy/milestone/53",
        start_date: "2021-05-20",
        end_date: "2021-06-30",
        creation_date: "2020-11-01",
        issues: [
          {
            name: "",
            description: "",
            creation_date: "",
            closed_date: "",
            url: ""
          }
        ]
      },
      {
        name: "Phase 4 - Operations and close out",
        description: "This milestone includes all work that will be done while the pilot is in operation for 1 year (including mid-point assessment and CFOB monitoring) as well as the close out work following completion of the pilot.",
        url: "https://github.com/sara-sabr/ITStrategy/milestone/68",
        start_date: "2021-07-01",
        end_date: "2022-06-08",
        creation_date: "2020-11-01",
        issues: [
          {
            name: "",
            description: "",
            creation_date: "",
            closed_date: "",
            url: ""
          }
        ]
      }
    ]
  },
  {
    name: "Automate Software Approval",
    description: "Milestones and issues for ASA",
    milestones: [
      {
        name: "Study",
        description: "Study the current processes and options.",
        url: "https://github.com/sara-sabr/ITStrategy/milestone/18",
        start_date: "2021-04-01",
        end_date: "2021-07-01",
        creation_date: "2020-12-01",
        issues: [
          {
            name: "",
            description: "",
            creation_date: "",
            closed_date: "",
            url: ""
          }
        ]
      }
    ]
  },
  {
    name: "Ongoing Advice",
    description: "Milestones and issues for Ongoing Advice",
    milestones: [
      {
        name: "Ongoing advice and unplanned work",
        description: "Work involving ongoing advice to senior management and other stakeholders regarding initiatives, debriefs, commenting on various materials that have been unplanned for.",
        url: "https://github.com/sara-sabr/ITStrategy/milestone/28",
        start_date: "2019-02-15",
        end_date: null,
        creation_date: "2019-02-15",
        issues: [
          {
            name: "",
            description: "",
            creation_date: "",
            closed_date: "",
            url: ""
          }
        ]
      }
    ]
  }
];

//TODO: Make responsive
var height = 400;
var width = 800;

//TODO: Introduce functions to let user decide scope of Gantt
var startDate = new Date("2021-01-01");
var endDate = new Date("2021-12-31");

var svg = d3.select("#svgContainer")
  .append("svg")
  .attr("width", width)
  .attr("height", height)
  .attr("class", "svg")

var title = svg.append("text")
  .text("Milestones in Initiatives per Quarter")
  .attr("x", width / 2)
  .attr("y", 20)
  .attr("text-anchor", "middle")
  .attr("font-size", 20)
  .attr("fill", "grey")

function generateGantt(svgHeight, svgWidth, initiatives, startDate, endDate) {
  
}

function drawBands()