import React from "react";

const BusinessSummary = () => {
  return (
    <div className="my-20 text-center">
      <div className="text-center">
        <h3 className="text-accent text-xl font-bold uppercase">
          Business Summary
        </h3>
      </div>
      <div>
        <div class="stats stats-vertical lg:stats-horizontal shadow my-20">
          <div class="stat px-12">
            <div class="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                class="inline-block w-8 h-8 stroke-current"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </div>
            <div class="stat-title">Served</div>
            <div class="stat-value">10K+</div>
            <div class="stat-desc">Customers</div>
          </div>

          <div class="stat px-12">
            <div class="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                class="inline-block w-8 h-8 stroke-current"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                ></path>
              </svg>
            </div>
            <div class="stat-title">Annual Revenue</div>
            <div class="stat-value">120M+</div>
            <div class="stat-desc">↗︎ 200 (22%)</div>
          </div>

          <div class="stat px-12">
            <div class="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                class="inline-block w-8 h-8 stroke-current"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                ></path>
              </svg>
            </div>
            <div class="stat-title">Reviews</div>
            <div class="stat-value">33K+</div>
            <div class="stat-desc">↗︎ 90 (14%)</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessSummary;
