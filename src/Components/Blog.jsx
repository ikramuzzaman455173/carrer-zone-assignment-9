import React from 'react';

const Blog = () => {
  return (
    <section className="bg-slate-200 container px-5  mx-auto flex flex-wrap items-center my-10 rounded-md">
      <div className="py-8 px-4  max-w-screen-xl lg:py-16 lg:px-6 ">
        <h2 className="mb-10 text-3xl text-center lg:text-4xl tracking-tight font-extrabold text-slate-500">Blog Faq Sections</h2>
        <div className="grid gap-8 lg:grid-cols-2 ">
          <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <h4 className="mb-2 text-xl font-semibold tracking-tight text-slate-600 dark:text-white"><span className='gradient-text'>1. </span>When should you use context API ?</h4>
            <p className="mb-5 font-normal text-md text-gray-500 dark:text-gray-400"><span className='gradient-text'>Ans: </span>   <strong>Context API</strong> can solve many problems that modern applications face, related to state management, for example, props drilling. Many solutions can solve state management issues and props drilling, but they may increase your build size and compromise your app performance. <strong>Context API</strong> is a React built-in feature, so we don’t have to worry about performance overhead and library installing issues. </p>
          </article>

          <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <h4 className="mb-2 text-xl font-semibold tracking-tight text-slate-600 dark:text-white"><span className='gradient-text'>2. </span>What is a custom hook?</h4>
            <p className="mb-5 font-normal text-md text-gray-500 dark:text-gray-400"><span className='gradient-text'>Ans: </span>  A custom hook is <strong>a special JavaScript function whose name starts with 'use' and can be used to call other hooks</strong>. Let's take a look at some major differences between a custom React JS hook and React JS components: A custom hook does not require a specific signature.</p>
          </article>

          <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <h4 className="mb-2 text-xl font-semibold tracking-tight text-slate-600 dark:text-white"><span className='gradient-text'>3. </span>What is useRef?</h4>
            <p className="mb-5 font-normal text-md text-gray-500 dark:text-gray-400"><span className='gradient-text'>Ans: </span>  The <strong>useRef</strong> Hook allows you to persist values between renders.It can be used to store a mutable value that does not cause a re-render when updated.It can be used to access a DOM element directly. If we tried to count how many times our application renders using the <strong>useState</strong> Hook, we would be caught in an infinite loop since this Hook itself causes a re-render.To avoid this, we can use the <strong>useRef</strong> Hook.
            </p>
          </article>

          <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <h4 className="mb-2 text-xl font-semibold tracking-tight text-slate-600 dark:text-white"><span className='gradient-text'>4. </span>What is useMemo?</h4>
            <p className="mb-5 font-normal text-md text-gray-500 dark:text-gray-400"><span className='gradient-text'>Ans: </span>  useMemo() is <strong>a function that returns a memoized value of a passed in resource-intensive function</strong>. It is very useful in optimizing the performance of a React component by eliminating repeating heavy computations.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Blog;
