import{a as x}from"./index.DK-fsZOb.js";var l={exports:{}},o={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var d;function v(){if(d)return o;d=1;var t=x(),f=Symbol.for("react.element"),_=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,R=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,b={key:!0,ref:!0,__self:!0,__source:!0};function u(n,e,a){var r,i={},s=null,c=null;a!==void 0&&(s=""+a),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(c=e.ref);for(r in e)m.call(e,r)&&!b.hasOwnProperty(r)&&(i[r]=e[r]);if(n&&n.defaultProps)for(r in e=n.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:f,type:n,key:s,ref:c,props:i,_owner:R.current}}return o.Fragment=_,o.jsx=u,o.jsxs=u,o}var p;function y(){return p||(p=1,l.exports=v()),l.exports}var S=y();const E={tech:{code:"TC",label:"tech"},biz:{code:"BZ",label:"biz"},indie:{code:"ID",label:"indie"},proptech:{code:"RE",label:"proptech"},invest:{code:"IV",label:"invest"},geo:{code:"GP",label:"geo"},seo:{code:"SW",label:"seo"},law:{code:"LW",label:"law"},design:{code:"DS",label:"design"},essay:{code:"ES",label:"essay"}};function O(t){return E[t]??{code:t.slice(0,2).toUpperCase(),label:t}}export{O as g,S as j};
