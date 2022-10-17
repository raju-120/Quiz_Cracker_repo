import React from 'react';

const Blog = () => {
    return (
        <div className='m-2 p-3 border-2 border-sky-500 rounded-lg grid-cols-12 grid-template-columns: repeat(12, minmax(0, 1fr));'>

            <div className='m-2 p-3 border-2 border-neutral-200 rounded-lg mb-4'>
                <h3 className='text-2xl font-bold mb-3'>What is the purpose of React Router?</h3>
                <p className='m-2 p-3 text-lg'><small>Answer :</small> React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, <br /> allows changing the browser URL, and keeps the UI in sync with the URL.</p>
            </div>

            <div className='m-2 p-3 border-2 border-neutral-200 rounded-lg mb-4'>
                <h3 className='text-2xl font-bold mb-3'>How does Context API works?</h3>
                <p className='m-2 p-3 text-lg'><small>Answer :</small>The React Context API is a way for a React app to effectively produce global variables that can be passed around. <br /> This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on.<br /> Context is also touted as an easier, lighter approach to state management using Redux.</p>
            </div>

            <div className='m-2 p-3 border-2 border-neutral-200 rounded-lg mb-4'>
                <h3 className='text-2xl font-bold mb-3'>Talk about of using Ref-React-Hook.</h3>
                <p className='m-2 p-3 text-lg'><small>Answer :</small> useRef returns a mutable ref object whose .current property is initialized to the passed argument (initialValue). The returned object will persist<br /> for the full lifetime of the component.Essentially,  useRef is like a “box” that can hold a mutable value in its .current property.It might be <br />familiar with  refs primarily  as a way to access the DOM. If you pass a ref object to React with ref=(myRef ), React will set its. Current <br /> property to  the corresponding DOM node whenever that node changes. However, useRef() is useful for more than the ref attribute. <br /> It's handy for keeping any mutable value around similar to how you'd use instance fields in classes. This works because useRef() <br /> creates a plain JavaScript object. The only difference between useRef() and creating a (current:.)  object yourself is <br /> that useRef will give you the same ref object on every render. Keep in mind that useRef doesn't notify you when <br /> its content changes. Mutating the .current property doesn't cause a re-render. If you want to run some code  <br />when React attaches or detaches a ref to a DOM node, you may want to use a callback ref instead.

</p>
            </div>
        </div>
    );
};

export default Blog;