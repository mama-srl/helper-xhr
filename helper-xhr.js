"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HttpRequest = function () {
  function HttpRequest(method, uri, contentType) {
    _classCallCheck(this, HttpRequest);

    this._fetchingPromise = null;
    this.xhr = new XMLHttpRequest();
    if (!!method && !!uri) {
      this.xhr.open(method, uri);
    }
    if (!!contentType) {
      this.xhr.setRequestHeader('Content-Type', contentType);
    }
  }

  _createClass(HttpRequest, [{
    key: 'open',
    value: function open(method, uri) {
      if (!!method && !!uri) {
        this.xhr.open(method, uri);
      }
    }
  }, {
    key: 'setRequestHeader',
    value: function setRequestHeader(header, value) {
      if (!!header && !!value) {
        this.xhr.setRequestHeader(header, value);
      }
    }
  }, {
    key: 'getAllResponseHeaders',
    value: function getAllResponseHeaders() {
      return this.headers;
    }
  }, {
    key: 'fetchFromServer',
    value: function fetchFromServer(payload) {
      var _this = this;

      var ret = null;

      ret = new Promise(function (resolve, reject) {

        _this.xhr.onload = function () {

          if (this.readyState == this.HEADERS_RECEIVED) {
            this.headers = this.xhr.getAllResponseHeaders();
          }

          if (this.xhr.status === 200) {
            var d = JSON.parse(this.xhr.responseText, function (k, v) {
              if (!!v && (k === 'createdon' || k === 'updatedon' || k === 'askedon' || k === 'publishedon' || k === 'lastUpdated')) {
                return new Date(v);
              }
              if (!!v && k === 'json' && typeof v == "string") {
                return JSON.parse(v);
              }
              return v;
            });
            resolve({
              json: d,
              headers: this.headers
            });
          } else {
            reject(this.xhr.statusText);
          }
          this._fetchingPromise = null;
        }.bind(_this);

        _this.xhr.onerror = function (e) {
          reject(e.target.status);
          this._fetchingPromise = null;
        };

        _this.xhr.send(JSON.stringify(payload));

        //this.xhr.onreadystatechange = function () {
        //  if (this.readyState == this.HEADERS_RECEIVED) {
        //    console.log("headers", request.getAllResponseHeaders());
        //  }
        //}
      });

      return ret;
    }
  }, {
    key: 'send',
    value: function send(payload) {
      if (!this._fetchingPromise) {
        this._fetchingPromise = this.fetchFromServer(payload);
      } else {}

      return this._fetchingPromise;
    }
  }]);

  return HttpRequest;
}();

exports.default = HttpRequest;
