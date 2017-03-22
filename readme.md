# Helper XHR

Very basic, very simple, xhr promise wrapper.
I started using [fetch](https://github.github.io/fetch/), and soon discovered ["replay xhr" is not supported in browsers](http://stackoverflow.com/questions/42908939/how-to-replay-a-fetch-in-chrome-developer-tools) for fetch request.

So I created this miny/simple/basic xhr request wrapper.

## Installation

So far it's cut and paste.

There's no dependecy.

Yes it's in [ES6](https://github.com/lukehoban/es6features).

## Usage

```
var xhr = new HttpRequest("POST", "/foo/bar/", "application/json");
xhr.send({elmer: "fudd"}).then((data) => {
	console.log("got this", data.json);
}).catch((e) => {
	console.log("something wrong", e);
});

console.log("headers", xhr.getAllResponseHeaders());
```

## Contributing

You are welcome!

## History

Created on March 22, 2017

## Credits

Don't blame me.

## License

Do whatever you want with it.