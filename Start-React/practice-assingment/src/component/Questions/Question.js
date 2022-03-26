import React from 'react';

const Question = () => {
    return (
        <div>
            <div>
                <h3>Question1: How React Works?</h3>

                Answer:
                <p>ReactJS is simply a JavaScript library for building user interfaces in a predictable and efficient way using declarative code. You can use it to help build single page applications and mobile apps, or to build complex apps if you utilise it with other libraries. In react how the data flow has clearly defined rules. React apps have a structure. Each piece of code that performs on its own is constrained inside a component. These components work in isolation but communicate with each other to make the web application work. React basically maintains a tree. This tree is able to do efficient diff computations on the nodes. I think of your HTML code as a tree. In fact, that is exactly how the browser treats your DOM (your rendered HTML on the browser). React allows you to effectively re-construct your DOM in JavaScript and push only those changes to the DOM which have actually occurred.</p>


            </div>
            <div>

            </div>
        </div>
    );
};

export default Question;