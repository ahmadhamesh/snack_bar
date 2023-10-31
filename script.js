
let toastBox = document.getElementById('toastBox');
let successMsg = '<i class="fa-solid fa-circle-check"></i>Successfully submitted';
let errorMsg = '<i class="fa-solid fa-circle-xmark"></i>Please fix the error!';
let invalidMsg = '<i class="fa-solid fa-circle-exclamation"></i>Invalid input, Please fix it';


function showToast(msg){
	let toast = document.createElement('div');
	toast.classList.add('toast');
	toast.innerHTML = msg;
	toastBox.appendChild(toast); //it will be make make child of toastBox class

	if(msg.includes('error')){
		toast.classList.add('error');
	}
	if (msg.includes('Invalid')) {
		toast.classList.add('invalid');
	}

	setTimeout(()=>{
		toast.remove();
	},6000)

}

