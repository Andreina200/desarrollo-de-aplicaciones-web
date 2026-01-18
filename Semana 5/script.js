const imageUrlInput = document.getElementById("imageUrl");
const addImageBtn = document.getElementById("addImageBtn");
const deleteImageBtn = document.getElementById("deleteImageBtn");
const gallery = document.getElementById("gallery");

let selectedImage = null;

addImageBtn.addEventListener("click", () => {
    const imageUrl = imageUrlInput.value.trim();

    if (imageUrl === "") {
        alert("Ingresa una URL válida");
        return;
    }

    const img = document.createElement("img");
    img.src = imageUrl;

    img.addEventListener("click", () => {
        selectImage(img);
    });

    gallery.appendChild(img);
    imageUrlInput.value = "";
});

function selectImage(img) {
    document.querySelectorAll(".gallery img")
        .forEach(image => image.classList.remove("selected"));

    img.classList.add("selected");
    selectedImage = img;
}

deleteImageBtn.addEventListener("click", () => {
    if (selectedImage) {
        selectedImage.remove();
        selectedImage = null;
    } else {
        alert("No hay imagen seleccionada");
    }
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Delete" && selectedImage) {
        selectedImage.remove();
        selectedImage = null;
    }
});
