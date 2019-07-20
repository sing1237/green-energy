// DATA RESOURCES
let dataResorce = [
    {
        heading: "Solution 1",
        bodyText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        imgUrl: "images/light-bulb.jpg"
    },
    {
        heading: "Solution 2",
        bodyText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        imgUrl: "images/wind-farm.png"
    },
    {
        heading: "Solution 3",
        bodyText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        imgUrl: "images/art-close-up.jpg"
    }
];

let $btns = document.querySelectorAll('.btn');
let $content = document.querySelector(".content");

// EVENT-OBJECT IS ACCESSED 
// AS THE FIRST PARAMETER OF THE EVENT-HANDLER 
function eventHandler(ev){
    
    // fetch the clicked button
    let clickedBtn = ev.target;
	$('.btn').removeClass('active');
	$(this).addClass('active');	
    // read the text inside the button
    let btnText = clickedBtn.innerText;
    
    // print the text of the clicked button
    //console.log(btnText);
    
	
		if (btnText === "Solution 1") {
			$content.innerHTML = `	<div class="row area">
										<div class="col-lg-6 col-12">
											<figure style="background-image: url('${dataResorce[0].imgUrl}')" ></figure>
											<h3>${dataResorce[0].heading}</h3>
											<p>${dataResorce[0].bodyText}</p>
										</div>
									</div>`;
		} else if (btnText === "Solution 2") {
			$content.innerHTML = `<div class="row area">
									<div class="col-lg-4 col-12">
										<figure style="background-image: url('${dataResorce[1].imgUrl}')" ></figure>
									</div>
									<div class="col-lg-4 col-12">		
										<h3>${dataResorce[1].heading}</h3>
										<p>${dataResorce[1].bodyText}</p>
									</div>
								</div>`;     
		} else {
			$content.innerHTML =  `<div class="row area">
									<div class="col-lg-4 col-12">
										<h3>${dataResorce[2].heading}</h3>
										<p>${dataResorce[2].bodyText}</p>
									</div>
									<div class="col-lg-4 col-12">		
										<figure style="background-image: url('${dataResorce[2].imgUrl}')" ></figure>
									</div>
								</div>`;  
		}
	
	    
	
}
//$btns[0].addEventListener("click", clickEvent);
//$btns[1].addEventListener("click", clickEvent);
//$btns[2].addEventListener("click", clickEvent);

for(let i=0; i<$btns.length; i++){
    $btns[i].addEventListener("click", eventHandler);
}