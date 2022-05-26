import React from "react";
import { Link } from "react-router-dom";

const MyPortfolio = () => {
  return (
    <div>
      <h1 className="text-accent text-center text-xl py-5 font-bold uppercase bg-slate-300">
        My Portfolio
      </h1>
      <div className="bg-base-100">
        <div class="hero bg-base-100">
          <div class="hero-content text-center">
            <div>
              <h1 class="text-xl font-semibold text-green-700 my-3">
                Name: <span className="text-pink-600">Rashed Uz Zaman</span>
              </h1>
              <h1 class=" font-semibold text-green-700 my-3">
                Email:{" "}
                <span className="text-pink-600">rasheduap2015@gmail.com</span>
              </h1>
              <div>
                <h1 className="font-bold my-5">EDUCATION</h1>
                <div class="overflow-x-auto">
                  <table class="table w-flil">
                    <thead>
                      <tr>
                        <th>Year</th>
                        <th>Degree</th>
                        <th>Major</th>
                        <th>Institution</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th>2015-2019</th>
                        <td>BSC</td>
                        <td>Electrical And Electronic Engineering</td>
                        <td>University Of Asia Pacific</td>
                      </tr>

                      <tr>
                        <th>2010-2012</th>
                        <td>HSC</td>
                        <td>Science</td>
                        <td>MR Govt College, Panchagarh</td>
                      </tr>

                      <tr>
                        <th>2009-2010</th>
                        <td>SSC</td>
                        <td>Science</td>
                        <td>BaroAulia Mazar Sharif High School</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <h1 className="my-5 text-center font-bold ">TECHNOLOGIES</h1>
                <div className="text-green-700">
                  <li>HTML5</li>
                  <li>CSS3</li>
                  <li>BOOTSTRAP5</li>
                  <li>TAILWIND</li>
                  <li>JAVASCRIPT</li>
                  <li>REACT.JS</li>
                  <li>NODE.JS</li>
                  <li>EXPRESS.JS</li>
                  <li>MONGO DB</li>
                  <li>FIREBASE</li>
                  <li>HEROKU</li>
                  <li>NETLIFY</li>
                </div>
                <h1 className="my-5 text-center font-bold ">MY PROJECTS</h1>
                <div>
                  <ol>
                    {" "}
                    <a target="_blank" href="https://carventory-581a5.web.app/">
                      <u>Carventory</u>
                    </a>
                  </ol>
                  <p>
                    <a
                      target="_blank"
                      href="https://momenta-photography.web.app/"
                    >
                      <u>Momenta Photography</u>
                    </a>
                  </p>
                  <p>
                    <a
                      target="_blank"
                      href="https://clock-zone-by-rashed.netlify.app/"
                    >
                      <u>Clock Zone</u>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPortfolio;
