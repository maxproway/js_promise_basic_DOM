var e=new Promise(function(e){document.querySelector(".logo").addEventListener("click",function(){e("Promise was resolved!")})}),n=new Promise(function(e,n){setTimeout(function(){n(Error("Promise was rejected!"))},3e3)});function r(e,n){var r=document.createElement("div");r.classList.add("message"),"error"===e&&r.classList.add("error-message"),r.innerHTML=n,document.body.appendChild(r)}e.then(function(e){r("success",e)}),n.catch(function(e){r("error",e)});
//# sourceMappingURL=index.07ddac85.js.map
