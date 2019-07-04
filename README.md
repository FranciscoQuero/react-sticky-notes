# React Sticky Notes

Sticky Notes for React Application

## Installation

Install the React Sticky Notes [package](https://www.npmjs.com/package/@react-latest-ui/react-sticky-notes) package using [npm](https://www.npmjs.com/):

```bash
npm install @react-latest-ui/react-sticky-notes --save
```

## Features

* Pure React Sticky Notes
* Draggable & Resizable Stickies
* Inline Content Editable
* Configurable Sticky Colors

## Usage

```javascript
import React, { Component } from 'react';
import ReactStickyNotes from '@react-latest-ui/react-sticky-notes';

class MyApp extends Component {
	constructor(props) {
		super(props);
	}  
	render() {
		return (
			<ReactStickyNotes />
		)
	}
});
```

### React Stickies Props

```javascript
sessionKey: ?String,
colors: ?Array = [HexCodes],
notes: ?Array = [{
	color: ?HexCode,
	text: ?String
}],
containerWidth: ?String{px|%},
containerHeight: ?String{px|%},
noteWidth: ?Number,
noteHeight: ?Number,
footer: ?Boolean = {true|false},

// Callbacks
onBeforeChange: (type:String, payload:Object, notes: Array) => {
	return payload;
}
// Callbacks
onChange: (type:String, payload:Object, notes: Array) => {

}

```

## Contribute

If you have a feature request, please add it as an issue or make a pull request.

## TODO List

- [x] Basic Notes with CRUD
- [x] Resizable
- [x] Draggable
- [x] Responsive to all devices/desktop
- [ ] ---- 
