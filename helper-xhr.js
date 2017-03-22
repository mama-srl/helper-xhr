class HttpRequest {
  constructor(method, uri, contentType) {
    this._fetchingPromise = null;
    this.xhr = new XMLHttpRequest();
    if (!!method && !!uri) {
      this.xhr.open(method, uri);
    }
    if (!!contentType) {
      this.xhr.setRequestHeader('Content-Type', contentType);
    }
  }

  open(method, uri) {
    if (!!method && !!uri) {
      this.xhr.open(method, uri);
    }
  }

  setRequestHeader(header, value) {
    if (!!header && !!value) {
      this.xhr.setRequestHeader(header, value);
    }
  }

  getAllResponseHeaders() {
    return this.headers;
  }

  fetchFromServer(payload) {
    var ret = null;

    ret = new Promise((resolve, reject) => {

      this.xhr.onload = function () {

        if (this.readyState == this.HEADERS_RECEIVED) {
          this.headers = this.xhr.getAllResponseHeaders();
        }

        if (this.xhr.status === 200) {
          var d = JSON.parse(this.xhr.responseText, function (k, v) {
            if (!!v && (k === 'createdon' || k === 'updatedon' || k === 'askedon' || k === 'publishedon' || k === 'lastUpdated')) {
              return new Date(v);
            }
            return v;
          });
          resolve(
            {
              response: d
            }
          )
        } else {
          reject(this.xhr.statusText);
        }
        this._fetchingPromise = null;
      }.bind(this);

      this.xhr.onerror = function () {
        console.log("** An error occurred during the transaction");
        console.log("Error " + e.target.status + " occurred while receiving the document.");
        reject(this.xhr.statusText);
        this._fetchingPromise = null;
      };

      this.xhr.send(JSON.stringify(payload));

      //this.xhr.onreadystatechange = function () {
      //  if (this.readyState == this.HEADERS_RECEIVED) {
      //    console.log("headers", request.getAllResponseHeaders());
      //  }
      //}
    });

    return ret;
  }

  send(payload) {
    if (!this._fetchingPromise) {
      this._fetchingPromise = this.fetchFromServer(payload);
    } else {
    }

    return this._fetchingPromise;
  }

}

export { HttpRequest };