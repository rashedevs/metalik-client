import React from "react";

const Blogs = () => {
  return (
    <div>
      <h1 className="text-accent text-center text-xl py-5 font-bold uppercase bg-slate-300">
        Blogs
      </h1>
      <div className="bg-base-100">
        <div class="hero bg-base-200">
          <div class="hero-content text-center">
            <div>
              <h1 class="text-xl font-semibold text-green-900">
                How will you improve the performance of a React Application?
              </h1>
              <p class="py-6">
                By using the first-class coding and deployment practices and
                tools, you could optimize your code to improve the overall
                performance of your react application. Some of them are
                mentioned below, <br />
                -Keep component state local when necessary. <br />
                -Memorizing react components to prevent useless re-renders.{" "}
                <br />
                -Code-splitting in react using dynamic import() <br />
                -Avoid lazy loading images.
              </p>
            </div>
          </div>
        </div>

        <div class="hero bg-base-200">
          <div class="hero-content text-center">
            <div>
              <h1 class="text-xl font-semibold text-green-900">
                What are the different ways to manage a state in a React
                application?
              </h1>
              <p class="py-6">
                React additives have a built-in state object. The state is
                encapsulated facts wherein you shop belongings which are
                continual among thing renderings. If a consumer modifications
                kingdom by interacting along with your software, the ui might
                also look completely unique afterwards, because it's represented
                by means of this new kingdom in preference to the antique state.
                There are four important styles of nation you want to correctly
                manipulate for your react apps: <br /> a. Local state <br /> b.
                Global state <br />
                c. Server state <br /> d. URL state
              </p>
            </div>
          </div>
        </div>
        <div class="hero bg-base-200">
          <div class="hero-content text-center">
            <div>
              <h1 class="text-xl font-semibold text-green-900">
                How does prototypical inheritance work?
              </h1>
              <p class="py-6">
                The prototypical inheritance is a function in javascript used to
                function techniques and properties in objects. It's miles a
                technique with the resource of which an item can inherit the
                techniques and strategies of some other item. Historically, with
                the intention to set the [[Prototype]] of an object, we use
                Object.getPrototypeOf and Object. In recent times it's far being
                set the use of __proto__. This approach follows the transitivity
                assets.
              </p>
            </div>
          </div>
        </div>
        <div class="hero bg-base-200">
          <div class="hero-content text-center">
            <div>
              <h1 class="text-xl font-semibold text-green-900">
                Why you do not set the state directly in React. For example, if
                you have const [products, setProducts] = useState([]). Why you
                do not set products = [...] instead, you use the setProducts ?
              </h1>
              <p class="py-6">
                We can use products = [...], but this is not efficient way to
                set products. Because products can be dynamic. That means
                products data can vary. setProducts of useState can solve this
                problem. It helps to set new data when necessary and we can
                render the updated products data easily.
              </p>
            </div>
          </div>
        </div>
        <div class="hero bg-base-200">
          <div class="hero-content text-center">
            <div>
              <h1 class="text-xl font-semibold text-green-900">
                You have an array of products. Each product has a name, price,
                description, etc. How will you implement a search to find
                products by name?
              </h1>
              <p class="py-6">
                We can use find, to get the specific name product. As example,
                <br />
                const products = [{"{x}"},{"{y}"},{"{z}"}]; <br />
                where every object of the array contains a name. We can create a
                function to find product by its name. <br />
                if (product.name==='searched name') matched, then this function
                will return the product.
              </p>
            </div>
          </div>
        </div>
        <div class="hero bg-base-200">
          <div class="hero-content text-center">
            <div>
              <h1 class="text-xl font-semibold text-green-900">
                What is a unit test? Why should write unit tests?
              </h1>
              <p class="py-6">
                Unit test is the partial test strategy, where every feature or
                components functionality of an applicaton are tested. Unit test
                is important enough to check that every unit of code is working
                fine. We should write unit test to ensure the standard of code
                before deployment. It makes the product more reliable.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
