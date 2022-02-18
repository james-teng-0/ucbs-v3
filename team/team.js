const execData = [
	{
		imgPath: "../paj.jpg",
		name: "Paj Sae Lim",
		description: "CryptoGodPaj",
		role: "Co-President",
		containerID: "exec-member-1",
	},
	{
		imgPath: "../kmao.png",
		name: "Kevin Mao",
		description: "You can call me K Meow",
		role: "Co-President",
		containerID: "exec-member-2",
	},
	{
		imgPath: "../placeholder.png",
		name: "Roger Chen",
		description: "CryptoGodRoger",
		role: "Co-President",
		containerID: "exec-member-3",
	},
	{
		imgPath: "../placeholder.png",
		name: "Avneet Singh",
		description: "CryptoGodAvneet",
		role: "Vice-President",
		containerID: "exec-member-4",
	},
	{
		imgPath: "../eric.jpg",
		name: "Eric Ning",
		description: "I am very smart",
		role: "Vice-President",
		containerID: "exec-member-5",
	},
	{
		imgPath: "../alice.jpg",
		name: "Alice Liao",
		description: "",
		role: "Treasurer",
		containerID: "exec-member-6",
	},
	{
		imgPath: "../placeholder.png",
		name: "Rachel Dai",
		description: "USYD",
		role: "Treasurer",
		containerID: "exec-member-7",
	},
	{
		imgPath: "../james.jpg",
		name: "James Teng",
		description: "",
		role: "Head of Technology",
		containerID: "exec-member-8",
	},
	{
		imgPath: "../placeholder.png",
		name: "Eva Wu",
		description: "King",
		role: "Secretary",
		containerID: "exec-member-9",
	},
	{
		imgPath: "../placeholder.png",
		name: "Joan Yan",
		description: "	",
		role: "Secretary",
		containerID: "exec-member-10",
	},
	{
		imgPath: "../placeholder.png",
		name: "Desmond Ma",
		description: "	",
		role: "Secretary",
		containerID: "exec-member-11",
	},
];

const dirData = [
	{
		imgPath: "../sanjith.jpg",
		name: "Sanjith De Silva",
		description: "",
		role: "Director of Socials",
		containerID: "dir-member-1",
	},
	{
		imgPath: "../sanjith.jpg",
		name: "Eunice Chan",
		description: "",
		role: "Director of Socials",
		containerID: "dir-member-2",
	},
	{
		imgPath: "../kevin.jpg",
		name: "Kevin Bao",
		description: "",
		role: "Director of HR",
		containerID: "dir-member-3",
	},
	{
		imgPath: "../scott.jpg",
		name: "Scott Connally",
		description: "",
		role: "Director of HR",
		containerID: "dir-member-4",
	},
	{
		imgPath: "../sanjith.jpg",
		name: "Nala Hong",
		description: "",
		role: "Director of Careers",
		containerID: "dir-member-5",
	},
	{
		imgPath: "../sanjith.jpg",
		name: "Catherine Xie",
		description: "",
		role: "Director of Careers",
		containerID: "dir-member-6",
	},
	{
		imgPath: "../kirat.jpg",
		name: "Kirat Singh",
		description: "",
		role: "Director of Education",
		containerID: "dir-member-7",
	},
	{
		imgPath: "../yuvi.jpg",
		name: "Yuvraj Singh",
		description: "",
		role: "Director of Education",
		containerID: "dir-member-8",
	},
	{
		imgPath: "../alex.jpg",
		name: "Alex Weng",
		description: "",
		role: "Director of Publications",
		containerID: "dir-member-9",
	},
];

const advisorData = [
	{
		imgPath: "../placeholder.png",
		name: "Cameron Baker",
		description: "",
		role: "Director of Socials",
		containerID: "advisor-member-1",
	},
	{
		imgPath: "../placeholder.png",
		name: "Zhong Guan",
		description: "",
		role: "Director of Socials",
		containerID: "advisor-member-2",
	},
	{
		imgPath: "../placeholder.png",
		name: "Holmen Tham",
		description: "",
		role: "Director of Socials",
		containerID: "advisor-member-3",
	},
];


