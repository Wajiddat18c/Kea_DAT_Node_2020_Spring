let fileValid = false;

function validateForm() {
    const title = document.forms.videoupload.title.value.trim();
    const description = document.forms.videoupload.description.value;
    const tags = document.forms.videoupload.tags.value;
    const category = document.forms.videoupload.category.value;

    const titleMaxLength = 128; 

    if (title.length === 0 || title.length > titleMaxLength) {
        return false;
    }
    
    const descriptionMaxLength = 2048;

    if (description.length > descriptionMaxLength) {
        return false;
    }

    return fileValid;
}

function handleFileUpload(files) {
    const file = files[0];
    const fileSize = file.size;
    const mimeArray = file.type.split("/");
    const fileType = mimeArray[0];

    if (fileType !== "video") {
        fileValid = false;
        return;
    }

                        // 250MB
    const fileSizeLimit = 262144000;

    if (fileSize > fileSizeLimit) {
        fileValid = false;
        return;
    }

    fileValid = true;
}
