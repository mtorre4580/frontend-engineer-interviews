# CSS

Allows to create rules that specifiy how the content should appear

	A CSS rule contains 2 parts
		- Selector: indicate which element the rule applies to
		- Declarations: indicate how the elements should be styled

	How to load?
		- link: <link href="style.css">
		- tag: <style>p {color:red}</style>

	Selectors
		- Universal selector: Applies to all elements => * {}
		- Type selector: Matches elements names => h1, h2, p
		- Class selector: Matches elements with class name => .note {}
		- Id selector: Matches an element with the id => #miId {}
		- Child selector: Matches element that is a direct child => li > a
		- Descedant selector: p a {}
		- Adjacent sibling selector: Matches an element that is the next sibling of another => h1+p {}
		- General sibling selector: Matches an element that is a sibling of another => h1

	Atribute
		- Existence: Matches a specific attribute => p[class]
		- Equality: Matches a specific attribute with a specific value => p[class="dog"]
		- Prefix: Matches a specific attribute whose value begins with a specific string p[attr^"d"]

	Cascade
		- The last rule take precedence

	Inheritance
		- font-family is inherited by child elements
		- background-color: is not inherited
		- Its posible to force inherit for the values, via inherit property

	Overflow
		- Property tells the browser what to do if the content is larger that the box

	Border
		- Separates the edge of one box for other

	Margin
		- Margin outside the edge of the border

	Padding
	    - Space between the border of a box and any content contained