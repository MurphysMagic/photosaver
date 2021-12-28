var app = new Vue({
    el: '#app',
    data: {
        imgSrc: "",
        album: "Album",
        date: ""
    },
    methods: {
        imgUpload() {
            var img = document.getElementById("img-upload").files[0];
            var reader = new FileReader();
            reader.onload = () => {
                this.imgSrc = reader.result;
            };
            if (img) {
                reader.readAsDataURL(img);
            }
        },
        selectPhoto() {
            document.getElementById("img-upload").click();
        },
        savePhoto() {
            console.log(new Date(this.date));
            var d = new Date(this.date);
            var ts = d.getTime();
            var params = {
                data: this.imgSrc,
                prefix: "gf",
                mediaScanner: true,
                format: "JPG",
                quality: 80,
                timestamp: ts/1000,
              };
      
              window.imageSaver.saveBase64Image(
                params,
                (filePath) => {
                  // do something with the file path
                  alert("saved image!")
                },
                (err) => {
                  console.log("there has been a plugin issue");
                  console.log(err);
                }
              );
        }
    },
    mounted() {

    }
})