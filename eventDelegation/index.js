document.querySelector("#category")
    .addEventListener("click", (e) => {
        var loc = e.target.id;
        console.log("loc = ", loc, "  window.location.href = ", window.location.href);
        // window.location.href = "/" + loc;
        e.stopPropagation();
    })