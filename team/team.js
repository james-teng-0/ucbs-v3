const execData = [
	{
		imgPath: "../kmao.png",
		name: "Kevin Mao",
		description: "You can call me K Meow",
		role: "Co-President",
		containerID: "exec-member-1",
	},
	{
		imgPath: "../paj.jpg",
		name: "Paj Sae Lim",
		description: "CryptoGodPaj",
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
		imgPath: "../placeholder.png",
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
		imgPath: "../placeholder.png",
		name: "Nala Hong",
		description: "",
		role: "Director of Careers",
		containerID: "dir-member-5",
	},
	{
		imgPath: "../placeholder.png",
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

document.addEventListener("DOMContentLoaded", () => {
	execData.forEach((memberData) => {
		const execContainer = document.getElementById(memberData.containerID);

		const content = `
        <div class="team-member" style="border: 1px solid red; width: 100%; height: 100%;">
			<div class="team-img" style="width: 100%; height: 75%;">
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
            <h6 style="color: white; margin: 0 0 10px 0;"> ${memberData.role} </h6>
		</div>
        `;

		execContainer.innerHTML += content;
	});

    dirData.forEach((memberData) => {
		const dirContainer = document.getElementById(memberData.containerID);

		const content = `
        <div class="team-member" style="border: 1px solid red; width: 100%; height: 100%;">
			<div class="team-img" style="width: 100%; height: 75%;">
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
            <h6 style="color: white; margin: 0 0 10px 0;"> ${memberData.role} </h6>
		</div>
        `;

		dirContainer.innerHTML += content;
	});
});
