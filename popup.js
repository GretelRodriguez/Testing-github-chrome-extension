document.getElementById("createIssue").addEventListener("click", async () => {
	const issueText = document.getElementById("issueText").value;

	if (!issueText) {
		alert("Please enter some text for the issue.");
		return;
	}

	const repo = "user/repo"; // Replace with your GitHub repository, e.g., "username/repository"
	const token = "YOUR_GITHUB_TOKEN"; // Replace with your GitHub personal access token

	const url = `https://api.github.com/repos/${repo}/issues`;

	const data = {
		title: issueText.split("\n")[0], // First line as the title
		body: issueText, // Rest as the body
	};

	try {
		const response = await fetch(url, {
			method: "POST",
			headers: {
				Authorization: `token ${token}`,
				Accept: "application/vnd.github.v3+json",
			},
			body: JSON.stringify(data),
		});

		if (response.ok) {
			alert("Issue created successfully!");
			document.getElementById("issueText").value = ""; // Clear the text box
		} else {
			alert("Failed to create issue.");
		}
	} catch (error) {
		console.error("Error:", error);
		alert("An error occurred.");
	}
});
