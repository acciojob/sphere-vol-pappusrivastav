function volume_sphere(event) {
    event.preventDefault(); // Prevent form submission and page reload

    // Get the radius input element
    const radiusInput = document.getElementById("radius");

    // Get the volume output element
    const volumeOutput = document.getElementById("volume");

    // Calculate the volume of the sphere
    const radius = parseFloat(radiusInput.value);
    const volume = (4/3) * Math.PI * Math.pow(radius, 3);

    // Display the volume in the output field with four decimal places
    volumeOutput.value = volume.toFixed(4);
}

window.onload = function () {
    // Add an event listener to the form for the submit event
    document.getElementById('MyForm').addEventListener('submit', volume_sphere);
};
