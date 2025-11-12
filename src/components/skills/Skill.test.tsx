import { render, screen, logRoles }  from "@testing-library/react"
import Skills from "./Skills";


describe("Skills", () => {
	const skills = ["HTML", "CSS", "Javascript"]
	
	test("renders correctly", () => {
		render(<Skills skills={skills}/>)
		const listElement = screen.getByRole("list");
		expect(listElement).toBeInTheDocument();
	})

	test("renders a list of skills", () => {
		render(<Skills skills={skills} />)
		const listElement = screen.getAllByRole("listitem");
		expect(listElement).toHaveLength(skills.length);
	})

	test("renders login button", () => {
		render(<Skills skills={skills}/>)
		const loginButton = screen.getByRole("button", {
			name: "ログイン"
		});
		expect(loginButton).toBeInTheDocument()
	})

	test("logout button is not rendered", () => {
		render(<Skills skills={skills} />)
		const logoutButton = screen.queryByRole("button", {
			name: "ログアウト"
		})
		expect(logoutButton).not.toBeInTheDocument()
	})

	test("login button is eventualy rendered", async () => {
		render(<Skills skills={skills} />)
		// const view = render(<Skills skills={skills} />)
		// logRoles(view.container);
		// screen.debug();
		const logoutButton = await screen.findByRole("button", {
			name: "ログアウト"
		}, {
			timeout: 2000
		});
		// screen.debug();
		expect(logoutButton).toBeInTheDocument();
	})
})