document.addEventListener("DOMContentLoaded", () => {
	execData.forEach((memberData) => {
		const execContainer = document.getElementById(memberData.containerID);

		const content = `
        <div class="team-member" style="width: 100%; padding-bottom: 20px; height: 100%;">
			<div class="team-img" style="width: 100%;">
				<img src=${memberData.imgPath} alt=""/>
				<div class="overlay">
					<div class="team-details text-center">
						<p>
							${memberData.description}
						</p>
						<div class="socials mt-20">
							<a href="#"><i class="fa fa-facebook"></i></a>
							<a href="#"><i class="fa fa-twitter"></i></a>
							<a href="#"><i class="fa fa-envelope"></i></a>
						</div>
					</div>
				</div>
			</div>
            <h6 style="color: white;">${memberData.name}</h6>
            <h6 style="color: white;""> ${memberData.role} </h6>
		</div>
        `;

		execContainer.innerHTML += content;
	});

	dirData.forEach((memberData) => {
		const dirContainer = document.getElementById(memberData.containerID);

		const content = `
        <div class="team-member" style="width: 100%; height: 100%;">
			<div class="team-img" style="width: 100%; height: 450px;">
				<img src=${memberData.imgPath} alt="" style="object-fit: cover;"/>
				<div class="overlay">
					<div class="team-details text-center">
						<p>
							${memberData.description}
						</p>
						<div class="socials mt-20">
							<a href="#"><i class="fa fa-facebook"></i></a>
							<a href="#"><i class="fa fa-twitter"></i></a>
							<a href="#"><i class="fa fa-envelope"></i></a>
						</div>
					</div>
				</div>
			</div>
            <h6>${memberData.name}</h6>
            <h6> ${memberData.role} </h6>
		</div>
        `;

		dirContainer.innerHTML += content;
	});

	advisorData.forEach((memberData) => {
		const advisorContainer = document.getElementById(memberData.containerID);

		const content = `
        <div class="team-member" style="width: 100%; height: 100%;">
			<div class="team-img" style="width: 100%;">
				<img src=${memberData.imgPath} alt=""/>
				<div class="overlay">
					<div class="team-details text-center">
						<p>
							${memberData.description}
						</p>
						<div class="socials mt-20">
							<a href="#"><i class="fa fa-facebook"></i></a>
							<a href="#"><i class="fa fa-twitter"></i></a>
							<a href="#"><i class="fa fa-google-plus"></i></a>
							<a href="#"><i class="fa fa-envelope"></i></a>
						</div>
					</div>
				</div>
			</div>
            <h6 style="color: white; margin: 10px 0 0 0;" >${memberData.name}</h6>
            <h6 style="color: white; margin: 5px 0 0 0;"> ${memberData.role} </h6>
		</div>
        `;

		advisorContainer.innerHTML += content;
	});
});


// ************************STICKY SCROLLING EFFECT****************************************
// // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function myFunction() {
// 	// Get the header
// 	var header = document.querySelector(".exec-header");

// 	// Get the offset position of the navbar
// 	var sticky = header.offsetTop;

// 	var stop = document.querySelector("#stop");
// 	var bottom = stop.offsetTop;

// 	console.log(bottom, sticky);
// 	if (bottom > window.pageYOffset && window.pageYOffset > sticky) {
// 		header.style.transform = `translateY(${window.pageYOffset - sticky + 100}px)`
// 		// header.style = "color: green;";
// 	}
// }

// // When the user scrolls the page, execute myFunction
// window.onscroll = function () {
// 	myFunction()
// };

if ($(window).width() > 991) {
	$(".sticky").stick_in_parent()
}