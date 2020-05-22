export const exportToJSON = (obj) => {
    try {
        const element = document.createElement("a");
        const file = new Blob([JSON.stringify(obj, null, 2)], { type: 'application/json' });
        element.href = URL.createObjectURL(file);
        element.download = "myGEOconfig.json";
        document.body.appendChild(element); // Required for this to work in FireFox
        element.click();
    } catch (err) {
        console.log(err);
    }
}