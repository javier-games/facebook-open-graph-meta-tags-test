document.getElementById('shareButton').addEventListener('click', async () => {
    if (!navigator.canShare || !navigator.canShare({ files: [new File([], '')] })) {
        alert('Web Share API not supported or file sharing not supported.');
        return;
    }

    const image = document.getElementById('imageToShare');
    try {
        const response = await fetch(image.src);
        const blob = await response.blob();
        const file = new File([blob], 'shared-image.jpg', { type: blob.type });
        await navigator.share({
            files: [file],
            title: 'Shared Image',
            text: 'Check out this image.',
        });
        console.log('Image shared successfully');
    } catch (error) {
        console.error('Error sharing the image:', error);
        alert('Error sharing the image.');
    }
});
