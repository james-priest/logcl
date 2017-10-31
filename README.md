# logcl

A simple node package with a set of wrapper functions to console.log()

- **cl** - console.log or new line
- **clt** - console.log title
- **cli** - console.log indent (2 spaces)
- **cll** - console.log with label and data. data is indented 2 spaces
- **cld** - console.log with dashes before and after label

## Install

`$ npm install logcl --save`

## Use

Create a reference to the module in code. Then invoke the methods as needed.

code:

```javascript
var log = require('logcl');

var foo = "foo";
var bar = "bar";

log.cl('test1');
log.cl();

log.clt('My Title');
log.cli('data');
log.cl();

log.cld('next test');
log.cll(foo, bar);
```

output:

```bash
$ test1
$
$ My Title
$   data
$
$ ---------- next test
$ foo
$   bar
```

## Examples

**cl** - console.log or new line

code:

```javascript
var data = 'hello world';
log.cl();
log.cl(data);
```

output:

```bash
// output
$
$ hello world
```

**clt** - console.log with title<br />
**cli** - console.log with 2 space indent

code:

```javascript
var title = 'An Object';
var data = { name: 'my object' };

log.clt(title);
log.cli(data);
```

output:

```bash
$ An Object
$   { name: 'my object' }
```

**cld** - console.log with with dashes before label<br />
**cll** - console.log with label and data. data is indented 2 spaces

code:

```javascript
var section = "New Section";
var myNum = 42;
var myArr = [1,2,3];

log.cld(section)
log.cll("Number", myNum);
log.cll("Array", myArr);
```

output:

```bash
$ ---------- New Section
$ Number
$   42
$ Array
$   [1, 2, 3]

```