const stampsEL= document.getElementById("stamps");
for (let i = 0; i < 10; i++) {
    const b = document.createElement("button")
    b.type = "button";
    b.className = "stamp";
    b.textContent = i === 9 ?  "🎁" : "☕";
    b.setAttribute("aria-label", "Stamp" + (i + 1));
    b.onclick = () => {
        b.classList.toggle("on");
        const count = document.querySeclectorAll(".stamp.on").length;
        document.getElementById("stampMsg").textContent = 
            count === 10 ? "Card Complete! Your next coffee is free." : count + " / 10 stamps";
    
    };
    stampsEL.appendChild(b);
}