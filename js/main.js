const pages=[["index.html","Home"],["about.html","About"],["services.html","Services"],["form.html","Form"],["map.html","Map"],["privacy.html","Privacy & Policy"],["terms.html","Terms"],["faq.html","FAQ"],["contact.html","Contact"]];const current=document.body.dataset.page;
document.querySelector("#header").innerHTML=`<div class="top"><span>📍 Beside Umudioka Expressway</span><span>☎ Add official phone　✉ Add official email</span><span><b>★</b> Connecting People, Empowering Lives</span></div><header><div class="nav"><a class="brand" href="index.html"><div class="logo">ECN</div><div><strong>EMMANUEL<br>CONNECTION NETWORK</strong><small>...Connecting People, Empowering Lives</small></div></a><button class="toggle" aria-expanded="false">☰</button><nav class="links">${pages.map(([u,n])=>`<a href="${u}" class="${u===current?'active':''}">${n}</a>`).join("")}</nav></div></header>`;
document.querySelector("#footer").innerHTML=`<footer><div class="wrap"><div class="foot"><div><h3>EMMANUEL CONNECTION NETWORK</h3><p>Connecting People, Empowering Lives.</p><p>Building connections through knowledge, digital awareness and community collaboration.</p></div><div><h3>Explore</h3><a href="about.html">About</a><a href="services.html">Services</a><a href="form.html">Enquiry Form</a></div><div><h3>Information</h3><a href="map.html">Map</a><a href="faq.html">FAQ</a><a href="privacy.html">Privacy Policy</a><a href="terms.html">Terms</a></div><div><h3>Contact</h3><p>Beside Umudioka Expressway</p><p>Add official phone and email</p><a href="contact.html">Send an enquiry →</a></div></div><div class="copyr">© ${new Date().getFullYear()} Emmanuel Connection Network. All rights reserved. | Together for a Connected Future</div></div></footer>`;
const toggle=document.querySelector(".toggle");toggle.addEventListener("click",()=>{const n=document.querySelector(".links");n.classList.toggle("open");toggle.setAttribute("aria-expanded",String(n.classList.contains("open")));toggle.textContent=n.classList.contains("open")?"✕":"☰";});
document.querySelectorAll(".question").forEach(b=>b.addEventListener("click",()=>b.parentElement.classList.toggle("open")));
document.querySelectorAll(".demoform").forEach(f=>f.addEventListener("submit",e=>{e.preventDefault();if(!f.reportValidity())return;f.querySelector(".feedback").textContent="Thank you. This demo form validates in your browser but is not connected to an inbox or database. Connect a secure backend before launch.";f.reset();}));

// ECN PRELOADER SCRIPT

(() => {
    const loader = document.getElementById("ecnPreloader");

    if (!loader) return;

    let done = false;

    function hideLoader() {
        if (done) return;

        done = true;

        loader.classList.add("ecn-loaded");

        setTimeout(() => {
            loader.remove();
        }, 550);
    }

    if (document.readyState === "complete") {
        setTimeout(hideLoader, 200);
    } else {
        window.addEventListener("load", () => {
            setTimeout(hideLoader, 200);
        }, { once: true });
    }

    // Safety fallback after 6 seconds
    setTimeout(hideLoader, 6000);

})();
