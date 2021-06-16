async function drawIcon() {

    const titlePage = d3.select("slides > slide.title-slide")
        .append("div")
        .style("transform", "translateY(30px)")

    let iconsList = await d3.json("https://gist.githubusercontent.com/mohamdio/982653e3a8ae35f892f13c5ef0ef9b58/raw/d1ca241180eef44cad1d3147a5a70c47f383dc38/font-awesome-v5.0.1.json")

    const icons = d3.shuffle(iconsList.icons)

    titlePage
        .selectAll("i")
        .data(icons.slice(1, 300))
        .join("i")
        .attr("class", d => d)

}

drawIcon()