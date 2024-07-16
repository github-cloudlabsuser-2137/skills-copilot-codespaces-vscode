import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

const MarkdownEditor = () => {
  const [markdown, setMarkdown] = useState("type markdown here");

  const handleChange = (e) => {
	setMarkdown(e.target.value);
  };

  function reverseSentence(sentence) {
	// Step 1: Reverse the input sentence
	let reversed = sentence.split(' ').reverse().join(' ');

	// Step 2: Ensure the start of the sentence starts with a capital letter
	reversed = reversed.charAt(0).toUpperCase() + reversed.slice(1).toLowerCase();

	return reversed;
  }

  function extractNames(data) {
	// Step 1: Extract names from the array of arrays of objects
	return data.flatMap(array => array.map(item => item.name));
  }

  // Example usage
  const data = [
	[{ name: 'John', age: 25 }, { name: 'Jane', age: 30 }],
	[{ name: 'Bob', age: 35 }]
  ];
  const names = extractNames(data);
  console.log(names); // Output: ['John', 'Jane', 'Bob']

  return (
	<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
	  <textarea
		value={markdown}
		onChange={handleChange}
		style={{ width: '50%', height: '200px', marginBottom: '20px' }}
	  />
	  <div style={{ width: '50%', border: '1px solid #ddd', padding: '10px' }}>
		<ReactMarkdown>{markdown}</ReactMarkdown>
	  </div>
	</div>
  );
};

export default MarkdownEditor;


