import React from "react";
import "./Home.css";

export default function Home() {
  return (
    <div className="Reshedule">
      <h1> &larr; Reshedule a Session</h1>
      <div className="session-Details ">
        {" "}
        <h5>session Details</h5>
      </div>
      <div className=" reschedule-session">
        <div className="ko">
          <h5 className="gh">Course</h5>
          <h3 className="zy">Intermediate American Art 2</h3>
        </div>
        <div ClassName="ko">
          <h5 className="gh">Subject</h5>
          <h3 className="zy mx-5">Art</h3>
        </div>
        <div className="ko">
          <h5 className="gh mr-5 " style={{ MarginRight: "10px" }}>
          Selection during
          </h5>
          <h3 className="zy">60 minutes</h3>
        </div>
        <div className="ko">
          <h5 className="gh "> Number of Student</h5>
          <h3 className="zy"> 5</h3>
        </div>
      </div>
      <hr />
      <h4> Schedule your session</h4>
      <hr />
      <div className="table">
        <div className="vi">
          <div className="January-2023 ">
                 January 2023 <i class="fa-solid fa-less-than px-1 m-2 "></i>{" "}
            <i class="fa-solid fa-greater-than px-2 "></i>
            <table colspan="6">
              <tr>
                <th rowSpan={6}></th>
                <th>Sun</th>
                <th>Mon</th>
                <th>Tue</th>
                <th>Wed</th>
                <th>Thu</th>
                <th>Fri</th>
                <th>Sat</th>
              </tr>
              <tr colspan="6">
                <td></td>
                <td></td>
                <td>1</td>
                <td>2</td>
                <td>3</td>
                <td>4</td>
                <td>5</td>
              </tr>
              <tr>
                <td>6</td>
                <td>7</td>
                <td>8</td>
                <td>9</td>
                <td>10</td>
                <td>11</td>
                <td>12</td>
              </tr>
              <tr>
                <td>13</td>
                <td>14</td>
                <td>15</td>
                <td>16</td>
                <td>17</td>
                <td>18</td>
                <td>19</td>
              </tr>
              <tr>
                <td>20</td>
                <td>21</td>
                <td>22</td>
                <td>23</td>
                <td>24</td>
                <td>25</td>
                <td>26</td>
              </tr>
              <tr>
                <td>27</td>
                <td>28</td>
                <td>29</td>
                <td>30</td>
                <td>31</td>
                <td></td>
                <td></td>
              </tr>
            </table>
          </div>
        </div>
        {/* <div className="by mx-5 p-5 w-45 h-20 "> */}
        <div className="hn w-10 px-4 ">
          <h5>select</h5>
          <i class="fa-solid fa-clock p-1 m-0 mx-5 "></i>
        </div>
        {/* <div className="ji">
      <i class="fa-solid fa-clock"></i></div> */}
      </div>
      {/* </div> */}
      <div className="FINDA-TUTOR">
        <button className="anu">FINDA TUTOR</button>
      </div>
    </div>
  );
}
