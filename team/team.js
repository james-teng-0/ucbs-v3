const execData = [
	{
		imgPath: "../james.jpg",
		name: "James Feng Shui Teng",
		description: "I hv small pp",
		role: "Professional Idiot",
		containerID: "exec-member-4",
	},
	{
		imgPath: "../eric.jpg",
		name: "Eric Ning",
		description: "I am very smart",
		role: "Legendary Member",
		containerID: "exec-member-5",
	},
	{
		imgPath: "../kmao.png",
		name: "Kevin Mao",
		description: "You can call me K Meow",
		role: "Professional Nfter",
		containerID: "exec-member-1",
	},
	{
		imgPath: "../paj.jpg",
		name: "Paj Sae Lim",
		description: "CryptoGodPaj",
		role: "Professional Nfter",
		containerID: "exec-member-2",
	},
	{
		imgPath: "../paj.jpg",
		name: "Paj Sae Lim",
		description: "CryptoGodPaj",
		role: "Professional Nfter",
		containerID: "exec-member-3",
	},
];

const dirData = [
	{
		imgPath: "../kevin.jpg",
		name: "Kevin Bao",
		description: "CryptoGodKev",
		role: "Professional Nfter",
		containerID: "dir-member-1",
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
