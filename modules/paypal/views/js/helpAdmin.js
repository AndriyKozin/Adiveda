/*! For license information please see helpAdmin.js.LICENSE */
!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=9)}({9:function(e,t){var n={init:function(){$("#ckeck_requirements").click(function(){n.checkCredentials()})},checkCredentials:function(){$.ajax({url:controllerUrl,type:"POST",dataType:"JSON",data:{ajax:!0,action:"CheckCredentials"},success:function(e){var t,r;for(var o in $(".action_response").html(""),r=1==e.success?"success":"danger",e.message)t=n.getAlert(e.message[o],r),$(t).appendTo(".action_response")}})},getAlert:function(e,t){var n=document.createElement("div");return n.className="alert alert-".concat(t),n.appendChild(document.createTextNode(e)),n}};document.addEventListener("DOMContentLoaded",function(){n.init()})}});
//# sourceMappingURL=helpAdmin.js.map