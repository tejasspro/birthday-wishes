var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function new_image()
{
	
    fabric.Image.fromURL('BirthdayImage.jpg', function(Img) {

        block_Image_obj = Img;
        block_Image_obj.scaleToWidth(700);
        block_Image_obj.scaleToHieght(510);
        block_Image_obj.set({
            top:0, left:0
        });
        canvas.add(block_Image_obj);
        });

}

function playSound(){
	x.play();
}
