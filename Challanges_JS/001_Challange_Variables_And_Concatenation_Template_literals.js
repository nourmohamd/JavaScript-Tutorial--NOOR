// Start Javascript Code
let titleDev = "Mohamed Nour Abdo";
let descriptionDev = "Information Technology";
let dateDev = "11/25";
let myDev = `
<div>
    <h3>Hello ${titleDev}</h3>
    <p>${descriptionDev}</p>
    <span>${dateDev}</span>
</div>
`;
let content = myDev.repeat(4);
document.body.insertAdjacentHTML("beforeend", content); // Or document.write(content);
