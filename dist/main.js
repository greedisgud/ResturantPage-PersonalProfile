(()=>{"use strict";function t(t){const e=document.createElement("p");return e.textContent=t,e}const e=function(){const e=document.getElementById("main");e.textContent="",e.appendChild(function(){const e=document.createElement("div");e.classList.add("home");const n=document.createElement("img");return n.src="img/chef.jpeg",e.appendChild(t("Best Italian Food in Town!")),e.appendChild(n),e.appendChild(t("Order now for takeout or delivery")),e.appendChild(t("Thank you for your support!")),e}())};function n(t,e){const n=document.createElement("div");n.classList.add("menu-item");const c=document.createElement("h3");c.textContent=t;let a=document.createElement("p");a.textContent=e;const d=document.createElement("img");return d.src=`img/${t.toLowerCase()}.jpeg`,n.appendChild(d),n.appendChild(c),n.appendChild(a),n}function c(){const t=document.createElement("header");t.classList.add("header");const c=document.createElement("h1");return c.textContent="A Pizza for all",t.appendChild(c),t.appendChild(function(){const t=document.createElement("nav");t.classList.add("nav-bar");const c=document.createElement("button");c.classList.add("nav-btn"),c.textContent="Home",c.addEventListener("click",(t=>{t.target.classList.contains("active")||(a(),e())}));const d=document.createElement("button");d.classList.add("nav-btn"),d.textContent="Menu",d.addEventListener("click",(t=>{t.target.classList.contains("active")||(a(),function(){const t=document.getElementById("main");t.textContent="",t.appendChild(function(){const t=document.createElement("div");return t.classList.add("menu"),t.appendChild(n("Margaritia","Delicious woodfired Margarita Pizza")),t.appendChild(n("Meat-Lovers","Delicious woodfired Meat Lovers Pizza")),t.appendChild(n("Spicy-Sicilian","Delicious woodfired spicy pizza from the foothills of Italia")),t}())}())}));const o=document.createElement("button");return o.classList.add("nav-btn"),o.textContent="Contact",o.addEventListener("click",(t=>{t.target.classList.contains("active")||(a(),function(){const t=document.getElementById("main");t.textContent="",t.appendChild(function(){const t=document.createElement("div");t.classList.add("contact");let e=document.createElement("h5");e.textContent="123-456-7890";let n=document.createElement("p");return n.textContent="1234@pizzaplace.com",t.appendChild(e),t.appendChild(n),t}())}())})),t.appendChild(c),t.appendChild(d),t.appendChild(o),t}()),t}function a(t){document.querySelectorAll(".nav-btn").forEach((t=>{t!==this?t.classList.remove("active"):t.classList.add("active")}))}!function(){const t=document.getElementById("content");t.appendChild(c()),t.appendChild(function(){const t=document.createElement("main");return t.classList.add("main"),t.setAttribute("id","main"),t}()),a(document.querySelector(".button-nav")),e()}()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUVwQixJQUFJa0MsRUFBUXBDLFNBQVNDLGNBQWMsS0FNbkMsT0FMQW1DLEVBQU1sQyxZQUFjLHNCQUVwQmdDLEVBQVE3QixZQUFZOEIsR0FDcEJELEVBQVE3QixZQUFZK0IsR0FFYkYsRUFNVUcsSUQ0QmYsT0FHRmQsRUFBSWxCLFlBQVltQixHQUNoQkQsRUFBSWxCLFlBQVl5QixHQUNoQlAsRUFBSWxCLFlBQVk0QixHQUVUVixFQTFDWWUsSUFDWmpCLEVBNENULFNBQVNRLEVBQWFVLEdBQ0p2QyxTQUFTd0MsaUJBQWlCLFlBRWxDQyxTQUFTRixJQUNYQSxJQUFXRyxLQUNiSCxFQUFPaEMsVUFBVW9DLE9BQU8sVUFFeEJKLEVBQU9oQyxVQUFVQyxJQUFJLGNBYTNCLFdBQ0UsTUFBTW9DLEVBQVU1QyxTQUFTSSxlQUFlLFdBRXhDd0MsRUFBUXZDLFlBQVllLEtBQ3BCd0IsRUFBUXZDLFlBWlYsV0FDRSxNQUFNRixFQUFPSCxTQUFTQyxjQUFjLFFBSXBDLE9BSEFFLEVBQUtJLFVBQVVDLElBQUksUUFDbkJMLEVBQUswQyxhQUFhLEtBQU0sUUFFakIxQyxFQU9hMkMsSUFFcEJqQixFQUFhN0IsU0FBUytDLGNBQWMsZ0JBQ3BDLElFbEZGLEkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0dXJhbnRwYWdlLXBlcnNvbmFscHJvZmlsZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3R1cmFudHBhZ2UtcGVyc29uYWxwcm9maWxlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdHVyYW50cGFnZS1wZXJzb25hbHByb2ZpbGUvLi9zcmMvd2Vic2l0ZS5qcyIsIndlYnBhY2s6Ly9yZXN0dXJhbnRwYWdlLXBlcnNvbmFscHJvZmlsZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3R1cmFudHBhZ2UtcGVyc29uYWxwcm9maWxlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGNyZWF0ZUhvbWUoKSB7XG4gIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBob21lLmNsYXNzTGlzdC5hZGQoXCJob21lXCIpO1xuXG4gIGNvbnN0IGhvbWVJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGhvbWVJbWFnZS5zcmMgPSBcImltZy9jaGVmLmpwZWdcIjtcblxuICBob21lLmFwcGVuZENoaWxkKGNyZWF0ZVBhcmFncmFwaChcIkJlc3QgSXRhbGlhbiBGb29kIGluIFRvd24hXCIpKTtcbiAgaG9tZS5hcHBlbmRDaGlsZChob21lSW1hZ2UpO1xuICBob21lLmFwcGVuZENoaWxkKGNyZWF0ZVBhcmFncmFwaChcIk9yZGVyIG5vdyBmb3IgdGFrZW91dCBvciBkZWxpdmVyeVwiKSk7XG4gIGhvbWUuYXBwZW5kQ2hpbGQoY3JlYXRlUGFyYWdyYXBoKFwiVGhhbmsgeW91IGZvciB5b3VyIHN1cHBvcnQhXCIpKTtcblxuICByZXR1cm4gaG9tZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUGFyYWdyYXBoKHRleHQpIHtcbiAgY29uc3QgcGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBwYXJhLnRleHRDb250ZW50ID0gdGV4dDtcbiAgcmV0dXJuIHBhcmE7XG59XG5cbmZ1bmN0aW9uIGxvYWRIb21lKCkge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpO1xuICBtYWluLnRleHRDb250ZW50ID0gXCJcIjtcbiAgbWFpbi5hcHBlbmRDaGlsZChjcmVhdGVIb21lKCkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBsb2FkSG9tZTtcbiIsImZ1bmN0aW9uIGNyZWF0ZU1lbnUoKSB7XG4gIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtZW51LmNsYXNzTGlzdC5hZGQoXCJtZW51XCIpO1xuXG4gIG1lbnUuYXBwZW5kQ2hpbGQoXG4gICAgY3JlYXRlTWVudUl0ZW0oXCJNYXJnYXJpdGlhXCIsIFwiRGVsaWNpb3VzIHdvb2RmaXJlZCBNYXJnYXJpdGEgUGl6emFcIilcbiAgKTtcblxuICBtZW51LmFwcGVuZENoaWxkKFxuICAgIGNyZWF0ZU1lbnVJdGVtKFwiTWVhdC1Mb3ZlcnNcIiwgXCJEZWxpY2lvdXMgd29vZGZpcmVkIE1lYXQgTG92ZXJzIFBpenphXCIpXG4gICk7XG5cbiAgbWVudS5hcHBlbmRDaGlsZChcbiAgICBjcmVhdGVNZW51SXRlbShcbiAgICAgIFwiU3BpY3ktU2ljaWxpYW5cIixcbiAgICAgIFwiRGVsaWNpb3VzIHdvb2RmaXJlZCBzcGljeSBwaXp6YSBmcm9tIHRoZSBmb290aGlsbHMgb2YgSXRhbGlhXCJcbiAgICApXG4gICk7XG5cbiAgcmV0dXJuIG1lbnU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU1lbnVJdGVtKHRpdGxlLCBkaXNjcmlwdGlvbikge1xuICBjb25zdCBtZW51SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1lbnVJdGVtLmNsYXNzTGlzdC5hZGQoXCJtZW51LWl0ZW1cIik7XG5cbiAgY29uc3QgZm9vZFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICBmb29kVGl0bGUudGV4dENvbnRlbnQgPSB0aXRsZTtcblxuICBsZXQgZGlzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBkaXNjLnRleHRDb250ZW50ID0gZGlzY3JpcHRpb247XG5cbiAgY29uc3QgZm9vZEltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgZm9vZEltYWdlLnNyYyA9IGBpbWcvJHt0aXRsZS50b0xvd2VyQ2FzZSgpfS5qcGVnYDtcblxuICBtZW51SXRlbS5hcHBlbmRDaGlsZChmb29kSW1hZ2UpO1xuICBtZW51SXRlbS5hcHBlbmRDaGlsZChmb29kVGl0bGUpO1xuICBtZW51SXRlbS5hcHBlbmRDaGlsZChkaXNjKTtcblxuICByZXR1cm4gbWVudUl0ZW07XG59XG5cbmZ1bmN0aW9uIGxvYWRNZW51KCkge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpO1xuICBtYWluLnRleHRDb250ZW50ID0gXCJcIjtcbiAgbWFpbi5hcHBlbmRDaGlsZChjcmVhdGVNZW51KCkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBsb2FkTWVudTtcbiIsImltcG9ydCBsb2FkSG9tZSBmcm9tIFwiLi9ob21lXCI7XG5pbXBvcnQgbG9hZE1lbnUgZnJvbSBcIi4vbWVudVwiO1xuaW1wb3J0IGxvYWRDb250YWN0IGZyb20gXCIuL2NvbnRhY3RcIjtcblxuZnVuY3Rpb24gY3JlYXRlSGVhZGVyKCkge1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIpO1xuICBoZWFkZXIuY2xhc3NMaXN0LmFkZChcImhlYWRlclwiKTtcblxuICBjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICBuYW1lLnRleHRDb250ZW50ID0gXCJBIFBpenphIGZvciBhbGxcIjtcblxuICBoZWFkZXIuYXBwZW5kQ2hpbGQobmFtZSk7XG4gIGhlYWRlci5hcHBlbmRDaGlsZChjcmVhdGVOYXYoKSk7XG4gIHJldHVybiBoZWFkZXI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU5hdigpIHtcbiAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm5hdlwiKTtcbiAgbmF2LmNsYXNzTGlzdC5hZGQoXCJuYXYtYmFyXCIpO1xuXG4gIGNvbnN0IGhvbWVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBob21lQnRuLmNsYXNzTGlzdC5hZGQoXCJuYXYtYnRuXCIpO1xuICBob21lQnRuLnRleHRDb250ZW50ID0gXCJIb21lXCI7XG5cbiAgaG9tZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSByZXR1cm47XG4gICAgc2V0QWN0aXZlQnRuKGhvbWVCdG4pO1xuICAgIGxvYWRIb21lKCk7XG4gIH0pO1xuXG4gIGNvbnN0IG1lbnVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBtZW51QnRuLmNsYXNzTGlzdC5hZGQoXCJuYXYtYnRuXCIpO1xuICBtZW51QnRuLnRleHRDb250ZW50ID0gXCJNZW51XCI7XG5cbiAgbWVudUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSByZXR1cm47XG4gICAgc2V0QWN0aXZlQnRuKG1lbnVCdG4pO1xuICAgIGxvYWRNZW51KCk7XG4gIH0pO1xuXG4gIGNvbnN0IGNvbnRhY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjb250YWN0QnRuLmNsYXNzTGlzdC5hZGQoXCJuYXYtYnRuXCIpO1xuICBjb250YWN0QnRuLnRleHRDb250ZW50ID0gXCJDb250YWN0XCI7XG5cbiAgY29udGFjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSByZXR1cm47XG4gICAgc2V0QWN0aXZlQnRuKGNvbnRhY3RCdG4pO1xuICAgIGxvYWRDb250YWN0KCk7XG4gIH0pO1xuXG4gIG5hdi5hcHBlbmRDaGlsZChob21lQnRuKTtcbiAgbmF2LmFwcGVuZENoaWxkKG1lbnVCdG4pO1xuICBuYXYuYXBwZW5kQ2hpbGQoY29udGFjdEJ0bik7XG5cbiAgcmV0dXJuIG5hdjtcbn1cblxuZnVuY3Rpb24gc2V0QWN0aXZlQnRuKGJ1dHRvbikge1xuICBjb25zdCBidXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5uYXYtYnRuXCIpO1xuXG4gIGJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgaWYgKGJ1dHRvbiAhPT0gdGhpcykge1xuICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU1haW4oKSB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibWFpblwiKTtcbiAgbWFpbi5jbGFzc0xpc3QuYWRkKFwibWFpblwiKTtcbiAgbWFpbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm1haW5cIik7XG5cbiAgcmV0dXJuIG1haW47XG59XG5cbmZ1bmN0aW9uIGxvYWRXZWJzaXRlKCkge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlSGVhZGVyKCkpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZU1haW4oKSk7XG5cbiAgc2V0QWN0aXZlQnRuKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnV0dG9uLW5hdlwiKSk7XG4gIGxvYWRIb21lKCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRXZWJzaXRlO1xuIiwiZnVuY3Rpb24gY3JlYXRlQ29udGFjdCgpIHtcbiAgY29uc3QgY29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnRhY3QuY2xhc3NMaXN0LmFkZChcImNvbnRhY3RcIik7XG5cbiAgbGV0IHBob25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg1XCIpO1xuICBwaG9uZS50ZXh0Q29udGVudCA9IFwiMTIzLTQ1Ni03ODkwXCI7XG5cbiAgbGV0IGVtYWlsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGVtYWlsLnRleHRDb250ZW50ID0gXCIxMjM0QHBpenphcGxhY2UuY29tXCI7XG5cbiAgY29udGFjdC5hcHBlbmRDaGlsZChwaG9uZSk7XG4gIGNvbnRhY3QuYXBwZW5kQ2hpbGQoZW1haWwpO1xuXG4gIHJldHVybiBjb250YWN0O1xufVxuXG5mdW5jdGlvbiBsb2FkQ29udGFjdCgpIHtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKTtcbiAgbWFpbi50ZXh0Q29udGVudCA9IFwiXCI7XG4gIG1haW4uYXBwZW5kQ2hpbGQoY3JlYXRlQ29udGFjdCgpKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9hZENvbnRhY3Q7XG4iLCJpbXBvcnQgbG9hZFdlYnNpdGUgZnJvbSBcIi4vd2Vic2l0ZVwiO1xuXG5sb2FkV2Vic2l0ZSgpO1xuIl0sIm5hbWVzIjpbImNyZWF0ZVBhcmFncmFwaCIsInRleHQiLCJwYXJhIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwidGV4dENvbnRlbnQiLCJtYWluIiwiZ2V0RWxlbWVudEJ5SWQiLCJhcHBlbmRDaGlsZCIsImhvbWUiLCJjbGFzc0xpc3QiLCJhZGQiLCJob21lSW1hZ2UiLCJzcmMiLCJjcmVhdGVIb21lIiwiY3JlYXRlTWVudUl0ZW0iLCJ0aXRsZSIsImRpc2NyaXB0aW9uIiwibWVudUl0ZW0iLCJmb29kVGl0bGUiLCJkaXNjIiwiZm9vZEltYWdlIiwidG9Mb3dlckNhc2UiLCJjcmVhdGVIZWFkZXIiLCJoZWFkZXIiLCJuYW1lIiwibmF2IiwiaG9tZUJ0biIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwidGFyZ2V0IiwiY29udGFpbnMiLCJzZXRBY3RpdmVCdG4iLCJtZW51QnRuIiwibWVudSIsImNyZWF0ZU1lbnUiLCJjb250YWN0QnRuIiwiY29udGFjdCIsInBob25lIiwiZW1haWwiLCJjcmVhdGVDb250YWN0IiwiY3JlYXRlTmF2IiwiYnV0dG9uIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJ0aGlzIiwicmVtb3ZlIiwiY29udGVudCIsInNldEF0dHJpYnV0ZSIsImNyZWF0ZU1haW4iLCJxdWVyeVNlbGVjdG9yIl0sInNvdXJjZVJvb3QiOiIifQ==