function handleClick() {
   const h2 = document.createElement("h2").textContent = "This is a Sub heading"

    const image = document.createElement("img");
    image.setAttribute("src", "https://media.licdn.com/dms/image/v2/D4D12AQGQmmX2olF-8A/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1669299957113?e=2147483647&v=beta&t=r0gubczEqmMMuS3V8xYbTwXn8GktcN_6LXLSCRhcAXU");

    document.getElementById("render").append(h2)
    document.getElementById("render").append(image)
}

// addEventListener("eventtype",function)

document.getElementById("task2").addEventListener("click", handleClick);









