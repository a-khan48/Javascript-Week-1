let photoSlideShow = {

    photoList: [`image1`, `image2`, `image3`, `image4`],

    currentPhotoIndex: 1,

    nextPhoto: function () {
        if(this.currentPhotoIndex < (this.photoList.length -1)){
            return this.currentPhotoIndex++,
             console.log("Current Photo:" + `${this.photoList[this.currentPhotoIndex]}`);
          } else{ 
            console.log("End of Slideshow.")
    }    
    },

    prevPhoto: function () {
        if(this.currentPhotoIndex > 0){
            this.currentPhotoIndex--;
        console.log("Current Photo:" + `${this.photoList[this.currentPhotoIndex]}`);
        } else{ 
        console.log("End of Slideshow.")
        }
    },

getCurrentPhoto: function () {
    return this.photoList[this.currentPhotoIndex]
}
}
// Next Photo
    console.log(photoSlideShow.currentPhotoIndex);
    photoSlideShow.nextPhoto();
    console.log(photoSlideShow.currentPhotoIndex);
    photoSlideShow.nextPhoto();

// prevPhoto
    console.log(photoSlideShow.currentPhotoIndex);
    photoSlideShow.prevPhoto();
    console.log(photoSlideShow.currentPhotoIndex);
    photoSlideShow.prevPhoto();

// getCurrentPhoto

    console.log(photoSlideShow.getCurrentPhoto());
    photoSlideShow.nextPhoto();
    console.log(photoSlideShow.getCurrentPhoto());
    photoSlideShow.nextPhoto();